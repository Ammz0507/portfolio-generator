import type { ReactNode } from "react";

export default function ClassicTheme({ children }: { children: ReactNode }) {
  return (
    <div className="prose prose-lg mx-auto p-8 bg-white shadow rounded">{children}</div>
  );
}
