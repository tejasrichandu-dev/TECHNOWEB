# 🌐 TechnoWeb — Creative Digital Agency Website

TechnoWeb is a modern, responsive, and high-performing digital agency website built using **React.js** and **Tailwind CSS**.  
It showcases elegant design, optimized performance, and reusable components for a production-ready frontend experience.

---

## 🚀 Features

- ⚡ **Fast & Responsive:** Built with React + Tailwind CSS for optimized performance on all devices.  
- 🎨 **Modern UI:** Clean layout with smooth animations, gradients, and consistent color palette.  
- 💼 **Showcase Sections:**
  - Hero section with scroll animations
  - About section with image + statistics
  - Services overview and feature highlights
  - “Got a Project?” call-to-action divider
  - Certifications & achievements section
- 🧠 **Component-Based Architecture:** Reusable React components with modular styling.
- 🌈 **Vector Backgrounds:** Elegant vector illustrations for a polished visual feel.
- 📱 **Fully Responsive:** Adapts seamlessly to mobile, tablet, and desktop screens.

---

## 🛠️ Tech Stack

**Frontend:**
- React.js (Vite or CRA)
- Tailwind CSS
- Lucide React Icons
- Framer Motion 

---

## 📁 Folder Structure

Technoweb-Frontend/
├── node_modules/                # Auto-generated dependencies folder
├── public/                      # Static assets served directly (e.g., icons, images)
│
├── src/                         # Main source code directory
│   ├── assets/                  # Static assets used inside components (images, SVGs, etc.)
│   │   └── react.svg
│   │
│   ├── components/              # All reusable UI components grouped by feature
│   │   │
│   │   ├── aboutUs/             # Components for the "About Us" page/section
│   │   │   ├── aboutUs.jsx
│   │   │   ├── Approach.jsx
│   │   │   ├── ceo.jsx
│   │   │   ├── certificates.jsx
│   │   │   ├── contact.jsx
│   │   │   ├── heroSection.jsx
│   │   │   └── team.jsx
│   │   │
│   │   ├── careerPage/          # Components for the "Career" section
│   │   │   └── Career.jsx
│   │   │
│   │   ├── homePage/            # Components used on the main home page
│   │   │   ├── clients.jsx
│   │   │   ├── DarkHeroSection.jsx
│   │   │   ├── details.jsx
│   │   │   ├── developmentPhases.jsx
│   │   │   ├── Featured.jsx
│   │   │   ├── footer.jsx
│   │   │   ├── form.jsx
│   │   │   ├── heroSection.jsx
│   │   │   ├── homePage.jsx
│   │   │   ├── insights.jsx
│   │   │   ├── navBar.jsx
│   │   │   ├── ourProductCards.jsx
│   │   │   ├── ourProducts.jsx
│   │   │   ├── Partners.jsx
│   │   │   ├── ServicesGrid.jsx
│   │   │   └── valuesSection.jsx
│   │   │
│   │   ├── ourServices/          # Components for "Our Services" section
│   │   │   ├── ourServices.jsx
│   │   │   ├── servicesCards.jsx
│   │   │   └── webdevKnowMore.jsx
│   │   │
│   │   └── projects/             # Components related to projects or portfolio
│   │       └── project.jsx
│   │
│   ├── App.css                   # Global styles for the app
│   ├── App.jsx                   # Root React component
│   ├── index.css                 # Base/global CSS styles
│   ├── main.jsx                  # Entry point — renders App.jsx and mounts to DOM
│
├── .gitignore                    # Files/folders to be ignored by Git
├── eslint.config.js              # ESLint configuration for code linting
├── index.html                    # Main HTML file loaded by Vite
├── package-lock.json             # Auto-generated dependency lock file
├── package.json                  # Project metadata and dependencies
├── README.md                     # Project documentation
└── vite.config.js                # Vite build and dev server configuration

---

## ⚙️ Installation & Setup

Follow these steps to run the project locally:

```bash
# Clone this repository
git clone https://github.com/yourusername/technoweb.git

# Navigate into the folder
cd technoweb

# Install dependencies
npm install

# Start the development server
npm run dev


