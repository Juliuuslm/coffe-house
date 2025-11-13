import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

/**
 * Initialize all GSAP animations
 */
export function initGSAPAnimations() {
  // Fade-in reveals on scroll
  initScrollReveals();

  // Parallax effects
  initParallax();

  // Stats counter animations
  initCounters();

  // Text stagger animations
  initTextAnimations();

  // Card hover effects
  initCardHoverEffects();
}

/**
 * Fade-in reveals for elements on scroll
 */
function initScrollReveals() {
  // Fade up animation
  const fadeUpElements = document.querySelectorAll('[data-gsap="fade-up"]');
  fadeUpElements.forEach((element) => {
    gsap.from(element, {
      y: 60,
      opacity: 0,
      duration: 0.8,
      ease: 'power2.out',
      scrollTrigger: {
        trigger: element,
        start: 'top 90%',
        toggleActions: 'play none none none',
      },
    });
  });

  // Fade in animation
  const fadeElements = document.querySelectorAll('[data-gsap="fade-in"]');
  fadeElements.forEach((element) => {
    gsap.from(element, {
      opacity: 0,
      duration: 1,
      ease: 'power2.out',
      scrollTrigger: {
        trigger: element,
        start: 'top 90%',
        toggleActions: 'play none none none',
      },
    });
  });

  // Scale in animation
  const scaleElements = document.querySelectorAll('[data-gsap="scale-in"]');
  scaleElements.forEach((element) => {
    gsap.from(element, {
      scale: 0.8,
      opacity: 0,
      duration: 0.6,
      ease: 'back.out(1.7)',
      scrollTrigger: {
        trigger: element,
        start: 'top 90%',
        toggleActions: 'play none none none',
      },
    });
  });

  // Stagger children
  const staggerContainers = document.querySelectorAll('[data-gsap="stagger-children"]');
  staggerContainers.forEach((container) => {
    const children = Array.from(container.children);

    // Set initial state with gsap.set to ensure visibility by default
    gsap.set(children, { opacity: 1, y: 0 });

    gsap.from(children, {
      y: 40,
      opacity: 0,
      duration: 0.6,
      stagger: 0.1,
      ease: 'power2.out',
      immediateRender: false,
      scrollTrigger: {
        trigger: container,
        start: 'top 85%',
        toggleActions: 'play none none none',
        once: true,
      },
    });
  });
}

/**
 * Parallax effects for backgrounds
 */
function initParallax() {
  const parallaxElements = document.querySelectorAll('[data-gsap="parallax"]');

  parallaxElements.forEach((element) => {
    const speed = element.getAttribute('data-speed') || '0.5';
    const speedNum = parseFloat(speed);

    gsap.to(element, {
      y: () => window.innerHeight * speedNum,
      ease: 'none',
      scrollTrigger: {
        trigger: element,
        start: 'top bottom',
        end: 'bottom top',
        scrub: true,
      },
    });
  });
}

/**
 * Animated counters for stats
 */
function initCounters() {
  const counters = document.querySelectorAll('[data-gsap="counter"]');

  counters.forEach((counter) => {
    const target = parseInt(counter.getAttribute('data-target') || '0');
    const suffix = counter.getAttribute('data-suffix') || '';
    const duration = parseFloat(counter.getAttribute('data-duration') || '2');

    const obj = { value: 0 };

    ScrollTrigger.create({
      trigger: counter,
      start: 'top 80%',
      once: true,
      onEnter: () => {
        gsap.to(obj, {
          value: target,
          duration: duration,
          ease: 'power1.out',
          onUpdate: () => {
            counter.textContent = Math.ceil(obj.value) + suffix;
          },
        });
      },
    });
  });
}

/**
 * Text stagger animations (for headings, paragraphs)
 */
function initTextAnimations() {
  // Split text reveal (word by word)
  const textStaggerElements = document.querySelectorAll('[data-gsap="text-stagger"]');

  textStaggerElements.forEach((element) => {
    const words = element.textContent?.split(' ') || [];
    element.innerHTML = words.map((word) => `<span class="inline-block">${word}</span>`).join(' ');

    const wordElements = element.querySelectorAll('span');

    gsap.from(wordElements, {
      y: 20,
      opacity: 0,
      duration: 0.5,
      stagger: 0.05,
      ease: 'power2.out',
      scrollTrigger: {
        trigger: element,
        start: 'top 85%',
        toggleActions: 'play none none none',
      },
    });
  });
}

/**
 * 3D tilt effect on cards
 */
function initCardHoverEffects() {
  const cards = document.querySelectorAll('[data-gsap="card-tilt"]');

  cards.forEach((card) => {
    const element = card as HTMLElement;

    element.addEventListener('mousemove', (e) => {
      const rect = element.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      const centerX = rect.width / 2;
      const centerY = rect.height / 2;

      const rotateX = ((y - centerY) / centerY) * -10;
      const rotateY = ((x - centerX) / centerX) * 10;

      gsap.to(element, {
        rotateX: rotateX,
        rotateY: rotateY,
        duration: 0.3,
        ease: 'power2.out',
        transformPerspective: 1000,
      });
    });

    element.addEventListener('mouseleave', () => {
      gsap.to(element, {
        rotateX: 0,
        rotateY: 0,
        duration: 0.5,
        ease: 'power2.out',
      });
    });
  });
}

/**
 * Refresh ScrollTrigger (call after dynamic content loads)
 */
export function refreshScrollTrigger() {
  ScrollTrigger.refresh();
}

/**
 * Kill all ScrollTriggers (cleanup)
 */
export function killScrollTriggers() {
  ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
}
