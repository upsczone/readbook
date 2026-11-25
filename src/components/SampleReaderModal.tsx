import {useState} from 'react';
import {
  Bookmark,
  Minus,
  Moon,
  Play,
  Plus,
  Sun,
  X,
} from 'lucide-react';
import {PLAY_STORE_URL, type PublicationItem} from '../data/upscCatalog';

interface SampleReaderModalProps {
  item: PublicationItem | null;
  onClose: () => void;
}

type ModalTheme = 'paper' | 'sepia' | 'night';

export function SampleReaderModal({item, onClose}: SampleReaderModalProps) {
  const [theme, setTheme] = useState<ModalTheme>('paper');
  const [fontSize, setFontSize] = useState(16);
  const [bookmarked, setBookmarked] = useState(false);

  if (!item) return null;

  const containerTheme: Record<ModalTheme, string> = {
    paper: 'bg-white text-slate-900 border-slate-200',
    sepia: 'bg-[#F6EFE2] text-[#2C2418] border-[#E4D6BE]',
    night: 'bg-[#0F172A] text-slate-100 border-slate-800',
  };

  const mutedTheme: Record<ModalTheme, string> = {
    paper: 'text-slate-500',
    sepia: 'text-[#6E5C43]',
    night: 'text-slate-400',
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="sample-reader-title"
      className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/60 p-4 backdrop-blur-xs"
      onClick={onClose}
    >
      <div
        className={`relative flex max-h-[90vh] w-full max-w-2xl flex-col overflow-hidden rounded-2xl border shadow-xl transition-colors ${containerTheme[theme]}`}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top Reader Toolbar */}
        <div className="flex flex-wrap items-center justify-between gap-3 border-b border-current/10 px-5 py-3.5">
          <div className="min-w-0">
            <p className={`truncate text-xs font-medium ${mutedTheme[theme]}`}>
              {item.categoryLabel} · {item.gsTag}
            </p>
          </div>

          <div className="flex items-center gap-2">
            {/* Font size controls */}
            <div className="inline-flex items-center rounded-lg border border-current/15 px-1 py-0.5">
              <button
                type="button"
                onClick={() => setFontSize((s) => Math.max(14, s - 1))}
                aria-label="Decrease font size"
                className="p-1.5 hover:opacity-75"
              >
                <Minus className="h-3.5 w-3.5" />
              </button>
              <span className="px-1.5 font-mono text-xs tabular-nums">
                {fontSize}px
              </span>
              <button
                type="button"
                onClick={() => setFontSize((s) => Math.min(20, s + 1))}
                aria-label="Increase font size"
                className="p-1.5 hover:opacity-75"
              >
                <Plus className="h-3.5 w-3.5" />
              </button>
            </div>

            {/* Theme toggle */}
            <div className="inline-flex items-center gap-1 rounded-lg border border-current/15 p-0.5">
              <button
                type="button"
                onClick={() => setTheme('paper')}
                aria-label="Day mode"
                className={`rounded p-1.5 ${
                  theme === 'paper' ? 'bg-slate-900 text-white' : 'opacity-70'
                }`}
              >
                <Sun className="h-3.5 w-3.5" />
              </button>
              <button
                type="button"
                onClick={() => setTheme('sepia')}
                aria-label="Sepia mode"
                className={`rounded px-2 py-1 text-xs font-semibold ${
                  theme === 'sepia' ? 'bg-[#6E4B23] text-white' : 'opacity-70'
                }`}
              >
                A
              </button>
              <button
                type="button"
                onClick={() => setTheme('night')}
                aria-label="Night mode"
                className={`rounded p-1.5 ${
                  theme === 'night' ? 'bg-blue-700 text-white' : 'opacity-70'
                }`}
              >
                <Moon className="h-3.5 w-3.5" />
              </button>
            </div>

            <button
              type="button"
              onClick={() => setBookmarked((b) => !b)}
              aria-label={bookmarked ? 'Remove bookmark' : 'Save bookmark'}
              className="rounded-lg border border-current/15 p-2 hover:opacity-80"
            >
              <Bookmark
                className={`h-4 w-4 ${
                  bookmarked ? 'fill-amber-500 text-amber-500' : ''
                }`}
              />
            </button>

            <button
              type="button"
              onClick={onClose}
              aria-label="Close sample reader"
              className="rounded-lg border border-current/15 p-2 hover:opacity-80"
            >
              <X className="h-4 w-4" />
            </button>
          </div>
        </div>

        {/* Scrollable Sample Chapter */}
        <div className="overflow-y-auto px-6 py-6 sm:px-8">
          <p className={`text-xs font-semibold uppercase tracking-wider ${mutedTheme[theme]}`}>
            {item.title}
          </p>
          <h3
            id="sample-reader-title"
            className="mt-2 font-editorial text-2xl font-semibold leading-snug"
          >
            {item.sampleHeading}
          </h3>

          <div
            className="mt-5 space-y-4 leading-relaxed"
            style={{fontSize: `${fontSize}px`}}
          >
            {item.sampleParagraphs.map((para, idx) => (
              <p key={idx}>{para}</p>
            ))}
          </div>

          <div className="mt-6 rounded-xl border border-current/15 bg-current/5 p-4">
            <p className="text-xs font-semibold uppercase tracking-wider">
              Exam Revision Takeaway
            </p>
            <p className="mt-1.5 text-sm leading-relaxed">
              {item.sampleKeyTakeaway}
            </p>
          </div>
        </div>

        {/* Footer Action */}
        <div className="flex flex-wrap items-center justify-between gap-3 border-t border-current/10 px-6 py-4">
          <span className={`text-xs ${mutedTheme[theme]}`}>
            Read full chapters &amp; offline PDFs in the Android app
          </span>
          <a
            href={PLAY_STORE_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-lg bg-[#0E2A5C] px-4 py-2 text-xs font-semibold text-white hover:bg-[#173D82] whitespace-nowrap shrink-0"
          >
            <Play className="h-3.5 w-3.5 fill-current" aria-hidden="true" />
            <span>Continue Reading in App</span>
          </a>
        </div>
      </div>
    </div>
  );
}
