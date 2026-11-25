import {useState} from 'react';
import {
  ArrowDownRight,
  Bookmark,
  BookOpen,
  Check,
  Highlighter,
  Moon,
  Newspaper,
  Play,
  Sun,
} from 'lucide-react';
import {PLAY_STORE_URL} from '../data/upscCatalog';

type ReaderTab = 'newspaper' | 'magazine' | 'ebook';
type ReaderTheme = 'paper' | 'sepia' | 'night';

const PREVIEW_CONTENT: Record<
  ReaderTab,
  {
    kicker: string;
    title: string;
    meta: string;
    excerpt: string;
    highlightedLine: string;
    noteLabel: string;
  }
> = {
  newspaper: {
    kicker: 'The Hindu & Indian Express · 6:00 AM Digest',
    title: 'Cooperative Federalism & Sixteenth Finance Commission Terms',
    meta: 'GS Paper II & III · 4 min read · Bilingual Available',
    excerpt:
      'As consultations open across state capitals, fiscal devolution formulas must balance demographic performance with climate-resilient urban capital grants.',
    highlightedLine:
      'Article 280 mandates the Finance Commission to recommend vertical and horizontal tax distribution every five years.',
    noteLabel: 'Added to GS-II Polity Notes',
  },
  magazine: {
    kicker: 'Yojana Monthly · Digital Public Infrastructure Issue',
    title: 'How Open Protocols Accelerate Last-Mile Rural Credit',
    meta: 'GS Paper III · Economy · Offline Saved',
    excerpt:
      'Combining Aadhaar-enabled KYC, UPI instant settlement, and ONDC discovery lowers onboarding friction for Farmer Producer Organizations across Tier-3 districts.',
    highlightedLine:
      'Digital Public Infrastructure lowers verification costs by 68% for smallholder micro-enterprises.',
    noteLabel: 'Saved to Essay & Mains Bank',
  },
  ebook: {
    kicker: 'Standard eBook · Indian Polity & Constitution',
    title: 'Chapter 22: Parliamentary Privileges & Judicial Review',
    meta: 'Prelims + Mains · Chapter 22 of 94 · PYQ Linked',
    excerpt:
      'Parliamentary privileges protect collective institutional independence while individual immunities under Article 105 ensure uninhibited legislative debate.',
    highlightedLine:
      'Supreme Court clarified in 2024 that bribery is not shielded by legislative immunity under Articles 105(2) and 194(2).',
    noteLabel: 'Tagged for Prelims 2026 Revision',
  },
};

export function HeroSection() {
  const [activeTab, setActiveTab] = useState<ReaderTab>('newspaper');
  const [theme, setTheme] = useState<ReaderTheme>('paper');
  const [highlightActive, setHighlightActive] = useState(true);
  const [bookmarked, setBookmarked] = useState(false);

  const preview = PREVIEW_CONTENT[activeTab];

  const surfaceStyles: Record<ReaderTheme, string> = {
    paper: 'bg-white text-slate-900 border-slate-200',
    sepia: 'bg-[#F6EFE2] text-[#2C2418] border-[#E4D6BE]',
    night: 'bg-[#0F172A] text-slate-100 border-slate-800',
  };

  const mutedTextStyles: Record<ReaderTheme, string> = {
    paper: 'text-slate-500',
    sepia: 'text-[#6E5C43]',
    night: 'text-slate-400',
  };

  const highlightStyles: Record<ReaderTheme, string> = {
    paper: highlightActive ? 'bg-amber-100/90 text-slate-950' : '',
    sepia: highlightActive ? 'bg-amber-200/80 text-[#1E170E]' : '',
    night: highlightActive ? 'bg-amber-400/20 text-amber-100' : '',
  };

  return (
    <section id="top" className="border-b border-slate-200 bg-white">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
        <div className="grid grid-cols-1 items-stretch gap-10 lg:grid-cols-12 lg:gap-12">
          {/* Left Column: Crisp Editorial Proposition */}
          <div className="flex flex-col justify-between lg:col-span-6">
            <div>
              <p className="text-xs font-semibold tracking-wider text-[#0E2A5C] uppercase">
                ReadBook by UPSC ZONE AI
              </p>

              <h1
                className="mt-4 font-editorial text-slate-950 font-semibold tracking-tight leading-[1.08]"
                style={{
                  fontSize: 'clamp(2.25rem, 4.2vw, 3.75rem)',
                  textWrap: 'balance',
                }}
              >
                Ace Your UPSC Preparation on the Go
              </h1>

              <p className="mt-5 max-w-xl text-base leading-relaxed text-slate-600 sm:text-lg">
                Carry your complete UPSC library in one distraction-free reader. Access
                standard eBooks, NCERTs, Yojana &amp; Kurukshetra magazines, and daily
                newspapers offline—tagged by Prelims and Mains GS papers.
              </p>

              {/* Single Dominant Primary CTA + Secondary Anchor */}
              <div className="mt-8 flex flex-wrap items-center gap-4">
                <a
                  href={PLAY_STORE_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2.5 rounded-xl bg-[#0E2A5C] px-7 py-4 text-sm font-semibold text-white shadow-xs transition-colors duration-150 hover:bg-[#173D82] whitespace-nowrap shrink-0 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-800"
                >
                  <Play className="h-4 w-4 fill-current shrink-0" aria-hidden="true" />
                  <span>Download Now</span>
                </a>

                <a
                  href="#library"
                  className="inline-flex items-center gap-1.5 rounded-xl border border-slate-300 bg-white px-5 py-4 text-sm font-semibold text-slate-800 transition-colors duration-150 hover:bg-slate-50 whitespace-nowrap shrink-0 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-800"
                >
                  <span>Browse Library Catalog</span>
                  <ArrowDownRight className="h-4 w-4 text-slate-500" aria-hidden="true" />
                </a>
              </div>
            </div>

            {/* Quiet unboxed metadata line */}
            <div className="mt-10 border-t border-slate-200 pt-5">
              <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-xs font-medium text-slate-500">
                <span>Prelims &amp; Mains Ready</span>
                <span aria-hidden="true">·</span>
                <span>100% Offline Reader</span>
                <span aria-hidden="true">·</span>
                <span>Hindi &amp; English Medium</span>
                <span aria-hidden="true">·</span>
                <span>Updated Daily 6:00 AM IST</span>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Live Reader Preview */}
          <div className="flex flex-col lg:col-span-6">
            <div className="flex h-full flex-col justify-between rounded-2xl border border-slate-200 bg-slate-100/80 p-4 sm:p-5">
              {/* Top Interactive Controls inside Mockup */}
              <div className="flex flex-wrap items-center justify-between gap-3 pb-4">
                <div
                  role="tablist"
                  aria-label="Preview reader content type"
                  className="inline-flex items-center gap-1 rounded-lg bg-slate-200/80 p-1"
                >
                  <button
                    type="button"
                    role="tab"
                    aria-selected={activeTab === 'newspaper'}
                    onClick={() => setActiveTab('newspaper')}
                    className={`inline-flex items-center gap-1.5 rounded-md px-3 py-1.5 text-xs font-semibold transition-colors whitespace-nowrap shrink-0 ${
                      activeTab === 'newspaper'
                        ? 'bg-white text-slate-950 shadow-xs'
                        : 'text-slate-600 hover:text-slate-950'
                    }`}
                  >
                    <Newspaper className="h-3.5 w-3.5" aria-hidden="true" />
                    <span>Newspaper</span>
                  </button>
                  <button
                    type="button"
                    role="tab"
                    aria-selected={activeTab === 'magazine'}
                    onClick={() => setActiveTab('magazine')}
                    className={`inline-flex items-center gap-1.5 rounded-md px-3 py-1.5 text-xs font-semibold transition-colors whitespace-nowrap shrink-0 ${
                      activeTab === 'magazine'
                        ? 'bg-white text-slate-950 shadow-xs'
                        : 'text-slate-600 hover:text-slate-950'
                    }`}
                  >
                    <BookOpen className="h-3.5 w-3.5" aria-hidden="true" />
                    <span>Magazine</span>
                  </button>
                  <button
                    type="button"
                    role="tab"
                    aria-selected={activeTab === 'ebook'}
                    onClick={() => setActiveTab('ebook')}
                    className={`inline-flex items-center gap-1.5 rounded-md px-3 py-1.5 text-xs font-semibold transition-colors whitespace-nowrap shrink-0 ${
                      activeTab === 'ebook'
                        ? 'bg-white text-slate-950 shadow-xs'
                        : 'text-slate-600 hover:text-slate-950'
                    }`}
                  >
                    <BookOpen className="h-3.5 w-3.5" aria-hidden="true" />
                    <span>eBook</span>
                  </button>
                </div>

                {/* Eye-Care Reading Theme Switcher */}
                <div
                  aria-label="Reading theme switcher"
                  className="inline-flex items-center gap-1 rounded-lg border border-slate-200 bg-white p-1"
                >
                  <button
                    type="button"
                    onClick={() => setTheme('paper')}
                    aria-label="Paper light mode"
                    title="Paper mode"
                    className={`inline-flex h-7 items-center gap-1 rounded px-2 text-xs font-medium transition-colors ${
                      theme === 'paper'
                        ? 'bg-slate-900 text-white'
                        : 'text-slate-600 hover:bg-slate-100'
                    }`}
                  >
                    <Sun className="h-3 w-3" aria-hidden="true" />
                    <span>Day</span>
                  </button>
                  <button
                    type="button"
                    onClick={() => setTheme('sepia')}
                    aria-label="Warm sepia mode"
                    title="Sepia mode"
                    className={`inline-flex h-7 items-center rounded px-2 text-xs font-medium transition-colors ${
                      theme === 'sepia'
                        ? 'bg-[#6E4B23] text-white'
                        : 'text-slate-600 hover:bg-slate-100'
                    }`}
                  >
                    Sepia
                  </button>
                  <button
                    type="button"
                    onClick={() => setTheme('night')}
                    aria-label="Night dark mode"
                    title="Night mode"
                    className={`inline-flex h-7 items-center gap-1 rounded px-2 text-xs font-medium transition-colors ${
                      theme === 'night'
                        ? 'bg-blue-700 text-white'
                        : 'text-slate-600 hover:bg-slate-100'
                    }`}
                  >
                    <Moon className="h-3 w-3" aria-hidden="true" />
                    <span>Night</span>
                  </button>
                </div>
              </div>

              {/* Simulated Reader Page Frame */}
              <div
                className={`flex flex-1 flex-col justify-between rounded-xl border p-5 sm:p-6 transition-colors duration-150 ${surfaceStyles[theme]}`}
              >
                <div>
                  <div
                    className={`flex items-center justify-between gap-2 text-xs font-medium ${mutedTextStyles[theme]}`}
                  >
                    <span>{preview.kicker}</span>
                    <button
                      type="button"
                      onClick={() => setBookmarked((b) => !b)}
                      aria-label={bookmarked ? 'Remove bookmark' : 'Bookmark article'}
                      className="inline-flex items-center gap-1 rounded px-2 py-1 text-xs font-medium hover:bg-black/5"
                    >
                      <Bookmark
                        className={`h-3.5 w-3.5 ${
                          bookmarked ? 'fill-amber-500 text-amber-500' : ''
                        }`}
                        aria-hidden="true"
                      />
                      <span>{bookmarked ? 'Saved' : 'Save'}</span>
                    </button>
                  </div>

                  <h2 className="mt-3 font-editorial text-xl font-semibold leading-snug sm:text-2xl">
                    {preview.title}
                  </h2>

                  <p className={`mt-1.5 text-xs ${mutedTextStyles[theme]}`}>
                    {preview.meta}
                  </p>

                  <div className="mt-5 space-y-3.5 text-sm leading-relaxed">
                    <p>{preview.excerpt}</p>
                    <p>
                      <mark
                        className={`rounded-xs px-1 py-0.5 transition-colors duration-150 ${highlightStyles[theme]}`}
                      >
                        {preview.highlightedLine}
                      </mark>
                    </p>
                  </div>
                </div>

                <div
                  className={`mt-6 flex flex-wrap items-center justify-between gap-3 border-t pt-4 text-xs ${
                    theme === 'night'
                      ? 'border-slate-800'
                      : theme === 'sepia'
                        ? 'border-[#E4D6BE]'
                        : 'border-slate-200'
                  }`}
                >
                  <button
                    type="button"
                    onClick={() => setHighlightActive((h) => !h)}
                    className="inline-flex items-center gap-1.5 font-semibold hover:underline"
                  >
                    <Highlighter className="h-3.5 w-3.5 text-amber-600" aria-hidden="true" />
                    <span>
                      {highlightActive ? 'Highlight Active' : 'Tap to Highlight'}
                    </span>
                  </button>

                  <span className={`inline-flex items-center gap-1 ${mutedTextStyles[theme]}`}>
                    <Check className="h-3.5 w-3.5 text-emerald-600" aria-hidden="true" />
                    <span>{preview.noteLabel}</span>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Full-Width Quantitative Proof Strip */}
        <div className="mt-12 grid grid-cols-2 gap-6 border-t border-slate-200 pt-8 md:grid-cols-4 md:gap-8">
          <div>
            <p className="font-mono text-2xl font-semibold tracking-tight text-slate-950 tabular-nums sm:text-3xl">
              450+
            </p>
            <p className="mt-1 text-sm font-medium text-slate-800">
              Standard Books &amp; NCERTs
            </p>
            <p className="mt-0.5 text-xs text-slate-500">
              Class VI–XII &amp; Mains References
            </p>
          </div>
          <div>
            <p className="font-mono text-2xl font-semibold tracking-tight text-slate-950 tabular-nums sm:text-3xl">
              6:00 AM
            </p>
            <p className="mt-1 text-sm font-medium text-slate-800">
              Daily Newspaper Briefs
            </p>
            <p className="mt-0.5 text-xs text-slate-500">
              The Hindu, Indian Express &amp; PIB
            </p>
          </div>
          <div>
            <p className="font-mono text-2xl font-semibold tracking-tight text-slate-950 tabular-nums sm:text-3xl">
              100%
            </p>
            <p className="mt-1 text-sm font-medium text-slate-800">
              Offline Study Access
            </p>
            <p className="mt-0.5 text-xs text-slate-500">
              Single-tap save for zero-data reading
            </p>
          </div>
          <div>
            <p className="font-mono text-2xl font-semibold tracking-tight text-slate-950 tabular-nums sm:text-3xl">
              GS I–IV
            </p>
            <p className="mt-1 text-sm font-medium text-slate-800">
              Syllabus &amp; PYQ Tagged
            </p>
            <p className="mt-0.5 text-xs text-slate-500">
              Prelims, Mains &amp; Essay Coverage
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
