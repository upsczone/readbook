import {useState} from 'react';
import {BookOpen, Search} from 'lucide-react';
import {
  PUBLICATIONS,
  type PublicationItem,
  type ResourceCategory,
} from '../data/upscCatalog';

const CATEGORY_TABS: {id: ResourceCategory; label: string}[] = [
  {id: 'all', label: 'All Resources'},
  {id: 'ebooks', label: 'Standard eBooks'},
  {id: 'magazines', label: 'Monthly Magazines'},
  {id: 'newspapers', label: 'Daily Newspapers'},
  {id: 'ncerts', label: 'NCERT Foundation'},
];

const COVER_STYLES: Record<
  PublicationItem['coverTone'],
  {bg: string; spine: string; accent: string}
> = {
  navy: {
    bg: 'bg-[#0E2A5C] text-white',
    spine: 'bg-[#081A3B]',
    accent: 'text-amber-300',
  },
  amber: {
    bg: 'bg-[#78350F] text-amber-50',
    spine: 'bg-[#451A03]',
    accent: 'text-amber-200',
  },
  slate: {
    bg: 'bg-slate-900 text-slate-50',
    spine: 'bg-slate-950',
    accent: 'text-sky-300',
  },
  emerald: {
    bg: 'bg-[#064E3B] text-emerald-50',
    spine: 'bg-[#022C22]',
    accent: 'text-emerald-200',
  },
  crimson: {
    bg: 'bg-[#7F1D1D] text-rose-50',
    spine: 'bg-[#450A0A]',
    accent: 'text-amber-200',
  },
  indigo: {
    bg: 'bg-[#1E1B4B] text-indigo-50',
    spine: 'bg-[#0F0D2E]',
    accent: 'text-indigo-200',
  },
};

interface LibraryShowcaseProps {
  activeCategory: ResourceCategory;
  onCategoryChange: (category: ResourceCategory) => void;
  onOpenSample: (item: PublicationItem) => void;
}

export function LibraryShowcase({
  activeCategory,
  onCategoryChange,
  onOpenSample,
}: LibraryShowcaseProps) {
  const [query, setQuery] = useState('');

  const filtered = PUBLICATIONS.filter((item) => {
    const matchesCategory =
      activeCategory === 'all' || item.category === activeCategory;
    const trimmed = query.trim().toLowerCase();
    if (!trimmed) return matchesCategory;
    return (
      matchesCategory &&
      (item.title.toLowerCase().includes(trimmed) ||
        item.gsTag.toLowerCase().includes(trimmed) ||
        item.description.toLowerCase().includes(trimmed))
    );
  });

  return (
    <section id="library" className="border-b border-slate-200 bg-slate-50 py-16 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
          <div className="max-w-2xl">
            <p className="text-xs font-semibold tracking-wider text-[#0E2A5C] uppercase">
              Curated Reading Shelf
            </p>
            <h2
              className="mt-2 font-editorial text-3xl font-semibold tracking-tight text-slate-950 sm:text-4xl"
              style={{textWrap: 'balance'}}
            >
              Standard Books, Magazines &amp; Daily Newspapers
            </h2>
            <p className="mt-3 text-base leading-relaxed text-slate-600">
              Filter by format or search any GS subject. Tap any edition to read a
              sample chapter inside our distraction-free viewer.
            </p>
          </div>

          <div className="relative w-full sm:w-72">
            <Search
              className="pointer-events-none absolute top-1/2 left-3.5 h-4 w-4 -translate-y-1/2 text-slate-400"
              aria-hidden="true"
            />
            <input
              type="search"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search Polity, Yojana, Hindu..."
              aria-label="Search UPSC library"
              className="h-11 w-full rounded-xl border border-slate-300 bg-white pr-4 pl-10 text-sm text-slate-900 placeholder:text-slate-400 focus:border-[#0E2A5C] focus:outline-none"
            />
          </div>
        </div>

        {/* Interactive Filter Tabs */}
        <div className="mt-8 flex flex-wrap items-center gap-2">
          <div
            role="tablist"
            aria-label="Filter library by format"
            className="inline-flex flex-wrap items-center gap-1 rounded-xl border border-slate-200 bg-white p-1"
          >
            {CATEGORY_TABS.map((tab) => {
              const isActive = activeCategory === tab.id;
              return (
                <button
                  key={tab.id}
                  type="button"
                  role="tab"
                  aria-selected={isActive}
                  onClick={() => onCategoryChange(tab.id)}
                  className={`rounded-lg px-3.5 py-2 text-xs font-semibold transition-colors duration-150 whitespace-nowrap shrink-0 ${
                    isActive
                      ? 'bg-[#0E2A5C] text-white'
                      : 'text-slate-600 hover:bg-slate-100 hover:text-slate-950'
                  }`}
                >
                  {tab.label}
                </button>
              );
            })}
          </div>
        </div>

        {/* Publication Grid */}
        {filtered.length === 0 ? (
          <div className="mt-10 rounded-2xl border border-slate-200 bg-white p-10 text-center">
            <p className="text-base font-semibold text-slate-900">
              No matching resources found
            </p>
            <p className="mt-1 text-sm text-slate-500">
              Try clearing your search or switching back to All Resources.
            </p>
            <button
              type="button"
              onClick={() => {
                onCategoryChange('all');
                setQuery('');
              }}
              className="mt-4 rounded-lg bg-[#0E2A5C] px-4 py-2 text-xs font-semibold text-white hover:bg-[#173D82]"
            >
              Reset Filters
            </button>
          </div>
        ) : (
          <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {filtered.map((item) => {
              const cover = COVER_STYLES[item.coverTone];
              return (
                <article
                  key={item.id}
                  className="flex flex-col justify-between rounded-2xl border border-slate-200 bg-white p-5 transition-colors duration-150 hover:border-slate-300"
                >
                  <div>
                    {/* Editorial Typographic Book/Magazine Cover */}
                    <div
                      className={`relative flex h-44 overflow-hidden rounded-xl ${cover.bg}`}
                    >
                      <div className={`w-3 shrink-0 ${cover.spine}`} aria-hidden="true" />
                      <div className="flex flex-1 flex-col justify-between p-4">
                        <span
                          className={`text-[11px] font-semibold tracking-wider uppercase ${cover.accent}`}
                        >
                          {item.categoryLabel}
                        </span>
                        <div>
                          <p className="font-editorial text-lg font-semibold leading-snug">
                            {item.title}
                          </p>
                          <p className="mt-1 text-[11px] opacity-80">
                            {item.editionLabel}
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* Unboxed Metadata Line (Zero-Pill Discipline) */}
                    <div className="mt-4 flex flex-wrap items-center gap-x-2 gap-y-0.5 text-xs font-medium text-slate-500 tabular-nums">
                      <span>{item.gsTag}</span>
                      <span aria-hidden="true">·</span>
                      <span>{item.pagesOrTiming}</span>
                    </div>

                    <h3 className="mt-2 text-base font-semibold leading-snug text-slate-950">
                      {item.title}
                    </h3>
                    <p className="mt-1.5 text-sm leading-relaxed text-slate-600">
                      {item.description}
                    </p>
                  </div>

                  <div className="mt-5 flex items-center justify-between border-t border-slate-100 pt-4">
                    <span className="text-xs font-medium text-slate-500">
                      {item.medium}
                    </span>
                    <button
                      type="button"
                      onClick={() => onOpenSample(item)}
                      className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#0E2A5C] hover:underline hover:underline-offset-4 whitespace-nowrap shrink-0 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-800 rounded"
                    >
                      <BookOpen className="h-3.5 w-3.5" aria-hidden="true" />
                      <span>Read Sample</span>
                    </button>
                  </div>
                </article>
              );
            })}
          </div>
        )}
      </div>
    </section>
  );
}
