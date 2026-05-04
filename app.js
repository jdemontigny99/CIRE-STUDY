/* ============================================
   CIRE Study — App Logic
   ============================================ */

(() => {
  'use strict';

  // ---------- State ----------
  const STORAGE_KEY = 'cire-study-v1';
  const defaultState = {
    answered: 0,         // total questions answered (lifetime)
    correct: 0,          // total correct (lifetime)
    wrongIds: [],        // question IDs gotten wrong (still wrong on most recent attempt)
    bookmarks: [],       // bookmarked question IDs
    lastDate: null,      // last study date (YYYY-MM-DD)
    streak: 0,           // current day streak
    sessions: 0,         // sessions completed
    perQuestion: {},     // { id: { attempts, correct, lastWrong } }
    theme: 'auto'        // 'auto' | 'light' | 'dark'
  };

  let state = loadState();

  // Session-scoped state
  let session = null;

  // ---------- Persistence ----------
  function loadState() {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (!raw) return { ...defaultState };
      const parsed = JSON.parse(raw);
      return { ...defaultState, ...parsed };
    } catch {
      return { ...defaultState };
    }
  }

  function saveState() {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
    } catch {}
  }

  // ---------- Helpers ----------
  function $(sel, root = document) { return root.querySelector(sel); }
  function $$(sel, root = document) { return Array.from(root.querySelectorAll(sel)); }

  function shuffle(arr) {
    const a = [...arr];
    for (let i = a.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
  }

  function todayStr() {
    const d = new Date();
    return `${d.getFullYear()}-${String(d.getMonth()+1).padStart(2,'0')}-${String(d.getDate()).padStart(2,'0')}`;
  }

  function dayDiff(a, b) {
    const da = new Date(a + 'T00:00:00');
    const db = new Date(b + 'T00:00:00');
    return Math.round((db - da) / 86400000);
  }

  function showToast(msg, duration = 1800) {
    const t = $('#toast');
    t.textContent = msg;
    t.classList.add('show');
    clearTimeout(showToast._t);
    showToast._t = setTimeout(() => t.classList.remove('show'), duration);
  }

  // ---------- Theme ----------
  function applyTheme(theme) {
    const html = document.documentElement;
    if (theme === 'auto') {
      html.removeAttribute('data-theme');
    } else {
      html.setAttribute('data-theme', theme);
    }
    state.theme = theme;
    saveState();

    // Update theme-color meta tags for the iOS status bar
    const isDark = theme === 'dark' ||
      (theme === 'auto' && window.matchMedia('(prefers-color-scheme: dark)').matches);
    const themeColor = isDark ? '#0E1014' : '#F5F1E8';
    $$('meta[name="theme-color"]').forEach(m => m.setAttribute('content', themeColor));
  }

  function cycleTheme() {
    const order = ['auto', 'light', 'dark'];
    const current = state.theme || 'auto';
    const next = order[(order.indexOf(current) + 1) % order.length];
    applyTheme(next);
    showToast(`Theme: ${next}`);
  }

  // ---------- Navigation ----------
  function showView(name) {
    $$('.view').forEach(v => v.classList.remove('active'));
    $(`#view-${name}`).classList.add('active');
    window.scrollTo({ top: 0, behavior: 'instant' });
  }

  // ---------- Home view rendering ----------
  function renderHome() {
    const acc = state.answered > 0
      ? Math.round((state.correct / state.answered) * 100)
      : null;
    $('#stat-accuracy').innerHTML = acc === null
      ? '—<span class="pct"></span>'
      : `${acc}<span class="pct">%</span>`;
    $('#stat-answered').textContent = state.answered;
    $('#stat-streak').textContent = state.streak;

    const wrongCount = state.wrongIds.length;
    const bmCount = state.bookmarks.length;
    $('#badge-wrong').textContent = wrongCount;
    $('#badge-bookmarks').textContent = bmCount;

    const reviewBtn = $('#action-review');
    const bmBtn = $('#action-bookmarks');
    if (wrongCount === 0) reviewBtn.setAttribute('disabled', ''); else reviewBtn.removeAttribute('disabled');
    if (bmCount === 0) bmBtn.setAttribute('disabled', ''); else bmBtn.removeAttribute('disabled');
  }

  // ---------- Setup view ----------
  let setupConfig = {
    count: 10,
    topics: new Set(), // empty = all
    source: 'all'      // 'all' | 'wrong' | 'bookmarks'
  };

  function renderSetup() {
    // Title varies by source
    const titles = {
      all: { t: 'New session', s: 'Configure your study session.' },
      wrong: { t: 'Review wrong answers', s: 'Re-test the questions you previously got wrong.' },
      bookmarks: { t: 'Bookmarked questions', s: 'Revisit the questions you flagged.' }
    };
    const cfg = titles[setupConfig.source];
    $('#setup-title').textContent = cfg.t;
    $('#setup-sub').textContent = cfg.s;

    // Build available pool based on source
    const pool = getAvailablePool(setupConfig.source);
    const max = pool.length;

    // Update slider max & value
    const slider = $('#count-slider');
    slider.max = Math.max(1, max);
    if (parseInt(slider.value) > max) slider.value = max;
    if (max === 0) slider.value = 0;
    setupConfig.count = parseInt(slider.value);
    $('#count-val').textContent = setupConfig.count;

    // Preset buttons — disable those exceeding pool
    $$('.preset-btn').forEach(btn => {
      const c = parseInt(btn.dataset.count);
      const realCount = Math.min(c, max);
      if (c >= 110) {
        btn.textContent = max > 0 ? `All (${max})` : 'All';
      }
      if (c > max && c < 110) {
        btn.style.opacity = '0.4';
        btn.style.pointerEvents = 'none';
      } else {
        btn.style.opacity = '';
        btn.style.pointerEvents = '';
      }
      // active state
      btn.classList.toggle('active', realCount === setupConfig.count);
    });

    // Topic chips — only show element filter for "all" source
    const fieldTopics = $('#field-topics');
    if (setupConfig.source !== 'all') {
      fieldTopics.style.display = 'none';
    } else {
      fieldTopics.style.display = '';
      renderChips();
    }

    // Disable start button if no questions
    $('#btn-start').disabled = max === 0;
  }

  function renderChips() {
    const grid = $('#chip-grid');
    const counts = {};
    QUESTIONS.forEach(q => counts[q.element] = (counts[q.element] || 0) + 1);

    const allActive = setupConfig.topics.size === 0;
    let html = `<button class="chip ${allActive ? 'active' : ''}" data-topic="all">All <span class="count">${QUESTIONS.length}</span></button>`;
    Object.entries(ELEMENTS).forEach(([num, name]) => {
      const active = setupConfig.topics.has(parseInt(num));
      html += `<button class="chip ${active ? 'active' : ''}" data-topic="${num}">${name} <span class="count">${counts[num] || 0}</span></button>`;
    });
    grid.innerHTML = html;

    grid.querySelectorAll('.chip').forEach(chip => {
      chip.addEventListener('click', () => {
        const topic = chip.dataset.topic;
        if (topic === 'all') {
          setupConfig.topics.clear();
        } else {
          const n = parseInt(topic);
          if (setupConfig.topics.has(n)) {
            setupConfig.topics.delete(n);
          } else {
            setupConfig.topics.add(n);
          }
        }
        renderSetup();
      });
    });
  }

  function getAvailablePool(source) {
    let pool;
    if (source === 'wrong') {
      pool = QUESTIONS.filter(q => state.wrongIds.includes(q.id));
    } else if (source === 'bookmarks') {
      pool = QUESTIONS.filter(q => state.bookmarks.includes(q.id));
    } else {
      pool = QUESTIONS;
      if (setupConfig.topics.size > 0) {
        pool = pool.filter(q => setupConfig.topics.has(q.element));
      }
    }
    return pool;
  }

  function startSession() {
    const pool = getAvailablePool(setupConfig.source);
    if (pool.length === 0) {
      showToast('No questions available');
      return;
    }
    const count = Math.min(setupConfig.count, pool.length);
    const questions = shuffle(pool).slice(0, count).map(q => {
      // Shuffle answer options too — but track new correct letter
      const letters = ['A', 'B', 'C', 'D'];
      const orig = letters.map((l, i) => ({ l, text: q.options[i] }));
      const shuffled = shuffle(orig);
      const correctIdx = shuffled.findIndex(o => o.l === q.answer);
      return {
        ...q,
        shuffledOptions: shuffled.map(o => o.text),
        shuffledCorrectIdx: correctIdx,
        shuffledCorrectLetter: letters[correctIdx],
        // store original answer text for reference in summary
        correctText: q.options[letters.indexOf(q.answer)]
      };
    });

    session = {
      questions,
      idx: 0,
      results: [], // { id, picked, correct, picked_text, correct_text }
      answered: false
    };

    renderQuestion();
    showView('quiz');
  }

  // ---------- Quiz view ----------
  function renderQuestion() {
    const q = session.questions[session.idx];
    session.answered = false;

    $('#q-current').textContent = session.idx + 1;
    $('#q-total').textContent = session.questions.length;
    const pct = ((session.idx) / session.questions.length) * 100;
    $('#progress-bar').style.width = `${pct}%`;

    $('#element-tag').textContent = ELEMENTS[q.element];
    $('#question-text').textContent = q.q;

    // Bookmark state
    const bmBtn = $('#bookmark-toggle');
    bmBtn.classList.toggle('active', state.bookmarks.includes(q.id));
    bmBtn.querySelector('svg path').setAttribute('fill',
      state.bookmarks.includes(q.id) ? 'currentColor' : 'none');

    // Render options
    const optsEl = $('#options');
    optsEl.innerHTML = '';
    const letters = ['A', 'B', 'C', 'D'];
    q.shuffledOptions.forEach((opt, i) => {
      const btn = document.createElement('button');
      btn.className = 'option';
      btn.dataset.idx = i;
      btn.innerHTML = `
        <span class="letter">${letters[i]}</span>
        <span class="text">${escapeHtml(opt)}</span>
        <span class="mark">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">
            <path id="m" d=""/>
          </svg>
        </span>
      `;
      btn.addEventListener('click', () => answerQuestion(i));
      optsEl.appendChild(btn);
    });

    // Reset feedback
    $('#feedback').style.display = 'none';

    // Last question? change next button label
    const nextLabel = (session.idx === session.questions.length - 1) ? 'Finish' : 'Next';
    $('#next-btn-label').textContent = nextLabel;
  }

  function answerQuestion(pickedIdx) {
    if (session.answered) return;
    session.answered = true;

    const q = session.questions[session.idx];
    const correctIdx = q.shuffledCorrectIdx;
    const isCorrect = pickedIdx === correctIdx;

    // Mark options visually
    const opts = $$('.option');
    opts.forEach((opt, i) => {
      opt.disabled = true;
      if (i === correctIdx) {
        opt.classList.add('correct');
        opt.querySelector('.mark svg').innerHTML = '<polyline points="4 12 9 17 20 6" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>';
      } else if (i === pickedIdx) {
        opt.classList.add('wrong');
        opt.querySelector('.mark svg').innerHTML = '<path d="M6 6L18 18M18 6L6 18" fill="none" stroke="currentColor" stroke-linecap="round"/>';
      } else {
        opt.classList.add('dim');
      }
    });

    // Feedback bar
    const fb = $('#feedback');
    const fbText = $('#feedback-text');
    fb.style.display = '';
    if (isCorrect) {
      fbText.className = 'feedback-text correct';
      const phrases = ['Correct.', 'Nailed it.', "That's right.", 'Spot on.', 'Yes.'];
      fbText.innerHTML = `<strong>${phrases[Math.floor(Math.random() * phrases.length)]}</strong>`;
    } else {
      fbText.className = 'feedback-text wrong';
      fbText.innerHTML = `<strong>Not quite.</strong> The answer was ${['A','B','C','D'][correctIdx]}.`;
    }

    // Record session result
    session.results.push({
      id: q.id,
      element: q.element,
      questionText: q.q,
      pickedText: q.shuffledOptions[pickedIdx],
      correctText: q.shuffledOptions[correctIdx],
      pickedLetter: ['A','B','C','D'][pickedIdx],
      correctLetter: ['A','B','C','D'][correctIdx],
      isCorrect
    });

    // Update lifetime stats
    state.answered += 1;
    if (isCorrect) state.correct += 1;

    // Per-question tracking
    if (!state.perQuestion[q.id]) {
      state.perQuestion[q.id] = { attempts: 0, correct: 0 };
    }
    state.perQuestion[q.id].attempts += 1;
    if (isCorrect) {
      state.perQuestion[q.id].correct += 1;
      // remove from wrong list if present
      const idx = state.wrongIds.indexOf(q.id);
      if (idx !== -1) state.wrongIds.splice(idx, 1);
    } else {
      // add to wrong list (no dupes)
      if (!state.wrongIds.includes(q.id)) state.wrongIds.push(q.id);
    }

    saveState();

    // Auto-scroll to next button on mobile so it's visible
    setTimeout(() => {
      $('#next-btn').scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    }, 100);
  }

  function nextQuestion() {
    if (!session.answered) return;
    if (session.idx === session.questions.length - 1) {
      finishSession();
    } else {
      session.idx += 1;
      renderQuestion();
    }
  }

  function toggleBookmark() {
    const q = session.questions[session.idx];
    const idx = state.bookmarks.indexOf(q.id);
    if (idx === -1) {
      state.bookmarks.push(q.id);
      showToast('Bookmarked');
    } else {
      state.bookmarks.splice(idx, 1);
      showToast('Bookmark removed');
    }
    const bmBtn = $('#bookmark-toggle');
    bmBtn.classList.toggle('active', state.bookmarks.includes(q.id));
    bmBtn.querySelector('svg path').setAttribute('fill',
      state.bookmarks.includes(q.id) ? 'currentColor' : 'none');
    saveState();
  }

  // ---------- Summary view ----------
  function finishSession() {
    state.sessions += 1;
    updateStreak();
    saveState();
    renderSummary();
    showView('summary');
  }

  function updateStreak() {
    const today = todayStr();
    if (!state.lastDate) {
      state.streak = 1;
    } else {
      const diff = dayDiff(state.lastDate, today);
      if (diff === 0) {
        // already studied today, no change
      } else if (diff === 1) {
        state.streak += 1;
      } else {
        state.streak = 1;
      }
    }
    state.lastDate = today;
  }

  function renderSummary() {
    const total = session.results.length;
    const correct = session.results.filter(r => r.isCorrect).length;
    const pct = Math.round((correct / total) * 100);

    $('#summary-correct').textContent = correct;
    $('#summary-total').textContent = total;
    $('#summary-pct').textContent = `${pct}% accuracy`;

    let msg;
    if (pct === 100) msg = 'Perfect run. Onto the next batch?';
    else if (pct >= 85) msg = 'Strong work — you know this material well.';
    else if (pct >= 70) msg = 'Solid. A bit more review on the misses and you\'re there.';
    else if (pct >= 50) msg = 'Keep going. Review your wrong answers next.';
    else msg = 'Tough one. Slow it down and review the wrong answers.';
    $('#summary-message').textContent = msg;

    // List
    const listEl = $('#summary-list');
    listEl.innerHTML = '';
    session.results.forEach((r, i) => {
      const item = document.createElement('div');
      item.className = 'summary-item';
      const numClass = r.isCorrect ? 'correct' : 'wrong';
      const numChar = r.isCorrect ? '✓' : '✕';
      item.innerHTML = `
        <button class="summary-item-head">
          <span class="summary-item-num ${numClass}">${numChar}</span>
          <span class="summary-item-q">${escapeHtml(r.questionText)}</span>
          <svg class="summary-item-chev" viewBox="0 0 24 24" fill="none" stroke="currentColor" width="16" height="16" stroke-width="2"><path d="M6 9l6 6 6-6"/></svg>
        </button>
        <div class="summary-item-body">
          <div class="summary-item-q-full">${escapeHtml(r.questionText)}</div>
          ${r.isCorrect
            ? `<div class="summary-row"><span class="lbl">Your answer</span><span class="v correct">${r.correctLetter}. ${escapeHtml(r.correctText)}</span></div>`
            : `<div class="summary-row"><span class="lbl">Your answer</span><span class="v wrong">${r.pickedLetter}. ${escapeHtml(r.pickedText)}</span></div>
               <div class="summary-row"><span class="lbl">Correct</span><span class="v correct">${r.correctLetter}. ${escapeHtml(r.correctText)}</span></div>`
          }
          <div class="summary-row"><span class="lbl">Topic</span><span class="v">${ELEMENTS[r.element]}</span></div>
        </div>
      `;
      item.querySelector('.summary-item-head').addEventListener('click', () => {
        item.classList.toggle('expanded');
      });
      listEl.appendChild(item);
    });
  }

  function retrySession() {
    // Re-shuffle the same questions for another go
    const sourceQs = session.questions.map(sq => QUESTIONS.find(q => q.id === sq.id));
    const letters = ['A', 'B', 'C', 'D'];
    const questions = shuffle(sourceQs).map(q => {
      const orig = letters.map((l, i) => ({ l, text: q.options[i] }));
      const shuffled = shuffle(orig);
      const correctIdx = shuffled.findIndex(o => o.l === q.answer);
      return {
        ...q,
        shuffledOptions: shuffled.map(o => o.text),
        shuffledCorrectIdx: correctIdx,
        shuffledCorrectLetter: letters[correctIdx],
        correctText: q.options[letters.indexOf(q.answer)]
      };
    });
    session = { questions, idx: 0, results: [], answered: false };
    renderQuestion();
    showView('quiz');
  }

  // ---------- Reset ----------
  function resetAll() {
    state = { ...defaultState, theme: state.theme };
    saveState();
    renderHome();
    $('#modal-reset').classList.remove('active');
    showToast('Progress cleared');
  }

  // ---------- Utils ----------
  function escapeHtml(s) {
    return String(s)
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;')
      .replace(/'/g, '&#039;');
  }

  // ---------- Wire up events ----------
  function bindEvents() {
    // Theme toggle
    $('#theme-toggle').addEventListener('click', cycleTheme);

    // Home actions
    $$('[data-action]').forEach(btn => {
      btn.addEventListener('click', () => {
        const action = btn.dataset.action;
        if (action === 'start') {
          setupConfig = { count: 10, topics: new Set(), source: 'all' };
          $('#count-slider').value = 10;
          renderSetup();
          showView('setup');
        } else if (action === 'review') {
          setupConfig = { count: Math.min(10, state.wrongIds.length), topics: new Set(), source: 'wrong' };
          $('#count-slider').value = setupConfig.count;
          renderSetup();
          showView('setup');
        } else if (action === 'bookmarks') {
          setupConfig = { count: Math.min(10, state.bookmarks.length), topics: new Set(), source: 'bookmarks' };
          $('#count-slider').value = setupConfig.count;
          renderSetup();
          showView('setup');
        }
      });
    });

    // Back navigation
    $$('[data-nav]').forEach(btn => {
      btn.addEventListener('click', () => {
        const target = btn.dataset.nav;
        if (target === 'home') {
          renderHome();
          showView('home');
        }
      });
    });

    // Setup — count slider
    $('#count-slider').addEventListener('input', (e) => {
      const v = parseInt(e.target.value);
      setupConfig.count = v;
      $('#count-val').textContent = v;
      $$('.preset-btn').forEach(b => b.classList.toggle('active', parseInt(b.dataset.count) === v || (b.dataset.count === '110' && v === parseInt(e.target.max))));
    });

    // Setup — preset buttons
    $$('.preset-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        const c = parseInt(btn.dataset.count);
        const max = parseInt($('#count-slider').max);
        const realC = Math.min(c, max);
        $('#count-slider').value = realC;
        setupConfig.count = realC;
        $('#count-val').textContent = realC;
        $$('.preset-btn').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
      });
    });

    // Start button
    $('#btn-start').addEventListener('click', startSession);

    // Quiz — bookmark
    $('#bookmark-toggle').addEventListener('click', toggleBookmark);

    // Quiz — next
    $('#next-btn').addEventListener('click', nextQuestion);

    // Summary — retry
    $('#btn-retry').addEventListener('click', retrySession);

    // Reset modal
    $('#btn-reset').addEventListener('click', () => {
      $('#modal-reset').classList.add('active');
    });
    $$('[data-modal-action]').forEach(btn => {
      btn.addEventListener('click', () => {
        if (btn.dataset.modalAction === 'cancel') {
          $('#modal-reset').classList.remove('active');
        } else {
          resetAll();
        }
      });
    });
    $('#modal-reset').addEventListener('click', (e) => {
      if (e.target === e.currentTarget) {
        e.currentTarget.classList.remove('active');
      }
    });

    // Watch system theme changes when in auto mode
    window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', () => {
      if (state.theme === 'auto') applyTheme('auto');
    });

    // Keyboard shortcuts (desktop)
    document.addEventListener('keydown', (e) => {
      const quizActive = $('#view-quiz').classList.contains('active');
      if (!quizActive) return;

      // 1-4 for options
      if (['1', '2', '3', '4'].includes(e.key)) {
        const idx = parseInt(e.key) - 1;
        if (!session.answered) {
          const opt = $$('.option')[idx];
          if (opt) opt.click();
        }
      }
      // Enter / space for next
      if ((e.key === 'Enter' || e.key === ' ') && session.answered) {
        e.preventDefault();
        nextQuestion();
      }
      // B for bookmark
      if (e.key === 'b' || e.key === 'B') {
        toggleBookmark();
      }
    });
  }

  // ---------- Init ----------
  function init() {
    applyTheme(state.theme || 'auto');
    bindEvents();
    renderHome();
  }

  init();
})();
