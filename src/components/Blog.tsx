import { motion } from "framer-motion";
import { fadeInUp } from "../utils/animations";
import { blogPosts } from "../data/blog";

function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
  });
}

export default function Blog() {
  return (
    <section id="blog" className="py-20 px-8 lg:px-16">
      <motion.div
        variants={fadeInUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="max-w-5xl"
      >
        {/* Section header */}
        <div className="mb-12">
          <span className="text-xs font-semibold tracking-[0.3em] text-cyan-400 uppercase">
            Architecture Notes
          </span>
          <h2 className="text-4xl font-bold text-white mt-2">Blog</h2>
          <p className="text-gray-500 mt-2 text-sm max-w-xl">
            Day-by-day architecture decisions, patterns, and engineering tradeoffs — with links to real GitHub templates.
          </p>
        </div>

        {/* Featured post */}
        {blogPosts[0] && (
          <motion.div
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="glass-panel rounded-2xl p-7 mb-5 group hover:border-cyan-500/30 transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/10"
          >
            <div className="flex items-center gap-2 mb-3">
              <span className="text-[10px] font-semibold text-cyan-400 bg-cyan-500/10 border border-cyan-500/20 px-2 py-0.5 rounded-full uppercase tracking-wider">
                Latest
              </span>
              {blogPosts[0].series && (
                <span className="text-[10px] text-purple-400 bg-purple-500/10 border border-purple-500/20 px-2 py-0.5 rounded-full">
                  {blogPosts[0].series}
                </span>
              )}
            </div>

            <h3 className="text-xl font-bold text-white group-hover:text-cyan-300 transition-colors mb-3 leading-snug">
              {blogPosts[0].title}
            </h3>
            <p className="text-gray-400 text-sm leading-relaxed mb-4">
              {blogPosts[0].summary}
            </p>

            <div className="flex flex-wrap gap-1.5 mb-5">
              {blogPosts[0].tags.map((tag) => (
                <span
                  key={tag}
                  className="text-[10px] px-2 py-0.5 bg-white/5 border border-white/10 rounded text-gray-400"
                >
                  {tag}
                </span>
              ))}
            </div>

            <div className="flex items-center justify-between flex-wrap gap-3 pt-4 border-t border-white/5">
              <div className="flex items-center gap-4 text-xs text-gray-600">
                <span>{formatDate(blogPosts[0].date)}</span>
                <span>{blogPosts[0].readingTime} read</span>
              </div>
              <div className="flex items-center gap-3">
                {blogPosts[0].githubUrl && (
                  <a
                    href={blogPosts[0].githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs text-gray-500 hover:text-cyan-400 transition-colors"
                  >
                    <svg viewBox="0 0 24 24" fill="currentColor" className="w-3.5 h-3.5">
                      <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0 1 12 6.844a9.59 9.59 0 0 1 2.504.337c1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.02 10.02 0 0 0 22 12.017C22 6.484 17.522 2 12 2z" />
                    </svg>
                    Template on GitHub
                  </a>
                )}
                <button className="text-xs text-cyan-400 hover:text-cyan-300 transition-colors font-medium">
                  Read Article →
                </button>
              </div>
            </div>
          </motion.div>
        )}

        {/* Remaining posts */}
        <div className="space-y-4">
          {blogPosts.slice(1).map((post, i) => (
            <motion.div
              key={post.id}
              variants={fadeInUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="glass-panel rounded-xl p-5 group hover:border-cyan-500/20 transition-all duration-300 hover:shadow-md hover:shadow-cyan-500/5"
            >
              <div className="flex items-start justify-between gap-4">
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 mb-2 flex-wrap">
                    {post.series && (
                      <span className="text-[10px] text-purple-400 bg-purple-500/10 border border-purple-500/20 px-2 py-0.5 rounded-full">
                        {post.series}
                      </span>
                    )}
                    <span className="text-[10px] text-gray-600">{formatDate(post.date)}</span>
                    <span className="text-[10px] text-gray-700">·</span>
                    <span className="text-[10px] text-gray-600">{post.readingTime} read</span>
                  </div>

                  <h3 className="text-base font-semibold text-white group-hover:text-cyan-300 transition-colors mb-2 leading-snug">
                    {post.title}
                  </h3>
                  <p className="text-gray-500 text-sm leading-relaxed line-clamp-2">
                    {post.summary}
                  </p>

                  <div className="flex flex-wrap gap-1.5 mt-3">
                    {post.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-[10px] px-2 py-0.5 bg-white/5 border border-white/10 rounded text-gray-500"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex flex-col items-end gap-2 shrink-0">
                  {post.githubUrl && (
                    <a
                      href={post.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 rounded-lg text-gray-600 hover:text-cyan-400 hover:bg-cyan-500/10 transition-all"
                      title="View GitHub template"
                    >
                      <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
                        <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0 1 12 6.844a9.59 9.59 0 0 1 2.504.337c1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.02 10.02 0 0 0 22 12.017C22 6.484 17.522 2 12 2z" />
                      </svg>
                    </a>
                  )}
                  <button className="text-xs text-gray-600 hover:text-cyan-400 transition-colors">
                    Read →
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
