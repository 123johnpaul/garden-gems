import Image from 'next/image'

// Blog-first typography and layout, applied only to MDX-rendered content.
// Keep all presentational classes here to avoid touching global styles.
const defaultComponents = {
  // Wrap entire MDX article for consistent spacing/width
  wrapper: ({ children }) => (
    <article className="mx-auto max-w-3xl py-10 px-6 md:px-0 text-gray-800">
      {children}
    </article>
  ),

  // Headings
  h1: ({ children, ...props }) => (
    <h1
      className="text-3xl md:text-4xl font-extrabold tracking-tight text-gray-900 mb-6 mt-4"
      {...props}
    >
      {children}
    </h1>
  ),
  h2: ({ children, ...props }) => (
    <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4 mt-10" {...props}>
      {children}
    </h2>
  ),
  h3: ({ children, ...props }) => (
    <h3 className="text-xl md:text-2xl font-semibold text-gray-900 mb-3 mt-8" {...props}>
      {children}
    </h3>
  ),
  h4: ({ children, ...props }) => (
    <h4 className="text-lg md:text-xl font-semibold text-gray-900 mb-2 mt-6" {...props}>
      {children}
    </h4>
  ),

  // Text
  p: ({ children, ...props }) => (
    <p className="text-gray-700 leading-7 mb-6" {...props}>{children}</p>
  ),
  strong: ({ children, ...props }) => (
    <strong className="font-semibold text-gray-900" {...props}>{children}</strong>
  ),
  em: ({ children, ...props }) => (
    <em className="italic" {...props}>{children}</em>
  ),

  // Links
  a: ({ children, ...props }) => (
    <a
      className="text-[#0C7769] underline underline-offset-2 hover:text-[#095f54] break-words"
      {...props}
    >
      {children}
    </a>
  ),

  // Lists
  ul: ({ children, ...props }) => (
    <ul className="list-disc pl-6 mb-6 space-y-2" {...props}>{children}</ul>
  ),
  ol: ({ children, ...props }) => (
    <ol className="list-decimal pl-6 mb-6 space-y-2" {...props}>{children}</ol>
  ),
  li: ({ children, ...props }) => (
    <li className="marker:text-gray-500" {...props}>{children}</li>
  ),

  // Quotes & rules
  blockquote: ({ children, ...props }) => (
    <blockquote
      className="border-l-4 border-[#0C7769] bg-white/70 text-gray-700 italic px-4 py-3 my-6 rounded-r"
      {...props}
    >
      {children}
    </blockquote>
  ),
  hr: (props) => <hr className="my-10 border-t border-gray-200" {...props} />,

  // Code
  code: ({ children, className = '', ...props }) => (
    <code
      className={`whitespace-pre-wrap rounded bg-gray-100 px-1.5 py-0.5 text-[0.9em] font-mono text-gray-800 ${className}`}
      {...props}
    >
      {children}
    </code>
  ),
  pre: ({ children, ...props }) => (
    <pre
      className="bg-[#0b1020] text-gray-100 rounded-lg p-4 overflow-x-auto my-6"
      {...props}
    >
      {children}
    </pre>
  ),

  // Tables
  table: ({ children, ...props }) => (
    <div className="my-6 w-full overflow-x-auto">
      <table className="w-full border-collapse" {...props}>{children}</table>
    </div>
  ),
  thead: (props) => <thead className="bg-gray-50" {...props} />,
  tbody: (props) => <tbody {...props} />,
  tr: (props) => <tr className="border-b border-gray-200" {...props} />,
  th: ({ children, ...props }) => (
    <th className="text-left px-3 py-2 font-semibold text-gray-900" {...props}>{children}</th>
  ),
  td: ({ children, ...props }) => (
    <td className="text-left px-3 py-2 align-top text-gray-700" {...props}>{children}</td>
  ),

  // Images
  img: ({ alt, src, ...props }) => (
    <Image
      src={src}
      alt={alt || 'Article image'}
      width={1200}
      height={675}
      sizes="100vw"
      className="w-full h-auto rounded-lg shadow mb-6"
      {...props}
    />
  ),

  figure: ({ children, ...props }) => (
    <figure className="my-6" {...props}>{children}</figure>
  ),
  figcaption: ({ children, ...props }) => (
    <figcaption className="text-sm text-gray-500 text-center mt-2" {...props}>
      {children}
    </figcaption>
  ),
}
 
export function useMDXComponents(components = {}) {
  // Merge any incoming mappings, but keep our defaults to enforce blog style
  return { ...components, ...defaultComponents }
}