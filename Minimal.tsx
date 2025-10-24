import type { ReactNode } from "react";

export default function MinimalTheme({ children }: { children: ReactNode }) {
  return (
    <div className="prose mx-auto py-4">{children}</div>
  );
}
