import type { Metadata } from 'next';

const pageList = [
  ['a11y-gone-wrong', true],
  ['abbr', true],
  ['accesskey', true],
  ['accessiblenameimg', true],
  ['csunmobile-accordion-bad', true],
  ['csunmobile-accordion-aria', true],
  ['accordion-heading', true],
  ['accounting-tables', true],
  ['alerttimer', true],
  ['altbgimg', true],
  ['annotated-tables', true],
  ['apple-system-css-font', true],
  ['aria-alert-assertive-validation', true],
  ['aria-alert-validation', true],
  ['aria-atomic-relevant', true],
  ['aria-describedby-labelledby-link-purpose', true],
  ['aria-describedby-validation', true],
  ['aria-expanded', true],
  ['aria-haspopup', false],
  ['aria-hidden', true],
  ['aria-invalid', true],
  ['aria-labelledby', true],
  ['aria-live-slider', true],
  ['aria-menubar', true],
  ['aria-pressed', true],
  ['aria-role-alertdialog-setTimeout', false],
  ['aria-role-alertdialog', false],
  ['aria-role-tooltip', false],
  ['aria-roledescription', false],
  ['aria-table', false],
  ['aria-tabpanel', false],
  ['ariacountdown', true],
  ['audio-slider', false],
  ['autofocusvstabindex', false],
  ['autoplay-loop-muted-controls', true],
  ['badav', true],
  ['bootstrap-dropdown', true],
  ['button', false],
  ['buttons', true],
  ['canvas', false],
  ['checkbox', true],
  ['contact-before', false],
  ['contact-after-aria', false],
  ['contact-after-html5', false],
  ['css-content-new-window', true],
  ['css-line-through-del-ins-accessibility', false],
  ['css3speech', false],
  ['css4altgeneratedcontent', true],
  ['csstext', false],
  ['customcontrols', false],
  ['dates', false],
  ['data-tables', false],
  ['detail-message-dialog', true],
  ['details-summary', false],
  ['dialog', true],
  ['dialog-DOM', false],
  ['draggable', false],
  ['empty-headings', true],
  ['fake-button', true],
  ['focus-after-page-load', false],
  ['figure-figcaption', true],
  ['form-bad', false],
  ['form-aria', false],
  ['form-html5', false],
  ['form-errors-top', false],
  ['fieldsetlegend', false],
  ['focusvisible', false],
  ['goodav', true],
  ['hamburger-menu', false],
  ['headings', false],
  ['highlights', false],
  ['html5-input-types', false],
  ['html5-placeholder-contrast', false],
  ['html5-structural', false],
  ['html5-video-a11y', false],
  ['iframe', false],
  ['iframe-voiceover-scrolling-bug', false],
  ['imageAndTextLink', false],
  ['img', false],
  ['inpagelinks', false],
  ['inputSubmitTitle', false],
  ['ios8bugs', false],
  ['iosvocheatsheet', false],
  ['jaws-ie-tabindex-bug', false],
  ['jsalertconfirmprompt', false],
  ['jqueryui-autocomplete', false],
  ['landmarks', false],
  ['layout-table-role-presentation', false],
  ['linkpurpose', false],
  ['loading-indicator', false],
  ['mathml', false],
  ['missingfieldsetlegend', false],
  ['mobilechecklist', false],
  ['mobileforma11y', false],
  ['multithumb-slider', false],
  ['numericRanges', false],
  ['obstacle-course', false],
  ['parsing', false],
  ['positionbug', false],
  ['positivetabindexfail', false],
  ['progressbar', false],
  ['quad', false],
  ['repeating-buttons-accessibilty', false],
  ['remove-filter-buttons', false],
  ['rolegroup', false],
  ['role-alert', false],
  ['rwd-aria-menu-button', false],
  ['rwd-aria-menubar', false],
  ['rwd-tabs-accordion', false],
  ['rwdstate', false],
  ['section', false],
  ['select', false],
  ['select-android', false],
  ['select-option', false],
  ['semanticelements', false],
  ['semanticmobile', false],
  ['session-timeout-alertdialog', false],
  ['spa-focus', false],
  ['svg', false],
  ['svg-bar-chart', false],
  ['svg-line-chart', false],
  ['tableA11yTest', false],
  ['talkbackcheatsheet', false],
  ['timeout', false],
  ['title-aria-label', false],
  ['title-keyboard', false],
  ['tooltip', false],
  ['underlines', false],
  ['voiceover-clickable', false],
  ['voiceover-ios-html-aria-support', false],
  ['voiosmultifocusbug', false],
  ['web-speech-api', false],
  ['youtubeHTML5embed', false],
] as const;

export default function Page() {
  const base = '/documents/translations/pauljadam-modern-web-a11y-demos';

  return (
    <>
      <h1>日本語訳：PaulJAdam's Modern Web Accessibility Demos</h1>

      <p className="mb-4">
        原文：<a href="http://www.pauljadam.com/demos/">PaulJAdam's Modern Web Accessibility Demos</a>
      </p>

      <ul>
        {pageList.map(([path, isExist]) => {
          return <li key={path}>{isExist ? <a href={`${base}/${path}`}>{path}.html</a> : `${path}.html`}</li>;
        })}
      </ul>
    </>
  );
}

export const metadata: Metadata = {
  title: "日本語訳：PaulJAdam's Modern Web Accessibility Demos",
  description: 'Generated by create next app',
};
