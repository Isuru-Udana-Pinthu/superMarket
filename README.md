# 🛒 MarketPro - E-commerce Sri Lanka

A premium, high-performance e-commerce marketplace platform built by customizing the MarketPro template for the Sri Lankan market. This project features localized branding, currency, and a modern React-based architecture.

---

## ✨ Features

- **🚀 Performance-First Architecture**: Built with React 19 and Vite for extremely fast load times and seamless developer experience (HMR).
- **🇱🇰 Sri Lanka Localization**: 
  - Currency updated to **LKR (රු)** across all product sections.
  - Custom branding and messaging tailored for the local market.
- **📱 Fully Responsive Design**: Seamless experience across mobile, tablet, and desktop using a modularized Tailwind-inspired CSS structure.
- **🛣️ Localized Routing**: Replaced external template links with an internal React routing system (`react-router-dom`) for product details and other pages.
- **🧩 Modular Component Architecture**: 
  - Over 30 specialized components (Headers, Footers, Banners, Product Lists).
  - Clean separation of concerns for easy maintenance and scaling.
- **🎥 Interactive UI**: Includes flash sales, hot deals, top vendors, and modern newsletter sections.

---

## 🛠️ Technology Stack

- **Framework**: [React 19](https://react.dev/)
- **Build Tool**: [Vite](https://vitejs.dev/)
- **Routing**: [React Router 7](https://reactrouter.com/)
- **Styling**: Tailwind CSS (bundled as `app.min.css`) + Vanilla CSS
- **Utilities**: `htmltojsx`, `jsdom` (for high-fidelity template replication)
- **Dev Tools**: ESLint (modern flat config)

---

## 📁 Project Structure

```text
marketpro-clone/
├── src/
│   ├── components/       # 30+ Modular React components
│   ├── App.jsx           # Main routing and entry point
│   ├── Home.jsx          # Marketplace landing page
│   ├── ProductDetails.jsx# Localized product details view
│   └── main.jsx          # App mount
├── public/               # Static assets (images, external bundles)
├── index.html            # Main HTML structure and metadata
└── package.json          # Project dependencies & scripts
```

---

## 🚦 Getting Started

### 1. Prerequisites

Ensure you have [Node.js](https://nodejs.org/) installed on your machine.

### 2. Installation

Clone the repository and install the dependencies:

```bash
npm install
```

### 3. Development

Start the development server with Hot Module Replacement (HMR):

```bash
npm run dev
```

### 4. Build

Create a production-ready bundle in the `dist/` folder:

```bash
npm run build
```

---

## 🌍 SEO Best Practices

- Descriptive Title Tags tailored for MarketPro.
- Optimized meta descriptions for search visibility.
- Semantic HTML tags (`<header>`, `<footer>`, `<section>`) for better accessibility and indexing.
- Unique ID attributes for all interactive elements to ensure reliable browser testing.

---

## 📝 License

This project was built as a customized for specific market requirements. All assets are property of their respective owners.

---

*Made with ❤️ for the Sri Lankan E-commerce ecosystem.*

