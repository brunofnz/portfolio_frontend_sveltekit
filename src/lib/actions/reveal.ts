import type { Action } from 'svelte/action';

interface RevealOptions {
  delay?: number;
  threshold?: number;
}

export const reveal: Action<HTMLElement, RevealOptions | undefined> = (node, options = {}) => {
  const { delay = 0, threshold = 0.15 } = options;

  if (typeof window === 'undefined') return {};
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return {};

  node.classList.add('opacity-0');
  if (delay) node.style.animationDelay = `${delay}ms`;

  const observer = new IntersectionObserver(
    ([entry]) => {
      if (!entry.isIntersecting) return;
      node.classList.remove('opacity-0');
      node.classList.add('animate-slide-up');
      observer.disconnect();
    },
    { threshold, rootMargin: '0px 0px -80px 0px' }
  );
  observer.observe(node);

  return { destroy: () => observer.disconnect() };
};
