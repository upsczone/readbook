import {useState} from 'react';
import {Check, ChevronDown, Copy, Play} from 'lucide-react';
import {
  BRAND_LOGO_SRC,
  FAQS,
  PLAY_STORE_URL,
  TESTIMONIALS,
} from '../data/upscCatalog';

export function TestimonialsAndFaq() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const [copied, setCopied] = useState(false);

  const handleCopyLink = async () => {
    try {
      await navigator.clipboard.writeText(PLAY_STORE_URL);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 2500);
    } catch {
      setCopied(false);
    }
  };

  return (
    <>
      {/* Aspirant Proof Section */}
      <section id="stories" className="border-b border-slate-200 bg-white py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <p className="text-xs font-semibold tracking-wider text-[#0E2A5C] uppercase">
              Aspirant Outcomes
            </p>
            <h2
              className="mt-2 font-editorial text-3xl font-semibold tracking-tight text-slate-950 sm:text-4xl"
              style={{textWrap: 'balance'}}
            >
              Built for Focused Reading Across Delhi, Prayagraj &amp; Beyond
            </h2>
          </div>

          <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-3">
            {TESTIMONIALS.map((item) => (
              <figure
                key={item.name}
                className="flex flex-col justify-between rounded-2xl border border-slate-200 bg-slate-50/70 p-6"
              >
                <div>
                  <p className="text-xs font-semibold text-[#0E2A5C]">
                    {item.beforeOutcome}
                  </p>
                  <blockquote className="mt-3 text-sm leading-relaxed text-slate-700 sm:text-base">
                    &ldquo;{item.quote}&rdquo;
                  </blockquote>
                </div>

                <figcaption className="mt-6 border-t border-slate-200 pt-4">
                  <p className="text-sm font-semibold text-slate-950">{item.name}</p>
                  <p className="mt-0.5 text-xs text-slate-500">{item.context}</p>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Accordion + Final Play Store Conversion */}
      <section id="faq" className="border-b border-slate-200 bg-slate-50 py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-12">
            {/* FAQ Column */}
            <div className="lg:col-span-7">
              <p className="text-xs font-semibold tracking-wider text-[#0E2A5C] uppercase">
                Common Questions
              </p>
              <h2 className="mt-2 font-editorial text-3xl font-semibold tracking-tight text-slate-950">
                Everything About ReadBook by UPSC ZONE AI
              </h2>

              <div className="mt-8 divide-y divide-slate-200 border-y border-slate-200 bg-white rounded-2xl border px-5 sm:px-6">
                {FAQS.map((faq, idx) => {
                  const isOpen = openIndex === idx;
                  return (
                    <div key={faq.question} className="py-4">
                      <button
                        type="button"
                        aria-expanded={isOpen}
                        onClick={() => setOpenIndex(isOpen ? null : idx)}
                        className="flex w-full items-center justify-between gap-4 py-1 text-left focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-800 rounded"
                      >
                        <span className="text-sm font-semibold text-slate-950 sm:text-base">
                          {faq.question}
                        </span>
                        <ChevronDown
                          className={`h-4 w-4 shrink-0 text-slate-500 transition-transform duration-150 ${
                            isOpen ? 'rotate-180' : ''
                          }`}
                          aria-hidden="true"
                        />
                      </button>
                      {isOpen && (
                        <p className="mt-3 pr-6 text-sm leading-relaxed text-slate-600">
                          {faq.answer}
                        </p>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Direct App Install Conversion Card */}
            <div className="lg:col-span-5">
              <div className="flex h-full flex-col justify-between rounded-2xl border border-slate-200 bg-[#0E2A5C] p-7 text-white sm:p-8">
                <div>
                  <div className="flex items-center gap-3.5">
                    <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-white p-1.5 shrink-0">
                      <img
                        src={BRAND_LOGO_SRC}
                        alt="ReadBook by UPSC ZONE AI Emblem"
                        referrerPolicy="no-referrer"
                        className="h-full w-full object-contain"
                      />
                    </div>
                    <div>
                      <p className="font-editorial text-xl font-semibold">
                        ReadBook by UPSC ZONE AI
                      </p>
                      <p className="text-xs text-slate-300">
                        Official Android Reader App
                      </p>
                    </div>
                  </div>

                  <h3 className="mt-6 font-editorial text-2xl font-semibold leading-snug text-white">
                    Carry Your Entire UPSC Bookshop &amp; Morning Newspaper in Your Pocket.
                  </h3>

                  <p className="mt-3 text-sm leading-relaxed text-slate-200">
                    Install ReadBook by UPSC ZONE AI on Google Play for instant access to
                    NCERTs, standard GS books, Yojana, Kurukshetra, and 6:00 AM
                    daily editorials.
                  </p>
                </div>

                <div className="mt-8 space-y-3">
                  <a
                    href={PLAY_STORE_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex w-full items-center justify-center gap-2.5 rounded-xl bg-amber-400 px-5 py-3.5 text-sm font-bold text-slate-950 transition-colors duration-150 hover:bg-amber-300 whitespace-nowrap"
                  >
                    <Play className="h-4 w-4 fill-current shrink-0" aria-hidden="true" />
                    <span>Install Free on Google Play</span>
                  </a>

                  <button
                    type="button"
                    onClick={handleCopyLink}
                    className="flex w-full items-center justify-center gap-2 rounded-xl border border-white/20 bg-white/5 px-5 py-3 text-xs font-semibold text-white transition-colors duration-150 hover:bg-white/10"
                  >
                    {copied ? (
                      <>
                        <Check className="h-3.5 w-3.5 text-emerald-300" aria-hidden="true" />
                        <span>Play Store Link Copied</span>
                      </>
                    ) : (
                      <>
                        <Copy className="h-3.5 w-3.5" aria-hidden="true" />
                        <span>Copy Google Play App Link</span>
                      </>
                    )}
                  </button>

                  <p className="pt-1 text-center font-mono text-[11px] text-slate-300">
                    Package ID: in.upsczone.readbook
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
