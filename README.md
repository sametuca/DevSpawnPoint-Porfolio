# DevSpawnPoint - 3D Interactive Portfolio

[![Netlify Status](https://api.netlify.com/api/v1/badges/10a6a2f3-5ab6-4c18-bc1d-7111c2c644f3/deploy-status)](https://app.netlify.com/projects/developerspawnpoint/deploys)

## About the Project

DevSpawnPoint is an interactive 3D developer workspace (spawn point) portfolio built with modern web technologies. Visitors can navigate through a realistic 3D room, interact with items on the desk, and discover my projects, social media profiles, and skills in an immersive environment.

## Screenshots

![Screenshot 1](screenshots/screenshot-1.png)
*Interactive 3D workspace environment*

![Screenshot 2](screenshots/screenshot-2.png)
*Night mode with ambient lighting*

## Tech Stack

This project is optimized using the latest web technologies and 3D graphics libraries:

- **Core:** [React 19](https://react.dev/) & [TypeScript](https://www.typescriptlang.org/)
- **3D Engine:** [Three.js](https://threejs.org/)
- **React Bridge:** [@react-three/fiber](https://docs.pmnd.rs/react-three-fiber)
- **3D Utilities:** [@react-three/drei](https://github.com/pmnd.rs/drei)
- **Styling:** [Tailwind CSS 4](https://tailwindcss.com/)
- **Animations:** [Framer Motion](https://www.framer.com/motion/)
- **AI Integration:** [Google Generative AI (Gemini)](https://ai.google.dev/)
- **Build Tool:** [Vite](https://vitejs.dev/)
- **Post-processing:** Bloom and Vignette effects via `@react-three/postprocessing`

## Key Features

- **Interactive 3D Environment:** 360-degree room exploration with zoom and pan capabilities.
- **Dynamic Screens:** Desktop monitors feature dynamic digital displays showcasing projects and tech stacks.
- **Matrix Effect:** Custom shader-based Matrix rain effect on specific terminal screens.
- **Performance Optimization:** Seamless experience with `frameloop="demand"` and optimized DPR settings.
- **Music & Audio:** Immersive ambient music managed through a central `MusicContext`.
- **Gemini AI:** Artificial intelligence integration for smart content management and interactions.

## Project Structure

```bash
src/
├── components/
│   ├── canvas/      # 3D Models and Scene components (Room, Desk, Monitor, etc.)
│   ├── overlays/    # UI layers placed over the 3D scene
│   └── ui/          # Menus, Loading screens, and Buttons
├── context/         # Centralized state management for Overlays and Music
├── constants/       # Project data and configurations
├── assets/          # Static media files
└── App.tsx          # Main entry point and R3F Canvas configuration
```

## Installation

To run the project locally:

1. Clone the repository:
   ```bash
   git clone https://github.com/sametuca/DevSpawnPoint-Porfolio.git
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the development server:
   ```bash
   npm run dev
   ```

## Models & Assets

The 3D models used in the project are located in the `public/models` directory. All models are in GLTF/GLB format and optimized for web performance. The scene consists of a desk, gaming chair, monitors, decorative items, and custom lighting setups.

---
*Developed by: [Samet Uca](https://github.com/sametuca)*
