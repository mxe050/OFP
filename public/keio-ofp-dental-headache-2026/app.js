(() => {
  'use strict';
  const data = window.KEIO_OFP_DENTAL_HEADACHE;
  if (!data || !Array.isArray(data.slides)) return;

  const byId = new Map(data.sources.map((source) => [source.id, source]));
  const chapters = new Map(data.chapters.map((chapter) => [chapter.key, chapter]));
  const state = { selectedId: data.slides[0].id, query: '', chapter: 'all' };
  const list = document.getElementById('slide-list');
  const detail = document.getElementById('slide-detail');
  const count = document.getElementById('result-count');
  const search = document.getElementById('slide-search');
  const filter = document.getElementById('chapter-filter');
  const sourceList = document.getElementById('source-list');

  const escapeHtml = (value) => String(value || '').replace(/[&<>"]/g, (character) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[character]));
  const normalized = (value) => String(value || '').normalize('NFKC').toLocaleLowerCase('ja');
  const videoUrl = (seconds) => 'https://www.youtube.com/watch?v=QsQa00O8Eu0&t=' + seconds + 's';
  const visibleSlides = () => data.slides.filter((slide) => {
    const chapterMatches = state.chapter === 'all' || slide.chapter === state.chapter;
    const haystack = normalized([slide.title, slide.visual, slide.lecture, slide.explanation, ...(slide.tags || [])].join(' '));
    return chapterMatches && (!state.query || haystack.includes(state.query));
  });
  const selected = () => data.slides.find((slide) => slide.id === state.selectedId) || data.slides[0];

  data.chapters.forEach((chapter) => {
    const option = document.createElement('option');
    option.value = chapter.key;
    option.textContent = chapter.label + ' (' + chapter.range + ')';
    filter.append(option);
  });

  const renderList = () => {
    const slides = visibleSlides();
    if (!slides.some((slide) => slide.id === state.selectedId) && slides.length) state.selectedId = slides[0].id;
    count.textContent = slides.length + ' / ' + data.slides.length + ' 場面';
    list.innerHTML = slides.length ? slides.map((slide) => {
      const chapter = chapters.get(slide.chapter);
      const active = slide.id === state.selectedId ? ' is-selected' : '';
      return '<li><button class="slide-index__item' + active + '" data-id="' + slide.id + '" style="--chapter:' + chapter.accent + '"><span>' + String(slide.id).padStart(2, '0') + ' · ' + escapeHtml(slide.time) + '</span><strong>' + escapeHtml(slide.title) + '</strong></button></li>';
    }).join('') : '<li class="empty">条件に一致する場面がありません。</li>';
  };

  const renderDetail = () => {
    const slide = selected();
    const chapter = chapters.get(slide.chapter);
    const index = data.slides.findIndex((item) => item.id === slide.id);
    const sourceLinks = (slide.sourceIds || []).map((id) => byId.get(id)).filter(Boolean).map((source) => '<a href="' + escapeHtml(source.url) + '" target="_blank" rel="noopener noreferrer">' + escapeHtml(source.label) + '<span>↗</span></a>').join('');
    const checks = (slide.checks || []).length ? '<section class="checks"><h3>検証・補正</h3><ul>' + slide.checks.map((check) => '<li>' + escapeHtml(check) + '</li>').join('') + '</ul></section>' : '';
    detail.innerHTML = '<div class="detail__meta" style="--chapter:' + chapter.accent + '"><span>' + escapeHtml(chapter.label) + ' · ' + escapeHtml(chapter.range) + '</span><span>場面 ' + slide.id + ' / ' + data.slides.length + '</span></div>' +
      '<div class="frame"><img src="./' + escapeHtml(slide.image) + '" alt="' + escapeHtml(slide.time + ' ' + slide.title + ' の講演画面キャプチャー') + '" onerror="this.hidden=true;this.nextElementSibling.hidden=false"><div class="frame__fallback" hidden><span>場面 ' + String(slide.id).padStart(2, '0') + '</span><strong>' + escapeHtml(slide.title) + '</strong><small>' + escapeHtml(slide.visual) + '</small></div><p>元動画から抽出した講演画面 · ' + escapeHtml(slide.time) + '</p></div>' +
      '<div class="detail__title"><div><p>' + escapeHtml(slide.visual) + '</p><h3>' + escapeHtml(slide.title) + '</h3></div><a href="' + videoUrl(slide.seconds) + '" target="_blank" rel="noopener noreferrer">この時刻から再生 ↗</a></div>' +
      '<section class="layer layer--lecture"><h3>講演内容</h3><p>' + escapeHtml(slide.lecture) + '</p></section>' +
      '<section class="layer layer--explanation"><h3>詳細解説</h3><p>' + escapeHtml(slide.explanation) + '</p></section>' + checks +
      '<div class="detail__bottom"><div class="tags">' + (slide.tags || []).map((tag) => '<span>' + escapeHtml(tag) + '</span>').join('') + '</div><div class="evidence"><b>根拠資料</b>' + sourceLinks + '</div></div>' +
      '<nav class="detail-nav" aria-label="場面の前後移動"><button type="button" data-move="-1" ' + (index === 0 ? 'disabled' : '') + '>← 前の場面</button><span>' + String(slide.id).padStart(2, '0') + ' / ' + data.slides.length + '</span><button type="button" data-move="1" ' + (index === data.slides.length - 1 ? 'disabled' : '') + '>次の場面 →</button></nav>';
  };

  const renderSources = () => {
    sourceList.innerHTML = data.sources.map((source, index) => '<li><a href="' + escapeHtml(source.url) + '" target="_blank" rel="noopener noreferrer"><span>' + String(index + 1).padStart(2, '0') + '</span><strong>' + escapeHtml(source.label) + '</strong><small>' + escapeHtml(source.short) + '</small><b>↗</b></a></li>').join('');
  };
  const render = () => { renderList(); renderDetail(); };

  list.addEventListener('click', (event) => {
    const button = event.target.closest('button[data-id]');
    if (!button) return;
    state.selectedId = Number(button.dataset.id);
    render();
    detail.scrollIntoView({ behavior: 'smooth', block: 'start' });
  });
  detail.addEventListener('click', (event) => {
    const button = event.target.closest('button[data-move]');
    if (!button) return;
    const index = data.slides.findIndex((slide) => slide.id === state.selectedId);
    state.selectedId = data.slides[index + Number(button.dataset.move)].id;
    render();
    detail.scrollIntoView({ behavior: 'smooth', block: 'start' });
  });
  search.addEventListener('input', () => { state.query = normalized(search.value.trim()); render(); });
  filter.addEventListener('change', () => { state.chapter = filter.value; render(); });
  document.addEventListener('keydown', (event) => {
    if (event.target.matches('input, select, textarea')) return;
    if (event.key !== 'ArrowLeft' && event.key !== 'ArrowRight') return;
    const index = data.slides.findIndex((slide) => slide.id === state.selectedId);
    const next = index + (event.key === 'ArrowLeft' ? -1 : 1);
    if (data.slides[next]) { state.selectedId = data.slides[next].id; render(); }
  });
  renderSources();
  render();
})();
