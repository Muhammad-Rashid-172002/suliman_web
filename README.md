# Suliman Khan — Personal Portfolio & Executive Profile
> **Flutter Developer & Chief Operating Officer (COO) at [KorvenzaTech](https://korvenzatech.com/)**

A high-performance, dark-themed personal portfolio and client inquiry website designed to showcase cross-platform mobile engineering expertise and technology operations leadership. Engineered for international clients, startups, and tech founders.

---

## 🌟 Professional Identity & Highlights

- **Name:** Suliman Khan
- **Primary Technical Role:** Flutter Developer (Dart, Firebase, REST APIs, BLoC, Riverpod)
- **Leadership Role:** Chief Operating Officer (COO) at **KorvenzaTech**
- **Official Company Portal:** [https://korvenzatech.com/](https://korvenzatech.com/)
- **Education:** BS Software Engineering (BSSE)
- **Verified Experience:** 3+ Years in Cross-Platform Mobile Architecture & Systems Delivery

---

## 🚀 Key Features

1. **Dual-Role Value Proposition:**
   - Highlights hands-on Flutter development expertise (clean architecture, 60fps rendering, offline-first persistence, Firebase integration).
   - Showcases COO leadership at KorvenzaTech (day-to-day operations, sprint governance, international client communication, and team delivery).

2. **Official KorvenzaTech Integrations:**
   - Prominent, elegant company profile card with direct links to [KorvenzaTech](https://korvenzatech.com/) and [Services](https://korvenzatech.com/services).
   - Explicit distinction between individual Flutter developer engagements and full-team enterprise deliveries.

3. **Multi-Page Architecture:**
   - `/` **Home:** High-impact hero, verified profile photo, core highlights, featured project showcases, and company card.
   - `/about` **About Me:** Professional biography, academic background, technical skills breakdown, and development methodology.
   - `/projects` **Projects Showcase:** Real case studies with category filtering (Mobile, Firebase, Enterprise).
   - `/projects/:slug` **Deep-Dive Case Study:** Architectural decisions, problem/solution comparisons, key features, and source repositories.
   - `/services` **Services:** 7 core offerings explaining business value in clear English, with transparent FAQ.
   - `/leadership` **Leadership & COO:** "Technology Leadership Meets Engineering" connecting hands-on code with operational excellence.
   - `/contact` **International Inquiry:** Fully validated client intake form with project scope estimator, local persistence, summary copy, and mailto fallback.

4. **Interactive Timeline & Scope Estimator:**
   - Interactive widget calculating sprints, delivery duration, and investment ranges for mobile apps, which can be applied directly to the contact inquiry.

---

## 🛠️ Tech Stack

- **Framework:** React 19 + Vite 8
- **Routing:** React Router v7 (`react-router-dom`)
- **Styling:** Tailwind CSS v4 (`@tailwindcss/vite`) with custom dark navy palette (`#07090e`, `#0c1017`, `#0f1624`) and electric cyan/blue accents
- **Typography:** Inter & Plus Jakarta Sans
- **Icons:** Lucide React
- **Animations:** Motion (`motion/react`) & Tailwind transitions

---

## 💻 Local Development Setup

### Prerequisites
- Node.js 18+ or 20+
- npm or pnpm

### Installation
```bash
# Clone the repository
git clone https://github.com/your-username/suliman-khan-portfolio.git

# Navigate to project directory
cd suliman-khan-portfolio

# Install dependencies
npm install

# Start local development server
npm run dev
```

Visit `http://localhost:3000` (or the port specified by Vite) in your browser.

---

## 📦 Production Build

```bash
# Run TypeScript checks and create production bundle
npm run build

# Preview production build locally
npm run preview
```

The compiled assets will be output to the `dist/` directory.

---

## 🚀 Deployment Instructions

### Deploy to Vercel
1. Push your repository to GitHub.
2. Sign in to [Vercel](https://vercel.com) and click **"Add New Project"**.
3. Import your GitHub repository.
4. Framework Preset: **Vite**.
5. Build Command: `npm run build`
6. Output Directory: `dist`
7. Click **Deploy**.

> Note: The included `vercel.json` automatically configures single-page application (SPA) routing rewrites so direct navigation to `/about`, `/projects`, and `/contact` works seamlessly without 404 errors.

### Deploy to GitHub Pages or Netlify
For Netlify, ensure a `_redirects` file with `/* /index.html 200` is placed in `public/` (or use standard SPA redirect rules in Netlify configuration).

---

## 📬 Contact Form Integration

The contact form is pre-configured with client-side validation, inquiry ID generation, and local backup storage in `localStorage`. 

To forward submissions to an email service or backend endpoint (such as Formspree, Resend, or your custom API):
1. Create a form endpoint at [Formspree](https://formspree.io) or similar service.
2. Add your endpoint to `.env`:
   ```env
   VITE_CONTACT_FORM_ENDPOINT="https://formspree.io/f/your_form_id"
   ```
3. Update `handleSubmit` in `src/pages/ContactPage.tsx` to POST formData directly to `import.meta.env.VITE_CONTACT_FORM_ENDPOINT`.

---

## 📄 License & Credits

- Portfolio of **Suliman Khan** — Flutter Developer & COO at [KorvenzaTech](https://korvenzatech.com/).
- Built with modern web standards and design discipline.
