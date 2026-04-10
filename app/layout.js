import "./globals.css";
import SiteShell from "./components/SiteShell";

export const metadata = {
  title: "Shrotriya Industries Private Limited",
  description: "Medical equipment supply — ICU, OT, emergency, surgical. Greater Noida & Noida."
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" data-scroll-behavior="smooth">
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@600;700;800&family=DM+Sans:wght@300;400;500;600&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <SiteShell>{children}</SiteShell>
      </body>
    </html>
  );
}
