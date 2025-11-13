import Lenis from 'lenis';

let lenis: Lenis | null = null;

export function initSmoothScroll() {
  // Initialize Lenis
  lenis = new Lenis({
    duration: 1.2,
    easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    orientation: 'vertical',
    gestureOrientation: 'vertical',
    smoothWheel: true,
    wheelMultiplier: 1,
    smoothTouch: false,
    touchMultiplier: 2,
    infinite: false,
  });

  // Request animation frame
  function raf(time: number) {
    lenis?.raf(time);
    requestAnimationFrame(raf);
  }

  requestAnimationFrame(raf);

  // Add to window for debugging
  if (typeof window !== 'undefined') {
    (window as any).lenis = lenis;
  }

  return lenis;
}

export function destroySmoothScroll() {
  if (lenis) {
    lenis.destroy();
    lenis = null;
  }
}

export function scrollTo(target: string | number | HTMLElement, options?: { offset?: number; duration?: number }) {
  if (!lenis) return;

  lenis.scrollTo(target, {
    offset: options?.offset || 0,
    duration: options?.duration,
  });
}

export function getLenis() {
  return lenis;
}
