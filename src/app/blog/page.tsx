import { blogs } from "@/data/blogs";
import Link from "next/link";

// Group blogs by topic category for category-based datacard sections
const blogsByCategory = blogs.reduce<Record<string, typeof blogs>>((acc, blog) => {
  (acc[blog.category] = acc[blog.category] || []).push(blog);
  return acc;
}, {});

const categoryColors: Record<string, string> = {
  technology: "bg-ink text-paper",
  "ai-ml": "bg-accent text-paper",
  research: "bg-ink text-paper",
  lifestyle: "bg-ink-muted text-paper",
  travel: "bg-ink text-paper",
};

export default function BlogPage() {
  return (
    <div className="container mx-auto px-6 md:px-10 py-12 md:py-24">
      <h1 className="font-display font-bold text-ink uppercase tracking-tight text-4xl md:text-6xl mb-3 md:mb-8 leading-tight">
        Blog
      </h1>
      <p className="font-body text-ink-muted max-w-2xl text-base leading-relaxed mb-12 md:mb-20">
        Technical notes, research experiments, and essays on AI/ML systems,
        agentic AI, computer vision, and distributed learning.
      </p>

      {Object.entries(blogsByCategory).map(([category, posts]) => (
        <section key={category} className="mb-16 md:mb-24">
          <h2
            id={category}
            className="font-display font-bold text-ink uppercase tracking-wider text-2xl md:text-3xl mb-8 border-b-2 border-ink inline-block pb-2"
          >
            {category.charAt(0).toUpperCase() + category.slice(1)}
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.map((blog) => (
              <Link key={blog.id} href={`/blog/${blog.id}`} className="group block">
                <article className="border-2 border-ink bg-paper hover:bg-ink hover:text-paper transition-colors duration-200 flex flex-col h-full">
                  <div className="relative overflow-hidden h-48">
                    <img
                      src={blog.imageUrl}
                      alt={blog.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      loading="lazy"
                      decoding="async"
                    />
                    <span
                      className={`absolute top-4 left-4 label-upper px-3 py-1 rounded border border-ink font-mono text-[0.65rem] z-10 ${
                        categoryColors[blog.category] || categoryColors.technology
                      }`}
                    >
                      {blog.category}
                    </span>
                  </div>
                  <div className="p-6 flex flex-col flex-1">
                    <h3
                      className="font-display font-bold text-ink text-xl md:text-2xl mb-2 leading-tight group-hover:text-accent transition-colors"
                    >
                      {blog.title}
                    </h3>
                    <p className="font-body text-ink-muted text-sm leading-relaxed mb-4 flex-1">
                      {blog.description}
                    </p>
                    <span className="label-upper text-accent font-bold mt-auto">
                      READ CASE STUDY →
                    </span>
                  </div>
                </article>
              </Link>
            ))}
          </div>
        </section>
      ))}
    </div>
  );
}
