// CIRE Practice Exam — 110 questions
// Source: CIRO Canadian Investment Regulatory Exam Practice Exam
// Element categorization mapped to the CIRE Syllabus (January 2025)

const ELEMENTS = {
  1: "Regulatory framework",
  2: "Prospective client relationships",
  3: "Scope of client relationship",
  4: "Client complaints handling",
  5: "Market and company analysis",
  6: "Market integrity & trade execution",
  7: "Securities, managed products & funds",
  8: "Derivatives",
  9: "Conflicts of interest & ethics"
};

const QUESTIONS = [
  {
    id: "CIRO_E_000017",
    element: 3,
    q: "Which of the following statements is true?",
    options: [
      "When an Investment Dealer provides an order execution only account, it acts as trustee",
      "When a client receives recommendations, the client is fiduciary and the firm is trustee",
      "When an Investment Dealer arranges the execution of a client's order, it acts as agent",
      "Principal trades occur where an Investment Dealer acts as agent for a fiduciary"
    ],
    answer: "C"
  },
  {
    id: "CIRO_E_000025",
    element: 1,
    q: "What is the function of the Canadian Investor Protection Fund (CIPF)?",
    options: [
      "To investigate financial crimes",
      "To provide protection during dealer insolvencies",
      "To regulate securities markets",
      "To oversee clearing and settlement of trades"
    ],
    answer: "B"
  },
  {
    id: "CIRO_E_000032",
    element: 1,
    q: "An Investment Dealer introduces a crypto-asset trading platform (CTP) as part of its service offerings. Clients raise concerns about inconsistent pricing compared to other marketplaces. What steps must the dealer take to ensure compliance?",
    options: [
      "Maintain detailed records of client complaints but take no further action since crypto assets are not subject to traditional securities regulations",
      "Adjust pricing of the CTP to reflect the pricing of the dealer's other marketplaces, ensuring consistent rates across all platforms",
      "Ensure pricing transparency by disclosing how prices are determined and demonstrating that they align with the platform's stated policies",
      "Suspend trading on the CTP until pricing is consistent with other marketplaces and continue to monitor complaints that are received"
    ],
    answer: "C"
  },
  {
    id: "CIRO_E_000033",
    element: 1,
    q: "What is the primary role of the Canadian Investment Regulatory Organization (CIRO) concerning the Universal Market Integrity Rules (UMIR)?",
    options: [
      "To establish and enforce rules that ensure fair and transparent trading",
      "To create trading strategies for investors to maximize returns",
      "To provide an ethical framework to investors using primary markets",
      "To harmonize stock exchange rules across different trading platforms"
    ],
    answer: "A"
  },
  {
    id: "CIRO_E_000036",
    element: 1,
    q: "An Investment Dealer verifies that an existing client has become a politically exposed person. What is the required course of action under the Proceeds of Crime (Money Laundering) and Terrorism Financing Act (PCMLTFA)?",
    options: [
      "Contact the client for clarification and if confirmed apply simplified due diligence measures",
      "Take enhanced ongoing due diligence measures to determine if the client's actions become suspicious",
      "Inform the client of the termination of the relationship and file a suspicious transaction report to FINTRAC",
      "Freeze the client's account and notify the Canadian Securities Administrators (CSA)"
    ],
    answer: "B"
  },
  {
    id: "CIRO_E_000043",
    element: 1,
    q: "Which of the following best illustrates one of the roles performed by the Financial Services Regulatory Authority of Ontario (FSRA)?",
    options: [
      "Regulating pension funds and insurance",
      "Supervising Investment Dealers' activities",
      "Managing anti-money laundering regulations",
      "Overseeing the clearing of securities transactions"
    ],
    answer: "A"
  },
  {
    id: "CIRO_E_000044",
    element: 1,
    q: "An alternative trading system (ATS) offers both traditional securities and crypto assets on its platform. What regulatory challenge does this present?",
    options: [
      "The platform must limit trading to institutional investors only",
      "The platform is exempt from Canadian Securities Administrators (CSA) regulation due to its crypto focus",
      "The platform may require separate regulatory approval for crypto-asset trading",
      "The platform must integrate with a recognized clearing agency for all transactions"
    ],
    answer: "C"
  },
  {
    id: "CIRO_E_000047",
    element: 1,
    q: "What is the purpose of the Bank Act in relation to the Canadian banks and credit institutions?",
    options: [
      "To regulate their operation and stability",
      "To set out their policies and procedures",
      "To govern anti-money laundering activities",
      "To regulate products offered to retail clients"
    ],
    answer: "A"
  },
  {
    id: "CIRO_E_000062",
    element: 9,
    q: "A firm's representative generates a referral fee from an external company for recommending its services to clients. What must the representative do to remain compliant?",
    options: [
      "Cease to make referrals to the company to avoid any conflict of interest",
      "Accept the referral fee after disclosing the arrangement to the client",
      "Ensure the activity is approved by the Investment Dealer before making referrals",
      "Proceed with the referral in normal activities as it in the interests of the client"
    ],
    answer: "C"
  },
  {
    id: "CIRO_E_000063",
    element: 9,
    q: "An investment advisor wants to invest in a small listed company for their client's account. The advisor also owns shares in the company. What must the advisor do to remain compliant?",
    options: [
      "Invest on behalf of the client without disclosing their ownership",
      "Avoid the investment to eliminate the conflict of interest",
      "Transfer the account to another advisor to avoid involvement",
      "Disclose their ownership to the client and let them decide"
    ],
    answer: "D"
  },
  {
    id: "CIRO_E_000065",
    element: 1,
    q: "Which of the following must an Investment Dealer disclose to its shareholders to comply with regulatory requirements?",
    options: [
      "Strategic plans for expanding the Investment Dealer's business over the short and medium term",
      "A summary of financial statements based on its latest annual audited statements",
      "The Investment Dealer's current stock price, forecasted undiluted EPS and market trends",
      "The average number of employees working for the Investment Dealer over the last 12 months"
    ],
    answer: "B"
  },
  {
    id: "CIRO_E_000069",
    element: 1,
    q: "Which of the following is true in order to fulfil anti-money laundering requirements where an Investment Dealer holds records of client relationships?",
    options: [
      "Submit records to FINTRAC within 30 days of client onboarding",
      "Keep all records for at least five years from the end of the client relationship",
      "Maintain records for at least six years for high-value financial transactions",
      "Keep all records for at least seven years from the date the record is created"
    ],
    answer: "D"
  },
  {
    id: "CIRO_E_000081",
    element: 2,
    q: "A non-individual with total securities and precious metals bullion under administration or management exceeding $10 million would typically be classified as which type of client?",
    options: [
      "Retail Client",
      "Institutional Client",
      "Marketplace Member",
      "High net worth individual"
    ],
    answer: "B"
  },
  {
    id: "CIRO_E_000082",
    element: 2,
    q: "Which of the following best reflects the range of know-your-client information that a Registered Representative should obtain from a retail client?",
    options: [
      "Personal and financial circumstances, investment knowledge, needs, objectives and risk profile",
      "Financial circumstances, investment knowledge, objectives and risk profile",
      "Existing investment portfolio, current income and outgoings and attitude to risk",
      "Overall financial circumstances taking into account the nature and type of services to be supplied"
    ],
    answer: "A"
  },
  {
    id: "CIRO_E_000084",
    element: 2,
    q: "When providing services to clients who operate via corporations, partnerships or trusts, the identity of the beneficial owners should be obtained within what period?",
    options: [
      "Prior to opening the account",
      "5 days of opening the account",
      "15 days of opening the account",
      "30 days of opening the account"
    ],
    answer: "D"
  },
  {
    id: "CIRO_E_000093",
    element: 3,
    q: "In relation to the relationship disclosure, which of the following is true?",
    options: [
      "It is based on preliminary conversations between the client and the Investment Dealer",
      "It must be in plain language and bear the title 'relationship disclosure'",
      "It must be limited to no more than four sides of P4 paper",
      "It must be sent by post, signed and returned by the client"
    ],
    answer: "B"
  },
  {
    id: "CIRO_E_000096",
    element: 3,
    q: "A Registered Representative recommends an investment strategy to their client and waits for the client to confirm they can proceed with the investment. What type of account does the client most likely have?",
    options: [
      "A managed account",
      "An order execution only account",
      "A combined account",
      "An advisory account"
    ],
    answer: "D"
  },
  {
    id: "CIRO_E_000099",
    element: 3,
    q: "Which of the following is true relating to the use of performance benchmarks in client reporting?",
    options: [
      "They may only be used where reasonable and can be set out in the firm's general online terms of business available to all clients",
      "They are not permitted to be used in any circumstances other than when dealing for client on an advisory account basis",
      "They must be used only where the client has consented to their use and the content has been approved by the risk committee",
      "The relationship disclosure must include an explanation of how they are used to assess the performance of a client's investments"
    ],
    answer: "D"
  },
  {
    id: "CIRO_E_000112",
    element: 3,
    q: "Which of the following is a fundamental requirement of the suitability rules for retail clients?",
    options: [
      "Any action puts the client's interest first",
      "The client understands how the securities market works",
      "The client can afford the charges associated with the investment",
      "The client understands how the derivatives market works"
    ],
    answer: "A"
  },
  {
    id: "CIRO_E_000118",
    element: 3,
    q: "Which obligation best describes how a dealer should comply with account appropriateness requirements?",
    options: [
      "Consider the appropriateness of each trade a client undertakes",
      "Consider a risk-based approach to balancing the interests of the client and the dealer",
      "Ask the client to unwind an execution only order it deems to be inappropriate",
      "Explain the features and costs of different account types"
    ],
    answer: "D"
  },
  {
    id: "CIRO_E_000119",
    element: 2,
    q: "Additional information requirements apply when opening an account for a client which operates as a trust. Which is the best definition of a trust?",
    options: [
      "A trust describes the relationship created when property is transferred by a person to a trustee to hold for the benefit of certain beneficiaries",
      "A trust is a legal entity created when property is transferred by a person to a trustee to hold for the benefit of certain beneficiaries",
      "A trust is an entity used to provide tax benefits and increase confidentiality in relation to the affairs of an individual or a business",
      "A trust is similar to a partnership, but a trustee can never be a beneficiary of a trust whereas a partner can benefit from the partnership"
    ],
    answer: "A"
  },
  {
    id: "CIRO_E_000123",
    element: 3,
    q: "Which of the following is most likely to be provided to an individual retail investor as a service?",
    options: [
      "Investment advice services",
      "Trading and research services",
      "Securities lending services",
      "Prime brokerage services"
    ],
    answer: "A"
  },
  {
    id: "CIRO_E_000131",
    element: 3,
    q: "Which is most commonly the case for management fees for active investment strategies?",
    options: [
      "They are higher than for passive strategies",
      "They are lower than for passive strategies",
      "They are the same as passive strategies",
      "They are dependent on market performance"
    ],
    answer: "A"
  },
  {
    id: "CIRO_E_000160",
    element: 6,
    q: "An investor is considering opening a new investment account. They want to borrow funds to invest in stocks, using their existing portfolio as collateral. Their advisor explains that only certain types of accounts offer this feature, often requiring the client to understand the risks of using leverage. Which type of account is best suited to the client's needs?",
    options: [
      "Registered Retirement Savings Plan (RRSP)",
      "Tax-Free Savings Account (TFSA)",
      "Cash account",
      "Margin account"
    ],
    answer: "D"
  },
  {
    id: "CIRO_E_000166",
    element: 3,
    q: "Which of the following events would trigger a know-your-client update for a client's account?",
    options: [
      "The client requests to withdraw 5% of the total value of their account",
      "The client considers switching investments from low-risk to high-risk assets",
      "The client contributes monthly regular amounts into their savings account",
      "The client experiences a significant change in their financial situation"
    ],
    answer: "D"
  },
  {
    id: "CIRO_E_000182",
    element: 4,
    q: "An Investment Dealer receives a complaint that one of its employees was rude on the telephone to the client. Should this complaint be reported externally by the Investment Dealer to its regulator?",
    options: [
      "No. This is a non-reportable service complaint",
      "Yes. This is a reportable service complaint",
      "No. This is not a valid complaint",
      "Yes. This is a valid complaint"
    ],
    answer: "A"
  },
  {
    id: "CIRO_E_000186",
    element: 4,
    q: "Which of the following is true regarding an Investment Dealer's processes for handling complaints from institutional clients versus retail clients?",
    options: [
      "The rules are the same for both institutional and retail clients",
      "Rules apply to both types of client but they differ in the exact process",
      "An Investment Dealer can decide what processes to apply to institutional complaints",
      "There are no specific processes for Institutional complaints but Investment Dealers should act fairly"
    ],
    answer: "B"
  },
  {
    id: "CIRO_E_000199",
    element: 6,
    q: "An Investment Dealer and its employees fail to record specific information relating to client orders as required by market rules. There have been no client complaints. Can the dealer be disciplined by its regulator?",
    options: [
      "No action will be taken by the regulator as no complaints have been received",
      "No action will be taken by the regulator as no breach of rule exists",
      "Action could be taken by the regulator for a breach of market rules",
      "Action could be taken by the regulator for improper complaints handling"
    ],
    answer: "C"
  },
  {
    id: "CIRO_E_000200",
    element: 4,
    q: "The Ombudsman for Banking Services and Investment (OBSI) gets involved in which stage of the complaints process?",
    options: [
      "When a firm is drafting its complaints policies and procedures",
      "When a complaint is first made to a firm by a client",
      "When the firm has drafted their response to the client but not yet sent it",
      "When the firm and its client cannot solve a complaint on their own"
    ],
    answer: "D"
  },
  {
    id: "CIRO_E_000209",
    element: 4,
    q: "A client complains that an investment that went down in value was not suitable given the information they provided. Which of the following is most likely to support the client's claim?",
    options: [
      "The investment goal was growth",
      "The investment horizon was long-term",
      "The risk appetite was low",
      "The client's income was secure"
    ],
    answer: "C"
  },
  {
    id: "CIRO_E_000212",
    element: 4,
    q: "The CIRO arbitration program is most suitable for what type of complaint?",
    options: [
      "More complex disputes",
      "Very simple disputes",
      "Low value disputes",
      "Disputes over fees"
    ],
    answer: "A"
  },
  {
    id: "CIRO_E_000218",
    element: 5,
    q: "A government uses fiscal policy to increase public spending on infrastructure. At the same time, the central bank lowers interest rates through monetary policy. What is the intended combined effect of these actions on the economy?",
    options: [
      "Increased demand and economic growth",
      "Decreased demand and higher unemployment",
      "Reduced inflation and economic stagnation",
      "Increased savings and reduced consumer spending"
    ],
    answer: "A"
  },
  {
    id: "CIRO_E_000229",
    element: 5,
    q: "Which of the following is the main goal of government fiscal policy?",
    options: [
      "To regulate the stock market and control corporate mergers",
      "To control inflation by setting interest rates",
      "To manage public spending and taxation to stabilize the economy",
      "To directly control the wages and employment levels in private businesses"
    ],
    answer: "C"
  },
  {
    id: "CIRO_E_000245",
    element: 5,
    q: "Which of the following economic reports is primarily used to track changes in the inflation rate?",
    options: [
      "Consumer Price Index Report",
      "Retail Sales Report",
      "Employment Report",
      "Bank of Canada Monetary Policy Report"
    ],
    answer: "A"
  },
  {
    id: "CIRO_E_000247",
    element: 5,
    q: "What is commonly used to evaluate the market value of an industry by comparing its total market capitalization to its earnings?",
    options: [
      "Price-to-Earnings (P/E) ratio",
      "Dividend Yield",
      "Return on Equity (ROE)",
      "Earnings Before Interest and Taxes (EBIT)"
    ],
    answer: "A"
  },
  {
    id: "CIRO_E_000249",
    element: 5,
    q: "Which of the following sectors are considered the most likely to perform well during an economic expansion?",
    options: [
      "Utilities",
      "Consumer staples",
      "Technology",
      "Healthcare"
    ],
    answer: "C"
  },
  {
    id: "CIRO_E_000259",
    element: 5,
    q: "A company is considering acquiring another company, and the board is concerned about the regulatory controls. What is the primary purpose of the legislation governing takeovers in Canada?",
    options: [
      "To ensure that companies can freely engage in takeovers without external regulation",
      "To provide legal protection for shareholders and prevent unfair or hostile takeovers",
      "To encourage companies to pursue takeovers as a strategy for growth and expansion",
      "To limit the number of takeovers that can occur within a specific industry"
    ],
    answer: "B"
  },
  {
    id: "CIRO_E_000268",
    element: 5,
    q: "Which of the following ratios is most commonly used to measure a company's profitability?",
    options: [
      "Return on Equity (ROE)",
      "Price-to-Earnings (P/E) ratio",
      "Earnings Before Interest and Taxes (EBIT)",
      "Current ratio"
    ],
    answer: "A"
  },
  {
    id: "CIRO_E_000270",
    element: 5,
    q: "What measure is frequently employed in quantitative analysis to describe the volatility of a financial asset?",
    options: [
      "Standard deviation",
      "Dividend yield",
      "Moving average",
      "Relative strength index (RSI)"
    ],
    answer: "A"
  },
  {
    id: "CIRO_E_000274",
    element: 5,
    q: "What is the main purpose of using a moving average in technical analysis?",
    options: [
      "To smooth out price data to identify trends over a specific period",
      "To determine the intrinsic value of a stock",
      "To assess the company's profitability over a specific time period",
      "To calculate a company's normal debt-to-equity ratio"
    ],
    answer: "A"
  },
  {
    id: "CIRO_E_000278",
    element: 7,
    q: "What is a key characteristic of income trusts that makes them more attractive than traditional equities to investors seeking regular income?",
    options: [
      "Income trusts distribute most of their cash flow to investors, often providing higher yields",
      "Income trusts guarantee capital preservation regardless of market conditions",
      "Income trusts offer significant tax advantages for all types of investors compared to other investments",
      "Income trusts primarily generate returns through capital gains rather than distributions"
    ],
    answer: "A"
  },
  {
    id: "CIRO_E_000283",
    element: 7,
    q: "An investor is deciding whether to invest in individual equities or managed products. What is the main distinction between these two investment approaches that the investor should understand?",
    options: [
      "Managed products typically involve investing in derivatives, while individual equities consist solely of stocks from foreign markets",
      "Managed products are directly controlled by the investor, while individual equities are professionally managed on behalf of the investor",
      "Managed products diversify investments across multiple assets, while individual equities involve owning shares of specific companies",
      "Managed products guarantee fixed returns, while individual equities are subject to market fluctuations"
    ],
    answer: "C"
  },
  {
    id: "CIRO_E_000286",
    element: 7,
    q: "A shareholder in Canada receives a dividend from a Canadian corporation. The shareholder wants to understand how the dividend will be taxed. Which of the following best describes how dividends are taxed in Canada?",
    options: [
      "Dividends from Canadian corporations are taxed at the same rate as interest income, with no preferential treatment",
      "Dividends from Canadian corporations are taxed at a lower rate due to the dividend tax credit",
      "Dividends are exempt from taxation in Canada, if they are reinvested in the same company's shares",
      "Dividends from Canadian corporations are subject to a capital gains tax, not income tax"
    ],
    answer: "B"
  },
  {
    id: "CIRO_E_000290",
    element: 7,
    q: "What is the main difference between an equity index and an average of individual stock prices?",
    options: [
      "An equity index takes the average of individual stock prices, while an average will assume an equal value invested in each share",
      "An equity index considers market capitalization of companies, whereas an average considers the sum of individual stock prices",
      "An equity index is typically based on the median of stock prices, while an average uses the mean of market capitalization",
      "An equity index focuses on stock prices of companies in the same industry, whereas an average includes multiple industries"
    ],
    answer: "B"
  },
  {
    id: "CIRO_E_000297",
    element: 7,
    q: "A fixed-income investor is considering purchasing bonds from a company with a lower credit rating than government bonds. What risk, above that of a government bond, will the investor primarily be concerned with when buying these corporate bonds?",
    options: [
      "The bond's issuer may default, leading to a loss of principal and interest payments",
      "The bond's issuer will pay a fixed interest rate that cannot be adjusted",
      "The bonds are guaranteed to provide a return lower than government bonds",
      "The bonds are exempt from interest rate risk, as they are issued by a corporation"
    ],
    answer: "A"
  },
  {
    id: "CIRO_E_000301",
    element: 7,
    q: "A Canadian investor is considering purchasing a government bond. What is one of the main considerations for market access to debt trading in Canada?",
    options: [
      "Debt securities can only be traded through public exchanges",
      "Bond trading is restricted to institutional investors only",
      "Debt securities can be traded over-the-counter (OTC)",
      "Canadian investment in overseas bonds is prohibited"
    ],
    answer: "C"
  },
  {
    id: "CIRO_E_000302",
    element: 7,
    q: "A Canadian investor is seeking information about the latest market conditions for government bonds. Which of the following is a reliable source of information for these products?",
    options: [
      "News articles in financial magazines that focus on fixed income",
      "The Bank of Canada website providing data on government debt",
      "Social media forums where bond traders share tips and opinions",
      "Online platforms providing tools for technical analysis"
    ],
    answer: "B"
  },
  {
    id: "CIRO_E_000304",
    element: 7,
    q: "An investment advisor is discussing two fixed income management strategies with a client: passive and active management. The client is interested in a low-cost approach where the returns follow a benchmark. Which of the following strategies is most appropriate for this client's preference?",
    options: [
      "Active management, where the advisor selects securities based on their predicted performance",
      "Passive management, which seeks to replicate the performance of a bond market index",
      "Active management, which requires frequent buying and selling of securities to capitalize on market movements",
      "Passive management, where frequent strategic adjustments to the portfolio aim to outperform the market"
    ],
    answer: "B"
  },
  {
    id: "CIRO_E_000308",
    element: 7,
    q: "Which of the following factors would most likely lead to an increase in government bond yields?",
    options: [
      "A decrease in inflation expectations making assets rise in price more slowly",
      "A decrease in the issuance of bonds due to lower government spending",
      "Increased demand for government bonds during an economic downturn",
      "An increase in the central bank rate to slow down aggregate demand"
    ],
    answer: "D"
  },
  {
    id: "CIRO_E_000309",
    element: 7,
    q: "A Registered Representative of an Investment Dealer is explaining wrap funds to a client. How can wrap funds be described?",
    options: [
      "They are limited to investing in government debt securities only",
      "They offer a portfolio of investment products with a single fee structure",
      "They are focused solely on fixed-income investments and exclude equities",
      "Investors are charged separate fees for each individual asset within the fund"
    ],
    answer: "B"
  },
  {
    id: "CIRO_E_000311",
    element: 7,
    q: "An investor in Canada wants to invest in a mutual fund. Which of the following is the most common way to access such products?",
    options: [
      "Purchasing stocks through a stockbroker on a securities exchange",
      "Purchasing directly from the mutual fund company or via a dealer",
      "Investing in the stock market shares of a closed-ended company",
      "Investing in government bonds from an investment advisor"
    ],
    answer: "B"
  },
  {
    id: "CIRO_E_000312",
    element: 7,
    q: "Which of the following is a key information source for clients to evaluate Mutual funds?",
    options: [
      "Local news outlets",
      "Fund fact sheets",
      "Investment forums on social media",
      "Blogs written by investors"
    ],
    answer: "B"
  },
  {
    id: "CIRO_E_000316",
    element: 7,
    q: "An investment advisor is reviewing a client's portfolio. The advisor is focusing on the tax implication of several managed products for the client. What are the potential tax considerations of these products?",
    options: [
      "The managed products are subject to tax on capital gains, interest income, and dividends",
      "Managed products are not subject to taxes and, therefore, taxes do not impact the returns",
      "Taxes apply to dividends from managed products, not to capital gains or interest income",
      "Managed products are taxed at a flat rate, regardless of the type of income generated"
    ],
    answer: "A"
  },
  {
    id: "CIRO_E_000318",
    element: 7,
    q: "An investment advisor is evaluating the risk and return profile of a mutual fund trust for a client. Which of the following is most likely to affect a client's return from a mutual fund trust?",
    options: [
      "The type of assets held within the fund, such as stocks or bonds",
      "The amount of capital invested by the mutual fund trust itself",
      "The fixed fee structure for the trust, regardless of performance",
      "The performance of the mutual fund trust, relative to other Mutual funds"
    ],
    answer: "A"
  },
  {
    id: "CIRO_E_000321",
    element: 7,
    q: "Which of the following methods is commonly used to invest in Mutual funds in Canada?",
    options: [
      "Buying directly from stock exchanges",
      "Purchasing through Mutual Fund Dealers or Investment Dealers",
      "Applying through government financial assistance programs",
      "Transferring directly between tax-free savings accounts (TFSAs)"
    ],
    answer: "B"
  },
  {
    id: "CIRO_E_000331",
    element: 7,
    q: "A company is designing a new hedge fund to attract investors. While planning the fund's structure, they consider its potential disadvantages. What is one key disadvantage of hedge funds that the company should address?",
    options: [
      "They are marketed to all types of investors, regardless of experience",
      "They must deliver higher than market average returns for less risk",
      "They often have higher fees than regulated funds and limited liquidity",
      "They are required to disclose their holdings publicly at all times"
    ],
    answer: "C"
  },
  {
    id: "CIRO_E_000335",
    element: 3,
    q: "An Investment Representative is describing to a client how trust, agency and fiduciary duty applies to discretionary accounts. Which of the following best describes these concepts in discretionary management?",
    options: [
      "A fiduciary duty requires balancing the client's best interests and the Investment Dealer's profitability",
      "Agency allows the Portfolio Manager to act without disclosing conflicts of interest, as long as the client agrees",
      "A fiduciary duty obligates the Portfolio Manager to prioritize the client's best interest above all other matters",
      "Trust is about the client's confidence in the Portfolio Manager and the Investment Dealer they represent"
    ],
    answer: "C"
  },
  {
    id: "CIRO_E_000340",
    element: 7,
    q: "Which of the following is a key feature of most crypto assets?",
    options: [
      "They are regulated by a central financial authority, ensuring stability",
      "They are backed by traditional currencies like the US dollar or Euro",
      "They use blockchain technology to maintain decentralized records of transactions",
      "They offer guaranteed returns due to the underlying mining process"
    ],
    answer: "C"
  },
  {
    id: "CIRO_E_000346",
    element: 8,
    q: "What is a key characteristic of American-style options?",
    options: [
      "They can be exercised on an expiration date only",
      "They can be exercised at any time up to and including expiration",
      "They are typically less expensive than European options",
      "They are only traded on North American exchanges"
    ],
    answer: "B"
  },
  {
    id: "CIRO_E_000349",
    element: 8,
    q: "Which of the following is a key characteristic of a futures contract?",
    options: [
      "Futures contracts can be exercised by the holder at any time before the settlement date",
      "Futures contracts require the delivery of the underlying asset on the settlement date",
      "Futures contracts can be settled in cash or by physical delivery of the underlying asset",
      "Futures contracts have a fixed strike price and are traded at a premium"
    ],
    answer: "C"
  },
  {
    id: "CIRO_E_000355",
    element: 8,
    q: "A trader buys a copper future on a London exchange and simultaneously sells a copper future on a Chicago exchange in an attempt to profit from potential mispricing between the two contracts. Which of the following best describes the type of trading in which they have engaged?",
    options: [
      "Hedging, as they are using the futures contracts to reduce risk in their portfolio",
      "Speculative trading, as they are betting on future price movements",
      "Arbitrage trading, as they are profiting from price discrepancies between two markets",
      "Risk management, as they are protecting their investments against market volatility"
    ],
    answer: "C"
  },
  {
    id: "CIRO_E_000360",
    element: 8,
    q: "A trader is preparing to take out a futures contract and is trying to understand the role of margin in the process. They are considering how margin functions in terms of collateral and the requirements to maintain their position in the market. In the context of futures trading, what best describes the role of margin?",
    options: [
      "Margin refers to the market value of the asset being traded in the futures contract and is unrelated to the collateral requirements",
      "Margin is the total amount of money required to close a futures position, including all profits and losses incurred during the life of the contract",
      "Margin is the amount of collateral that must be paid in full upfront by the trader to purchase the full contract value in a futures transaction",
      "Margin is the amount of money deposited to open and maintain a futures position, ensuring there is enough collateral to cover potential losses"
    ],
    answer: "D"
  },
  {
    id: "CIRO_E_000362",
    element: 8,
    q: "Which of the following is a key difference between listed derivatives and over-the-counter (OTC) derivatives?",
    options: [
      "Liquidity risk, which is higher for OTC derivatives than listed",
      "Counterparty risk, which is higher for listed derivatives than OTC",
      "Capital at risk, which is greater for OTC derivatives than listed",
      "Flexibility risk, which is greater for listed derivatives than OTC"
    ],
    answer: "A"
  },
  {
    id: "CIRO_E_000372",
    element: 8,
    q: "Before a client can engage in leveraged derivative trading, what form must they complete to outline their obligations regarding the use of margin in Canada?",
    options: [
      "Risk Disclosure Form",
      "Margin Agreement Form",
      "Derivatives Clearing Agreement",
      "Suitability Assessment Form"
    ],
    answer: "B"
  },
  {
    id: "CIRO_E_000382",
    element: 1,
    q: "What is an Investment Dealer's primary responsibility regarding funding requirements under CIRO regulations?",
    options: [
      "Invest all surplus funds in high-risk securities for maximum return",
      "Maintain adequate capital to meet operational obligations",
      "Use client deposits as a temporary source of operating capital",
      "Report funding deficiencies during annual compliance reviews"
    ],
    answer: "B"
  },
  {
    id: "CIRO_E_000392",
    element: 3,
    q: "Relationship disclosure information includes a written account of the products and services offered by the Investment Dealer. When must this information be provided to institutional clients?",
    options: [
      "At the time of opening an account or accounts",
      "Whenever there is a significant change to the information",
      "Relationship disclosure information is not required",
      "The information must be disclosed to clients annually"
    ],
    answer: "C"
  },
  {
    id: "CIRO_E_000403",
    element: 3,
    q: "An Investment Dealer is exempt from collecting information regarding a client's investment needs and objectives for which of the following accounts?",
    options: [
      "Financial derivatives",
      "Margin account",
      "Registered Retirement Savings Plan",
      "Direct electronic access account"
    ],
    answer: "D"
  },
  {
    id: "CIRO_E_000408",
    element: 2,
    q: "Which of the following would be considered an institutional client under CIRO rules?",
    options: [
      "The client must provide a guarantee of financial soundness",
      "The client must be an individual with an annual income exceeding $200,000",
      "The client must be a regulated entity under applicable securities law",
      "The client must have a portfolio exceeding $1 million"
    ],
    answer: "C"
  },
  {
    id: "CIRO_E_000423",
    element: 3,
    q: "What should an Investment Dealer do if a client's risk tolerance changes significantly?",
    options: [
      "Ignore the changes and continue using the original profile until advised not to",
      "Close the account, refuse further trades and report to FINTRAC",
      "Update the know-your-client information and reassess their investment strategy",
      "Allow the client to invest however they wish with a waiver"
    ],
    answer: "C"
  },
  {
    id: "CIRO_E_000428",
    element: 2,
    q: "What is a trusted contact person?",
    options: [
      "A legal firm appointed by the Investment Dealer or Approved Person whom a client may contact in accordance with the client agreement",
      "An individual identified by a client whom the Investment Dealer or Approved Person may contact in accordance with the client's written consent",
      "An individual appointed by the Investment Dealer or Approved Person whom a client may contact in accordance with the relationship disclosure",
      "An investment professional identified by a client whom the Investment Dealer or Approved Person may contact in respect of more complex investments"
    ],
    answer: "B"
  },
  {
    id: "CIRO_E_000433",
    element: 3,
    q: "Which of the following would be a violation of CIRO rules in relation to cost disclosure?",
    options: [
      "Not providing an institutional client with a fee schedule",
      "Highlighting cost differences between recommended products",
      "Restricting disclosure of information about embedded fees",
      "An Investment Dealer paying a commission to an Investment Representative"
    ],
    answer: "C"
  },
  {
    id: "CIRO_E_000434",
    element: 2,
    q: "Which of the following best describes the impact of fees on investment returns?",
    options: [
      "Fees can enhance returns if managed properly",
      "Fees reduce the client's overall investment returns",
      "Fees have no significant impact on long-term investments",
      "Fees affect only short-term investment returns"
    ],
    answer: "B"
  },
  {
    id: "CIRO_E_000443",
    element: 2,
    q: "What is one impact of being classified as an institutional client under CIRO rules?",
    options: [
      "Exemption from all know-your-client requirements",
      "Reduced disclosure of investment risks",
      "Ability to waive suitability assessments in writing",
      "Access to lower-fee investment products"
    ],
    answer: "C"
  },
  {
    id: "CIRO_E_000453",
    element: 4,
    q: "What is the retention period for client records related to complaints under CIRO rules?",
    options: [
      "At least 3 years after the account is closed",
      "At least 7 years following receipt of the complaint",
      "Indefinitely, unless otherwise specified by the client",
      "At the discretion of internal firm policies"
    ],
    answer: "B"
  },
  {
    id: "CIRO_E_000454",
    element: 4,
    q: "According to CIRO, what is the maximum time allowed for an Investment Dealer to provide a substantive response to a client complaint?",
    options: [
      "30 days",
      "60 days",
      "90 days",
      "120 days"
    ],
    answer: "C"
  },
  {
    id: "CIRO_E_000459",
    element: 6,
    q: "Which of the following practices are considered manipulative or deceptive?",
    options: [
      "Entering an order that is considered to be off market",
      "Entering an order to be executed at a prespecified future date",
      "Entering multiple orders that create no change in beneficial ownership",
      "Entering multiple orders in different securities to be executed at the same time"
    ],
    answer: "C"
  },
  {
    id: "CIRO_E_000470",
    element: 6,
    q: "Which of the following is true of algorithmic trading under the Universal Market Integrity Rules (UMIR)?",
    options: [
      "Algorithms are required to model manual trade behaviour",
      "Algorithmic orders are treated equally to manual orders",
      "Algorithms are required to function without human oversight",
      "Algorithmic orders take priority over manual orders"
    ],
    answer: "B"
  },
  {
    id: "CIRO_E_000472",
    element: 6,
    q: "What is the primary characteristic of a limit order?",
    options: [
      "It is executed immediately at the best available market price",
      "It must be executed in full or canceled immediately",
      "It is hidden from the public order book",
      "It specifies a maximum price to buy or a minimum price to sell"
    ],
    answer: "D"
  },
  {
    id: "CIRO_E_000484",
    element: 6,
    q: "Which of the following is a key feature of a managed account?",
    options: [
      "The client retains full authority over all investment decisions and trade executions",
      "The account permits trading exclusively in bonds and other fixed-income products",
      "The dealer is authorized to make all investment decisions without prior client approval",
      "The client must approve every trade before the Investment Dealer can execute it"
    ],
    answer: "C"
  },
  {
    id: "CIRO_E_000485",
    element: 6,
    q: "What is the primary purpose of gatekeeping obligations under the Universal Market Integrity Rules (UMIR)?",
    options: [
      "To monitor and enforce the execution of trades",
      "To ensure that only qualified investors can access certain securities",
      "To prevent and identify suspicious transactions and market abuses",
      "To facilitate the clearing and settlement of securities transactions"
    ],
    answer: "C"
  },
  {
    id: "CIRO_E_000498",
    element: 6,
    q: "An Investment Representative (IR) is aware that a client plans to place a large buy order for 10,000 shares of a stock. Before executing the client's order, the IR buys 1,000 shares of the stock for their personal account. What violation is the IR most likely committing?",
    options: [
      "Front running",
      "Market manipulation",
      "Insider trading",
      "Unauthorized trading"
    ],
    answer: "A"
  },
  {
    id: "CIRO_E_000505",
    element: 6,
    q: "A trader's order was executed, but it was later discovered that the price was incorrect due to a system error. What is the standard procedure for correcting the mistake according to market regulations?",
    options: [
      "The trader must simply accept the price as is, as the order is final once executed",
      "The trader can request a correction from the exchange after receiving notice from the market regulator",
      "The trader can cancel the order and request a full refund from the counterparty to the trade",
      "The trader can change the execution price manually, which becomes binding on the counterparty"
    ],
    answer: "B"
  },
  {
    id: "CIRO_E_000513",
    element: 8,
    q: "A client wants to open a derivative account to engage in futures trading. In accordance with regulatory requirements, what is the primary step the representative must take before allowing the client to trade derivatives?",
    options: [
      "Provide the client with a general trading agreement that covers all securities, including derivatives",
      "Offer the client a specialized trading agreement outlining the risks and responsibilities",
      "Obtain approval from a regulatory body before allowing the client to trade derivatives",
      "Verify the client's financial status and provide a margin loan for the derivative trade"
    ],
    answer: "B"
  },
  {
    id: "CIRO_E_000515",
    element: 6,
    q: "An investor buys 500 shares at $40 each and later sells them for $50 each. The broker charges a $20 flat fee per transaction to buy and sell. What is the investor's net profit?",
    options: [
      "$24,980",
      "$19,980",
      "$5,000",
      "$4,960"
    ],
    answer: "D"
  },
  {
    id: "CIRO_E_000523",
    element: 6,
    q: "A dealer takes on a significant short position in a stock that becomes highly volatile. What must the dealer do to comply with reporting obligations?",
    options: [
      "Disclose the short position to CIRO within the next reporting cycle",
      "Increase margin requirements for all client accounts holding the same stock",
      "File a report with the Canadian Securities Administrators (CSA)",
      "Close the short position immediately to reduce risk"
    ],
    answer: "A"
  },
  {
    id: "CIRO_E_000525",
    element: 6,
    q: "A dealer receives a client's order to buy 1,000 shares of a stock during a highly volatile market. To ensure the best execution, the dealer should do which of the following?",
    options: [
      "Execute the order immediately at the current market price",
      "Split the order into multiple smaller trades across different days",
      "Use available trading desks and algorithms to optimize price and speed",
      "Delay execution until market conditions stabilize"
    ],
    answer: "C"
  },
  {
    id: "CIRO_E_000534",
    element: 6,
    q: "A trader has placed a limit order to buy 1,000 shares of XYZ stock at $50. The current market price is $52. Which of the following is a key feature of this limit order?",
    options: [
      "The order may remain unfilled if the market price of XYZ stock does not meet the limit",
      "The order will be executed immediately at the best available price on the market",
      "The order will be executed as soon as the market price exceeds $50, ensuring a quick fill",
      "The order will convert into a market order if the stock price does not reach $50 within a set time"
    ],
    answer: "A"
  },
  {
    id: "CIRO_E_000544",
    element: 6,
    q: "What is the primary purpose of conducting research in the context of the investment industry?",
    options: [
      "To develop new financial products for clients",
      "To monitor competitor strategies and adjust pricing accordingly",
      "To provide clients with detailed, accurate information for decision making",
      "To allow access to inside information through a legitimate source"
    ],
    answer: "C"
  },
  {
    id: "CIRO_E_000556",
    element: 9,
    q: "How does an Investment Dealer's ethical responsibilities differ from legal responsibilities?",
    options: [
      "Ethical responsibilities are compulsory and legal responsibilities are discretionary",
      "Ethical responsibilities are rules-based and legal responsibilities are principle-based",
      "Ethical responsibilities are general obligations and legal responsibilities are more precise",
      "Ethical responsibilities are set by regulators and legal responsibilities are set by the individual"
    ],
    answer: "C"
  },
  {
    id: "CIRO_E_000570",
    element: 9,
    q: "What is the primary motivation for an investment advisor to engage in churning?",
    options: [
      "To generate excessive commissions or fees",
      "To maximize client portfolio returns",
      "To align with client investment goals",
      "To improve portfolio diversification"
    ],
    answer: "A"
  },
  {
    id: "CIRO_E_000572",
    element: 9,
    q: "Which of the following is the best step an Investment Dealer can take to prevent their representatives being involved in manipulative and deceptive practices?",
    options: [
      "Promote high standards of ethics and conduct in all employees",
      "Provide representatives with incentives for trades that prove profitable",
      "Ensure information about executed trades is kept confidential",
      "Disclose that deceptive practices may happen in financial markets"
    ],
    answer: "A"
  },
  {
    id: "CIRO_E_000577",
    element: 9,
    q: "A Portfolio Manager for a discretionary account purchases a stock for an account and realizes it is not aligned with the client's know-your-client (KYC) information. The stock is sold for a small loss. What should the manager do?",
    options: [
      "Notify the client and document the error as per firm policy",
      "Explain the loss as a reasonable risk of the relationship",
      "Reinvest the proceeds in a stock that is going up to offset the loss",
      "Delete the record of the misplaced trade as it has been reversed"
    ],
    answer: "A"
  },
  {
    id: "CIRO_E_000582",
    element: 9,
    q: "Which of the following behaviours could pose an immediate ethical risk to clients?",
    options: [
      "Presenting opinions as facts",
      "Charging fees for services",
      "Avoiding a conflict of interest",
      "Delegating a task to others"
    ],
    answer: "A"
  },
  {
    id: "CIRO_E_000583",
    element: 9,
    q: "Which of the following would comply with the rules on personal financial dealing?",
    options: [
      "Accepting consideration directly from the client for activities provided to the client",
      "Arranging a settlement of a complaint by paying back losses from personal funds",
      "Receiving a guarantee from the client in relation to borrowing funds for personal investment",
      "Acting on powers of attorney for a client who is considered a Related Person"
    ],
    answer: "D"
  },
  {
    id: "CIRO_E_000586",
    element: 9,
    q: "Why is it important to emphasize ethical practices in the investment industry?",
    options: [
      "Rules are not binding and require ethical statements to be enforceable",
      "Ethical practices are more specific in their requirements than rules",
      "Rules are driven by an individual's values, whereas ethics is more precise",
      "Ethical practices can still be applied where rules may fall short"
    ],
    answer: "D"
  },
  {
    id: "CIRO_E_000587",
    element: 9,
    q: "What is the purpose of ethical principles and standards of conduct in the investment industry?",
    options: [
      "To ensure that a Regulated Person complies with the suitability determination rules with clients at all times",
      "To ensure that investor confidence in the integrity of the securities and derivatives markets is not diminished",
      "To set out the specific steps an Approved Person must take to ensure they are just and equitable with clients",
      "To provide Investment Representatives with a code of behaviour that replaces the more prescriptive rules"
    ],
    answer: "B"
  },
  {
    id: "CIRO_E_000596",
    element: 9,
    q: "An Investment Dealer instructs its Registered Representatives to recommend a product to their entire client base. A Registered Representative does not believe the product is in the best interests of one of their clients. What is the ethical response?",
    options: [
      "Avoid discussing the product with the client and explain to the firm why it is unsuitable",
      "Recommend the product to the client but emphasize it does not meet suitability requirements",
      "Ignore the firm's instruction and provide recommendations to the client as normal",
      "Recommend the product as instructed by the firm as the firm is responsible for the action"
    ],
    answer: "A"
  },
  {
    id: "CIRO_E_000597",
    element: 9,
    q: "A Registered Representative has limited access to some preferential investment opportunities. How should they proceed according to the CIRO standards of conduct?",
    options: [
      "Avoid offering the opportunity to anyone, so as not to appear unbecoming",
      "In a manner that is just and equitable to the principles of suitability determination",
      "Openly and fairly to whichever clients come first regardless of suitability determination",
      "Offer to institutional clients first so as not to diminish investor confidence"
    ],
    answer: "B"
  },
  {
    id: "CIRO_E_000603",
    element: 9,
    q: "If an investment advisor inappropriately receives material non-public information during a client meeting, what is the ethical course of action?",
    options: [
      "Use the information for the client's benefit only",
      "Escalate the matter to the compliance team and avoid acting on the information",
      "Share the information only with the firm's internal investment team",
      "Ignore the information and continue advising the client as usual"
    ],
    answer: "B"
  },
  {
    id: "CIRO_E_000617",
    element: 3,
    q: "What should an Investment Representative do if a client wants to trade options, and the Investment Representative is not qualified?",
    options: [
      "Proceed with the trades as instructed by the client to achieve best execution",
      "Refer the client to an Investment Representative approved to trade in derivatives",
      "State that trades cannot be performed in options due to lack of expertise",
      "Offer an alternative investment that the Investment Representative understands"
    ],
    answer: "B"
  },
  {
    id: "CIRO_E_000627",
    element: 9,
    q: "A Registered Representative recommends its proprietary investment fund to a retail client. Why could this be a conflict of interest?",
    options: [
      "Because retail clients cannot invest in investment funds",
      "Because an Investment Dealer is not permitted to sell its own funds to clients",
      "Because the commission on investment funds could be higher than for other investments",
      "Because third party products may be better suited to the client"
    ],
    answer: "D"
  },
  {
    id: "CIRO_E_000635",
    element: 9,
    q: "If a conflict of interest between a client and an Investment Dealer cannot be satisfactorily addressed in compliance with the rules, what action should the Investment Dealer take?",
    options: [
      "The conflict must be minimized",
      "The conflict must be avoided",
      "The client must be released",
      "The client must be investigated"
    ],
    answer: "B"
  },
  {
    id: "CIRO_E_000637",
    element: 1,
    q: "Which principal piece of legislation covers the requirement for client data in Canada to be held safe?",
    options: [
      "Investment Dealer and Partially Consolidated Rules",
      "Universal Market Integrity Rules (UMIR)",
      "The Criminal Code",
      "The Personal Information Protection and Electronic Documents Act (PIPEDA)"
    ],
    answer: "D"
  },
  {
    id: "CIRO_E_000638",
    element: 9,
    q: "Which of the following is most likely to adhere to the CIRO standards of conduct?",
    options: [
      "Pushing unsuitable products on to clients in order to meet sales quotas",
      "Engaging in personal financial dealing on confidential client information",
      "Executing one client order ahead of another client order during execution",
      "Recommending a product based on the commission generated"
    ],
    answer: "C"
  },
  {
    id: "CIRO_E_000647",
    element: 2,
    q: "What element of prospectus regulation does National Instrument 45-106 cover?",
    options: [
      "The requirement to produce a prospectus",
      "The prescribed content of a prospectus",
      "The regulatory guarantee on accepted prospectuses",
      "The exemptions from preparing and filing a prospectus"
    ],
    answer: "D"
  },
  {
    id: "CIRO_E_000652",
    element: 1,
    q: "Which agency provides clearing and settlement for the Canadian securities industry?",
    options: [
      "The International Securities Clearing Corporation",
      "The Pan-Canadian Clearing and Settlement Agency",
      "The Canadian Depository for Securities Limited",
      "The Depositary Trust and Clearing Corporation"
    ],
    answer: "C"
  },
  {
    id: "CIRO_E_000663",
    element: 3,
    q: "What must an Investment Dealer do before making securities available to clients under the product due diligence obligation?",
    options: [
      "Confirm that securities are listed on a major exchange",
      "Assess the securities' risks, structure, and costs",
      "Verify that an analyst has recommended the securities",
      "Check that securities reflect good value for money"
    ],
    answer: "B"
  },
  {
    id: "CIRO_E_000694",
    element: 7,
    q: "What is a defining feature of common shares that influences their risk and return profile?",
    options: [
      "They have voting rights and potential for capital appreciation",
      "They come with a maturity date and interest payments",
      "They are guaranteed by the government for dividend payments",
      "They are convertible into preferred shares on a fixed future date"
    ],
    answer: "A"
  },
  {
    id: "CIRO_E_000696",
    element: 7,
    q: "What is a potential risk associated with investing in common shares?",
    options: [
      "Return of principal only when it matures",
      "Income is a fixed and annual payment",
      "Capital loss is limited to the amount invested",
      "Upside potential in capital gains is limited"
    ],
    answer: "C"
  },
  {
    id: "CIRO_E_000698",
    element: 7,
    q: "What is a key feature of closed-ended funds that distinguishes them from exchange-traded funds (ETFs)?",
    options: [
      "Closed-ended funds have a fixed number of shares available",
      "Closed-ended funds are traded without being listed on exchanges",
      "Closed-ended fund shares can be continuously issued and redeemed",
      "Closed-ended funds provide a return of principal to investors"
    ],
    answer: "A"
  }
];
