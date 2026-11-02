const s = (inner: string) =>
  `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${inner}</svg>`;
export const arrowRight = s('<line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/>');
export const menu = s('<line x1="3" y1="12" x2="21" y2="12"/><line x1="3" y1="6" x2="21" y2="6"/><line x1="3" y1="18" x2="21" y2="18"/>');
export const close = s('<line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/>');
export const plus = s('<line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/>');
export const minus = s('<line x1="5" y1="12" x2="19" y2="12"/>');
/** Logo A: a ring with a diagonal marker line. */
export const logo = (stroke = 6) =>
  `<svg viewBox="0 0 64 64" fill="none" aria-hidden="true"><circle cx="32" cy="32" r="21" stroke="currentColor" stroke-width="${stroke}"/><line x1="37.6" y1="26.4" x2="56" y2="8" stroke="currentColor" stroke-width="${stroke}" stroke-linecap="square"/></svg>`;
