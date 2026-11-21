export const GA_MEASUREMENT_ID = 'G-KWQ1QKJK32';

declare global {
  interface Window {
    dataLayer: unknown[];
    gtag?: (...args: unknown[]) => void;
  }
}

export function trackPageView(pagePath: string, pageTitle?: string): void {
  if (typeof window === 'undefined' || typeof window.gtag !== 'function') {
    return;
  }

  window.gtag('event', 'page_view', {
    send_to: GA_MEASUREMENT_ID,
    page_title: pageTitle || document.title,
    page_location: `${window.location.origin}${pagePath}`,
    page_path: pagePath,
  });
}
