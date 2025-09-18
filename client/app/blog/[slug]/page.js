import fs from "fs";
import path from "path";
import matter from "gray-matter";
import Image from "next/image";
import Link from "next/link";

export default async function Page({ params }) {
  const { slug } = await params;

  // Read file and extract metadata + raw content
  const filePath = path.join(process.cwd(), "content", `${slug}.mdx`);
  const fileContents = fs.readFileSync(filePath, "utf8");
  const { data: metadata, content } = matter(fileContents);

  // Import MDX component
  const mod = await import(`@/content/${slug}.mdx`);
  const Post = mod.default;

  // Derive display helpers
  const published =
    metadata?.date
      ? new Date(metadata.date).toLocaleDateString("en-US", {
          year: "numeric",
          month: "long",
          day: "numeric",
        })
      : null;

  const words = content?.trim().split(/\s+/).length ?? 0;
  const readingMins = Math.max(1, Math.round(words / 200));

  return (
    <main className="min-h-screen bg-[#FAF7F2]">
      {/* Hero Section */}
      <header className="relative h-[70vh] w-full overflow-hidden">
        <Image
          src={metadata.image}
          alt={metadata.title}
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
        
        {/* Hero Content */}
        <div className="absolute inset-0 flex items-end">
          <div className="w-full px-6 md:px-12 pb-16">
            <div className="max-w-4xl mx-auto">
              {/* Meta Info */}
              <div className="mb-6 flex flex-wrap items-center gap-4">
                {metadata.category && (
                  <span className="inline-flex items-center rounded-full bg-emerald-500/90 px-4 py-2 text-sm font-semibold text-white backdrop-blur-sm">
                    {metadata.category}
                  </span>
                )}
                {published && (
                  <time className="text-white/90 font-medium">{published}</time>
                )}
                <span className="text-white/80">•</span>
                <span className="text-white/90 font-medium">{readingMins} min read</span>
              </div>
              
              {/* Title */}
              <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-4 drop-shadow-lg">
                {metadata.title}
              </h1>
              
              {/* Summary */}
              {metadata.summary && (
                <p className="text-lg md:text-xl text-white/90 max-w-3xl leading-relaxed drop-shadow">
                  {metadata.summary}
                </p>
              )}
            </div>
          </div>
        </div>
      </header>

      {/* Content Section */}
      <section className="relative -mt-8 px-6 md:px-12 pb-16">
        <div className="max-w-4xl mx-auto">
          {/* Navigation */}
          <nav className="mb-8">
            <Link 
              href="/blog" 
              className="inline-flex items-center gap-2 text-white hover:text-emerald-900 font-medium transition-colors group"
            >
              <svg className="w-4 h-4 transition-transform group-hover:-translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              Back to Blog
            </Link>
          </nav>

          {/* Article Content */}
          <article className="bg-white rounded-2xl shadow-xl ring-1 ring-black/5 overflow-hidden">
            <div className="p-8 md:p-12">
              <div className="prose prose-lg prose-emerald max-w-none">
                <Post />
              </div>
            </div>
          </article>
        </div>
      </section>
    </main>
  );
}
