import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import rehypeRaw from "rehype-raw";

export default function MarkdownPreview({ content }: { content: string }) {
  return (
    <div className="markdown bg-white dark:bg-slate-900 p-5 rounded-b shadow min-h-72 max-h-[36rem] overflow-y-auto">
      <ReactMarkdown remarkPlugins={[remarkGfm]} rehypePlugins={[rehypeRaw]}>
        {content}
      </ReactMarkdown>
    </div>
  );
}
