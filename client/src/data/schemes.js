/**
 * Saarthi (SIH 2026) - Centralized Scheme Data System (Client Data Catalog)
 * 
 * IMPORTANT PROTOTYPE NOTICE:
 * This file contains realistic MOCK scheme data created for system demonstration,
 * UI testing, and prototype evaluation. Official government APIs and live values
 * are not available for this prototype. Sample values should NOT be treated as current
 * official government figures.
 */

export const schemes = [
  {
    id: "pm-svanidhi",
    name: "PM SVANidhi (Street Vendor's AtmaNirbhar Nidhi)",
    schemeName: "PM SVANidhi (Street Vendor's AtmaNirbhar Nidhi)",
    shortName: "PM SVANidhi",
    shortDescription: "Affordable collateral-free working capital loan designed for urban and peri-urban street vendors with 7% interest subsidy and digital cashbacks.",
    overview: "PM SVANidhi is a special micro-credit facility launched to empower street vendors, hawkers, thela operators, and small roadside service providers. It offers collateral-free working capital in progressive tranches (₹10,000, ₹20,000, and ₹50,000) upon timely repayment, accompanied by an attractive 7% annual interest subsidy credited directly to bank accounts and incentives for digital UPI transactions.",
    category: "Street Vendors & Urban Micro-sellers",
    eligibleCategory: "Street Vendors, Hawkers & Daily Urban Sellers",
    targetBeneficiaries: [
      "Street Vendors",
      "Hawkers & Thela Operators",
      "Vegetable & Fruit Sellers",
      "Roadside Food & Tea Stalls",
      "Urban Micro-Service Providers"
    ],
    targetDemographic: ["Street Vendors", "Hawkers", "Women", "General", "SC", "ST", "OBC", "Minority"],
    purpose: [
      "Working Capital",
      "Daily Inventory Purchase",
      "Vending Cart Upgradation",
      "Business Setup"
    ],
    minLoanAmount: 10000,
    maxLoanAmount: 50000,
    minLoan: 10000,
    maxLoan: 50000,
    keyBenefit: "Collateral-free credit up to ₹50,000 in progressive tranches with 7% interest rebate & digital cashbacks",
    subsidyInformation: "7% annual interest subvention directly credited quarterly into savings account + up to ₹1,200 annual cashbacks on digital transactions.",
    subsidyRate: "7% Interest Subsidy + up to ₹1,200/yr digital cashback",
    subsidyType: "Interest Concession & Digital Incentives",
    interestRate: "Subsidized effective interest rate (~7% p.a. with subvention)",
    incomeEligibility: "No mandatory household income ceiling; vendor must possess Urban Local Body (ULB) vending certificate or Letter of Recommendation (LoR).",
    sector: [
      "Retail Vending & Hawkers",
      "Fast Food & Eateries",
      "Fruits, Vegetables & Perishables",
      "Small Personal Services"
    ],
    eligibleSectors: [
      "Retail Grocery, Kirana & General Stores",
      "Food Processing, Bakeries & Agro-Products",
      "Personal Care, Beauty & Tailoring",
      "All"
    ],
    businessTypes: ["Street Vendor", "Retail/Vending", "Micro Enterprise"],
    ruralUrbanEligibility: "Urban & Peri-Urban",
    eligibleLocations: ["Urban", "Within District", "Within State", "All"],
    requiredDocuments: [
      "Aadhaar Card linked to active mobile number",
      "Certificate of Vending (CoV) or Urban Local Body Identity Card or Letter of Recommendation (LoR)",
      "Active Savings Bank Account Passbook",
      "Recent passport-size photograph"
    ],
    documentsRequired: [
      "Aadhaar Card linked to active mobile number",
      "Certificate of Vending (CoV) or Urban Local Body Identity Card or Letter of Recommendation (LoR)",
      "Active Savings Bank Account Passbook",
      "Recent passport-size photograph"
    ],
    applicationMethod: "Online via the official PM SVANidhi portal or offline through any Common Service Center (CSC) / Bank Mitra.",
    officialSourceUrl: "https://pmsvanidhi.mohua.gov.in",
    applicationUrl: "https://pmsvanidhi.mohua.gov.in",
    schemeStatus: "Active (Mock Prototype Data)",
    ministry: "Ministry of Housing and Urban Affairs (MoHUA)",
    collateralRequired: false,
    tenureMonths: 12,
    repaymentPeriod: "12 to 36 Months",
    moratorium: "Nil",
    fundingTypes: ["Collateral-Free Microcredit", "Working Capital / CC Limit"],
    isMockData: true,
    disclaimer: "Realistic mock prototype data for evaluation purposes. Not official government values."
  },
  {
    id: "pm-vishwakarma",
    name: "PM Vishwakarma Kaushal Samman",
    schemeName: "PM Vishwakarma Kaushal Samman",
    shortName: "PM Vishwakarma",
    shortDescription: "Comprehensive support for traditional artisans and craftspeople working with their hands and tools across 18 notified traditional trades.",
    overview: "PM Vishwakarma is a flagship central sector initiative designed to provide end-to-end holistic support to traditional artisans and craftspeople who create with their hands and traditional tools. Beneficiaries receive national recognition (ID & certificate), skill upgrading with daily stipends, ₹15,000 modern toolkit incentive e-vouchers, and collateral-free enterprise credit at an ultra-concessional 5% interest rate.",
    category: "Artisans & Traditional Craftsmen",
    eligibleCategory: "Traditional Artisans & Craftspeople (18 Notified Trades)",
    targetBeneficiaries: [
      "Carpenters & Woodworkers",
      "Blacksmiths & Armorers",
      "Potters & Clay Sculptors",
      "Cobblers & Footwear Artisans",
      "Masons, Weavers, Tailors & Barbers"
    ],
    targetDemographic: ["Artisans", "OBC", "SC", "ST", "Women", "Minority", "General"],
    purpose: [
      "Equipment & Machinery",
      "Working Capital",
      "Tool Upgradation",
      "Business Setup"
    ],
    minLoanAmount: 100000,
    maxLoanAmount: 300000,
    minLoan: 100000,
    maxLoan: 300000,
    keyBenefit: "₹15,000 toolkit incentive grant + collateral-free loan up to ₹3 Lakh at just 5% fixed interest",
    subsidyInformation: "₹15,000 direct e-voucher toolkit grant + 8% interest subvention paid by GoI (effective rate to borrower: 5%).",
    subsidyRate: "₹15,000 Toolkit Grant + 8% Interest Subvention (Effective 5% rate)",
    subsidyType: "Capital Grant & Interest Subvention",
    interestRate: "5% Fixed Concessional Interest Rate",
    incomeEligibility: "No strict income limit; applicant must be engaged in one of the 18 notified traditional trades on a self-employment basis.",
    sector: [
      "Handicrafts & Traditional Trades",
      "Carpentry & Woodwork",
      "Metalwork & Blacksmithy",
      "Leather & Footwear Crafts",
      "Textiles & Tailoring"
    ],
    eligibleSectors: [
      "Traditional Handicrafts & Clay/Pottery",
      "Carpentry, Woodwork & Bamboo",
      "Metalwork, Blacksmithy & Welding",
      "Leather & Footwear Manufacturing",
      "All"
    ],
    businessTypes: ["Traditional Artisan", "Artisan/Handicraft", "Service Enterprise"],
    ruralUrbanEligibility: "Rural & Urban",
    eligibleLocations: ["Rural", "Urban", "Within District", "Within State", "All"],
    requiredDocuments: [
      "Aadhaar Card linked to active mobile number",
      "Ration Card or Family Member Verification",
      "Active Bank Account Passbook copy",
      "Self-declaration of traditional artisan trade"
    ],
    documentsRequired: [
      "Aadhaar Card linked to active mobile number",
      "Ration Card or Family Member Verification",
      "Active Bank Account Passbook copy",
      "Self-declaration of traditional artisan trade"
    ],
    applicationMethod: "Online self-registration or biometric e-KYC verification through Common Service Centers (CSCs).",
    officialSourceUrl: "https://pmvishwakarma.gov.in",
    applicationUrl: "https://pmvishwakarma.gov.in",
    schemeStatus: "Active (Mock Prototype Data)",
    ministry: "Ministry of MSME & Ministry of Skill Development",
    collateralRequired: false,
    tenureMonths: 36,
    repaymentPeriod: "18 Months (Tranche 1: ₹1 Lakh), 30 Months (Tranche 2: ₹2 Lakh)",
    moratorium: "Up to 6 Months",
    fundingTypes: ["Collateral-Free Microcredit", "Concessional Interest Loan"],
    isMockData: true,
    disclaimer: "Realistic mock prototype data for evaluation purposes. Not official government values."
  },
  {
    id: "pmegp",
    name: "Prime Minister's Employment Generation Programme (PMEGP)",
    schemeName: "Prime Minister's Employment Generation Programme (PMEGP)",
    shortName: "PMEGP",
    shortDescription: "Flagship credit-linked subsidy programme offering 25% (urban) to 35% (rural) margin money grant for micro-enterprises in manufacturing and services.",
    overview: "PMEGP is a premier credit-linked subsidy programme administered by KVIC to establish greenfield micro-enterprises across manufacturing and service domains. Eligible special category entrepreneurs (SC, ST, OBC, Women, Minorities, and Divyangjan) receive up to 35% non-refundable government margin subsidy in rural areas and 25% in urban areas, with beneficiary contribution as low as 5%.",
    category: "Micro Enterprises & Self-Employment",
    eligibleCategory: "New Greenfield Entrepreneurs (Manufacturing & Services)",
    targetBeneficiaries: [
      "First-Time Micro-Entrepreneurs",
      "Rural & Urban Unemployed Youth",
      "Women & Self-Help Group Members",
      "SC, ST, OBC & Minority Candidates",
      "Divyangjan & Ex-Servicemen"
    ],
    targetDemographic: ["SC", "ST", "OBC", "Women", "Minority", "Differently Abled", "General"],
    purpose: [
      "Start a Small Business",
      "Business Setup",
      "Equipment & Machinery",
      "Expansion & Modernization"
    ],
    minLoanAmount: 500000,
    maxLoanAmount: 5000000,
    minLoan: 500000,
    maxLoan: 5000000,
    keyBenefit: "Up to 35% non-refundable capital subsidy (Margin Money) with own contribution of only 5%",
    subsidyInformation: "25% (urban) to 35% (rural) non-refundable capital margin money grant deposited in bank escrow for 3 years, then adjusted against principal.",
    subsidyRate: "25% to 35% Capital Subsidy (Margin Money)",
    subsidyType: "Capital Subsidy / Margin Money",
    interestRate: "Standard Commercial Bank MSME rate (~8.5% - 10.5% p.a.)",
    incomeEligibility: "No ceiling on family income; project cost ceiling up to ₹50 Lakh for manufacturing and ₹20 Lakh for service units.",
    sector: [
      "Agro-Processing & Food Products",
      "Textiles, Readymade Garments & Handlooms",
      "Wood, Paper & Printing",
      "Metal Fabrication & Light Engineering",
      "Commercial & Personal Services"
    ],
    eligibleSectors: [
      "Textiles, Handloom & Garments",
      "Food Processing, Bakeries & Agro-Products",
      "Carpentry, Woodwork & Bamboo",
      "Metalwork, Blacksmithy & Welding",
      "All"
    ],
    businessTypes: ["Micro Manufacturing", "Service Enterprise", "Agri-Allied"],
    ruralUrbanEligibility: "Rural & Urban (Rural receives higher 35% subsidy)",
    eligibleLocations: ["Rural", "Urban", "Within State", "Pan-India", "All"],
    requiredDocuments: [
      "Aadhaar Card and PAN Card",
      "Caste / Category Certificate (for special category subsidy claim)",
      "Educational Qualification Certificate (at least 8th Pass for projects > ₹10 Lakh Mfg / > ₹5 Lakh Service)",
      "Detailed Project Report (DPR) / Business Plan",
      "Rural Area Certificate from Gram Panchayat / BDO if rural"
    ],
    documentsRequired: [
      "Aadhaar Card and PAN Card",
      "Caste / Category Certificate (for special category subsidy claim)",
      "Educational Qualification Certificate (at least 8th Pass for projects > ₹10 Lakh Mfg / > ₹5 Lakh Service)",
      "Detailed Project Report (DPR) / Business Plan",
      "Rural Area Certificate from Gram Panchayat / BDO if rural"
    ],
    applicationMethod: "Online e-Portal registration (KVIC PMEGP Portal) or through District Industries Centers (DIC) / KVIC / KVIB offices.",
    officialSourceUrl: "https://www.kviconline.gov.in/pmegpeportal",
    applicationUrl: "https://www.kviconline.gov.in/pmegpeportal",
    schemeStatus: "Active (Mock Prototype Data)",
    ministry: "Ministry of Micro, Small and Medium Enterprises (MoMSME)",
    collateralRequired: false,
    tenureMonths: 60,
    repaymentPeriod: "3 to 7 Years",
    moratorium: "Up to 12 Months",
    fundingTypes: ["Capital Subsidy / Margin Money", "Term Loan"],
    isMockData: true,
    disclaimer: "Realistic mock prototype data for evaluation purposes. Not official government values."
  },
  {
    id: "stand-up-india",
    name: "Stand-Up India Scheme",
    schemeName: "Stand-Up India Scheme",
    shortName: "Stand-Up India",
    shortDescription: "Bank loans between ₹10 lakh and ₹1 crore to at least one SC or ST borrower and at least one woman borrower per bank branch for setting up greenfield enterprises.",
    overview: "Stand-Up India facilitates bank loans ranging from ₹10 Lakh to ₹1 Crore to Scheduled Caste (SC), Scheduled Tribe (ST), and Women entrepreneurs for establishing greenfield (first-time) enterprises in manufacturing, services, agri-allied, or trading sectors. Loans are backed by the Credit Guarantee Scheme for Stand-Up India (CGSSI) and cover up to 85% of the total project cost.",
    category: "Women & SC/ST Entrepreneurs",
    eligibleCategory: "SC, ST & Women Entrepreneurs (Greenfield Ventures)",
    targetBeneficiaries: [
      "Women Entrepreneurs (All Communities)",
      "Scheduled Caste (SC) Promoters",
      "Scheduled Tribe (ST) Promoters",
      "Enterprises with >51% SC/ST/Women shareholding"
    ],
    targetDemographic: ["Women", "SC", "ST"],
    purpose: [
      "Start a Small Business",
      "Business Setup",
      "Equipment & Machinery",
      "Expansion & Modernization"
    ],
    minLoanAmount: 1000000,
    maxLoanAmount: 10000000,
    minLoan: 1000000,
    maxLoan: 10000000,
    keyBenefit: "High-value collateral-free loan of ₹10 Lakh to ₹1 Crore backed by CGSSI credit guarantee",
    subsidyInformation: "Credit guarantee backing through CGSSI + convergence with state capital subsidies and margin money support up to 15%.",
    subsidyRate: "Credit Guarantee + Margin Support up to 15%",
    subsidyType: "Credit Guarantee & Margin Support",
    interestRate: "Lowest bank rate (MCLR + 3% + tenor premium)",
    incomeEligibility: "No specific income limit; applicant must be an SC/ST or Woman entrepreneur without existing banking defaults.",
    sector: [
      "Manufacturing Units",
      "Service & IT Enterprises",
      "Agri-Allied Processing",
      "Wholesale & Retail Trading"
    ],
    eligibleSectors: [
      "Textiles, Handloom & Garments",
      "Food Processing, Bakeries & Agro-Products",
      "Digital Services, CSC & IT Support",
      "All"
    ],
    businessTypes: ["Micro Manufacturing", "Service Enterprise", "Agri-Allied", "Trading"],
    ruralUrbanEligibility: "Rural & Urban",
    eligibleLocations: ["Rural", "Urban", "Pan-India", "All"],
    requiredDocuments: [
      "Proof of Identity & Address (Aadhaar, PAN, Voter ID)",
      "SC/ST Category Certificate or Woman Entrepreneur declaration",
      "Detailed Project Report with machinery quotations & projected cash flows",
      "Udyam Registration Certificate",
      "Past 6 months bank account statements"
    ],
    documentsRequired: [
      "Proof of Identity & Address (Aadhaar, PAN, Voter ID)",
      "SC/ST Category Certificate or Woman Entrepreneur declaration",
      "Detailed Project Report with machinery quotations & projected cash flows",
      "Udyam Registration Certificate",
      "Past 6 months bank account statements"
    ],
    applicationMethod: "Online via Stand-Up Mitra Portal or directly through commercial bank branches / Lead District Managers (LDM).",
    officialSourceUrl: "https://www.standupmitra.in",
    applicationUrl: "https://www.standupmitra.in",
    schemeStatus: "Active (Mock Prototype Data)",
    ministry: "Ministry of Finance, Department of Financial Services (DFS)",
    collateralRequired: false,
    tenureMonths: 84,
    repaymentPeriod: "Up to 7 Years",
    moratorium: "Up to 18 Months",
    fundingTypes: ["Term Loan", "Working Capital / CC Limit"],
    isMockData: true,
    disclaimer: "Realistic mock prototype data for evaluation purposes. Not official government values."
  },
  {
    id: "pm-mudra-yojana",
    name: "Pradhan Mantri MUDRA Yojana (PMMY)",
    schemeName: "Pradhan Mantri MUDRA Yojana (PMMY)",
    shortName: "PM MUDRA Yojana",
    shortDescription: "Collateral-free formal banking credit for non-corporate micro and small enterprises in trading, manufacturing, and services up to ₹20 Lakh.",
    overview: "Pradhan Mantri MUDRA Yojana (PMMY) provides collateral-free institutional credit to micro and small business enterprises across four tiers: Shishu (up to ₹50,000), Kishore (₹50,000 to ₹5 Lakh), Tarun (₹5 Lakh to ₹10 Lakh), and Tarun Plus (₹10 Lakh to ₹20 Lakh). Supported under the Credit Guarantee Fund for Micro Units (CGFMU), loans are disbursed through public, private, and regional rural banks.",
    category: "Micro Enterprises & Small Retail",
    eligibleCategory: "Non-Corporate Micro & Small Enterprises",
    targetBeneficiaries: [
      "Kirana & Small Retail Store Owners",
      "Food Service & Dhaba Operators",
      "Artisans, Tailors & Repair Kiosks",
      "Small Fleet & Transport Operators",
      "Micro-Manufacturing Workshops"
    ],
    targetDemographic: ["Women", "SC", "ST", "OBC", "Minority", "General", "Street Vendors"],
    purpose: [
      "Start a Small Business",
      "Business Setup",
      "Working Capital",
      "Equipment & Machinery",
      "Expansion & Modernization"
    ],
    minLoanAmount: 50000,
    maxLoanAmount: 2000000,
    minLoan: 50000,
    maxLoan: 2000000,
    keyBenefit: "100% collateral-free formal bank loan up to ₹20 Lakh with MUDRA RuPay card for flexible credit",
    subsidyInformation: "Zero processing fee for Shishu & Kishore tiers + 100% credit guarantee under CGFMU with concessional interest rates for women.",
    subsidyRate: "Zero Processing Fee + Credit Guarantee (CGFMU)",
    subsidyType: "Credit Guarantee / Zero Processing Fee",
    interestRate: "8.5% - 11.5% Competitive MSME Bank Rate",
    incomeEligibility: "No minimum income threshold; based on business viability and cash flow potential.",
    sector: [
      "Retail Grocery, Kirana & General Stores",
      "Personal Care, Beauty & Tailoring",
      "Electrical, Automobile & Device Repair",
      "Textiles, Handloom & Garments",
      "Light Engineering & Services"
    ],
    eligibleSectors: [
      "Retail Grocery, Kirana & General Stores",
      "Personal Care, Beauty & Tailoring",
      "Electrical, Automobile & Device Repair",
      "Textiles, Handloom & Garments",
      "All"
    ],
    businessTypes: ["Micro Retail", "Retail/Vending", "Service Enterprise", "Micro Manufacturing", "Agri-Allied"],
    ruralUrbanEligibility: "Rural & Urban",
    eligibleLocations: ["Rural", "Urban", "Pan-India", "All"],
    requiredDocuments: [
      "Aadhaar Card and PAN Card",
      "Business Address Proof / Shop Establishment / Udyam Certificate",
      "Quotations of stock, machinery, or tools to be purchased",
      "Past 6 months bank statement (if available)"
    ],
    documentsRequired: [
      "Aadhaar Card and PAN Card",
      "Business Address Proof / Shop Establishment / Udyam Certificate",
      "Quotations of stock, machinery, or tools to be purchased",
      "Past 6 months bank statement (if available)"
    ],
    applicationMethod: "Apply online through Udyamimitra portal or submit application directly at any commercial bank, RRB, or MFI branch.",
    officialSourceUrl: "https://www.mudra.org.in",
    applicationUrl: "https://www.mudra.org.in",
    schemeStatus: "Active (Mock Prototype Data)",
    ministry: "Department of Financial Services, Ministry of Finance",
    collateralRequired: false,
    tenureMonths: 60,
    repaymentPeriod: "36 to 60 Months",
    moratorium: "Up to 6 Months",
    fundingTypes: ["Collateral-Free Microcredit", "Term Loan", "Working Capital / CC Limit"],
    isMockData: true,
    disclaimer: "Realistic mock prototype data for evaluation purposes. Not official government values."
  },
  {
    id: "mahila-samridhi-yojana",
    name: "Mahila Samridhi Yojana (NSFDC)",
    schemeName: "Mahila Samridhi Yojana (NSFDC)",
    shortName: "Mahila Samridhi",
    shortDescription: "Targeted concessional micro-credit scheme empowering women entrepreneurs from Scheduled Castes with low-interest seed capital up to ₹1.4 Lakh.",
    overview: "Mahila Samridhi Yojana is a welfare financing scheme by the National Scheduled Castes Finance & Development Corporation (NSFDC). It provides low-interest microcredit directly to women entrepreneurs belonging to Scheduled Castes whose family income is below ₹3,00,000 p.a., helping them launch small tailoring shops, beauty parlors, grocery kiosks, or artisan stalls.",
    category: "SC Women Micro-Entrepreneurs",
    eligibleCategory: "Scheduled Caste (SC) Women Entrepreneurs",
    targetBeneficiaries: [
      "Scheduled Caste (SC) Women",
      "Women Self-Help Group (SHG) Members",
      "Low-Income SC Female Micro-Vendors",
      "Rural SC Women Craftspeople"
    ],
    targetDemographic: ["Women", "SC"],
    purpose: [
      "Start a Small Business",
      "Business Setup",
      "Working Capital",
      "Equipment & Machinery"
    ],
    minLoanAmount: 25000,
    maxLoanAmount: 140000,
    minLoan: 25000,
    maxLoan: 140000,
    keyBenefit: "Ultra-low 4% annual concessional interest rate with up to 95% project cost funded by NSFDC",
    subsidyInformation: "Deep interest concession: loan provided at only 4% per annum interest rate channelized through State Channelising Agencies (SCAs).",
    subsidyRate: "High Interest Subsidy: Borrow at 4% p.a.",
    subsidyType: "Direct Low-Interest Microfinance",
    interestRate: "4% per annum concessional",
    incomeEligibility: "Annual household family income must be below ₹3,00,000 per annum (rural and urban).",
    sector: [
      "Personal Care, Beauty & Tailoring",
      "Retail Grocery, Kirana & General Stores",
      "Traditional Handicrafts & Clay/Pottery",
      "Small Dairy & Livestock Activities"
    ],
    eligibleSectors: [
      "Personal Care, Beauty & Tailoring",
      "Retail Grocery, Kirana & General Stores",
      "Traditional Handicrafts & Clay/Pottery",
      "All"
    ],
    businessTypes: ["Micro Retail", "Street Vendor", "Traditional Artisan", "SHG Enterprise"],
    ruralUrbanEligibility: "Rural & Urban",
    eligibleLocations: ["Rural", "Urban", "Within District", "All"],
    requiredDocuments: [
      "Scheduled Caste (SC) Category Certificate issued by Revenue Authority",
      "Income Certificate verifying family income < ₹3,00,000 p.a.",
      "Aadhaar Card and Voter ID",
      "Active Savings Bank Account passbook"
    ],
    documentsRequired: [
      "Scheduled Caste (SC) Category Certificate issued by Revenue Authority",
      "Income Certificate verifying family income < ₹3,00,000 p.a.",
      "Aadhaar Card and Voter ID",
      "Active Savings Bank Account passbook"
    ],
    applicationMethod: "Offline through State Channelising Agencies (SCAs), regional District Welfare Offices, or affiliated Women Self-Help Groups.",
    officialSourceUrl: "https://nsfdc.nic.in",
    applicationUrl: "https://nsfdc.nic.in",
    schemeStatus: "Active (Mock Prototype Data)",
    ministry: "Ministry of Social Justice & Empowerment (NSFDC)",
    collateralRequired: false,
    tenureMonths: 36,
    repaymentPeriod: "36 Months",
    moratorium: "3 Months",
    fundingTypes: ["Collateral-Free Microcredit", "Concessional Interest Loan"],
    isMockData: true,
    disclaimer: "Realistic mock prototype data for evaluation purposes. Not official government values."
  },
  {
    id: "mahila-coir-yojana",
    name: "Mahila Coir Yojana",
    schemeName: "Mahila Coir Yojana",
    shortName: "Mahila Coir",
    shortDescription: "Support for rural women artisans in coir work through training, equipment assistance, and 75% capital subsidy.",
    overview: "Administered by the Coir Board under the Ministry of MSME, Mahila Coir Yojana empowers rural women artisans in coconut-growing states with modern motorized coir spinning and twisting equipment. The government funds 75% of the machinery cost as a direct capital grant, promoting rural female employment and sustainable fiber processing.",
    category: "Rural Women Artisans",
    eligibleCategory: "Rural Women Artisans & Self-Help Groups",
    targetBeneficiaries: [
      "Rural Women Artisans",
      "Coir Craftswomen & Spinners",
      "Women Self-Help Groups (SHGs)",
      "Traditional Natural Fiber Workers"
    ],
    targetDemographic: ["Women", "Rural", "OBC", "SC", "ST"],
    purpose: [
      "Equipment & Machinery",
      "Business Setup",
      "Working Capital"
    ],
    minLoanAmount: 20000,
    maxLoanAmount: 250000,
    minLoan: 20000,
    maxLoan: 250000,
    keyBenefit: "75% capital subsidy on mechanized spinning equipment plus paid skill training",
    subsidyInformation: "75% government subsidy on cost of motorized ratt / spinning equipment, with candidate or bank contributing the remaining 25%.",
    subsidyRate: "75% Capital Subsidy on equipment",
    subsidyType: "Capital Subsidy",
    interestRate: "Only on balance 25% if bank financed (~7% - 9% p.a.)",
    incomeEligibility: "No strict ceiling; priority given to BPL and low-income rural households.",
    sector: [
      "Traditional Handicrafts & Natural Fibers",
      "Coir Ropes, Mats & Agro-Textiles",
      "Rural Micro-Manufacturing"
    ],
    eligibleSectors: [
      "Traditional Handicrafts & Clay/Pottery",
      "Textiles, Handloom & Garments",
      "All"
    ],
    businessTypes: ["Traditional Artisan", "Micro Manufacturing", "Artisan/Handicraft"],
    ruralUrbanEligibility: "Rural",
    eligibleLocations: ["Rural", "Within State", "All"],
    requiredDocuments: [
      "Coir Board Training Certificate",
      "Aadhaar Card and Proof of Rural Residence",
      "Bank Account Details (Passbook copy)",
      "Self-declaration of family income"
    ],
    documentsRequired: [
      "Coir Board Training Certificate",
      "Aadhaar Card and Proof of Rural Residence",
      "Bank Account Details (Passbook copy)",
      "Self-declaration of family income"
    ],
    applicationMethod: "Apply through designated Coir Board Regional Extension Centers, local Gram Panchayats, or online at Coir Board portal.",
    officialSourceUrl: "https://coirboard.gov.in",
    applicationUrl: "https://coirboard.gov.in",
    schemeStatus: "Active (Mock Prototype Data)",
    ministry: "Ministry of MSME / Coir Board",
    collateralRequired: false,
    tenureMonths: 36,
    repaymentPeriod: "36 Months",
    moratorium: "Nil",
    fundingTypes: ["Capital Subsidy / Margin Money", "Term Loan"],
    isMockData: true,
    disclaimer: "Realistic mock prototype data for evaluation purposes. Not official government values."
  },
  {
    id: "nssh-subsidy",
    name: "National SC-ST Hub Special Credit Linked Capital Subsidy (SCLCSS)",
    schemeName: "National SC-ST Hub Special Credit Linked Capital Subsidy (SCLCSS)",
    shortName: "NSSH SCLCSS",
    shortDescription: "Capital subsidy support for eligible SC/ST-owned micro and small enterprises investing in plant, machinery, or technology upgradation.",
    overview: "Under the National SC-ST Hub (NSSH), this special subsidy provides 25% upfront capital subsidy for procurement of plant & machinery / equipment for technology upgradation to SC/ST owned micro and small enterprises. It facilitates participation in the Public Procurement Policy and modernisation of industrial units.",
    category: "SC/ST Technology & Manufacturing",
    eligibleCategory: "SC/ST Micro & Small Enterprise Promoters",
    targetBeneficiaries: [
      "Scheduled Caste (SC) MSME Promoters",
      "Scheduled Tribe (ST) MSME Promoters",
      "100% SC/ST Owned Micro & Small Manufacturing Units"
    ],
    targetDemographic: ["SC", "ST"],
    purpose: [
      "Equipment & Machinery",
      "Expansion & Modernization",
      "Business Setup"
    ],
    minLoanAmount: 500000,
    maxLoanAmount: 10000000,
    minLoan: 500000,
    maxLoan: 10000000,
    keyBenefit: "25% upfront capital subsidy capped at ₹25 Lakh for technology and machinery upgradation",
    subsidyInformation: "25% upfront capital subsidy on institutional term loan for procurement of plant and modern machinery.",
    subsidyRate: "25% upfront capital subsidy on plant and machinery",
    subsidyType: "Upfront Capital Subsidy",
    interestRate: "Standard Commercial Bank MSME rate",
    incomeEligibility: "No individual income ceiling; enterprise must hold valid Udyam Registration and 100% SC/ST equity ownership.",
    sector: [
      "Metalwork, Blacksmithy & Welding",
      "Electrical, Automobile & Device Repair",
      "Textiles, Handloom & Garments",
      "Light Manufacturing & Processing"
    ],
    eligibleSectors: [
      "Metalwork, Blacksmithy & Welding",
      "Electrical, Automobile & Device Repair",
      "Textiles, Handloom & Garments",
      "All"
    ],
    businessTypes: ["Micro Manufacturing", "Service Enterprise"],
    ruralUrbanEligibility: "Rural & Urban",
    eligibleLocations: ["Rural", "Urban", "Within State", "Pan-India", "All"],
    requiredDocuments: [
      "Udyam Registration Certificate",
      "Caste Certificate of all enterprise promoters/partners",
      "Machinery Proforma Invoices and Chartered Engineer Certificate",
      "Audited financial statements (if existing operational enterprise)",
      "Bank loan sanction letter for term loan"
    ],
    documentsRequired: [
      "Udyam Registration Certificate",
      "Caste Certificate of all enterprise promoters/partners",
      "Machinery Proforma Invoices and Chartered Engineer Certificate",
      "Audited financial statements (if existing operational enterprise)",
      "Bank loan sanction letter for term loan"
    ],
    applicationMethod: "Through primary lending institutions (commercial banks / SIDBI) integrated with National Small Industries Corporation (NSIC) NSSH portal.",
    officialSourceUrl: "https://www.scsthub.in",
    applicationUrl: "https://www.scsthub.in",
    schemeStatus: "Active (Mock Prototype Data)",
    ministry: "Ministry of MSME / National Small Industries Corporation (NSIC)",
    collateralRequired: false,
    tenureMonths: 84,
    repaymentPeriod: "Up to 7 Years",
    moratorium: "Up to 12 Months",
    fundingTypes: ["Capital Subsidy / Margin Money", "Term Loan"],
    isMockData: true,
    disclaimer: "Realistic mock prototype data for evaluation purposes. Not official government values."
  },
  {
    id: "dairy-entrepreneurship-deds",
    name: "Dairy Entrepreneurship Development Scheme (DEDS - Mock)",
    schemeName: "Dairy Entrepreneurship Development Scheme (DEDS - Mock)",
    shortName: "DEDS Dairy Scheme",
    shortDescription: "Back-ended capital subsidy assistance for setting up modern dairy farms, milk processing equipment, and cold-chain chilling units in rural areas.",
    overview: "DEDS provides financial assistance to rural youth, farmers, and dairy micro-entrepreneurs to set up modern dairy infrastructure. It offers back-ended capital subsidies (25% for General, 33.33% for SC/ST and women farmers) through NABARD for crossbred cows, milch animal sheds, bulk milk coolers, and dairy processing kiosks.",
    category: "Rural & Agri-Allied",
    eligibleCategory: "Dairy Farmers, Livestock Keepers & Rural Youth",
    targetBeneficiaries: [
      "Small & Marginal Dairy Farmers",
      "Rural Livestock Keepers",
      "Dairy Cooperatives & Producer Groups",
      "SC/ST Rural Entrepreneurs"
    ],
    targetDemographic: ["Rural", "SC", "ST", "Women", "OBC", "General"],
    purpose: [
      "Start a Small Business",
      "Equipment & Machinery",
      "Business Setup",
      "Expansion & Modernization"
    ],
    minLoanAmount: 100000,
    maxLoanAmount: 2000000,
    minLoan: 100000,
    maxLoan: 2000000,
    keyBenefit: "Up to 33.33% back-ended capital subsidy on livestock procurement and chilling machinery",
    subsidyInformation: "25% back-ended capital subsidy for general category; 33.33% for SC/ST, women, and hilly state beneficiaries administered via NABARD.",
    subsidyRate: "25% to 33.33% Back-Ended Capital Subsidy",
    subsidyType: "Capital Subsidy",
    interestRate: "Refinanced NABARD / Regional Rural Bank rate (~7.5% - 9.0% p.a.)",
    incomeEligibility: "No statutory income cap; preference given to small and marginal agricultural households.",
    sector: [
      "Agri-Allied Activities",
      "Dairy & Animal Husbandry",
      "Milk Products & Cold Chain Storage",
      "Livestock Feed Processing"
    ],
    eligibleSectors: [
      "Food Processing, Bakeries & Agro-Products",
      "Agri-Allied",
      "All"
    ],
    businessTypes: ["Agri-Allied", "Micro Manufacturing"],
    ruralUrbanEligibility: "Rural & Peri-Urban",
    eligibleLocations: ["Rural", "Within District", "Within State", "All"],
    requiredDocuments: [
      "Aadhaar Card and Land Possession Proof / Lease Agreement",
      "Caste Certificate (for claiming 33.33% SC/ST subsidy)",
      "Project Plan detailing herd size and milking equipment costs",
      "Veterinary health certificate of animals (post-purchase)"
    ],
    documentsRequired: [
      "Aadhaar Card and Land Possession Proof / Lease Agreement",
      "Caste Certificate (for claiming 33.33% SC/ST subsidy)",
      "Project Plan detailing herd size and milking equipment costs",
      "Veterinary health certificate of animals (post-purchase)"
    ],
    applicationMethod: "Submit project proposal directly to Commercial Banks, Regional Rural Banks (RRBs), or District Central Cooperative Banks (DCCBs).",
    officialSourceUrl: "https://www.nabard.org",
    applicationUrl: "https://www.nabard.org",
    schemeStatus: "Active (Mock Prototype Data)",
    ministry: "Department of Animal Husbandry and Dairying / NABARD",
    collateralRequired: false,
    tenureMonths: 60,
    repaymentPeriod: "3 to 5 Years",
    moratorium: "Up to 6 Months",
    fundingTypes: ["Capital Subsidy / Margin Money", "Term Loan"],
    isMockData: true,
    disclaimer: "Realistic mock prototype data for evaluation purposes. Not official government values."
  },
  {
    id: "cgtmse-micro-guarantee",
    name: "Credit Guarantee Scheme for Micro & Small Enterprises (CGTMSE - Mock)",
    schemeName: "Credit Guarantee Scheme for Micro & Small Enterprises (CGTMSE - Mock)",
    shortName: "CGTMSE Guarantee",
    shortDescription: "Government-backed collateral-free credit guarantee coverage up to ₹5 Crore for first-generation micro and small entrepreneurs.",
    overview: "CGTMSE facilitates collateral-free term loans and working capital credit lines to new and existing micro and small enterprises. By guaranteeing up to 85% of the loan amount against default (especially for women and SC/ST operated units), commercial banks can lend without demanding land or property mortgage.",
    category: "Micro Enterprises & Self-Employment",
    eligibleCategory: "First-Generation Micro & Small Business Promoters",
    targetBeneficiaries: [
      "First-Generation Entrepreneurs lacking land collateral",
      "Micro Manufacturing Workshops",
      "Tech-Enabled Service Providers",
      "Women & SC/ST Business Owners"
    ],
    targetDemographic: ["General", "Women", "SC", "ST", "OBC", "Minority"],
    purpose: [
      "Start a Small Business",
      "Working Capital",
      "Equipment & Machinery",
      "Expansion & Modernization"
    ],
    minLoanAmount: 500000,
    maxLoanAmount: 50000000,
    minLoan: 500000,
    maxLoan: 50000000,
    keyBenefit: "100% collateral-free bank financing with up to 85% sovereign credit guarantee cover",
    subsidyInformation: "Not a cash grant; provides sovereign credit guarantee coverage (75% to 85%) relieving borrowers of third-party collateral or mortgage demands.",
    subsidyRate: "Up to 85% Sovereign Credit Guarantee Cover",
    subsidyType: "Credit Guarantee Coverage",
    interestRate: "Competitive MSME Bank Lending Rate (repo linked ~8.5% - 10.5%)",
    incomeEligibility: "Open to viable non-farm business plans without mortgage; subject to bank appraisal.",
    sector: [
      "Light Manufacturing & Workshops",
      "Professional & Digital Services",
      "Packaging & Agro-Processing",
      "Retail Wholesale Distribution"
    ],
    eligibleSectors: [
      "Micro Manufacturing",
      "Service Enterprise",
      "Textiles, Handloom & Garments",
      "All"
    ],
    businessTypes: ["Micro Manufacturing", "Service Enterprise", "Trading"],
    ruralUrbanEligibility: "Rural & Urban",
    eligibleLocations: ["Rural", "Urban", "Pan-India", "All"],
    requiredDocuments: [
      "PAN Card & Aadhaar Card of Promoters",
      "Udyam Registration Certificate",
      "Detailed Business Proposal & Financial Projections",
      "Last 1 year bank statements and ITR (if existing unit)"
    ],
    documentsRequired: [
      "PAN Card & Aadhaar Card of Promoters",
      "Udyam Registration Certificate",
      "Detailed Business Proposal & Financial Projections",
      "Last 1 year bank statements and ITR (if existing unit)"
    ],
    applicationMethod: "Directly apply through any Member Lending Institution (Scheduled Commercial Bank, Small Finance Bank, or NBFC).",
    officialSourceUrl: "https://www.cgtmse.in",
    applicationUrl: "https://www.cgtmse.in",
    schemeStatus: "Active (Mock Prototype Data)",
    ministry: "Ministry of MSME & SIDBI",
    collateralRequired: false,
    tenureMonths: 84,
    repaymentPeriod: "Up to 7 Years",
    moratorium: "Up to 12 Months",
    fundingTypes: ["Collateral-Free Microcredit", "Term Loan", "Working Capital / CC Limit"],
    isMockData: true,
    disclaimer: "Realistic mock prototype data for evaluation purposes. Not official government values."
  },
  {
    id: "nbcfdc-swarnima-scheme",
    name: "Swarnima Scheme for Women (NBCFDC - Mock)",
    schemeName: "Swarnima Scheme for Women (NBCFDC - Mock)",
    shortName: "Swarnima Scheme",
    shortDescription: "Concessional term loans up to ₹2 Lakh at 5% interest rate for self-employment of women belonging to Other Backward Classes (OBC).",
    overview: "The Swarnima Scheme is implemented by the National Backward Classes Finance and Development Corporation (NBCFDC) to provide social and financial empowerment to women from Other Backward Classes (OBC). It offers term credit up to ₹2,00,000 at an economical 5% annual interest rate, with no security or collateral required.",
    category: "Women & SC/ST Entrepreneurs",
    eligibleCategory: "Backward Classes (OBC) Women Entrepreneurs",
    targetBeneficiaries: [
      "Women belonging to Other Backward Classes (OBC)",
      "Female Tailors, Weavers & Micro-Artisans",
      "Women Small Grocers & Kiosk Owners",
      "Rural OBC Self-Help Groups"
    ],
    targetDemographic: ["Women", "OBC"],
    purpose: [
      "Start a Small Business",
      "Business Setup",
      "Working Capital",
      "Equipment & Machinery"
    ],
    minLoanAmount: 20000,
    maxLoanAmount: 200000,
    minLoan: 20000,
    maxLoan: 200000,
    keyBenefit: "Subsidized 5% interest micro-loan up to ₹2 Lakh with zero guarantor requirement",
    subsidyInformation: "Interest rate concession: borrower pays only 5% interest per annum; NBCFDC finances 95% of unit cost.",
    subsidyRate: "Concessional 5% Annual Interest Rate",
    subsidyType: "Concessional Microfinance",
    interestRate: "5% per annum fixed",
    incomeEligibility: "Annual family income of the beneficiary must be less than ₹3,00,000 per annum.",
    sector: [
      "Apparel, Boutique & Tailoring",
      "Handicrafts & Toy Making",
      "Beauty Wellness & Hair Salons",
      "Kirana & Food Processing"
    ],
    eligibleSectors: [
      "Personal Care, Beauty & Tailoring",
      "Retail Grocery, Kirana & General Stores",
      "Traditional Handicrafts & Clay/Pottery",
      "All"
    ],
    businessTypes: ["Micro Retail", "Service Enterprise", "Traditional Artisan"],
    ruralUrbanEligibility: "Rural & Urban",
    eligibleLocations: ["Rural", "Urban", "Within District", "All"],
    requiredDocuments: [
      "OBC Caste Certificate issued by competent Revenue Authority",
      "Income Certificate (< ₹3 Lakh/year)",
      "Aadhaar Card and Passport Photo",
      "Bank Account Passbook copy"
    ],
    documentsRequired: [
      "OBC Caste Certificate issued by competent Revenue Authority",
      "Income Certificate (< ₹3 Lakh/year)",
      "Aadhaar Card and Passport Photo",
      "Bank Account Passbook copy"
    ],
    applicationMethod: "Offline through State Channelising Agencies (SCAs) of NBCFDC or nominated regional cooperative banks.",
    officialSourceUrl: "https://nbcfdc.gov.in",
    applicationUrl: "https://nbcfdc.gov.in",
    schemeStatus: "Active (Mock Prototype Data)",
    ministry: "Ministry of Social Justice & Empowerment (NBCFDC)",
    collateralRequired: false,
    tenureMonths: 60,
    repaymentPeriod: "Up to 5 Years",
    moratorium: "6 Months",
    fundingTypes: ["Collateral-Free Microcredit", "Concessional Interest Loan"],
    isMockData: true,
    disclaimer: "Realistic mock prototype data for evaluation purposes. Not official government values."
  },
  {
    id: "pm-surya-ghar-msme",
    name: "PM Surya Ghar: Micro-Enterprise Solar Rooftop Assistance (Mock)",
    schemeName: "PM Surya Ghar: Micro-Enterprise Solar Rooftop Assistance (Mock)",
    shortName: "Surya Ghar MSME",
    shortDescription: "Clean solar energy adoption assistance offering up to 40% capital subsidy and concessional bank loans for micro workshops, tailoring units, and shops.",
    overview: "This prototype scheme models clean energy adoption for grassroots micro-enterprises under the PM Surya Ghar initiative. Small workshops, commercial tailoring units, and repair shops installing 1 kW to 5 kW rooftop solar systems receive up to 40% capital subsidy on benchmark equipment costs, significantly slashing monthly electricity bills.",
    category: "Technology & Green Energy",
    eligibleCategory: "Micro-Enterprises, Workshops & Commercial Units",
    targetBeneficiaries: [
      "Micro-Workshop & Fabrication Units",
      "Commercial Tailoring & Printing Shops",
      "Cold Storage & Kirana Retailers with high power bills",
      "Rural Micro-Manufacturing Enterprises"
    ],
    targetDemographic: ["General", "Women", "SC", "ST", "OBC"],
    purpose: [
      "Equipment & Machinery",
      "Expansion & Modernization",
      "Business Setup"
    ],
    minLoanAmount: 50000,
    maxLoanAmount: 300000,
    minLoan: 50000,
    maxLoan: 300000,
    keyBenefit: "Up to 40% direct capital subsidy on rooftop solar installation plus collateral-free bank loan",
    subsidyInformation: "Direct DBT capital subsidy up to ₹78,000 for up to 3 kW capacity; low-interest collateral-free loan at ~7% for the balance amount.",
    subsidyRate: "Up to 40% Capital Subsidy + 7% Bank Loan",
    subsidyType: "Capital Subsidy & Clean Energy Loan",
    interestRate: "7.0% Concessional Priority Lending Rate",
    incomeEligibility: "Must hold electricity connection in the business/owner name with suitable roof rights.",
    sector: [
      "Clean Energy & Solar Equipment",
      "Power-Intensive Micro-Enterprises",
      "Workshops, Welding & Printing Units",
      "Commercial Retail & Grocery"
    ],
    eligibleSectors: [
      "Metalwork, Blacksmithy & Welding",
      "Electrical, Automobile & Device Repair",
      "Retail Grocery, Kirana & General Stores",
      "All"
    ],
    businessTypes: ["Micro Manufacturing", "Service Enterprise", "Micro Retail"],
    ruralUrbanEligibility: "Rural & Urban",
    eligibleLocations: ["Rural", "Urban", "Pan-India", "All"],
    requiredDocuments: [
      "Latest Electricity Bill of Enterprise/Premises",
      "Aadhaar Card and PAN Card",
      "Roof Ownership / Long-term Lease Proof",
      "Bank Account details for Direct Benefit Transfer (DBT)"
    ],
    documentsRequired: [
      "Latest Electricity Bill of Enterprise/Premises",
      "Aadhaar Card and PAN Card",
      "Roof Ownership / Long-term Lease Proof",
      "Bank Account details for Direct Benefit Transfer (DBT)"
    ],
    applicationMethod: "Apply online via National Solar Rooftop Portal or through registered DISCOM empanelled solar vendors.",
    officialSourceUrl: "https://pmsuryaghar.gov.in",
    applicationUrl: "https://pmsuryaghar.gov.in",
    schemeStatus: "Active (Mock Prototype Data)",
    ministry: "Ministry of New and Renewable Energy (MNRE)",
    collateralRequired: false,
    tenureMonths: 60,
    repaymentPeriod: "Up to 5 Years",
    moratorium: "Nil",
    fundingTypes: ["Capital Subsidy / Margin Money", "Concessional Interest Loan"],
    isMockData: true,
    disclaimer: "Realistic mock prototype data for evaluation purposes. Not official government values."
  }
];

export const schemeCategories = [
  "All Categories",
  "Street Vendors & Urban Micro-sellers",
  "Artisans & Traditional Craftsmen",
  "Micro Enterprises & Self-Employment",
  "Women & SC/ST Entrepreneurs",
  "SC Women Micro-Entrepreneurs",
  "Rural Women Artisans",
  "SC/ST Technology & Manufacturing",
  "Rural & Agri-Allied",
  "Technology & Green Energy"
];

// Alias DEMO_SCHEMES for backward compatibility
export const DEMO_SCHEMES = schemes.map((scheme) => ({
  ...scheme,
  shortDescription: scheme.shortDescription || scheme.overview,
  documentsRequired: scheme.documentsRequired || scheme.requiredDocuments || [],
  minLoanAmount: scheme.minLoanAmount ?? scheme.minLoan ?? 0,
  maxLoanAmount: scheme.maxLoanAmount ?? scheme.maxLoan ?? 100000000,
}));
