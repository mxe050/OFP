(() => {
  "use strict";

  const data = window.TMJ_LECTURE_DATA;
  if (!data || !Array.isArray(data.chapters)) {
    console.error("TMJ lecture data is missing.");
    return;
  }

  const figuresById = new Map(
    (Array.isArray(window.TMJ_LECTURE_FIGURES) ? window.TMJ_LECTURE_FIGURES : [])
      .map((figure) => [figure.id, figure]),
  );

  const chapterList = document.getElementById("chapter-list");
  const toc = document.getElementById("chapter-toc");
  const search = document.getElementById("chapter-search");
  const status = document.getElementById("search-status");
  const sidebar = document.getElementById("lecture-sidebar");
  const mobileButton = document.getElementById("mobile-toc-button");
  const progressBar = document.getElementById("reading-progress-bar");

  const normalize = (value) =>
    String(value || "")
      .normalize("NFKC")
      .toLocaleLowerCase("ja");

  const make = (tag, className, text) => {
    const element = document.createElement(tag);
    if (className) element.className = className;
    if (text !== undefined) element.textContent = text;
    return element;
  };

  const createBlock = (className, title, text) => {
    const block = make("div", `content-block ${className}`);
    block.append(make("h3", "", title));
    block.append(make("p", "", text));
    return block;
  };

  const createFigure = (figure) => {
    const element = make("figure", "lecture-figure");
    const image = document.createElement("img");
    image.src = `./assets/video-stills/${figure.id}.webp`;
    image.alt = figure.alt;
    image.loading = "lazy";
    image.decoding = "async";

    const caption = make("figcaption");
    const label = make("strong", "lecture-figure__time", `公式映像 ${figure.timecode}`);
    const description = make("span", "lecture-figure__caption", figure.caption);
    const source = document.createElement("a");
    source.href = figure.sourceUrl;
    source.target = "_blank";
    source.rel = "noopener noreferrer";
    source.className = "lecture-figure__source";
    source.textContent = "NIH VideoCast";
    caption.append(label, description, source);
    element.append(image, caption);
    return element;
  };

  const chapterElements = new Map();
  const tocLinks = new Map();

  data.chapters.forEach((chapter) => {
    const tocItem = make("li");
    const tocLink = make("a");
    tocLink.href = `#${chapter.id}`;
    const time = make("span", "toc__time", chapter.estimated_start);
    const title = make("span", "toc__title", chapter.title_ja);
    tocLink.append(time, title);
    tocItem.append(tocLink);
    toc.append(tocItem);
    tocLinks.set(chapter.id, tocLink);

    const section = make("section", "lecture-chapter");
    section.id = chapter.id;
    section.dataset.searchText = normalize([
      chapter.title_ja,
      chapter.speaker,
      chapter.lecture_content_ja,
      chapter.explanation_ja,
      chapter.critical_reading_ja,
      ...(chapter.key_terms || []),
    ].join(" "));

    const header = make("header");
    const meta = make("p", "chapter-meta");
    meta.append(
      make("span", "chapter-number", `第${chapter.no}章`),
    );
    const timeLink = make("a", "", `${chapter.estimated_start}–${chapter.estimated_end}`);
    timeLink.href = chapter.timestamp_url;
    timeLink.target = "_blank";
    timeLink.rel = "noopener noreferrer";
    timeLink.title = "動画の該当時刻を開く（推定時刻）";
    meta.append(timeLink, make("span", "", chapter.speaker));
    header.append(meta, make("h2", "", chapter.title_ja));
    section.append(header);

    section.append(
      createBlock(
        "content-block--lecture",
        "講演で述べられたこと",
        chapter.lecture_content_ja,
      ),
      createBlock(
        "content-block--explanation",
        "完全解説",
        chapter.explanation_ja,
      ),
      createBlock(
        "content-block--critical",
        "読み違えてはいけない点",
        chapter.critical_reading_ja,
      ),
    );

    if (Array.isArray(chapter.external_verification) && chapter.external_verification.length) {
      section.append(
        createBlock(
          "content-block--external",
          "外部確認候補",
          chapter.external_verification.join(" / "),
        ),
      );
    }

    const figures = (chapter.figure_ids || [])
      .map((id) => figuresById.get(id))
      .filter(Boolean);
    if (figures.length) {
      const gallery = make("section", "figure-gallery");
      gallery.append(make("h3", "figure-gallery__title", "講演スライド（公式配信より）"));
      const grid = make("div", "figure-gallery__grid");
      figures.forEach((figure) => grid.append(createFigure(figure)));
      gallery.append(grid);
      section.append(gallery);
    }

    if (Array.isArray(chapter.key_terms) && chapter.key_terms.length) {
      const list = make("ul", "key-terms");
      list.setAttribute("aria-label", "主要用語");
      chapter.key_terms.forEach((term) => list.append(make("li", "", term)));
      section.append(list);
    }

    chapterList.append(section);
    chapterElements.set(chapter.id, section);
  });

  const runSearch = () => {
    const query = normalize(search.value.trim());
    let visible = 0;

    chapterElements.forEach((section) => {
      const matches = !query || section.dataset.searchText.includes(query);
      section.hidden = !matches;
      if (matches) visible += 1;
    });

    status.textContent = query
      ? `${visible} / ${data.chapters.length}章を表示`
      : `${data.chapters.length}章`;
  };

  search.addEventListener("input", runSearch);
  runSearch();

  const observer = new IntersectionObserver(
    (entries) => {
      const visible = entries
        .filter((entry) => entry.isIntersecting && !entry.target.hidden)
        .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);
      if (!visible.length) return;

      const activeId = visible[0].target.id;
      tocLinks.forEach((link, id) => {
        if (id === activeId) {
          link.setAttribute("aria-current", "location");
        } else {
          link.removeAttribute("aria-current");
        }
      });
    },
    { rootMargin: "-12% 0px -72% 0px", threshold: [0, 0.1] },
  );

  chapterElements.forEach((section) => observer.observe(section));

  const setSidebar = (open) => {
    sidebar.dataset.open = String(open);
    mobileButton.setAttribute("aria-expanded", String(open));
    mobileButton.textContent = open ? "章一覧を閉じる" : "章一覧";
  };

  mobileButton.addEventListener("click", () => {
    setSidebar(sidebar.dataset.open !== "true");
  });

  toc.addEventListener("click", (event) => {
    if (event.target.closest("a") && window.matchMedia("(max-width: 900px)").matches) {
      setSidebar(false);
    }
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && sidebar.dataset.open === "true") {
      setSidebar(false);
      mobileButton.focus();
    }
  });

  const updateProgress = () => {
    const documentHeight = document.documentElement.scrollHeight - window.innerHeight;
    const ratio = documentHeight > 0 ? window.scrollY / documentHeight : 0;
    progressBar.style.width = `${Math.min(100, Math.max(0, ratio * 100))}%`;
  };

  window.addEventListener("scroll", updateProgress, { passive: true });
  window.addEventListener("resize", updateProgress);
  updateProgress();
})();
