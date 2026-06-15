# CarVault

CarVault is a used car listing platform built as a frontend evaluation project. It allows users to browse a curated inventory of pre-owned cars, search by brand/model/variant, apply multiple filters, sort results, and open a dedicated details page for each car.

The app is currently powered by static mock data and simulates API calls with delayed Promise-based helpers, which makes it easy to replace with a real backend later.

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

## Architecture Explanation

CarVault follows a simple frontend-only layered structure:

### 1. App shell and routing

- `src/main.jsx` mounts the app inside `BrowserRouter`
- `src/App.jsx` defines route mapping
- `src/layout/common-layout.jsx` wraps all pages with the shared navbar and page container

Current routes:

- `/` for the landing page
- `/cars` for the listing page
- `/cars/:carSlug` for the detail page

### 2. Pages as feature entry points

- `src/pages/landing-page.jsx` contains the introductory page
- `src/pages/cars-listing.jsx` manages listing filters, sorting, debounced search input state, and infinite scroll state
- `src/pages/car-detail.jsx` loads one car by slug and renders its image gallery, overview, and pricing details

Each page composes reusable UI instead of embedding all markup directly.

### 3. Reusable components

- `src/components/common` contains shared feature components such as the navbar, search bar, filter sidebar, and image carousel
- `src/components/ui` contains reusable UI primitives such as button, badge, select, card, checkbox, slider, input, avatar, and navigation menu
- `src/components/skeleton` contains dedicated loading placeholders for better perceived performance

This separation keeps route logic in pages and presentation logic in reusable components.

### 4. Data layer

- `src/data/cars-data.js` contains the mock inventory dataset
- The same file also exposes helper functions like `getCarsListing()` and `getCarBySlug()`
- These helpers simulate asynchronous API behavior using `Promise` plus `setTimeout`

This gives the project an API-like boundary even though the data is local today.

### 5. Styling system

- `src/index.css` imports Tailwind CSS v4, `tw-animate-css`, shadcn styles, and the Instrument Sans font
- Theme tokens such as colors, radius values, and typography are defined with CSS custom properties
- Utility-first styling is used directly in JSX for fast iteration and consistent UI composition

### 6. Alias setup

The project uses the `@` alias for cleaner imports:

- `jsconfig.json` maps `@/*` to `src/*`
- `vite.config.js` resolves `@` to the `src` directory

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

### Tooling

- `eslint`, `@eslint/js`, `eslint-plugin-react-hooks`, `eslint-plugin-react-refresh`, and `globals` for linting

### Note

- `zustand` is installed in `package.json`, but the current implementation uses local React state instead of a global store

## How The Data Flow Works

1. The listing page stores filter and sort values in local React state.
2. Whenever those values change, `getCarsListing()` is called with the current filter object.
3. The mock data layer filters, sorts, and maps raw car records into listing-card-friendly objects.
4. The page keeps a smaller `visibleCars` slice for infinite scroll rendering.
5. When a user opens a car detail route, `getCarBySlug()` returns the matching record.
6. The detail page renders a richer view using the full car object.

## Current Implementation Notes

- Data is static and lives entirely on the frontend
- Search and filtering are client-side
- Images are loaded from external URLs in the mock dataset
- The compare feature mentioned in the assignment is not implemented yet
- URL-synced filters and backend/API integration are not implemented yet

## Verification

Production build was verified successfully with:

```bash
npm.cmd run build
```
