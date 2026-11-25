import {BRAND_LOGO_SRC, PLAY_STORE_URL} from '../data/upscCatalog';

export function Footer() {
  return (
    <footer className="bg-white py-10">
      <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-6 px-4 sm:flex-row sm:items-center sm:px-6 lg:px-8">
        <div className="flex items-center gap-3">
          <img
            src={BRAND_LOGO_SRC}
            alt="ReadBook by UPSC ZONE AI Logo"
            referrerPolicy="no-referrer"
            className="h-8 w-auto object-contain"
          />
          <div>
            <p className="font-editorial text-sm font-bold text-slate-950">
              ReadBook by UPSC ZONE AI
            </p>
            <p className="text-xs text-slate-500">
              eBooks, Monthly Magazines &amp; Daily Newspapers for UPSC Aspirants
            </p>
          </div>
        </div>

        <div className="flex flex-wrap items-center gap-6 text-xs font-medium text-slate-600">
          <a href="#library" className="hover:text-slate-950">
            Library
          </a>
          <a href="#features" className="hover:text-slate-950">
            Features
          </a>
          <a href="#syllabus" className="hover:text-slate-950">
            Syllabus
          </a>
          <a href="#faq" className="hover:text-slate-950">
            FAQ
          </a>
          <a
            href={PLAY_STORE_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="font-semibold text-[#0E2A5C] hover:underline"
          >
            Google Play Store
          </a>
        </div>
      </div>

      <div className="mx-auto mt-8 max-w-7xl border-t border-slate-200 px-4 pt-6 sm:px-6 lg:px-8">
        <p className="text-xs text-slate-500">
          &copy; {new Date().getFullYear()} ReadBook by UPSC ZONE AI. Built for UPSC Civil
          Services Examination aspirants.
        </p>
      </div>
    </footer>
  );
}
