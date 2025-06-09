import { createRoot } from "react-dom/client";
import App from "./App";
import "./index.css";

// Add meta tags for SEO
document.title = "SSOH Church - We are dealers in Hope";
const metaDescription = document.createElement('meta');
metaDescription.name = 'description';
metaDescription.content = 'SSOH Church is a global family dedicated to helping people live a Christ-centered life. Join us in-person or online for encouraging messages and community.';
document.head.appendChild(metaDescription);

// Add favicon
const favicon = document.createElement('link');
favicon.rel = 'icon';
favicon.href = 'data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>⛪</text></svg>';
document.head.appendChild(favicon);

createRoot(document.getElementById("root")!).render(<App />);
