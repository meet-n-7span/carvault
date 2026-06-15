# Final Evaluation Assignment

**Project:** Used Cars Listing Platform

---

## Objective

Develop a desktop Used Cars Listing page similar to Cars24. The application should allow users to browse, search, filter, sort, and view used cars.

---

## Technical Requirements

### Tech Stack (Preferred)

- React / Next.js / Vue.js / Nuxt
- Tailwind CSS
- Redux / Zustand / Context API
- Mock API (JSON Server or Static JSON)

---

## Pages

### 1. Car Listing Page

**Route:** `/cars`

Display list of available cars.

#### Header Section

**Search Bar** — User can search by:
- Car Brand
- Car Model
- Variant

> Examples: Hyundai, Creta, Swift, Nexon

Search should work instantly.

---

#### Filter Sidebar

| Filter | Type | Options / Examples |
|---|---|---|
| **Price Range** | Range Slider | ₹1 Lakh – ₹5 Lakh, ₹5 Lakh – ₹10 Lakh |
| **Brand** | Multi Select | Maruti, Hyundai, Tata, Honda, Mahindra, Toyota |
| **Fuel Type** | Checkbox | Petrol, Diesel, CNG, Electric |
| **Transmission** | Checkbox | Manual, Automatic |
| **Body Type** | Checkbox | Hatchback, Sedan, SUV, MUV |
| **Ownership** | Checkbox | 1st Owner, 2nd Owner, 3rd Owner |
| **Registration Year** | Range Filter | 2015 – 2025 |
| **Kilometer Driven** | Range Filter | 0 – 1,50,000 KM |

---

#### Sorting

Dropdown with options:
- Relevance
- Price Low to High
- Price High to Low
- Newest First
- Oldest First
- KM Low to High

---

#### Car Card Component

Each card should contain:

- **Image** — Car image
- **Basic Details** — Brand, Model, Variant, Registration Year
- **Specifications** — Fuel Type, Transmission, Ownership, KM Driven
- **Pricing** — Original Price, Discounted Price, EMI Per Month
- **Badge** — e.g. Assured, Top Pick, Great Deal
- **CTA Buttons** — View Details, Compare

---

#### Compare Feature

- User can compare a **maximum of 3 cars**
- Display comparison modal / table
- Comparison attributes:
  - Price
  - Fuel Type
  - Transmission
  - Year
  - Ownership
  - Mileage
  - Engine

---

#### Pagination

- Infinite Scroll *(Bonus if both Infinite Scroll + traditional Pagination are supported)*

---

### 2. Car Details Page

**Route:** `/cars/:id`

#### Gallery
- Multiple Images
- Thumbnail Preview

#### Car Information
- Brand, Model, Variant
- Year, Ownership
- Fuel, Transmission
- Engine, Mileage

#### Price Information
- Price
- EMI Estimate

---

## Loading States

Implement:
- Skeleton Loaders
- Empty States
- Error States

---

## Performance Requirements

- Lazy Loading Images
- Component Reusability
- Code Splitting
- Optimized Rendering

---

## Reusable Components

Create the following reusable components:

`Button` · `Input` · `SearchBar` · `Select` · `Checkbox` · `Modal` · `Badge` · `Card` · `Pagination` · `RangeSlider` · `EmptyState` · `Skeleton`

---

## Bonus Features

- [ ] URL-based Filters
- [ ] Share Car
- [ ] Compare Page
- [ ] Recently Viewed Section
- [ ] SEO Meta Tags
- [ ] PWA Support
- [ ] Animations using Framer Motion

---

## Submission Checklist

1. [ ] GitHub Repository
2. [ ] Live Deployment
3. [ ] README Documentation
4. [ ] Architecture Explanation
5. [ ] Screen Recording (5 Minutes)

---

## Estimated Completion Time

**4 Days**
