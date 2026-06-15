# CarVault Architecture Explanation

## 1. Project Overview

CarVault is a frontend-only Used Car Listing Platform developed using React and Vite. The application enables users to browse used cars, search by brand/model/variant, apply filters, sort listings, and view detailed vehicle information.

## 2. Technology Stack

| Layer | Technology |
|---------|------------|
| Frontend Framework | React 19 |
| Build Tool | Vite |
| Routing | React Router DOM |
| Styling | Tailwind CSS v4 |
| UI Components | shadcn/ui + Radix UI |
| Icons | Lucide React |
| Carousel | Embla Carousel |
| Infinite Loading | React Infinite Scroll Component |
| Data Source | Static Mock Dataset |

---

## 3. High Level Architecture

```text
┌─────────────────────┐
│       Browser       │
└──────────┬──────────┘
           │
           ▼
┌─────────────────────┐
│   React Application │
└──────────┬──────────┘
           │
    ┌──────┼──────┐
    ▼      ▼      ▼
 Layout  Pages  Components
           │
           ▼
      Data Layer
           │
           ▼
      Mock Dataset
```

---

## 4. Folder Structure

```text
src/
├── assets/
├── components/
│   ├── common/
│   ├── ui/
│   └── skeleton/
├── data/
├── layout/
├── pages/
├── lib/
├── App.jsx
└── main.jsx
```

## 5. Routing Architecture

```text
/
│
├── Landing Page
│
└── /cars
      │
      └── /cars/:carSlug
```

## 6. Component Architecture

```text
CarsListingPage
│
├── SearchBar
├── FilterSidebar
├── SortDropdown
├── CarGrid
│     └── CarCard
├── InfiniteScroll
├── EmptyState
└── SkeletonLoader
```

## 7. Data Flow

```text
User Action
      │
      ▼
Search / Filter / Sort
      │
      ▼
Update React State
      │
      ▼
getCarsListing()
      │
      ▼
Filtered Dataset
      │
      ▼
Render Car Cards
```

## 8. State Management

- Search Query
- Filters
- Sort Option
- Loading State
- Visible Cars State
- Error State

## 9. Performance Optimizations

- Infinite Scroll
- Skeleton Loading
- Reusable Components
- Optimized Rendering
- Lazy Loading Friendly Architecture


## 11. Architecture Diagram

```text
┌───────────────────────────────┐
│            User               │
└───────────────┬───────────────┘
                │
                ▼
┌───────────────────────────────┐
│      React Router Layer       │
└───────────────┬───────────────┘
                │
      ┌─────────┴─────────┐
      ▼                   ▼
┌─────────────┐   ┌─────────────┐
│ Car Listing │   │ Car Details │
└──────┬──────┘   └──────┬──────┘
       │                 │
       └────────┬────────┘
                ▼
┌───────────────────────────────┐
│ Reusable Components Layer     │
└───────────────┬───────────────┘
                ▼
┌───────────────────────────────┐
│        Data Layer             │
└───────────────┬───────────────┘
                ▼
┌───────────────────────────────┐
│       Mock Car Dataset        │
└───────────────────────────────┘
```

## 12. Conclusion

CarVault follows a modular frontend architecture emphasizing separation of concerns, reusability, maintainability, and scalability. The project is designed so that a real backend can be integrated with minimal architectural changes.
