import "../styles/globals.css";
import type { ReactNode } from "react";

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-linear-to-br from-slate-900 to-slate-700 min-h-screen antialiased">
        {children}
      </body>
    </html>
  );
}
