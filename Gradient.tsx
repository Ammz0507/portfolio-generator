import type { ReactNode } from "react";

export default function GradientTheme({ children }: { children: ReactNode }) {
  return (
    <div className="prose prose-neutral mx-auto py-12 px-6 rounded-lg bg-gradient-to-tr from-blue-700 via-indigo-800 to-purple-800 text-white shadow-lg">
      {children}
    </div>
  );
}
