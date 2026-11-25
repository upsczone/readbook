import {useState} from 'react';
import {ArrowRight, BookMarked, Newspaper} from 'lucide-react';
import {PLAY_STORE_URL, SYLLABUS_TRACKS} from '../data/upscCatalog';

export function SubjectCoverage() {
  const [selectedId, setSelectedId] = useState(SYLLABUS_TRACKS[0].id);
  const current =
    SYLLABUS_TRACKS.find((t) => t.id === selectedId) ?? SYLLABUS_TRACKS[0];

  return (
    <section id="syllabus" className="border-b border-slate-200 bg-slate-50 py-16 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <p className="text-xs font-semibold tracking-wider text-[#0E2A5C] uppercase">
            Syllabus-Mapped Organization
          </p>
          <h2
            className="mt-2 font-editorial text-3xl font-semibold tracking-tight text-slate-950 sm:text-4xl"
            style={{textWrap: 'balance'}}
          >
            Structured Paper-by-Paper Across GS I–IV, CSAT &amp; Magazines
          </h2>
          <p className="mt-3 text-base leading-relaxed text-slate-600">
            Select a paper to inspect the standard books, monthly magazines, and
            daily sources bundled inside ReadBook by UPSC ZONE AI.
          </p>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-8 lg:grid-cols-12">
          {/* Paper Selector List */}
          <div
            role="tablist"
            aria-label="UPSC Syllabus Papers"
            className="flex flex-row gap-2 overflow-x-auto pb-2 lg:col-span-4 lg:flex-col lg:pb-0"
          >
            {SYLLABUS_TRACKS.map((track) => {
              const active = track.id === current.id;
              return (
                <button
                  key={track.id}
                  type="button"
                  role="tab"
                  aria-selected={active}
                  onClick={() => setSelectedId(track.id)}
                  className={`flex items-center justify-between rounded-xl border px-4 py-3.5 text-left transition-colors duration-150 shrink-0 lg:shrink ${
                    active
                      ? 'border-[#0E2A5C] bg-[#0E2A5C] text-white'
                      : 'border-slate-200 bg-white text-slate-800 hover:border-slate-300 hover:bg-slate-50'
                  }`}
                >
                  <div>
                    <p
                      className={`text-xs font-semibold uppercase tracking-wider ${
                        active ? 'text-amber-300' : 'text-slate-500'
                      }`}
                    >
                      {track.label}
                    </p>
                    <p className="mt-0.5 text-sm font-semibold whitespace-nowrap lg:whitespace-normal">
                      {track.paperTitle}
                    </p>
                  </div>
                </button>
              );
            })}
          </div>

          {/* Paper Detail Panel */}
          <div className="rounded-2xl border border-slate-200 bg-white p-6 sm:p-8 lg:col-span-8">
            <div className="flex flex-wrap items-baseline justify-between gap-2 border-b border-slate-200 pb-5">
              <div>
                <p className="text-xs font-semibold tracking-wider text-[#0E2A5C] uppercase">
                  {current.label}
                </p>
                <h3 className="mt-1 font-editorial text-2xl font-semibold text-slate-950">
                  {current.paperTitle}
                </h3>
              </div>
              <a
                href={PLAY_STORE_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#0E2A5C] hover:underline whitespace-nowrap shrink-0"
              >
                <span>Open in App</span>
                <ArrowRight className="h-3.5 w-3.5" aria-hidden="true" />
              </a>
            </div>

            <p className="mt-5 text-sm leading-relaxed text-slate-600 sm:text-base">
              {current.summary}
            </p>

            <div className="mt-7 grid grid-cols-1 gap-6 sm:grid-cols-2">
              <div>
                <div className="flex items-center gap-2 text-xs font-semibold tracking-wider text-slate-900 uppercase">
                  <BookMarked className="h-4 w-4 text-[#0E2A5C]" aria-hidden="true" />
                  <span>Core Books &amp; Compendiums</span>
                </div>
                <ul className="mt-3 divide-y divide-slate-100 border-t border-slate-200">
                  {current.books.map((book) => (
                    <li
                      key={book}
                      className="py-2.5 text-sm font-medium text-slate-800"
                    >
                      {book}
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <div className="flex items-center gap-2 text-xs font-semibold tracking-wider text-slate-900 uppercase">
                  <Newspaper className="h-4 w-4 text-[#0E2A5C]" aria-hidden="true" />
                  <span>Magazines &amp; Daily Sources</span>
                </div>
                <ul className="mt-3 divide-y divide-slate-100 border-t border-slate-200">
                  {current.magazinesAndSources.map((src) => (
                    <li
                      key={src}
                      className="py-2.5 text-sm font-medium text-slate-800"
                    >
                      {src}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="mt-7 rounded-xl border border-slate-200 bg-slate-50 p-4">
              <p className="text-xs font-semibold text-slate-900">
                Reader Study Workflow
              </p>
              <p className="mt-1 text-sm text-slate-600">{current.studyTip}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
