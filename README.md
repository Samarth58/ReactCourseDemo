# React Jobs App - UI Revamp

This project is a completely redesigned and modernized version of the React Jobs application. It retains all the core functionality from the React Crash Course (browsing, viewing details, adding, editing, and deleting jobs) while introducing a sleek, product-grade, and highly responsive user interface.

**Tech Stack**: React 18 + Vite + Tailwind CSS + JSON Server

## 🎨 UI & UX Improvements

1. **Modern Typography & Brand Colors**:
   - Integrated the **Inter** font family globally for clear, geometric readability.
   - Replaced basic blue/indigo backgrounds with a curated **Indigo + Slate** neutral color system.
   - Accent badges and states use Emerald (positive actions, high salary) and Rose (destructive action, location).

2. **Refined Core Components**:
   - **Navbar**: Overhauled into a sticky navigation header featuring a modern glassmorphic background blur (`backdrop-blur-md`) and a responsive **Mobile Hamburger Menu** toggle.
   - **Hero Section**: Designed a premium, high-contrast dark section (`bg-slate-900`) with subtle gradients, sharp typography, and a prominent CTA button.
   - **Job Cards & Grid**: Implemented rounded corner cards (`rounded-2xl`) with micro-interaction hover transformations (`hover:-translate-y-1 hover:shadow-lg`). Added reusable badges for job types.
   - **Forms (Add/Edit Job)**: Transformed standard form inputs to use responsive grid rows, polished placeholder styling, outline focus rings (`focus:ring-2 focus:ring-indigo-500`), and full-width buttons.

3. **Polished UX Details**:
   - **Skeleton Loading States**: Displays high-fidelity loading skeleton cards on the job listing grid while fetching data to minimize layout shifts.
   - **Empty States & Error Handling**: Displays a beautifully designed `EmptyState` component when no listings are found or when there's an API error.
   - **Pure Tailwind Animations**: Replaced the external `react-spinners` dependency with a custom loader leveraging Tailwind's native `animate-spin` utility.

---

## 🚀 Running Locally

To run the application, make sure you have [Node.js](https://nodejs.org/) installed, and follow these steps:

### 1. Install Dependencies
```bash
npm install
```

### 2. Start the Mock JSON Server
The backend server runs JSON Server on port `5000` (which Vite proxies calls to).
```bash
npm run server
```

### 3. Start the Development Server
Runs Vite dev server on port `3000`.
```bash
npm run dev
```

Open your browser and navigate to [http://localhost:3000](http://localhost:3000).

---

## 🧹 Quality Checks Passed
- **0 ESLint errors** (`npm run lint` passes completely)
- **Production Build Success** (`npm run build` compiles with no issues)
- Zero browser console errors when running locally.
