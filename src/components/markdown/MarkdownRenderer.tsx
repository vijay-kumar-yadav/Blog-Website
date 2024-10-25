import React from "react";
import ReactMarkdown from "react-markdown";
import remarkBreaks from "remark-breaks";
import remarkGfm from "remark-gfm";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import themeStyle from "react-syntax-highlighter/dist/esm/styles/prism/twilight";

interface MarkdownRendererProps {
  children: string | null | undefined;
}

const MarkdownRenderer: React.FC<MarkdownRendererProps> = ({ children }) => {
  
  if (!children) return null;

  return (
    <ReactMarkdown
      remarkPlugins={[[remarkGfm], [remarkBreaks]]}
      components={{
        h1: ({ ...props }) => (
          <h1 className="my-6 text-3xl font-extrabold text-gray-900 dark:text-gray-100">{props.children}</h1>
        ),
        h2: ({ ...props }) => (
          <h2 className="my-5 text-2xl font-bold text-gray-800 dark:text-gray-200">{props.children}</h2>
        ),
        h3: ({ ...props }) => (
          <h3 className="my-4 text-xl font-semibold text-gray-700 dark:text-gray-300">{props.children}</h3>
        ),
        h4: ({ ...props }) => (
          <h4 className="my-3 text-lg font-medium text-gray-600 dark:text-gray-400">{props.children}</h4>
        ),
        h5: ({ ...props }) => (
          <h5 className="my-2 text-base font-medium text-gray-500 dark:text-gray-500">{props.children}</h5>
        ),
        h6: ({ ...props }) => (
          <h6 className="my-1 text-sm font-medium text-gray-400 dark:text-gray-600">{props.children}</h6>
        ),
        a: ({ ...props }) => (
          <a
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 underline hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-500"
            {...props}
          />
        ),
        ul: ({ ...props }) => (
          <ul className="list-disc list-inside my-4 pl-5 text-gray-700 dark:text-gray-300" {...props} />
        ),
        ol: ({ ...props }) => (
          <ol className="list-decimal list-inside my-4 pl-5 text-gray-700 dark:text-gray-300" {...props} />
        ),
        li: ({ ...props }) => (
          <li className="my-1" {...props} />
        ),
        blockquote: ({ ...props }) => (
          <blockquote className="border-l-4 border-gray-300 dark:border-gray-600 pl-4 italic my-4 text-gray-600 dark:text-gray-300" {...props} />
        ),
        code({ inline, className, children, ...props }) {
          const match = /language-(\w+)/.exec(className || "");
          return !inline && match ? (
            <SyntaxHighlighter
              customStyle={{ paddingLeft: "1rem", borderRadius: "0.5rem" }}
              style={themeStyle}
              showLineNumbers={true}
              language={match[1]}
              PreTag="div"
              {...props}
            >
              {String(children).replace(/\n$/, "")}
            </SyntaxHighlighter>
          ) : (
            <code className={`bg-gray-100 dark:bg-gray-800 rounded px-1 ${className}`} {...props}>
              {children}
            </code>
          );
        }
      }}
    >
      {children}
    </ReactMarkdown>
  );
};

export default MarkdownRenderer;
