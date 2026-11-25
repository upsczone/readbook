export const PLAY_STORE_URL =
  'https://play.google.com/store/apps/details?id=in.upsczone.readbook';

export const BRAND_LOGO_SRC =
  '/assets/aistudio/file_00000000fea08211a54c9f5c703f9ef2_252fbe81.png';

export type ResourceCategory =
  | 'all'
  | 'ebooks'
  | 'magazines'
  | 'newspapers'
  | 'ncerts';

export interface PublicationItem {
  id: string;
  category: Exclude<ResourceCategory, 'all'>;
  categoryLabel: string;
  gsTag: string;
  medium: string;
  pagesOrTiming: string;
  title: string;
  subtitle: string;
  description: string;
  coverTone: 'navy' | 'amber' | 'slate' | 'emerald' | 'crimson' | 'indigo';
  editionLabel: string;
  sampleHeading: string;
  sampleParagraphs: string[];
  sampleKeyTakeaway: string;
}

export const PUBLICATIONS: PublicationItem[] = [
  {
    id: 'indian-polity',
    category: 'ebooks',
    categoryLabel: 'Standard eBook',
    gsTag: 'GS Paper II · Polity',
    medium: 'English & Hindi',
    pagesOrTiming: '94 Chapters',
    title: 'Indian Polity & Constitutional Framework',
    subtitle: 'Comprehensive Mains & Prelims Reference',
    description:
      'Chapter-wise constitutional articles, landmark Supreme Court judgements, and Prelims PYQ cross-links formatted for rapid revision.',
    coverTone: 'navy',
    editionLabel: 'Revised 7th Edition',
    sampleHeading: 'Chapter 22: Parliament — Parliamentary Privileges & Motions',
    sampleParagraphs: [
      'Parliamentary privileges are special rights, immunities, and exemptions enjoyed by the two Houses of Parliament, their committees, and their members. They are necessary in order to secure the independence and effectiveness of their actions.',
      'Under Article 105 of the Constitution, there shall be freedom of speech in Parliament. No member of Parliament shall be liable to any proceedings in any court in respect of anything said or any vote given by him in Parliament or any committee thereof.',
      'For Mains GS-II answers, distinguish clearly between collective privileges belonging to each House as a whole and individual privileges enjoyed by members while Parliament is in session.'
    ],
    sampleKeyTakeaway:
      'Key Prelims Note: Article 105 covers Parliament; Article 194 covers State Legislatures. Attorney General & Union Ministers also enjoy parliamentary privileges when speaking in the House.'
  },
  {
    id: 'the-hindu-digest',
    category: 'newspapers',
    categoryLabel: 'Daily Newspaper',
    gsTag: 'GS I–IV · Current Affairs',
    medium: 'English & Hindi',
    pagesOrTiming: 'Daily 6:00 AM',
    title: 'The Hindu & Indian Express Editorial Brief',
    subtitle: 'Syllabus-Tagged Morning Edition',
    description:
      'Every morning editorial distilled with GS-paper linkage, Mains answer-writing pointers, and Prelims factual takeaways without clutter.',
    coverTone: 'slate',
    editionLabel: 'Morning Edition · 6:00 AM IST',
    sampleHeading: 'Editorial Analysis: Federal Fiscal Architecture & Sixteenth Finance Commission',
    sampleParagraphs: [
      'As the Sixteenth Finance Commission begins consultations with State governments, the tension between vertical devolution and horizontal equity remains central to India’s fiscal federalism.',
      'States with high demographic transition rates have called for recalibrating population weights, whereas developing industrial corridors emphasize infrastructure grants for climate-resilient urban expansion.',
      'Mains Context (GS-III / GS-II): Connect Article 280 constitutional mandate with recent GST compensation trends and off-budget borrowing ceilings.'
    ],
    sampleKeyTakeaway:
      'Prelims Pointer: Finance Commission is a quasi-judicial body constituted every 5 years by the President under Article 280(1).'
  },
  {
    id: 'yojana-magazine',
    category: 'magazines',
    categoryLabel: 'Monthly Magazine',
    gsTag: 'GS Paper III · Economy',
    medium: 'English & Hindi',
    pagesOrTiming: 'Monthly Issue',
    title: 'Yojana Monthly — Inclusive Growth & Policy',
    subtitle: 'Ministry of Information & Broadcasting',
    description:
      'Official development discourse covering rural infrastructure, digital public goods, welfare schemes, and budget analysis for Mains & Essay.',
    coverTone: 'amber',
    editionLabel: 'Monthly Curated Issue',
    sampleHeading: 'Focus Theme: Digital Public Infrastructure & Last-Mile Governance',
    sampleParagraphs: [
      'India’s open-protocol Digital Public Infrastructure (DPI)—anchored by Aadhaar, UPI, and ONDC—has lowered transaction costs for micro-enterprises across Tier-3 towns and rural cooperatives.',
      'Direct Benefit Transfers combined with JAM Trinity have reduced leakage in flagship social sector schemes while building verifiable credit histories for street vendors and small farmers.',
      'For GS-III and Essay papers, cite empirical DPI adoption metrics alongside safeguards under the Digital Personal Data Protection Act.'
    ],
    sampleKeyTakeaway:
      'Essay & Ethics Angle: Technology acts as a force multiplier only when paired with institutional accountability and accessible grievance redressal.'
  },
  {
    id: 'modern-history',
    category: 'ebooks',
    categoryLabel: 'Standard eBook',
    gsTag: 'GS Paper I · History',
    medium: 'English & Hindi',
    pagesOrTiming: '39 Chapters',
    title: 'Modern Indian History & National Movement',
    subtitle: 'Chronological Freedom Struggle & Reforms',
    description:
      'Structured timelines from 1857 to post-independence consolidation, governor-general acts, and socio-religious reform movements.',
    coverTone: 'crimson',
    editionLabel: 'Prelims + Mains Compendium',
    sampleHeading: 'Chapter 18: Civil Disobedience Movement & Round Table Conferences',
    sampleParagraphs: [
      'The Lahore Session of the Indian National Congress (December 1929), presided over by Jawaharlal Nehru, passed the historic Purna Swaraj resolution and authorized the launching of Civil Disobedience.',
      'Choosing salt as the central symbol allowed Gandhi to bridge urban intellectuals, rural peasants, and coastal communities across caste and regional lines without alienating domestic constituencies.',
      'Note the Gandhi-Irwin Pact (March 1931) terms carefully for Prelims elimination questions regarding release of political prisoners and peaceful picketing.'
    ],
    sampleKeyTakeaway:
      'Chronology Check: Simon Commission (1927) → Nehru Report (1928) → Lahore Purna Swaraj (1929) → Dandi March (1930) → Gandhi-Irwin Pact (1931).'
  },
  {
    id: 'kurukshetra-magazine',
    category: 'magazines',
    categoryLabel: 'Monthly Magazine',
    gsTag: 'GS Paper III · Rural Dev',
    medium: 'English & Hindi',
    pagesOrTiming: 'Monthly Issue',
    title: 'Kurukshetra — Rural Economy & Panchayati Raj',
    subtitle: 'Ministry of Rural Development Journal',
    description:
      'Deep dives into agricultural productivity, Farmer Producer Organizations, water conservation, and 73rd Amendment decentralization.',
    coverTone: 'emerald',
    editionLabel: 'Monthly Rural Compendium',
    sampleHeading: 'Special Report: Farmer Producer Organizations & Climate-Smart Millets',
    sampleParagraphs: [
      'Collective bargaining through Farmer Producer Organizations (FPOs) enables smallholder cultivators—who represent over 86% of Indian landholdings—to access institutional credit, grading facilities, and direct e-NAM markets.',
      'Integrating Shree Anna (millet) cultivation into rainfed blocks strengthens nutritional security while reducing groundwater extraction in semi-arid districts.',
      'Useful data points for GS-III Agriculture & GS-II Welfare Schemes.'
    ],
    sampleKeyTakeaway:
      'Scheme Linkage: Central Sector Scheme for Formation and Promotion of 10,000 FPOs + PM-KISAN + e-NAM integration.'
  },
  {
    id: 'ncert-foundation',
    category: 'ncerts',
    categoryLabel: 'NCERT Foundation',
    gsTag: 'Class VI–XII · Core Base',
    medium: 'English & Hindi',
    pagesOrTiming: '42 Textbooks',
    title: 'Complete UPSC NCERT Bundle (Class VI to XII)',
    subtitle: 'History, Geography, Polity, Economy & Science',
    description:
      'Old & New NCERT chapters cleaned for distraction-free reading with integrated margin definitions and end-of-chapter conceptual checks.',
    coverTone: 'indigo',
    editionLabel: 'Old + New Editions',
    sampleHeading: 'Class XI Geography: Indian Monsoon Mechanism & Jet Streams',
    sampleParagraphs: [
      'Differential heating of landmass and surrounding ocean creates a pronounced low-pressure trough over the Tibetan Plateau and northwestern plains during late May.',
      'The northward shift of the Inter-Tropical Convergence Zone (ITCZ) combined with the withdrawal of the westerly jet stream north of the Himalayas triggers the burst of the southwest monsoon.',
      'Understanding El Niño Southern Oscillation (ENSO) and the Indian Ocean Dipole (IOD) is critical for explaining inter-annual rainfall variability.'
    ],
    sampleKeyTakeaway:
      'Prelims Concept: Positive Indian Ocean Dipole (warmer western Indian Ocean) can partially offset El Niño drought impacts over India.'
  },
  {
    id: 'pib-daily-press',
    category: 'newspapers',
    categoryLabel: 'Official Brief',
    gsTag: 'Prelims · Gov Schemes',
    medium: 'English & Hindi',
    pagesOrTiming: 'Updated Evening',
    title: 'PIB Daily & Sansad TV Policy Summaries',
    subtitle: 'Verified Ministry Releases & Parliamentary Bills',
    description:
      'Zero-noise summaries of Cabinet approvals, Ministry indices, Bilateral MoUs, and Sansad TV debates mapped directly to GS modules.',
    coverTone: 'navy',
    editionLabel: 'Daily Government Digest',
    sampleHeading: 'Cabinet Briefing: National Green Hydrogen Mission Incentives',
    sampleParagraphs: [
      'Under the Strategic Interventions for Green Hydrogen Transition (SIGHT) programme, targeted incentives support domestic electrolyser manufacturing and green ammonia production hubs.',
      'Alignment with India’s Panchamrit targets—achieving 500 GW non-fossil energy capacity by 2030 and Net Zero by 2070—positions green hydrogen as an industrial decarbonization pillar.',
      'Essential for GS-III Environment, Energy Infrastructure, and Prelims S&T questions.'
    ],
    sampleKeyTakeaway:
      'Target Fact: 5 Million Metric Tonnes (MMT) annual green hydrogen production capacity target by 2030.'
  },
  {
    id: 'indian-economy',
    category: 'ebooks',
    categoryLabel: 'Standard eBook',
    gsTag: 'GS Paper III · Economy',
    medium: 'English & Hindi',
    pagesOrTiming: '28 Modules',
    title: 'Indian Economy, Budget & Economic Survey',
    subtitle: 'Macroeconomics, Banking & External Sector',
    description:
      'Clear conceptual breakdowns of RBI monetary policy tools, inflation targeting, fiscal deficit metrics, and latest Economic Survey charts.',
    coverTone: 'amber',
    editionLabel: 'Updated Budget Edition',
    sampleHeading: 'Module 07: Monetary Policy Framework & Liquidity Management',
    sampleParagraphs: [
      'Under India’s flexible inflation targeting framework (4% CPI +/- 2% band), the Monetary Policy Committee uses the Repo Rate as the primary policy signal while managing overnight liquidity via SDF and VRRR.',
      'Standing Deposit Facility (SDF) introduced a collateral-free floor to the Liquidity Adjustment Facility (LAF) corridor, strengthening RBI’s ability to absorb surplus liquidity.',
      'Compare headline CPI vs core inflation trajectories when writing GS-III macroeconomic stability answers.'
    ],
    sampleKeyTakeaway:
      'Prelims Distinction: Reverse Repo requires government securities as collateral from RBI; SDF does not require collateral.'
  }
];

export interface AppFeature {
  number: string;
  title: string;
  subtitle: string;
  description: string;
  spanTwo?: boolean;
  highlights: string[];
}

export const APP_FEATURES: AppFeature[] = [
  {
    number: '01',
    title: 'Daily Newspaper & Editorial Digest by 6:00 AM',
    subtitle: 'The Hindu · Indian Express · Mint · PIB',
    description:
      'Skip bulky PDFs and cluttered web ads. Read crisp, syllabus-mapped editorials every morning with instant Mains GS tagging, static-to-current linkage, and one-tap glossary meanings.',
    spanTwo: true,
    highlights: [
      'GS I–IV tagged editorials',
      '15-minute morning revision summary',
      'Archived date-wise search'
    ]
  },
  {
    number: '02',
    title: '100% Offline Library & Metro Study Mode',
    subtitle: 'Download Once · Zero Internet Needed',
    description:
      'Save full NCERT sets, reference eBooks, and monthly Yojana/Kurukshetra issues directly inside encrypted app storage so library basements and commutes never interrupt your schedule.',
    highlights: [
      'Compressed lightweight files',
      'Instant chapter jump index',
      'Zero background battery drain'
    ]
  },
  {
    number: '03',
    title: 'Smart Highlights & Auto Revision Notebook',
    subtitle: '4-Color Semantic Markup',
    description:
      'Highlight constitutional articles, committee recommendations, and Prelims facts in dedicated colors. Every highlight automatically compiles into a printable chapter-wise revision sheet.',
    highlights: [
      'Mains Quotes vs Prelims Facts colors',
      'Personal margin notes',
      'One-tap flashcard export'
    ]
  },
  {
    number: '04',
    title: 'Seamless Bilingual English & Hindi Medium',
    subtitle: 'Dedicated Medium Switcher',
    description:
      'Access authentic Hindi and English editions of NCERTs, standard Polity/History books, Yojana, Kurukshetra, and daily PIB summaries with crisp Devanagari and Latin typography.',
    spanTwo: true,
    highlights: [
      'Equal coverage for Hindi medium',
      'Side-by-side terminology clarity',
      'Clean Devanagari font rendering'
    ]
  },
  {
    number: '05',
    title: 'Eye-Care Paper, Sepia & Midnight Themes',
    subtitle: 'Built for 8+ Hour Reading Sessions',
    description:
      'Adjust font scale, line spacing, page margins, and blue-light-free Sepia or Midnight Slate palettes engineered to eliminate eye fatigue during late-night Mains preparation.',
    highlights: [
      '3 calibrated contrast themes',
      'Custom typography & line height',
      'Distraction-free full-screen lock'
    ]
  },
  {
    number: '06',
    title: 'Syllabus & PYQ Chapter Tracker',
    subtitle: 'Prelims + Mains Progress',
    description:
      'Mark completed chapters against official UPSC Prelims and Mains GS syllabi, inspect past 10-year PYQ weightage per chapter, and maintain steady daily study streaks.',
    highlights: [
      'GS I–IV syllabus checklist',
      'Chapter PYQ frequency cues',
      'Daily reading streak log'
    ]
  }
];

export interface SyllabusTrack {
  id: string;
  label: string;
  paperTitle: string;
  summary: string;
  books: string[];
  magazinesAndSources: string[];
  studyTip: string;
}

export const SYLLABUS_TRACKS: SyllabusTrack[] = [
  {
    id: 'gs1',
    label: 'GS Paper I',
    paperTitle: 'Heritage, History, Society & Geography',
    summary:
      'Build conceptual depth from Class VI–XII NCERTs up to modern freedom struggle, art & culture, and Indian physical geography.',
    books: [
      'Indian Art & Culture Compendium',
      'Modern Indian History (1707–1947)',
      'NCERT Class XI–XII History & Geography',
      'Indian Society & Social Justice Reader'
    ],
    magazinesAndSources: [
      'Yojana Heritage & Culture Special Issues',
      'Down To Earth Climate & Monsoon Briefs',
      'PIB Culture Ministry Releases'
    ],
    studyTip:
      'Pair Ancient & Medieval NCERT timelines directly with Art & Culture architectural plates inside the reader.'
  },
  {
    id: 'gs2',
    label: 'GS Paper II',
    paperTitle: 'Polity, Governance, Social Justice & IR',
    summary:
      'Master constitutional articles, Supreme Court landmark judgements, parliamentary committees, and India’s bilateral relations.',
    books: [
      'Indian Polity & Constitutional Framework',
      'Bare Act Constitution of India (Articles 1–395)',
      '2nd ARC Governance Reports Digest',
      'International Relations & Foreign Policy Notes'
    ],
    magazinesAndSources: [
      'The Hindu & Indian Express Polity Editorials',
      'PRS Legislative Bill Summaries',
      'Yojana Governance & Federalism Editions'
    ],
    studyTip:
      'Use yellow highlights for Prelims articles and blue highlights for Supreme Court cases to build instant Mains citations.'
  },
  {
    id: 'gs3',
    label: 'GS Paper III',
    paperTitle: 'Economy, Agriculture, Environment & S&T',
    summary:
      'Connect macroeconomic fundamentals with annual Budget documents, Economic Survey data, biodiversity laws, and internal security.',
    books: [
      'Indian Economy & Monetary Policy Reader',
      'Union Budget & Economic Survey Highlights',
      'Environment, Ecology & Biodiversity Manual',
      'Internal Security & Disaster Management'
    ],
    magazinesAndSources: [
      'Kurukshetra Rural & Agri Monthly',
      'Science Reporter & ISRO/DRDO Briefs',
      'Business Standard & Mint Economy Digests'
    ],
    studyTip:
      'Save Economic Survey charts directly into your revision notebook for crisp data points in Mains answers.'
  },
  {
    id: 'gs4',
    label: 'GS Paper IV',
    paperTitle: 'Ethics, Integrity, Aptitude & Case Studies',
    summary:
      'Prepare philosophical thinkers, administrative ethics frameworks, and 60+ solved UPSC case studies structured for high-scoring answers.',
    books: [
      'Ethics, Integrity & Civil Service Aptitude',
      '2nd ARC 4th Report: Ethics in Governance',
      'Solved UPSC Mains Case Study Bank',
      'Quotes & Thinkers Reference Lexicon'
    ],
    magazinesAndSources: [
      'Yojana Good Governance Case Profiles',
      'Daily Real-Life Administrative Examples',
      'Constitutional Morality Editorial Clips'
    ],
    studyTip:
      'Review 2 solved administrative case studies every weekend using Night Sepia mode without clutter.'
  },
  {
    id: 'magazines',
    label: 'Magazines & Daily',
    paperTitle: 'Newspapers, Monthly Journals & CSAT',
    summary:
      'Stay consistent every morning with 6 AM newspaper briefs, curated Yojana & Kurukshetra issues, PIB releases, and CSAT reading passages.',
    books: [
      'CSAT Reading Comprehension Practice Bank',
      'Essay Philosophical & Socio-Economic Compendium',
      'Annual India Year Book Chapter Digest'
    ],
    magazinesAndSources: [
      'The Hindu & Indian Express Daily 6 AM',
      'Yojana & Kurukshetra (English + Hindi)',
      'PIB Daily, Sansad TV & Down To Earth'
    ],
    studyTip:
      'Finish your daily newspaper brief in 20 minutes during breakfast using offline morning sync.'
  }
];

export interface TestimonialItem {
  name: string;
  context: string;
  beforeOutcome: string;
  quote: string;
}

export const TESTIMONIALS: TestimonialItem[] = [
  {
    name: 'Ananya Deshmukh',
    context: 'UPSC CSE Mains Appeared (2 Attempts) · Pune',
    beforeOutcome: 'Replaced 14 separate PDF folders & heavy books',
    quote:
      'Before ReadBook, my tablet was a mess of scattered Telegram PDFs and duplicate Yojana downloads. Having Polity, NCERTs, and 6 AM Hindu editorials indexed by GS paper cut my daily revision search time in half.'
  },
  {
    name: 'Raghavendra Tiwari',
    context: 'Hindi Medium Aspirant · Prayagraj',
    beforeOutcome: 'Consistent bilingual Yojana + PIB coverage',
    quote:
      'Finding clean, readable Hindi medium editions of Kurukshetra, NCERTs, and PIB summaries without broken fonts used to be frustrating. Sepia mode and instant bookmarking keep me focused for 7 hours straight.'
  },
  {
    name: 'Siddharth Nair',
    context: 'Working Professional & Prelims Qualifier · Bengaluru',
    beforeOutcome: '2 hours/day commute turned into offline study',
    quote:
      'I study on the metro with zero network signal. Downloading standard chapters and morning newspaper digests offline lets me revise GS-II and Economy every weekday before reaching the office.'
  }
];

export interface FaqItem {
  question: string;
  answer: string;
}

export const FAQS: FaqItem[] = [
  {
    question: 'Can I read eBooks, magazines, and newspapers completely offline?',
    answer:
      'Yes. Once you tap download on any NCERT, standard eBook, Yojana/Kurukshetra issue, or morning newspaper digest, it stays stored securely inside ReadBook by UPSC ZONE AI for offline reading without internet.'
  },
  {
    question: 'Are both English and Hindi medium materials available?',
    answer:
      'Yes. ReadBook by UPSC ZONE AI includes dedicated English and Hindi editions across NCERT textbooks, standard GS reference books, Yojana, Kurukshetra, and daily PIB current affairs.'
  },
  {
    question: 'What time are daily newspapers and editorials updated?',
    answer:
      'Morning newspaper digests (covering The Hindu, Indian Express, and Mint editorials with GS tagging) are published by 6:00 AM IST daily, followed by evening PIB and Sansad TV policy briefs.'
  },
  {
    question: 'Does the reader support highlights, notes, and eye-care dark mode?',
    answer:
      'Yes. You can highlight passages in four distinct study colors, attach personal margin notes, adjust font size and spacing, and switch instantly between Day Paper, Warm Sepia, and Midnight Slate themes.'
  },
  {
    question: 'How do I install ReadBook by UPSC ZONE AI on my Android phone or tablet?',
    answer:
      'Tap any "Download Now" or "Install App" button on this page to open the official Play Store listing (package id: in.upsczone.readbook) and start reading immediately.'
  }
];
