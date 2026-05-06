// CIRE Study — Extra Practice Questions
// Created from CIRE syllabus topics. Distinct from the 110 official practice exam questions.
// Same format and difficulty level as the practice exam.

const QUESTIONS_EXTRA = [
  // ============================================================
  // ELEMENT 1: Regulatory framework (12 questions)
  // ============================================================
  {
    id: "EXTRA_001",
    element: 1,
    q: "What best describes the role of the Canadian Securities Administrators (CSA)?",
    options: [
      "A federal regulator with binding national authority over all securities",
      "An umbrella body that coordinates the work of provincial and territorial securities regulators",
      "A self-regulatory organization that supervises Investment Dealers directly",
      "A division of CIRO responsible for issuing rules"
    ],
    answer: "B"
  },
  {
    id: "EXTRA_002",
    element: 1,
    q: "National Instruments (NIs) are issued by which body?",
    options: [
      "Bank of Canada",
      "Office of the Superintendent of Financial Institutions",
      "Canadian Securities Administrators",
      "CIRO"
    ],
    answer: "C"
  },
  {
    id: "EXTRA_003",
    element: 1,
    q: "An Investment Dealer must register with provincial securities regulators and additionally be approved by which organization?",
    options: [
      "FINTRAC",
      "OSFI",
      "CIRO",
      "OBSI"
    ],
    answer: "C"
  },
  {
    id: "EXTRA_004",
    element: 1,
    q: "Which body's primary role is to oversee federally regulated banks and ensure their financial soundness?",
    options: [
      "FINTRAC",
      "Office of the Superintendent of Financial Institutions (OSFI)",
      "CIRO",
      "Financial Services Regulatory Authority of Ontario (FSRA)"
    ],
    answer: "B"
  },
  {
    id: "EXTRA_005",
    element: 1,
    q: "The Canadian Derivatives Clearing Corporation (CDCC) primarily provides clearing services for:",
    options: [
      "Listed equities only",
      "Government bond auctions",
      "Derivatives traded on Canadian exchanges",
      "Cryptocurrency transactions"
    ],
    answer: "C"
  },
  {
    id: "EXTRA_006",
    element: 1,
    q: "Which legislation requires Investment Dealers to file Suspicious Transaction Reports?",
    options: [
      "Personal Information Protection and Electronic Documents Act (PIPEDA)",
      "Proceeds of Crime (Money Laundering) and Terrorism Financing Act (PCMLTFA)",
      "Bank Act",
      "Canadian Anti-Spam Legislation (CASL)"
    ],
    answer: "B"
  },
  {
    id: "EXTRA_007",
    element: 1,
    q: "The three stages of money laundering are most commonly described as:",
    options: [
      "Placement, layering and integration",
      "Origination, distribution and concealment",
      "Concealment, transformation and use",
      "Concealment, integration and release"
    ],
    answer: "A"
  },
  {
    id: "EXTRA_008",
    element: 1,
    q: "The RCMP Integrated Market Enforcement Teams (IMET) primarily investigate:",
    options: [
      "Personal income tax evasion",
      "Capital markets criminal offences",
      "Insurance industry fraud",
      "Bankruptcy administration"
    ],
    answer: "B"
  },
  {
    id: "EXTRA_009",
    element: 1,
    q: "Foreign Organized Regulated Markets (FORMs) are most accurately described as:",
    options: [
      "Any non-Canadian exchange",
      "Foreign markets that have been recognized by Canadian regulators as meeting equivalent standards",
      "U.S. exchanges only",
      "Markets operated by Canadian Investment Dealers in foreign jurisdictions"
    ],
    answer: "B"
  },
  {
    id: "EXTRA_010",
    element: 1,
    q: "Canadian Anti-Spam Legislation (CASL) primarily regulates:",
    options: [
      "Algorithmic trading systems",
      "Commercial electronic messages and unsolicited communications",
      "Cybersecurity standards across financial institutions",
      "Cross-border data transfers"
    ],
    answer: "B"
  },
  {
    id: "EXTRA_011",
    element: 1,
    q: "Part XII of the Bankruptcy and Insolvency Act applies specifically to:",
    options: [
      "Insolvent mutual fund corporations",
      "The bankruptcy of an Investment Dealer (securities firm)",
      "Real estate investment trusts in default",
      "Pension fund insolvencies"
    ],
    answer: "B"
  },
  {
    id: "EXTRA_012",
    element: 1,
    q: "What is the standard maximum coverage that CIPF provides for an eligible client's general account in the event of an Investment Dealer's insolvency?",
    options: [
      "$100,000",
      "$500,000",
      "$1,000,000",
      "Unlimited"
    ],
    answer: "C"
  },

  // ============================================================
  // ELEMENT 2: Prospective client relationships (9 questions)
  // ============================================================
  {
    id: "EXTRA_013",
    element: 2,
    q: "Under National Instrument 45-106, an individual qualifies as an accredited investor if, among other things, they have:",
    options: [
      "A bachelor's degree in finance or economics",
      "Net financial assets exceeding $1 million (not including primary residence)",
      "Held an Investment Dealer registration at any time",
      "Owned securities for at least five years"
    ],
    answer: "B"
  },
  {
    id: "EXTRA_014",
    element: 2,
    q: "What is the most appropriate situation for an Investment Dealer to contact a client's trusted contact person (TCP)?",
    options: [
      "To confirm routine trading instructions",
      "To provide daily portfolio updates",
      "When there are concerns about the client's diminished mental capacity or possible financial exploitation",
      "To discuss tax planning strategies"
    ],
    answer: "C"
  },
  {
    id: "EXTRA_015",
    element: 2,
    q: "Which of the following events would most clearly trigger a know-your-client (KYC) update?",
    options: [
      "The client transfers to a different branch of the same Investment Dealer",
      "A material change in the client's personal or financial circumstances",
      "The client's quarterly statement is generated",
      "Each new trade in the account"
    ],
    answer: "B"
  },
  {
    id: "EXTRA_016",
    element: 2,
    q: "A non-individual entity holds approximately $9 million in securities under management. Under CIRO's institutional client criteria (and assuming no other qualifying factor), the entity is most likely:",
    options: [
      "An institutional client by default",
      "A retail client",
      "An automatic permitted client",
      "An accepted counterparty"
    ],
    answer: "B"
  },
  {
    id: "EXTRA_017",
    element: 2,
    q: "Which of the following is NOT among the categories of know-your-client information required to be collected from a retail client?",
    options: [
      "Investment time horizon",
      "Risk profile (risk tolerance and risk capacity)",
      "Investment objectives and needs",
      "Marital status of all immediate family members"
    ],
    answer: "D"
  },
  {
    id: "EXTRA_018",
    element: 2,
    q: "A power of attorney document on a client account is most directly relevant for confirming:",
    options: [
      "How fees and commissions are calculated",
      "Who is authorized to give trading instructions on behalf of the client",
      "The client's tax bracket",
      "Maximum margin levels"
    ],
    answer: "B"
  },
  {
    id: "EXTRA_019",
    element: 2,
    q: "Higher portfolio turnover is most likely to:",
    options: [
      "Have no measurable impact on net returns",
      "Increase tax efficiency",
      "Reduce net returns due to transaction costs and tax consequences",
      "Lower portfolio volatility automatically"
    ],
    answer: "C"
  },
  {
    id: "EXTRA_020",
    element: 2,
    q: "Which of the following must be included in the Firm Welcome package given to a retail client?",
    options: [
      "A copy of the Investment Dealer's full client list",
      "Fee schedule and complaint handling brochure",
      "Personalized portfolio model",
      "A list of all securities currently held in the firm's principal account"
    ],
    answer: "B"
  },
  {
    id: "EXTRA_021",
    element: 2,
    q: "An individual with $12 million in securities and precious metals bullion under management who requests and consents in writing to be classified as an institutional client:",
    options: [
      "Must instead be treated as a retail client by default",
      "Becomes an institutional client",
      "Is exempt from all KYC obligations automatically",
      "Loses access to CIPF protection"
    ],
    answer: "B"
  },

  // ============================================================
  // ELEMENT 3: Scope of client relationship (16 questions)
  // ============================================================
  {
    id: "EXTRA_022",
    element: 3,
    q: "Which of the following best distinguishes a discretionary account from a managed account?",
    options: [
      "Discretionary accounts are typically used for ongoing portfolio management; managed accounts are used in temporary or unforeseen circumstances",
      "Discretionary accounts are typically used in temporary or unforeseen circumstances; managed accounts are used for ongoing portfolio management",
      "Discretionary accounts are reserved for institutional clients only",
      "Discretionary accounts must use only fee-based compensation"
    ],
    answer: "B"
  },
  {
    id: "EXTRA_023",
    element: 3,
    q: "The know-your-product (KYP) obligation requires the Investment Dealer to understand:",
    options: [
      "Only the highest-risk products on the firm's shelf",
      "All investments purchased, sold or recommended for clients",
      "Only mutual funds and ETFs",
      "Only products that pay embedded commissions"
    ],
    answer: "B"
  },
  {
    id: "EXTRA_024",
    element: 3,
    q: "In an order-execution-only (OEO) account, the dealer is generally NOT required to:",
    options: [
      "Confirm the client's identity",
      "Accept the client's order",
      "Determine the suitability of trades for the client",
      "Report executed trades to the client"
    ],
    answer: "C"
  },
  {
    id: "EXTRA_025",
    element: 3,
    q: "Performing suitability determination at the portfolio level means assessing:",
    options: [
      "Each trade independently against the client's profile",
      "The client's overall portfolio against their objectives, risk profile and time horizon",
      "Only fee-based accounts",
      "Only institutional clients"
    ],
    answer: "B"
  },
  {
    id: "EXTRA_026",
    element: 3,
    q: "Under suitability rules for retail clients, the Investment Dealer must:",
    options: [
      "Put the client's interest first",
      "Put the dealer's interest first",
      "Treat dealer and client interests as equal",
      "Defer to whichever interest the regulator prefers"
    ],
    answer: "A"
  },
  {
    id: "EXTRA_027",
    element: 3,
    q: "Account appropriateness focuses primarily on:",
    options: [
      "Whether each individual trade is in the client's best interest",
      "Whether the type of account chosen, and the way it operates, is appropriate for the client",
      "The client's capacity to absorb losses on a margin call",
      "The client's risk tolerance score in isolation"
    ],
    answer: "B"
  },
  {
    id: "EXTRA_028",
    element: 3,
    q: "Compared to an Investment Representative, a Registered Representative is generally permitted to:",
    options: [
      "Give investment recommendations to clients",
      "Approve other employees' trades",
      "Operate without supervision by the firm",
      "Bypass the suitability rules"
    ],
    answer: "A"
  },
  {
    id: "EXTRA_029",
    element: 3,
    q: "At its most fundamental, a trust relationship requires:",
    options: [
      "A client signature on the firm's standard agreement",
      "Property held by one party for the benefit of another",
      "Discretionary trading authority",
      "An executed margin agreement"
    ],
    answer: "B"
  },
  {
    id: "EXTRA_030",
    element: 3,
    q: "The relationship disclosure information must be delivered to a retail client:",
    options: [
      "Only on request",
      "At the time the account is opened (or before)",
      "After the first trade is executed",
      "Only in the firm's annual report"
    ],
    answer: "B"
  },
  {
    id: "EXTRA_031",
    element: 3,
    q: "A passive equity portfolio strategy most commonly involves:",
    options: [
      "Frequent trading to outperform the market",
      "Replicating the holdings or returns of a benchmark index",
      "Holding only government bonds",
      "Buying only securities recommended by the firm's research desk"
    ],
    answer: "B"
  },
  {
    id: "EXTRA_032",
    element: 3,
    q: "Compared to active equity management, passive equity strategies typically charge:",
    options: [
      "Higher management fees",
      "Lower management fees",
      "The same fees on average",
      "Performance-based fees only"
    ],
    answer: "B"
  },
  {
    id: "EXTRA_033",
    element: 3,
    q: "When an existing client relocates to the United States, the Investment Dealer should first:",
    options: [
      "Continue providing the same services automatically",
      "Determine whether the dealer (and the Approved Person) holds the appropriate registration in the relevant U.S. jurisdiction",
      "Close the account immediately",
      "Refer the client to the Bank of Canada"
    ],
    answer: "B"
  },
  {
    id: "EXTRA_034",
    element: 3,
    q: "Which of the following client requests would most clearly require internal escalation to a subject matter expert?",
    options: [
      "A request to purchase a common Canadian equity",
      "A request to begin trading complex derivative strategies",
      "A request to set up monthly contributions",
      "A request for a quarterly statement"
    ],
    answer: "B"
  },
  {
    id: "EXTRA_035",
    element: 3,
    q: "The product due diligence obligation requires Investment Dealers to assess and approve:",
    options: [
      "Only proprietary products",
      "All securities the firm makes available to clients, considering structure, features, risks and costs",
      "Only products that the firm formally recommends",
      "Only products with embedded commissions"
    ],
    answer: "B"
  },
  {
    id: "EXTRA_036",
    element: 3,
    q: "An investment performance benchmark used in client reporting should be:",
    options: [
      "Aspirational, regardless of fit",
      "Reasonable for the strategy and disclosed to the client with an explanation of how it is used",
      "Selected by the firm's marketing team",
      "Updated quarterly without notice to the client"
    ],
    answer: "B"
  },
  {
    id: "EXTRA_037",
    element: 3,
    q: "A fiduciary duty owed to a client primarily requires the Approved Person to:",
    options: [
      "Generate maximum commission",
      "Place the client's interests above their own and the firm's",
      "Recommend the firm's proprietary products first",
      "Avoid all written records of advice given"
    ],
    answer: "B"
  },

  // ============================================================
  // ELEMENT 4: Client complaints handling (7 questions)
  // ============================================================
  {
    id: "EXTRA_038",
    element: 4,
    q: "OBSI's recommendations on a complaint are best described as:",
    options: [
      "Legally binding on the Investment Dealer",
      "Non-binding but generally followed by participating firms",
      "Binding on retail clients only",
      "Subject to court approval before they take effect"
    ],
    answer: "B"
  },
  {
    id: "EXTRA_039",
    element: 4,
    q: "The CIRO arbitration program is best suited to:",
    options: [
      "Class action settlements",
      "More complex disputes that the parties have been unable to resolve directly",
      "Claims under $1,000",
      "Tax disputes"
    ],
    answer: "B"
  },
  {
    id: "EXTRA_040",
    element: 4,
    q: "Which of the following is NOT a typical recourse option for a dissatisfied client of an Investment Dealer?",
    options: [
      "Ombudsman for Banking Services and Investments (OBSI)",
      "CIRO's arbitration program",
      "Civil litigation in the courts",
      "Direct petition to the Bank of Canada"
    ],
    answer: "D"
  },
  {
    id: "EXTRA_041",
    element: 4,
    q: "An Investment Dealer is generally required to acknowledge receipt of a written complaint within approximately:",
    options: [
      "24 hours",
      "5 business days",
      "30 days",
      "60 days"
    ],
    answer: "B"
  },
  {
    id: "EXTRA_042",
    element: 4,
    q: "A 'service complaint' (such as a complaint about rude conduct on the phone with no financial harm) is generally:",
    options: [
      "Externally reportable to the regulator as a reportable complaint",
      "Non-reportable externally, but must still be handled and recorded",
      "Always referred to OBSI",
      "Always settled in arbitration"
    ],
    answer: "B"
  },
  {
    id: "EXTRA_043",
    element: 4,
    q: "Settlement agreements between an Approved Person and a client to resolve a complaint:",
    options: [
      "Are encouraged with no firm oversight",
      "Require the Investment Dealer's approval and oversight",
      "Are prohibited entirely under CIRO rules",
      "Must be filed directly with the CSA"
    ],
    answer: "B"
  },
  {
    id: "EXTRA_044",
    element: 4,
    q: "A failure to handle a client complaint in accordance with CIRO requirements can result in:",
    options: [
      "No regulatory consequences if the client withdraws the complaint",
      "Disciplinary action by the regulator regardless of whether the client withdraws the complaint",
      "Action only if the dollar value exceeds $50,000",
      "Action only after a court has ruled on the matter"
    ],
    answer: "B"
  },

  // ============================================================
  // ELEMENT 5: Market and company analysis (9 questions)
  // ============================================================
  {
    id: "EXTRA_045",
    element: 5,
    q: "Keynesian economic theory most strongly emphasizes:",
    options: [
      "Strict control of the money supply by the central bank",
      "Tax cuts to stimulate aggregate supply",
      "Active fiscal policy to manage aggregate demand",
      "A laissez-faire approach to all markets"
    ],
    answer: "C"
  },
  {
    id: "EXTRA_046",
    element: 5,
    q: "Monetarist theory holds that the most important policy lever for influencing economic activity is:",
    options: [
      "Government spending levels",
      "Personal income tax rates",
      "The growth rate of the money supply",
      "International tariffs"
    ],
    answer: "C"
  },
  {
    id: "EXTRA_047",
    element: 5,
    q: "The Bank of Canada's primary inflation target is centered at approximately:",
    options: [
      "0%",
      "1%",
      "2%",
      "5%"
    ],
    answer: "C"
  },
  {
    id: "EXTRA_048",
    element: 5,
    q: "During the contraction phase of the business cycle, which sector is generally most defensive?",
    options: [
      "Technology",
      "Industrials",
      "Consumer staples",
      "Materials"
    ],
    answer: "C"
  },
  {
    id: "EXTRA_049",
    element: 5,
    q: "A market value-weighted equity index is most influenced by movements in:",
    options: [
      "Stocks with the highest share price",
      "Stocks with the largest market capitalization",
      "The total number of stocks listed",
      "The most recently listed companies"
    ],
    answer: "B"
  },
  {
    id: "EXTRA_050",
    element: 5,
    q: "The current ratio of a company is primarily a measure of its:",
    options: [
      "Long-term profitability",
      "Long-term solvency",
      "Short-term liquidity",
      "Inventory turnover speed"
    ],
    answer: "C"
  },
  {
    id: "EXTRA_051",
    element: 5,
    q: "Continuous disclosure obligations require listed companies to:",
    options: [
      "File documents only when the auditor signs off",
      "Promptly disclose any material change in the company's affairs",
      "Update investors only at the end of each fiscal year",
      "Disclose only revenue figures"
    ],
    answer: "B"
  },
  {
    id: "EXTRA_052",
    element: 5,
    q: "Insider bid and issuer bid regulations are designed primarily to:",
    options: [
      "Protect the interests of minority shareholders during a takeover",
      "Increase market liquidity",
      "Reduce the costs of trading",
      "Encourage hostile takeovers"
    ],
    answer: "A"
  },
  {
    id: "EXTRA_053",
    element: 5,
    q: "Fundamental analysis primarily examines:",
    options: [
      "Patterns and shapes formed on price charts",
      "A company's intrinsic value through its financials and economic environment",
      "Trading volume signals in the order book",
      "Moving average crossovers"
    ],
    answer: "B"
  },

  // ============================================================
  // ELEMENT 6: Market integrity & trade execution (14 questions)
  // ============================================================
  {
    id: "EXTRA_054",
    element: 6,
    q: "Best execution under UMIR requires the Investment Dealer to:",
    options: [
      "Always trade at the lowest available commission",
      "Take reasonable steps to obtain the most advantageous execution result for the client in the prevailing circumstances",
      "Execute every order on the largest exchange",
      "Use only the firm's proprietary trading algorithms"
    ],
    answer: "B"
  },
  {
    id: "EXTRA_055",
    element: 6,
    q: "Entering bids or offers with no genuine intent to execute (commonly called 'spoofing') is:",
    options: [
      "Permitted with a written disclosure to the regulator",
      "A manipulative and prohibited practice",
      "Encouraged under best execution rules",
      "Allowed only for institutional clients"
    ],
    answer: "B"
  },
  {
    id: "EXTRA_056",
    element: 6,
    q: "A market order is best characterized as:",
    options: [
      "An order executed only at a specified price or better",
      "An order executed immediately at the best available price",
      "An order held until a target price is reached",
      "An order that automatically cancels after five minutes"
    ],
    answer: "B"
  },
  {
    id: "EXTRA_057",
    element: 6,
    q: "An iceberg order is one that:",
    options: [
      "Is automatically cancelled if the market price moves significantly",
      "Discloses only a small portion of the total quantity to the market at any time",
      "Is triggered only when a specific price is reached",
      "Can be used by institutional clients only"
    ],
    answer: "B"
  },
  {
    id: "EXTRA_058",
    element: 6,
    q: "A 'fill or kill' order instruction requires the order to be:",
    options: [
      "Worked across multiple trading days if necessary",
      "Executed in full immediately, or cancelled in full",
      "Partially filled, with any unfilled portion queued",
      "Executed only at the market close auction"
    ],
    answer: "B"
  },
  {
    id: "EXTRA_059",
    element: 6,
    q: "Margin requirements imposed on client accounts are designed primarily to:",
    options: [
      "Maximize the dealer's profit margin",
      "Cover potential losses arising from leveraged or short positions",
      "Reduce the commissions paid by the client",
      "Eliminate market volatility"
    ],
    answer: "B"
  },
  {
    id: "EXTRA_060",
    element: 6,
    q: "Front running occurs when a representative:",
    options: [
      "Submits limit orders before market open",
      "Trades on personal account in advance of a known pending client order to benefit from the expected price impact",
      "Submits a limit order ahead of a market order in the order book",
      "Routes an order to a faster trading venue"
    ],
    answer: "B"
  },
  {
    id: "EXTRA_061",
    element: 6,
    q: "Direct electronic access (DEA) generally permits a client to:",
    options: [
      "Trade without any dealer oversight or controls",
      "Send orders directly to a marketplace using the dealer's identifier, subject to risk and supervisory controls",
      "Bypass UMIR rules",
      "Avoid CIPF coverage"
    ],
    answer: "B"
  },
  {
    id: "EXTRA_062",
    element: 6,
    q: "UMIR gatekeeping obligations require Investment Dealers to:",
    options: [
      "Detect, address and report suspicious activity in the marketplace",
      "Provide free trading to all retail clients",
      "Manually approve every individual client trade",
      "Restrict trading to senior representatives only"
    ],
    answer: "A"
  },
  {
    id: "EXTRA_063",
    element: 6,
    q: "When a client wishes to sell short, the order must be marked as a short sale so that:",
    options: [
      "The client receives a tax credit",
      "The marketplace and regulators can identify the trade for surveillance and reporting",
      "The exchange can refuse the order",
      "The dealer can charge a higher commission"
    ],
    answer: "B"
  },
  {
    id: "EXTRA_064",
    element: 6,
    q: "Algorithmic trading orders under UMIR:",
    options: [
      "Are subject to the same fairness and integrity rules as manually entered orders",
      "Are exempt from gatekeeping rules",
      "Are given automatic priority over manual orders",
      "Cannot be used for client orders"
    ],
    answer: "A"
  },
  {
    id: "EXTRA_065",
    element: 6,
    q: "If a representative discovers a trade was entered on the wrong client's account, the appropriate response is to:",
    options: [
      "Delete the trade record entirely",
      "Correct the error through the firm's approved error-correction process and document it",
      "Allow the client to resolve the matter directly",
      "Wait until year-end to report it"
    ],
    answer: "B"
  },
  {
    id: "EXTRA_066",
    element: 6,
    q: "A margin call is most likely triggered when:",
    options: [
      "The market opens for trading",
      "A client deposits new funds",
      "The equity in the margin account falls below the required maintenance level",
      "The dealer rebalances its principal portfolio"
    ],
    answer: "C"
  },
  {
    id: "EXTRA_067",
    element: 6,
    q: "Which of the following is NOT a legitimate function of an Investment Dealer's research department?",
    options: [
      "Producing impartial fundamental analysis on covered companies",
      "Communicating non-public corporate finance information to favoured clients to drive commissions",
      "Maintaining grey lists and restricted lists in coordination with compliance",
      "Providing investors with information for decision-making"
    ],
    answer: "B"
  },

  // ============================================================
  // ELEMENT 7: Securities, managed products & funds (20 questions)
  // ============================================================
  {
    id: "EXTRA_068",
    element: 7,
    q: "A common shareholder typically has:",
    options: [
      "Priority over preferred shareholders for dividends",
      "Voting rights and a residual claim on the company's assets after creditors and preferred shareholders",
      "A fixed dividend stream guaranteed by the issuer",
      "A guaranteed return of capital at a maturity date"
    ],
    answer: "B"
  },
  {
    id: "EXTRA_069",
    element: 7,
    q: "Compared to common shares, preferred shares typically have:",
    options: [
      "Voting rights at every shareholder meeting",
      "Priority over common shares for dividends and on a liquidation distribution to shareholders",
      "Priority over bondholders in liquidation",
      "Variable dividends that depend directly on company profits"
    ],
    answer: "B"
  },
  {
    id: "EXTRA_070",
    element: 7,
    q: "A Government of Canada Treasury bill is best described as:",
    options: [
      "A long-term equity security",
      "A short-term debt security typically issued at a discount and redeemed at face value",
      "A foreign-currency derivative",
      "A commodity contract"
    ],
    answer: "B"
  },
  {
    id: "EXTRA_071",
    element: 7,
    q: "STRIP bonds:",
    options: [
      "Pay semi-annual coupons that are reinvested",
      "Pay no periodic coupons; they are sold at a discount and mature at face value",
      "Are issued only by corporations",
      "Require the holder to post initial margin"
    ],
    answer: "B"
  },
  {
    id: "EXTRA_072",
    element: 7,
    q: "Bond duration is best described as a measure of:",
    options: [
      "The remaining time to maturity in calendar months",
      "The bond's price sensitivity to changes in interest rates",
      "The bond's credit rating in numeric form",
      "The total coupon income the bond will pay"
    ],
    answer: "B"
  },
  {
    id: "EXTRA_073",
    element: 7,
    q: "When market interest rates rise, the price of an existing fixed-coupon bond will generally:",
    options: [
      "Rise",
      "Fall",
      "Stay the same",
      "Become worthless"
    ],
    answer: "B"
  },
  {
    id: "EXTRA_074",
    element: 7,
    q: "The Fund Facts document is best described as:",
    options: [
      "An annual financial statement sent only to existing investors",
      "A plain-language summary delivered to mutual fund investors before or at the time of purchase",
      "An internal compliance memo for the dealer",
      "A tax slip issued at year-end"
    ],
    answer: "B"
  },
  {
    id: "EXTRA_075",
    element: 7,
    q: "The most significant difference between a mutual fund corporation and a mutual fund trust is in their:",
    options: [
      "Investment strategies",
      "Tax treatment of distributions to investors",
      "Manager qualifications",
      "Use of leverage"
    ],
    answer: "B"
  },
  {
    id: "EXTRA_076",
    element: 7,
    q: "Exchange-traded funds (ETFs) are typically:",
    options: [
      "Priced once per day at net asset value",
      "Bought and sold on an exchange throughout the trading day at market prices",
      "Available only to institutional clients",
      "Restricted to fixed-income holdings"
    ],
    answer: "B"
  },
  {
    id: "EXTRA_077",
    element: 7,
    q: "Compared to its net asset value, the trading price of a closed-ended fund's shares can:",
    options: [
      "Always equal NAV exactly",
      "Trade at a premium or discount to NAV",
      "Be set daily by the fund manager",
      "Be fixed by securities regulators"
    ],
    answer: "B"
  },
  {
    id: "EXTRA_078",
    element: 7,
    q: "A real estate investment trust (REIT) is most similar to:",
    options: [
      "An insured bank deposit",
      "A pooled investment vehicle that holds and operates income-producing real estate",
      "A government bond",
      "A currency hedging contract"
    ],
    answer: "B"
  },
  {
    id: "EXTRA_079",
    element: 7,
    q: "Hedge funds are typically characterized by:",
    options: [
      "Daily liquidity and very low fees",
      "Restricted access, higher fees and a wide range of strategies including the use of leverage and short selling",
      "Government-backed protection of principal",
      "Continuous public reporting of all positions"
    ],
    answer: "B"
  },
  {
    id: "EXTRA_080",
    element: 7,
    q: "Crypto-asset trading platforms (CTPs) operating in Canada generally must:",
    options: [
      "Be exempt from securities regulation",
      "Register with or be recognized by securities regulators",
      "Restrict their service to institutional clients only",
      "Operate in only one province"
    ],
    answer: "B"
  },
  {
    id: "EXTRA_081",
    element: 7,
    q: "ESG-related investment products typically integrate:",
    options: [
      "Only environmental factors into investment decisions",
      "Environmental, social and governance considerations into investment decisions",
      "Only sovereign government bonds in their holdings",
      "Only derivatives strategies"
    ],
    answer: "B"
  },
  {
    id: "EXTRA_082",
    element: 7,
    q: "Wrap funds (or wrap accounts) most commonly charge:",
    options: [
      "A separate per-transaction commission for each trade",
      "A single bundled fee that covers advisory, management and trading services",
      "A flat annual subscription with no other costs",
      "Performance-based fees only"
    ],
    answer: "B"
  },
  {
    id: "EXTRA_083",
    element: 7,
    q: "A price-weighted index gives proportionally greater weight to:",
    options: [
      "Companies with the largest market capitalization",
      "Stocks with higher per-share prices",
      "Stocks with higher trading volume",
      "The most recent additions to the index"
    ],
    answer: "B"
  },
  {
    id: "EXTRA_084",
    element: 7,
    q: "A bond's yield to maturity (YTM) reflects:",
    options: [
      "Only the bond's coupon rate",
      "The total expected return if held to maturity, accounting for coupon, current price and time to maturity",
      "The bond's credit rating",
      "Only the issuer's industry sector"
    ],
    answer: "B"
  },
  {
    id: "EXTRA_085",
    element: 7,
    q: "Eligible Canadian dividends from public corporations receive favourable individual tax treatment because of:",
    options: [
      "The dividend tax credit",
      "A flat preferential tax rate applied at source",
      "A capital gains exemption",
      "A foreign tax credit"
    ],
    answer: "A"
  },
  {
    id: "EXTRA_086",
    element: 7,
    q: "Structured products are typically:",
    options: [
      "Direct ownership stakes in common shares",
      "Investments whose returns are linked to an underlying asset or index, often with embedded features such as principal protection or capped upside",
      "Deposits guaranteed in full by the federal government",
      "Securities that report a daily public NAV"
    ],
    answer: "B"
  },
  {
    id: "EXTRA_087",
    element: 7,
    q: "The principal advantage of a pooled fund (such as a mutual fund) for a small retail investor is:",
    options: [
      "Tax exemption on all distributions",
      "Diversification at a comparatively low minimum investment",
      "A government guarantee of returns",
      "Direct ownership of every underlying security"
    ],
    answer: "B"
  },

  // ============================================================
  // ELEMENT 8: Derivatives (7 questions)
  // ============================================================
  {
    id: "EXTRA_088",
    element: 8,
    q: "A call option gives the holder:",
    options: [
      "The obligation to sell the underlying at the strike price",
      "The right, but not the obligation, to buy the underlying at the strike price",
      "A guaranteed return at maturity",
      "A residual claim on the issuer's assets"
    ],
    answer: "B"
  },
  {
    id: "EXTRA_089",
    element: 8,
    q: "A European-style option may be exercised:",
    options: [
      "At any time up to and including the expiration date",
      "Only on the expiration date",
      "Only on the original issue date",
      "Only after a dividend has been declared"
    ],
    answer: "B"
  },
  {
    id: "EXTRA_090",
    element: 8,
    q: "Which of the following does NOT generally affect the premium of an option?",
    options: [
      "Volatility of the underlying asset",
      "Time remaining until expiry",
      "The nationality of the option holder",
      "The relationship between the strike price and the spot price"
    ],
    answer: "C"
  },
  {
    id: "EXTRA_091",
    element: 8,
    q: "A forward contract differs from a futures contract in that forwards are typically:",
    options: [
      "Standardized and exchange-traded",
      "Customized between two parties and traded over-the-counter",
      "Cash-settled only",
      "Available only on equity underlyings"
    ],
    answer: "B"
  },
  {
    id: "EXTRA_092",
    element: 8,
    q: "A swap most commonly involves:",
    options: [
      "A one-time exchange of underlying physical assets",
      "An exchange of cash flows between two parties over a period of time",
      "A government-guaranteed return for both parties",
      "A short sale of equity securities"
    ],
    answer: "B"
  },
  {
    id: "EXTRA_093",
    element: 8,
    q: "A grain producer who sells a futures contract to lock in a future selling price for their crop is engaging in:",
    options: [
      "Pure speculation",
      "Hedging",
      "Arbitrage",
      "Front running"
    ],
    answer: "B"
  },
  {
    id: "EXTRA_094",
    element: 8,
    q: "Which of the following is a prohibited derivative trading practice?",
    options: [
      "Using options to hedge a long equity position",
      "Trading derivatives while the account is under margin",
      "Closing a futures position before expiry",
      "Allocating trades to a managed account based on its mandate"
    ],
    answer: "B"
  },

  // ============================================================
  // ELEMENT 9: Conflicts of interest & ethics (16 questions)
  // ============================================================
  {
    id: "EXTRA_095",
    element: 9,
    q: "The first step in a robust conflicts-of-interest management process is:",
    options: [
      "Disclosure of the conflict to the client",
      "Identification of potential and existing conflicts of interest",
      "Approval of the conflict by the regulator",
      "Reporting the conflict to OBSI"
    ],
    answer: "B"
  },
  {
    id: "EXTRA_096",
    element: 9,
    q: "Where a material conflict of interest cannot be addressed in the client's best interest, the dealer is required to:",
    options: [
      "Disclose the conflict and continue regardless",
      "Avoid the conflict",
      "Document the conflict and take no further action",
      "Escalate the conflict directly to the CSA"
    ],
    answer: "B"
  },
  {
    id: "EXTRA_097",
    element: 9,
    q: "An Approved Person who personally borrows money from a retail client is most accurately described as:",
    options: [
      "Permitted, provided the client gives verbal consent",
      "Engaged in a prohibited form of personal financial dealing with a client",
      "Permitted, provided the loan is in writing",
      "Permitted, but only between immediate family members"
    ],
    answer: "B"
  },
  {
    id: "EXTRA_098",
    element: 9,
    q: "A 'position of influence' arises when an Approved Person:",
    options: [
      "Has control or significant influence over a client through a non-business relationship (for example, as the client's caregiver or trustee)",
      "Has more clients than peers in the same office",
      "Manages the largest portfolios in the firm",
      "Sits on the board of an unrelated charity"
    ],
    answer: "A"
  },
  {
    id: "EXTRA_099",
    element: 9,
    q: "Information barriers (often called 'Chinese walls') exist primarily to:",
    options: [
      "Prevent the spread of material non-public information across departments such as research, corporate finance and trading",
      "Improve trade execution speed",
      "Lower regulatory fees",
      "Simplify reporting to clients"
    ],
    answer: "A"
  },
  {
    id: "EXTRA_100",
    element: 9,
    q: "A firm's 'grey list' typically contains:",
    options: [
      "Securities that no employee or client may trade",
      "Securities subject to heightened internal monitoring without disclosure to employees generally",
      "Securities that the firm publicly discloses as restricted",
      "Securities the firm actively recommends to clients"
    ],
    answer: "B"
  },
  {
    id: "EXTRA_101",
    element: 9,
    q: "A firm's 'restricted list' typically contains:",
    options: [
      "Securities the firm is currently recommending for purchase",
      "Securities that employees and certain accounts are restricted from trading or recommending",
      "Securities held only in the firm's principal account",
      "Securities recently added to a benchmark index"
    ],
    answer: "B"
  },
  {
    id: "EXTRA_102",
    element: 9,
    q: "Cybersecurity controls at an Investment Dealer are designed primarily to:",
    options: [
      "Speed up the firm's trade execution",
      "Protect confidential client and firm information from unauthorized access",
      "Reduce broker compensation",
      "Replace the internal audit function"
    ],
    answer: "B"
  },
  {
    id: "EXTRA_103",
    element: 9,
    q: "Compared to legal rules, ethical principles are generally:",
    options: [
      "More precise and prescriptive in detail",
      "Broader, value-based and may apply where rules are silent",
      "Optional in nature",
      "Applicable only outside business hours"
    ],
    answer: "B"
  },
  {
    id: "EXTRA_104",
    element: 9,
    q: "An Approved Person learns material non-public information through a personal relationship. The appropriate response is to:",
    options: [
      "Trade quickly to benefit clients before the information is public",
      "Not act on the information personally and follow the firm's policies (typically including escalating to compliance)",
      "Share it only with senior management for trading purposes",
      "Use it only in the Approved Person's personal account"
    ],
    answer: "B"
  },
  {
    id: "EXTRA_105",
    element: 9,
    q: "Outside activities by an Approved Person typically require:",
    options: [
      "No notification to the firm",
      "Approval and ongoing supervision under the firm's policies, including consideration of conflicts of interest",
      "Approval directly from the CSA only",
      "Public posting on the firm's social media accounts"
    ],
    answer: "B"
  },
  {
    id: "EXTRA_106",
    element: 9,
    q: "CIRO's standards of conduct require Approved Persons to:",
    options: [
      "Maximize commissions earned",
      "Act with integrity, due care and competence, and observe high standards of ethics and conduct",
      "Avoid all dealings with institutional clients",
      "Refuse to use any technology that has not been certified by CIRO"
    ],
    answer: "B"
  },
  {
    id: "EXTRA_107",
    element: 9,
    q: "When a firm has access to limited preferential investment opportunities (for example, a popular new issue), allocations should be made:",
    options: [
      "To the largest commission generators first",
      "Fairly and consistently with each client's suitability profile",
      "To the firm's principal account first",
      "To family members of the firm's executives"
    ],
    answer: "B"
  },
  {
    id: "EXTRA_108",
    element: 9,
    q: "The clearest indicator of churning in a client account is:",
    options: [
      "Long-term holdings with infrequent trading",
      "A pattern of excessive trading inconsistent with the client's profile and apparently motivated by commission generation",
      "The use of an index fund strategy",
      "Year-end tax-loss harvesting"
    ],
    answer: "B"
  },
  {
    id: "EXTRA_109",
    element: 9,
    q: "Disclosure alone is generally sufficient to manage a conflict of interest only when:",
    options: [
      "The conflict cannot be addressed and the firm proceeds anyway",
      "The disclosure is meaningful and prominent, and the conflict has been otherwise addressed in the client's best interest",
      "The firm wants to avoid the cost of further escalation",
      "The client did not raise the issue first"
    ],
    answer: "B"
  },
  {
    id: "EXTRA_110",
    element: 9,
    q: "A confidentiality agreement at an Investment Dealer typically covers:",
    options: [
      "Only client account numbers",
      "Corporate, client and third-party information that is not in the public domain",
      "Only the firm's marketing materials",
      "Only data older than five years"
    ],
    answer: "B"
  }
];
