import { ChangeEvent } from "react";

export default function MarkdownInput({
  value,
  onChange,
}: {
  value: string;
  onChange: (v: string) => void;
}) {
  return (
    <textarea
      className="w-full h-72 rounded-md p-3 border-2 border-slate-700 bg-slate-950 text-slate-100 focus:border-blue-600 transition resize-none"
      value={value}
      placeholder="Paste your Markdown resume/portfolio here..."
      onChange={(e: ChangeEvent<HTMLTextAreaElement>) => onChange(e.target.value)}
      spellCheck={false}
    />
  );
}
