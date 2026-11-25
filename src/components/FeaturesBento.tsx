import {
  Archive,
  BookOpen,
  Check,
  Layers,
} from 'lucide-react';
import {APP_FEATURES} from '../data/upscCatalog';

const KEY_FEATURE_CARDS: {
  id: string;
  category: 'ebooks' | 'magazines' | 'newspapers';
  title: string;
  subtitle: string;
  description: string;
  icon: typeof BookOpen;
  ctaLabel: string;
}[] = [
  {
    id: 'ebooks-collection',
    category: 'ebooks',
    title: 'Ebooks Collection',
    subtitle: '450+ Standard Books & NCERTs',
    description:
      'Complete Class VI–XII NCERTs, Indian Polity, Modern History, Economy, Environment, and Ethics compendiums formatted for offline chapter-wise reading and fast revision.',
    icon: BookOpen,
    ctaLabel: 'Browse eBooks',
  },
  {
    id: 'daily-magazines',
    category: 'magazines',
    title: 'Daily Magazines',
    subtitle: 'Yojana, Kurukshetra & Policy Digests',
    description:
      'Stay ahead on governance, rural economy, science, and budget policy with clean monthly journals and daily current affairs magazines in English and Hindi.',
    icon: Layers,
    ctaLabel: 'Browse Magazines',
  },
  {
    id: 'newspaper-archive',
    category: 'newspapers',
    title: 'Newspaper Archive',
    subtitle: 'The Hindu, Indian Express & PIB',
    description:
      'Searchable date-wise newspaper archive with 6:00 AM daily editorial briefs, GS paper tagging, and Mains answer-writing pointers without ads or noise.',
    icon: Archive,
    ctaLabel: 'Explore Archive',
  },
];

interface FeaturesBentoProps {
  onSelectCategory: (category: 'ebooks' | 'magazines' | 'newspapers') => void;
}

export function FeaturesBento({onSelectCategory}: FeaturesBentoProps) {
  return (
    <section id="features" className="border-b border-slate-200 bg-white py-16 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Key Features 3-Card Grid */}
        <div className="max-w-2xl">
          <p className="text-xs font-semibold tracking-wider text-[#0E2A5C] uppercase">
            Key Features
          </p>
          <h2
            className="mt-2 font-editorial text-3xl font-semibold tracking-tight text-slate-950 sm:text-4xl"
            style={{textWrap: 'balance'}}
          >
            Three Core Libraries Built for UPSC Aspirants
          </h2>
          <p className="mt-3 text-base leading-relaxed text-slate-600">
            Everything required from foundational NCERT reading to morning editorial
            revision inside ReadBook by UPSC ZONE AI.
          </p>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-3">
          {KEY_FEATURE_CARDS.map((card) => {
            const Icon = card.icon;
            return (
              <article
                key={card.id}
                className="flex flex-col justify-between rounded-2xl border border-slate-200 bg-slate-50/70 p-6 transition-colors duration-150 hover:border-slate-300 hover:bg-white sm:p-7"
              >
                <div>
                  <div className="inline-flex h-11 w-11 items-center justify-center rounded-xl border border-slate-200 bg-white text-[#0E2A5C]">
                    <Icon className="h-5 w-5" aria-hidden="true" />
                  </div>

                  <p className="mt-5 text-xs font-medium text-slate-500">
                    {card.subtitle}
                  </p>
                  <h3 className="mt-1 font-editorial text-xl font-semibold tracking-tight text-slate-950">
                    {card.title}
                  </h3>
                  <p className="mt-2.5 text-sm leading-relaxed text-slate-600">
                    {card.description}
                  </p>
                </div>

                <div className="mt-6 border-t border-slate-200/80 pt-4">
                  <button
                    type="button"
                    onClick={() => onSelectCategory(card.category)}
                    className="inline-flex items-center text-xs font-semibold text-[#0E2A5C] hover:underline hover:underline-offset-4"
                  >
                    {card.ctaLabel} &rarr;
                  </button>
                </div>
              </article>
            );
          })}
        </div>

        {/* Detailed Reader Capabilities Bento */}
        <div className="mt-16 border-t border-slate-200 pt-14">
          <div className="max-w-2xl">
            <p className="text-xs font-semibold tracking-wider text-[#0E2A5C] uppercase">
              Reader Capabilities
            </p>
            <h3
              className="mt-2 font-editorial text-2xl font-semibold tracking-tight text-slate-950 sm:text-3xl"
              style={{textWrap: 'balance'}}
            >
              Designed for 8-Hour Distraction-Free Study Sessions
            </h3>
          </div>

          <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-3">
            {APP_FEATURES.map((feature) => (
              <article
                key={feature.number}
                className={`flex flex-col justify-between rounded-2xl border border-slate-200 bg-slate-50/60 p-6 sm:p-7 ${
                  feature.spanTwo ? 'md:col-span-2 bg-white' : 'md:col-span-1'
                }`}
              >
                <div>
                  <div className="flex items-baseline justify-between gap-4">
                    <span className="font-mono text-sm font-semibold text-[#0E2A5C] tabular-nums">
                      {feature.number}.
                    </span>
                    <span className="text-xs font-medium text-slate-500">
                      {feature.subtitle}
                    </span>
                  </div>

                  <h4 className="mt-4 font-editorial text-xl font-semibold tracking-tight text-slate-950 sm:text-2xl">
                    {feature.title}
                  </h4>

                  <p className="mt-3 text-sm leading-relaxed text-slate-600 sm:text-base">
                    {feature.description}
                  </p>
                </div>

                <ul className="mt-6 grid grid-cols-1 gap-2 border-t border-slate-200/80 pt-5 sm:grid-cols-2 md:grid-cols-1 lg:grid-cols-2">
                  {feature.highlights.map((point) => (
                    <li
                      key={point}
                      className="flex items-center gap-2 text-xs font-medium text-slate-700"
                    >
                      <Check
                        className="h-3.5 w-3.5 shrink-0 text-[#0E2A5C]"
                        aria-hidden="true"
                      />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
