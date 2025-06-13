# Spice Palace - Authentic Indian Restaurant Website

Welcome to **Spice Palace**, a modern, interactive, and visually stunning single-page web application for an authentic Indian restaurant. This project showcases a full-featured restaurant website with a dynamic menu, shopping cart, reservation system, and beautiful gallery, all built with pure HTML, CSS, and JavaScript.

## Table of Contents

- [Features](#features)
- [Live Demo](#live-demo)
- [Screenshots](#screenshots)
- [Getting Started](#getting-started)
- [Project Structure](#project-structure)
- [Customization](#customization)
- [Credits](#credits)
- [License](#license)

---

## Features

- **Animated Loading Screen**: Engaging loading animation with branding.
- **Responsive Navigation**: Sticky navbar with smooth scrolling and hamburger menu for mobile.
- **Hero Section**: Eye-catching introduction with animated text and call-to-action buttons.
- **About Section**: Restaurant story, features, and chef highlights.
- **Dynamic Menu**: 
  - Menu items loaded from JavaScript with categories (North Indian, South Indian, Appetizers, Desserts).
  - Search and filter functionality.
  - "Load More" for lazy loading.
  - Modal popups for detailed dish info.
- **Shopping Cart**:
  - Add/remove items, quantity adjustment, and persistent cart (localStorage).
  - Cart sidebar with order summary, tax, and delivery calculation.
  - Checkout and clear cart actions.
- **Gallery**: Visual showcase of dishes and ambiance.
- **Reservation Form**: Book a table with validation and feedback.
- **Contact Section**: Location, phone, email, and opening hours.
- **Footer**: Quick links, social media, and contact info.
- **Modern UI/UX**: Beautiful, mobile-friendly design with custom fonts, icons, and animations.

---

## Live Demo

> _You can run this project locally by opening `index.html` in your browser._

---

## Screenshots

> _Add screenshots here to showcase the UI (optional)._

---

## Getting Started

### Prerequisites

- Any modern web browser (Chrome, Firefox, Edge, Safari)
- No backend or build tools required

### Running Locally

1. **Clone or Download** this repository.
2. **Open** `index.html` in your browser.

All features work out-of-the-box, including cart persistence and menu interactivity.

---

## Project Structure

```
index.html      # Main HTML file with all sections and structure
styles.css      # Modern, responsive, and animated CSS styles
script.js       # All interactivity, menu logic, cart, and form validation
README.md       # Project documentation
```

### Main Files

- **index.html**: Contains all website sections (loading, hero, about, menu, gallery, cart, contact, footer). Links to external fonts and icons.
- **styles.css**: Custom color palette, gradients, typography, responsive layouts, and animations for a premium look and feel.
- **script.js**: 
  - Menu data (with images, categories, ratings, etc.)
  - Dynamic rendering of menu and cart
  - Filtering, searching, and lazy loading
  - Cart logic (add, remove, update, checkout, localStorage)
  - Modal popups for dish details
  - Reservation form validation and notifications
  - UI animations and event handling

---

## Customization

- **Menu Items**: Edit or add dishes in the `menuItems` array in `script.js`.
- **Branding**: Update restaurant name, logo, and images in `index.html`.
- **Colors & Fonts**: Change CSS variables in `styles.css` for a different theme.
- **Contact Info**: Update address, phone, and email in the Contact and Footer sections.

---

## Credits

- Food images: Unsplash
- Icons: Font Awesome
- Fonts: Google Fonts (Playfair Display, Inter)

---

## License

This project is for educational and demonstration purposes. Please credit the original author if you use or modify this template.

---
