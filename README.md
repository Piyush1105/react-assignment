# 🛍️ React Product Catalog App

A modern, production-ready frontend application built using **React**, **TypeScript**, **Vite**, and **Tailwind CSS**, leveraging **Headless UI** for accessible and elegant UI components.

## 🚀 Features

- 📦 Product listing from a public API
- 🖼️ Product cards with images, title, price, and description
- 🔍 Product detail modal using `@headlessui/react`
- 💨 Fast development with Vite + SWC
- ⚙️ Scalable and maintainable code architecture
- 🎨 Fully responsive UI with Tailwind CSS
- 🧠 Written in TypeScript for full type safety

---

## 🏗️ Tech Stack

- **React 18**
- **Vite + SWC**
- **TypeScript**
- **Tailwind CSS**
- **@headlessui/react**
- **@heroicons/react**

---

## 🗂️ Project Structure

src/
├── api/ # API call abstraction
├── components/ # UI components (ProductCard, ProductModal)
├── pages/ # Page components (Home)
├── types/ # TypeScript interfaces
├── App.tsx # Application router
├── main.tsx # Entry point
└── index.css # Tailwind setup

---

## 🌐 Live API

Data is fetched from the public [Fake Store API](https://fakestoreapi.com/). You can switch to other mock APIs via `.env`.

---

## 🚀 Getting Started

1. Clone the Repository
git clone https://github.com/yourusername/react-product-app.git
cd react-product-app

2. Install Dependencies
npm install

3. Start the Dev Server
npm run dev

4. Build for Production
npm run build