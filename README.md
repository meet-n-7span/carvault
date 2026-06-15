# CarVault

CarVault is a used car listing platform built as a frontend evaluation project. It allows users to browse a curated inventory of pre-owned cars, search by brand/model/variant, apply multiple filters, sort results, and open a dedicated details page for each car.

The app is currently powered by static mock data and simulates API calls with delayed Promise-based helpers, which makes it easy to replace with a real backend later.

[🚀 Live Demo](https://carvault-orpin.vercel.app/)

## Features

- Landing page with shared navigation
- Car listing page at `/cars`
- Car detail page at `/cars/:carSlug`
- Debounced search by brand, model, and variant
- Multi-filter sidebar for price, year, km driven, brand, fuel type, transmission, body type, and ownership
- Client-side sorting for price, registration year, km driven, and relevance
- Infinite scroll for progressive car loading
- Skeleton loading states for listing and detail pages
- Empty state when no cars match the selected filters
- Image gallery carousel with thumbnail navigation on the detail page

## Tech Stack

- React 19
- Vite 8
- React Router DOM 7
- Tailwind CSS 4
- shadcn-style UI building blocks
- Radix UI primitives
- Lucide React icons
- Embla Carousel
- React Infinite Scroll Component

## Build And Run

### Prerequisites

- Node.js 18+ recommended
- npm

### Install dependencies

```bash
npm install
```

### Start the development server

```bash
npm run dev
```

Open the local URL shown by Vite, usually `http://localhost:5173`.

### Create a production build

```bash
npm run build
```

### Preview the production build

```bash
npm run preview
```

### Lint the project

```bash
npm run lint
```

## Available Scripts

- `npm run dev` starts the Vite development server
- `npm run build` creates the production bundle
- `npm run preview` serves the built app locally
- `npm run lint` runs ESLint

## Project Structure

```text
src/
  assets/                Static images such as logo and favicon
  components/
    common/              Feature-oriented shared UI pieces
    skeleton/            Loading placeholders
    ui/                  Reusable UI primitives
  data/                  Mock car dataset and data access helpers
  layout/                Shared page layout
  lib/                   Utility helpers
  pages/                 Route-level screens
  App.jsx                Route definitions
  main.jsx               React entry point
  index.css              Global styles and theme tokens
```
## Packages Used

### Core packages

- `vite`, `@vitejs/plugin-react` for development and bundling
- `react`, `react-dom` for UI rendering
- `javascript` as a variant
- `react-router-dom` for client-side routing

### Styling and UI

- `tailwindcss` and `@tailwindcss/vite` for styling
- `shadcn` for Tailwind-compatible UI styling support
- `radix-ui` for accessible UI primitives used by components like select, checkbox, navigation menu, avatar, slider, and label
- `class-variance-authority` for component variants
- `clsx` and `tailwind-merge` for class name composition
- `tw-animate-css` for animation utilities
- `@fontsource-variable/instrument-sans` for typography

### Feature packages

- `lucide-react` for icons
- `embla-carousel-react` for the detail page image carousel
- `react-infinite-scroll-component` for infinite scroll on the listing page


## Video
[![Watch the CarVault Walkthrough](https://loom.com)](https://www.loom.com/share/daeda27da2e044e4bb11f6316e3afa33)
