import { FormEvent, useEffect, useMemo, useState } from 'react';
import {
  BookOpen,
  ChevronLeft,
  ChevronRight,
  FileText,
  Lock,
  LogOut,
  ShieldCheck,
  Unlock,
} from 'lucide-react';
import { expertDiscussionChapter } from './data/expertDiscussion';
import { expertLecturesChapter } from './data/expertLectures';
import { SubSection } from './types';

const PASSWORD = 'yuasa2026';
const UNLOCK_STORAGE_KEY = 'ofp-reserved-room-unlocked';
const AAOP_ARCHIVE_PATH = './aaop2026/index.html';

type ContentSection = SubSection & {
  group: '講演' | 'メーリングリスト記録';
};

type MenuItem = {
  id: string;
  title: string;
  description: [string, string];
  href?: string;
  sectionId?: string;
};

const buttonClass =
  'flex w-full items-start justify-between gap-3 rounded-lg border border-slate-200 bg-white px-4 py-3 text-left text-sm font-semibold leading-snug text-slate-900 shadow-sm transition hover:border-cyan-300 hover:bg-cyan-50 hover:text-cyan-950';

const menuDescriptions: Record<string, [string, string]> = {
  'aaop-2026': [
    'AAOP 50周年大会報告と和嶋先生の慢性疼痛パートを、画像と本文で読める資料集です。',
    '動画本体を使わず、前半の学会報告と後半の慢性痛講義を順番に追えます。',
  ],
  famous: [
    '非歯原性歯痛、ICOP、筋筋膜性疼痛、神経障害性疼痛を総論として整理します。',
    '口腔顔面痛診療の全体像をつかむための基礎講義です。',
  ],
  clark: [
    'Glenn Clark先生の症例検討と文献レビューを、診断推論の流れとして読めます。',
    '頭痛・TMD・非歯原性歯痛を鑑別し、治療選択へつなげる内容です。',
  ],
  pasternak: [
    'Amy Pasternak先生の薬理遺伝学講義を、疼痛薬物療法の視点で整理します。',
    '患者ごとの代謝・副作用・反応差を、処方判断にどう反映するかを学びます。',
  ],
  'muraoka-2026-04': [
    '2026年4月の慶應OFPオープンセミナー、村岡渡先生の講義記録です。',
    '日本の臨床現場でOFPをどう説明し、どう診療へ落とすかを確認できます。',
  ],
  'muraoka-tmd-2026-05': [
    '2026年5月セミナー、村岡先生による顎関節症を口腔顔面痛として診る講義です。',
    '症例別の診断、病態分類、初期治療、慢性疼痛への移行を画面キャプチャ付きで整理します。',
  ],
  'wajima-online-2026-07': [
    '2026年7月の和嶋浩一先生による口腔顔面痛On-lineセミナーです。',
    '痛覚変調性疼痛の症例と、患者の説明をすぐ否定せず導く診察法を重点的に整理します。',
  ],
  'retractions-2026-04-29': [
    '疼痛医学の撤回論文を題材に、研究の読み方と注意点を整理します。',
    'エビデンスを臨床へ使う前に、信頼性と限界を点検するための資料です。',
  ],
  'expert-discussion-full': [
    'BMSの病態生理と薬物療法を、専門家会議の記録として詳しく整理します。',
    '末梢神経、痛覚変調、薬剤選択、患者説明を臨床目線で読めます。',
  ],
  'expert-discussion-beginner': [
    'BMSと口腔顔面痛の考え方を、初学者にも分かりやすく説明します。',
    '専門用語に入る前の入口として、患者説明にも使いやすい資料です。',
  ],
};

export default function App() {
  const lectureSections = useMemo<ContentSection[]>(
    () =>
      expertLecturesChapter.subSections.map((section) => ({
        ...section,
        group: '講演',
      })),
    [],
  );

  const mailingListSections = useMemo<ContentSection[]>(
    () =>
      expertDiscussionChapter.subSections.map((section) => ({
        ...section,
        group: 'メーリングリスト記録',
      })),
    [],
  );

  const contentSections = useMemo(
    () => [...lectureSections, ...mailingListSections],
    [lectureSections, mailingListSections],
  );

  const [isUnlocked, setIsUnlocked] = useState(() => {
    if (typeof window === 'undefined') return false;
    return window.sessionStorage.getItem(UNLOCK_STORAGE_KEY) === 'true';
  });
  const [passwordInput, setPasswordInput] = useState('');
  const [passwordError, setPasswordError] = useState(false);
  const [selectedSectionId, setSelectedSectionId] = useState(() => {
    if (typeof window === 'undefined') return '';
    const hash = window.location.hash.replace(/^#/, '');
    return contentSections.some((section) => section.id === hash) ? hash : '';
  });

  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace(/^#/, '');
      setSelectedSectionId(contentSections.some((section) => section.id === hash) ? hash : '');
    };

    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, [contentSections]);

  const lectureMenuItems: MenuItem[] = [
    {
      id: 'aaop-2026',
      title: '2026年AAOP総会講演録・和嶋先生慢性疼痛',
      description: menuDescriptions['aaop-2026'],
      href: AAOP_ARCHIVE_PATH,
    },
    ...lectureSections.map((section) => ({
      id: section.id,
      title: section.title,
      description: menuDescriptions[section.id],
      sectionId: section.id,
    })),
  ];

  const mailingListMenuItems: MenuItem[] = mailingListSections.map((section) => ({
    id: section.id,
    title: section.title,
    description: menuDescriptions[section.id],
    sectionId: section.id,
  }));

  const selectedSection = contentSections.find((section) => section.id === selectedSectionId);

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
    setSelectedSectionId('');
    if (window.location.hash) {
      window.history.replaceState(null, '', window.location.pathname + window.location.search);
    }
    window.scrollTo({ top: 0 });
  };

  const openSection = (sectionId: string) => {
    setSelectedSectionId(sectionId);
    window.history.replaceState(null, '', `#${sectionId}`);
    window.scrollTo({ top: 0 });
  };

  const returnToMenu = () => {
    setSelectedSectionId('');
    if (window.location.hash) {
      window.history.replaceState(null, '', window.location.pathname + window.location.search);
    }
    window.scrollTo({ top: 0 });
  };

  const renderMenuButton = (item: MenuItem) => {
    const content = (
      <>
        <span className="flex min-w-0 items-center gap-3">
          <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-cyan-700 text-white">
            <FileText className="h-5 w-5" />
          </span>
          <span className="min-w-0">
            <span className="block text-sm font-semibold leading-snug text-slate-950">
              {item.title}
            </span>
            <span className="mt-1 block text-xs font-normal leading-relaxed text-slate-500">
              {item.description[0]}
              <br />
              {item.description[1]}
            </span>
          </span>
        </span>
        <ChevronRight className="h-5 w-5 shrink-0 text-cyan-700" />
      </>
    );

    if (item.href) {
      return (
        <a key={item.id} href={item.href} className={buttonClass}>
          {content}
        </a>
      );
    }

    return (
      <button
        key={item.id}
        type="button"
        onClick={() => item.sectionId && openSection(item.sectionId)}
        className={buttonClass}
      >
        {content}
      </button>
    );
  };

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

          {isUnlocked && (
            <button
              onClick={handleLock}
              className="flex items-center rounded-lg border border-slate-200 bg-white px-3 py-2 text-sm font-medium text-slate-600 transition-colors hover:border-slate-300 hover:text-slate-950"
            >
              <LogOut className="mr-2 h-4 w-4" />
              ロック
            </button>
          )}
        </div>
      </header>

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
        <main className="mx-auto max-w-5xl px-4 py-8 md:px-8">
          {!selectedSection ? (
            <section className="space-y-8">
              <div>
                <h2 className="mb-4 text-xl font-bold text-slate-950 md:text-2xl">講演：</h2>
                <div className="grid gap-3 md:grid-cols-2">
                  {lectureMenuItems.map(renderMenuButton)}
                </div>
              </div>

              <div>
                <h2 className="mb-4 text-xl font-bold text-slate-950 md:text-2xl">
                  メーリングリスト記録：
                </h2>
                <div className="grid gap-3 md:grid-cols-2">
                  {mailingListMenuItems.map(renderMenuButton)}
                </div>
              </div>
            </section>
          ) : (
            <section className="space-y-6">
              <button
                type="button"
                onClick={returnToMenu}
                className="inline-flex items-center rounded-lg border border-slate-200 bg-white px-3 py-2 text-sm font-semibold text-slate-700 transition hover:border-cyan-300 hover:text-cyan-900"
              >
                <ChevronLeft className="mr-2 h-4 w-4" />
                ボタン一覧へ戻る
              </button>

              <div className="border-b border-slate-200 pb-4">
                <p className="mb-2 text-xs font-bold uppercase tracking-wider text-cyan-700">
                  {selectedSection.group}
                </p>
                <h2 className="text-2xl font-bold leading-tight text-slate-950 md:text-3xl">
                  {selectedSection.title}
                </h2>
              </div>

              <div className="text-slate-800">{selectedSection.content}</div>
            </section>
          )}
        </main>
      )}
    </div>
  );
}
