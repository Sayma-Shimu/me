# Alexa Portfolio - React Version

A modern, responsive portfolio website built with React and Tailwind CSS, featuring dark mode support, smooth animations, and a beautiful glassmorphism design.

## Features

- ✨ Modern glassmorphism design
- 🌙 Dark/Light mode toggle
- 📱 Fully responsive design
- 🎨 Smooth animations and transitions
- ⚡ Built with React and Tailwind CSS
- 🎯 Clean, semantic code structure

## Getting Started

### Prerequisites

- Node.js (version 14 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd alexa-portfolio-react
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm start
```

4. Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

## Available Scripts

- `npm start` - Runs the app in development mode
- `npm run build` - Builds the app for production
- `npm test` - Launches the test runner
- `npm run eject` - Ejects from Create React App (one-way operation)

## Project Structure

```
src/
├── components/
│   ├── About.js
│   ├── BackgroundElements.js
│   ├── Contact.js
│   ├── Footer.js
│   ├── Header.js
│   ├── Hero.js
│   ├── Projects.js
│   ├── Services.js
│   └── Skills.js
├── context/
│   └── ThemeContext.js
├── App.js
├── index.js
└── index.css
```

## Customization

### Colors
The color scheme is defined in the Tailwind config within `public/index.html`. You can modify the colors by updating the `tailwind.config` object.

### Content
Update the content in each component file to match your personal information:
- Personal details in `Hero.js`
- Skills and experience in `Skills.js` and `About.js`
- Projects in `Projects.js`
- Contact information in `Contact.js`

### Images
Replace the placeholder images with your own:
- Profile images in `Hero.js` and `About.js`
- Project screenshots in `Projects.js`

## Technologies Used

- React 18
- Tailwind CSS
- Google Fonts (Poppins, Dancing Script)
- Boxicons
- Material Symbols

## Browser Support

This portfolio supports all modern browsers including:
- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

This project is open source and available under the [MIT License](LICENSE).