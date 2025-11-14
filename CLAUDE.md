# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Coffee House is a modern, statically-generated website built with Astro 3.6.5, featuring a hybrid architecture that combines Astro components with React islands for interactive functionality. The site showcases a coffee shop with menu, gallery, reservations, and contact features.

## Development Commands

```bash
# Install dependencies (uses pnpm)
pnpm install

# Start development server (localhost:4321)
pnpm dev

# Build for production (output to ./dist/)
pnpm build

# Preview production build locally
pnpm preview

# Run Astro CLI commands
pnpm astro [command]
```

## Architecture & Design Patterns

### Hybrid Component Strategy

The project uses a **islands architecture** pattern:

- **Astro components** (`.astro`): Static content, layouts, and page structure
  - Located in `src/components/astro/` and `src/layouts/`
  - Used for SEO-critical content and static sections

- **React components** (`.tsx`): Interactive UI elements requiring client-side state
  - Located in `src/components/react/`
  - Examples: forms, sliders, filters, reservation system
  - Use `client:load`, `client:visible`, or `client:idle` directives in Astro

### State Management

- **Zustand** for global state management
  - `src/utils/toast-store.ts`: Global toast notification system
  - Import pattern: `import { useToastStore, useToast } from '@/utils/toast-store'`

### Animation System

**GSAP with ScrollTrigger** powers all scroll-based animations:

- Initialized in `BaseLayout.astro` on page load and during view transitions
- Core animation script: `src/scripts/gsap-animations.ts`
- **Important**: Animations are cleaned up and reinitiated on Astro view transitions to prevent duplicates

**Animation data attributes** (add to HTML elements):
- `data-gsap="fade-up"` - Fade in from bottom
- `data-gsap="fade-in"` - Simple fade in
- `data-gsap="scale-in"` - Scale up fade in
- `data-gsap="stagger-children"` - Stagger child animations
- `data-gsap="parallax"` - Parallax scroll effect (use `data-speed="0.5"`)
- `data-gsap="counter"` - Animated number counter (use `data-target="100"` and `data-suffix="+"`)
- `data-gsap="text-stagger"` - Word-by-word text reveal
- `data-gsap="card-tilt"` - 3D tilt effect on hover

### Smooth Scrolling

- **Lenis** smooth scroll library initialized in `src/scripts/smooth-scroll.ts`
- Automatically cleaned up and reinitiated on view transitions
- Integrated with GSAP ScrollTrigger

### Layout Hierarchy

```
BaseLayout.astro (root)
├── SEO meta tags
├── Font preloading
├── View transitions setup
├── Global scripts (smooth scroll, GSAP)
└── Toast container

MainLayout.astro (extends BaseLayout)
├── Header component
├── Page content slot
├── Footer component
└── ScrollToTop button
```

### Data Organization

Static data files in `src/data/`:
- `menu.ts` - Menu items and categories (uses `MenuItem` interface)
- `gallery.ts` - Gallery images
- `team.ts` - Team member profiles
- `blog.ts` - Blog posts
- `testimonials.ts` - Customer testimonials

All data files export TypeScript interfaces and typed data arrays.

### Styling System

**Tailwind CSS** with extensive custom configuration:

**Custom color palette:**
- Primary: `#DD5903` (orange, 50-900 shades)
- Secondary: `#111111` (dark gray, 50-900 shades)
- Body text: `#6E777D`

**Typography:**
- Primary font (headings): `Arapey` (serif)
- Secondary font (body): `Plus Jakarta Sans` (sans-serif)
- Custom font sizes: `display`, `h1-h6`, `body-lg`, `body`, `body-sm`

**Custom component classes** (defined in `tailwind.config.mjs`):
- Buttons: `.btn`, `.btn-primary`, `.btn-secondary`, `.btn-white`, `.btn-lg`, `.btn-sm`
- Containers: `.container-custom`, `.container-wide`
- Sections: `.section-padding`, `.section-padding-sm`
- Cards: `.card`, `.card-hover`
- Typography: `.heading-primary`, `.heading-secondary`, `.text-body`

### Form Handling

React forms use:
- **React Hook Form** for form state management
- **Zod** for validation schemas
- **@hookform/resolvers** for Zod integration

Pattern:
```tsx
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
```

### Image Optimization

- Uses Astro's built-in image optimization with **Sharp**
- Remote images allowed from: `images.unsplash.com`
- Custom component: `src/components/astro/OptimizedImage.astro`
- Service: `astro/assets/services/sharp`

### View Transitions

- Enabled globally via `<ViewTransitions />` in BaseLayout
- Animations and smooth scroll are properly cleaned up and reinitiated on transitions
- Lifecycle handled via `astro:page-load` events

## Key Integration Points

### Adding a new page:

1. Create `.astro` file in `src/pages/`
2. Import and use `MainLayout` for consistent header/footer
3. Add GSAP data attributes to elements needing animation
4. Page auto-routes based on filename

### Adding interactive React components:

1. Create component in `src/components/react/`
2. Import into `.astro` page
3. Specify client directive: `<Component client:load />` or `client:visible`
4. Use Zustand for global state if needed

### Using toast notifications:

```tsx
import { useToast } from '@/utils/toast-store';

const toast = useToast();
toast.success('Success message');
toast.error('Error message');
```

### Working with galleries:

The project uses **PhotoSwipe** for image galleries. See `GalleryGrid.tsx` for implementation.

### Sliders/Carousels:

Uses **Swiper** library. See `HeroSlider.tsx` and `TestimonialsSlider.tsx` for implementation patterns.

## Important Notes

- **Package manager**: Always use `pnpm`, not npm or yarn
- **Import alias**: Use `@/` for imports (maps to `src/`)
- **Output**: Static site generation (SSG) - no server-side rendering
- **Astro version**: 3.6.5 (specific version pinned)
- **Dark mode**: Configured in Tailwind with `class` strategy
- **Build output**: `./dist/` directory
