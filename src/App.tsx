import { FormEvent, useEffect, useMemo, useRef, useState } from 'react';
import {
  BookOpen,
  ChevronRight,
  ChevronUp,
  FileText,
  Lock,
  LogOut,
  Menu,
  ShieldCheck,
  Unlock,
  X,
} from 'lucide-react';
import { expertDiscussionChapter } from './data/expertDiscussion';
import { expertLecturesChapter } from './data/expertLectures';
import { SubSection } from './types';

const PASSWORD = 'yuasa2026';
const UNLOCK_STORAGE_KEY = 'ofp-reserved-room-unlocked';
const AAOP_ARCHIVE_PATH = './aaop2026/video-lecture-guide.html';

type NavSection = SubSection & {
  group: string;
};

export default function App() {
  const sections = useMemo<NavSection[]>(
    () => [
      ...expertDiscussionChapter.subSections.map((section) => ({
        ...section,
        group: '予備室1',
      })),
      ...expertLecturesChapter.subSections.map((section) => ({
        ...section,
        group: '予備室2',
      })),
    ],
    [],
  );

  const [isUnlocked, setIsUnlocked] = useState(() => {
    if (typeof window === 'undefined') return false;
    return window.sessionStorage.getItem(UNLOCK_STORAGE_KEY) === 'true';
  });
  const [passwordInput, setPasswordInput] = useState('');
  const [passwordError, setPasswordError] = useState(false);
  const [activeSectionId, setActiveSectionId] = useState(sections[0]?.id ?? '');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [showScrollTop, setShowScrollTop] = useState(false);
  const isProgrammaticScrollRef = useRef(false);
  const scrollTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 300);

      if (!isUnlocked || isProgrammaticScrollRef.current) return;

      const sectionElements = sections.map((section) => document.getElementById(section.id));
      let currentSectionId = sections[0]?.id ?? '';
      const isAtBottom = window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 50;

      if (isAtBottom && sectionElements.length > 0) {
        currentSectionId = sectionElements[sectionElements.length - 1]?.id ?? currentSectionId;
      } else {
        for (const element of sectionElements) {
          if (element && element.getBoundingClientRect().top <= 140) {
            currentSectionId = element.id;
          }
        }
      }

      if (currentSectionId) {
        setActiveSectionId(currentSectionId);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isUnlocked, sections]);

  const handleUnlock = (event: FormEvent) => {
    event.preventDefault();

    if (passwordInput === PASSWORD) {
      window.sessionStorage.setItem(UNLOCK_STORAGE_KEY, 'true');
      setIsUnlocked(true);
      setPasswordInput('');
      setPasswordError(false);
      window.scrollTo({ top: 0 });
      return;
    }

    setPasswordError(true);
  };

  const handleLock = () => {
    window.sessionStorage.removeItem(UNLOCK_STORAGE_KEY);
    setIsUnlocked(false);
    setPasswordInput('');
    setPasswordError(false);
    setIsMobileMenuOpen(false);
    window.scrollTo({ top: 0 });
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (!element) return;

    const top = element.getBoundingClientRect().top + window.scrollY - 84;
    window.scrollTo({ top, behavior: 'smooth' });
  };

  const handleSectionClick = (sectionId: string) => {
    isProgrammaticScrollRef.current = true;
    setActiveSectionId(sectionId);

    if (scrollTimeoutRef.current) {
      clearTimeout(scrollTimeoutRef.current);
    }

    scrollTimeoutRef.current = setTimeout(() => {
      isProgrammaticScrollRef.current = false;
    }, 900);

    scrollToSection(sectionId);
    setIsMobileMenuOpen(false);
  };

  const groupedSections = sections.reduce<Record<string, NavSection[]>>((groups, section) => {
    groups[section.group] = groups[section.group] ?? [];
    groups[section.group].push(section);
    return groups;
  }, {});
  const groupedEntries = Object.entries(groupedSections) as Array<[string, NavSection[]]>;

  const navigation = (
    <nav className="space-y-6">
      {groupedEntries.map(([group, groupSections]) => (
        <div key={group} className="space-y-2">
          <div className="px-3 text-xs font-bold uppercase tracking-wider text-slate-400">
            {group}
          </div>
          <div className="space-y-1">
            {groupSections.map((section) => (
              <button
                key={section.id}
                onClick={() => handleSectionClick(section.id)}
                className={`w-full rounded-lg px-3 py-2.5 text-left text-sm leading-snug transition-colors ${
                  activeSectionId === section.id
                    ? 'bg-cyan-50 font-semibold text-cyan-900 ring-1 ring-cyan-100'
                    : 'text-slate-600 hover:bg-slate-50 hover:text-slate-950'
                }`}
              >
                {section.title}
              </button>
            ))}
          </div>
        </div>
      ))}
    </nav>
  );

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 selection:bg-cyan-200 selection:text-cyan-950">
      <header className="sticky top-0 z-40 border-b border-slate-200 bg-white/95 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 md:px-8">
          <div className="flex min-w-0 items-center gap-3">
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-cyan-700 text-white shadow-sm">
              {isUnlocked ? <BookOpen className="h-5 w-5" /> : <Lock className="h-5 w-5" />}
            </div>
            <div className="min-w-0">
              <h1 className="truncate text-lg font-bold text-slate-950 md:text-xl">OFP 予備室</h1>
              <p className="truncate text-xs font-medium text-slate-500 md:text-sm">
                口腔顔面痛・BMS 専門資料
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            {isUnlocked && (
              <button
                onClick={handleLock}
                className="hidden items-center rounded-lg border border-slate-200 bg-white px-3 py-2 text-sm font-medium text-slate-600 transition-colors hover:border-slate-300 hover:text-slate-950 md:flex"
              >
                <LogOut className="mr-2 h-4 w-4" />
                ロック
              </button>
            )}
            {isUnlocked && (
              <button
                onClick={() => setIsMobileMenuOpen((open) => !open)}
                className="rounded-lg p-2 text-slate-600 transition-colors hover:bg-slate-100 hover:text-slate-950 md:hidden"
                aria-label="メニュー"
              >
                {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            )}
          </div>
        </div>
      </header>

      {isUnlocked && isMobileMenuOpen && (
        <div className="fixed inset-0 z-30 overflow-y-auto bg-white px-4 pb-8 pt-20 md:hidden">
          {navigation}
          <button
            onClick={handleLock}
            className="mt-8 flex w-full items-center justify-center rounded-lg border border-slate-200 bg-slate-50 px-4 py-3 text-sm font-semibold text-slate-700"
          >
            <LogOut className="mr-2 h-4 w-4" />
            ロック
          </button>
        </div>
      )}

      {!isUnlocked ? (
        <main className="mx-auto flex min-h-[calc(100vh-65px)] max-w-7xl items-center justify-center px-4 py-10">
          <section className="w-full max-w-md rounded-xl border border-slate-200 bg-white p-8 shadow-sm">
            <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-xl bg-cyan-50 text-cyan-700">
              <ShieldCheck className="h-8 w-8" />
            </div>
            <h2 className="mb-2 text-2xl font-bold text-slate-950">予備室（パスワード）</h2>
            <p className="mb-6 text-sm leading-relaxed text-slate-600">
              口腔顔面痛・BMS に関する専門家議論と講義録を収載しています。
            </p>
            <form onSubmit={handleUnlock} className="space-y-4">
              <div>
                <label htmlFor="password" className="mb-2 block text-sm font-semibold text-slate-700">
                  パスワード
                </label>
                <input
                  id="password"
                  type="password"
                  value={passwordInput}
                  onChange={(event) => {
                    setPasswordInput(event.target.value);
                    if (passwordError) setPasswordError(false);
                  }}
                  className={`w-full rounded-lg border px-4 py-3 text-base outline-none transition focus:ring-2 ${
                    passwordError
                      ? 'border-rose-300 bg-rose-50 focus:ring-rose-200'
                      : 'border-slate-300 bg-white focus:border-cyan-600 focus:ring-cyan-100'
                  }`}
                  autoComplete="current-password"
                />
                {passwordError && (
                  <p className="mt-2 text-sm font-medium text-rose-600">パスワードが正しくありません。</p>
                )}
              </div>
              <button
                type="submit"
                className="flex w-full items-center justify-center rounded-lg bg-cyan-700 px-4 py-3 font-semibold text-white transition-colors hover:bg-cyan-800"
              >
                <Unlock className="mr-2 h-5 w-5" />
                開く
              </button>
            </form>
          </section>
        </main>
      ) : (
        <div className="mx-auto flex max-w-7xl">
          <aside className="sticky top-[65px] hidden h-[calc(100vh-65px)] w-80 shrink-0 overflow-y-auto border-r border-slate-200 bg-white/70 px-6 py-8 md:block">
            {navigation}
          </aside>

          <main className="min-w-0 flex-1 px-4 py-8 md:px-10 lg:px-14">
            <div className="mx-auto max-w-4xl space-y-16">
              <section className="border-b border-slate-200 pb-6">
                <div className="mb-3 inline-flex items-center rounded-full bg-cyan-50 px-3 py-1 text-xs font-bold text-cyan-800 ring-1 ring-cyan-100">
                  <Lock className="mr-1.5 h-3.5 w-3.5" />
                  Protected
                </div>
                <h2 className="text-3xl font-bold tracking-normal text-slate-950 md:text-4xl">
                  予備室
                </h2>
                <p className="mt-3 max-w-2xl text-sm leading-relaxed text-slate-600 md:text-base">
                  専門家会議の整理、口腔顔面痛講義、海外セミナー要約をまとめた補足資料です。
                </p>
                <a
                  href={AAOP_ARCHIVE_PATH}
                  className="mt-5 inline-flex w-full items-center justify-between gap-3 rounded-lg border border-cyan-200 bg-white px-4 py-3 text-left text-sm font-semibold leading-snug text-cyan-900 shadow-sm transition hover:border-cyan-300 hover:bg-cyan-50 md:w-auto md:min-w-[24rem]"
                >
                  <span className="flex min-w-0 items-center gap-3">
                    <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-cyan-700 text-white">
                      <FileText className="h-5 w-5" />
                    </span>
                    <span className="min-w-0">
                      2026年AAOP総会講演録・和嶋先生慢性疼痛
                    </span>
                  </span>
                  <ChevronRight className="h-5 w-5 shrink-0" />
                </a>
              </section>

              {sections.map((section) => (
                <section key={section.id} id={section.id} className="scroll-mt-28">
                  <div className="mb-6 flex items-start justify-between gap-4 border-b border-slate-200 pb-4">
                    <div>
                      <p className="mb-2 text-xs font-bold uppercase tracking-wider text-cyan-700">
                        {section.group}
                      </p>
                      <h3 className="text-2xl font-bold leading-tight text-slate-950">
                        {section.title}
                      </h3>
                    </div>
                  </div>
                  <div className="text-slate-800">{section.content}</div>
                </section>
              ))}

              <div className="border-t border-slate-200 py-8">
                <button
                  onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                  className="group flex w-full items-center justify-between rounded-xl border border-slate-200 bg-white p-5 text-left transition hover:border-cyan-200 hover:shadow-sm"
                >
                  <span>
                    <span className="block text-xs font-bold uppercase tracking-wider text-slate-400">
                      Top
                    </span>
                    <span className="mt-1 block text-base font-bold text-slate-950">
                      先頭へ戻る
                    </span>
                  </span>
                  <span className="rounded-full bg-cyan-50 p-3 text-cyan-700 transition group-hover:bg-cyan-100">
                    <ChevronRight className="h-5 w-5 -rotate-90" />
                  </span>
                </button>
              </div>
            </div>
          </main>
        </div>
      )}

      {showScrollTop && isUnlocked && (
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="fixed bottom-6 right-6 z-40 rounded-full bg-cyan-700 p-3 text-white shadow-lg transition-colors hover:bg-cyan-800 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:ring-offset-2"
          aria-label="トップへ戻る"
        >
          <ChevronUp className="h-6 w-6" />
        </button>
      )}
    </div>
  );
}
