// import type { Metadata } from "next";
// import Link from "next/link";

// export const metadata: Metadata = {
//   title: "Blogs | Earthvine",
//   description:
//     "Explore the latest insights, ideas, and inspiration from Earthvine.",
//   alternates: {
//     canonical: "/blogs",
//   },
// };

// type Blog = {
//   _id: string;
//   title: string;
//   slug: string;
//   featuredImage: string;
//   content: string;

//   author: {
//     name: string;
//     photo?: string;
//   };

//   publishedAt?: string | null;
//   createdAt: string;
// };

// async function getBlogs(): Promise<Blog[]> {
//   try {
//     const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/blogs`, {
//       cache: "no-store",
//     });

//     if (!res.ok) {
//       return [];
//     }

//     const json = await res.json();

//     return json.data || [];
//   } catch (error) {
//     console.error("Failed to fetch blogs:", error);

//     return [];
//   }
// }

// /*
//  * Convert TinyMCE HTML into plain text for the blog card excerpt.
//  */
// function getExcerpt(html: string, maxLength = 120) {
//   if (!html) return "";

//   const text = html
//     .replace(/<br\s*\/?>/gi, " ")
//     .replace(/<\/p>/gi, " ")
//     .replace(/<[^>]*>/g, "")
//     .replace(/&nbsp;/gi, " ")
//     .replace(/&amp;/gi, "&")
//     .replace(/&quot;/gi, '"')
//     .replace(/&#39;/gi, "'")
//     .replace(/\s+/g, " ")
//     .trim();

//   if (text.length <= maxLength) {
//     return text;
//   }

//   return `${text.substring(0, maxLength).trim()}...`;
// }

// function formatDate(date: string) {
//   return new Date(date).toLocaleDateString("en-IN", {
//     day: "2-digit",
//     month: "short",
//     year: "numeric",
//   });
// }

// export default async function BlogsPage() {
//   const blogs = await getBlogs();

//   return (
//     <main className="min-h-screen bg-white">
//       {/* PAGE HEADER */}
//       <section className="mt-20 pt-24 sm:pt-28 lg:pt-32 pb-10 sm:pb-12">
//         <div className="max-w-[1500px] mx-auto px-5 sm:px-8 lg:px-10">
//           <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl text-gray-900">
//             Blogs
//           </h1>
//         </div>
//       </section>

//       {/* BLOG GRID */}
//       <section className="pb-20 sm:pb-24 lg:pb-28">
//         <div className="max-w-[1500px] mx-auto px-5 sm:px-8 lg:px-10">
//           {blogs.length === 0 ? (
//             <div className="py-20 text-center">
//               <p className="text-gray-500">No blogs available at the moment.</p>
//             </div>
//           ) : (
//             <div
//               className="
//                 grid
//                 grid-cols-1
//                 sm:grid-cols-2
//                 lg:grid-cols-3
//                 xl:grid-cols-4
//                 gap-x-5
//                 sm:gap-x-6
//                 lg:gap-x-7
//                 gap-y-12
//                 lg:gap-y-14
//               "
//             >
//               {blogs.map((blog) => (
//                 <Link
//                   key={blog._id}
//                   href={`/blogs/${blog.slug}`}
//                   className="group block cursor-pointer"
//                 >
//                   <article className="h-full">
//                     {/* IMAGE */}
//                     <div className="relative w-full aspect-[4/3] overflow-hidden bg-gray-100">
//                       {blog.featuredImage ? (
//                         <img
//                           src={blog.featuredImage}
//                           alt={blog.title}
//                           className="
//                             w-full
//                             h-full
//                             object-cover
//                             transition-transform
//                             duration-500
//                             ease-out
//                             group-hover:scale-[1.03]
//                           "
//                         />
//                       ) : (
//                         <div className="w-full h-full flex items-center justify-center">
//                           <span className="text-sm text-gray-400">
//                             No Image
//                           </span>
//                         </div>
//                       )}
//                     </div>

//                     {/* CARD CONTENT */}
//                     <div className="pt-4 sm:pt-5">
//                       {/* DATE */}
//                       <p className="text-[10px] sm:text-[11px] uppercase tracking-[0.18em] text-gray-500">
//                         {formatDate(blog.publishedAt || blog.createdAt)}
//                       </p>

//                       {/* TITLE */}
//                       <h2
//                         className="
//                           mt-2
//                           font-serif
//                           text-lg
//                           sm:text-xl
//                           leading-snug
//                           text-gray-900
//                           line-clamp-2
//                           min-h-[3rem]
//                           group-hover:opacity-70
//                           transition-opacity
//                         "
//                       >
//                         {blog.title}
//                       </h2>

//                       {/* EXCERPT */}
//                       <p
//                         className="
//                           mt-2
//                           text-sm
//                           leading-6
//                           text-gray-500
//                           line-clamp-2
//                           min-h-[3rem]
//                         "
//                       >
//                         {getExcerpt(blog.content)}
//                       </p>

//                       {/* AUTHOR + READ MORE */}
//                       <div className="mt-5 flex items-center justify-between gap-3">
//                         {/* AUTHOR */}
//                         <div className="flex items-center gap-2.5 min-w-0">
//                           {blog.author?.photo ? (
//                             <img
//                               src={blog.author.photo}
//                               alt={blog.author.name}
//                               className="
//                                 w-8
//                                 h-8
//                                 rounded-full
//                                 object-cover
//                                 flex-shrink-0
//                               "
//                             />
//                           ) : (
//                             <div
//                               className="
//                                 w-8
//                                 h-8
//                                 rounded-full
//                                 bg-gray-100
//                                 flex
//                                 items-center
//                                 justify-center
//                                 text-xs
//                                 text-gray-500
//                                 flex-shrink-0
//                               "
//                             >
//                               {blog.author?.name?.charAt(0)?.toUpperCase() ||
//                                 "A"}
//                             </div>
//                           )}

//                           <span className="text-xs sm:text-sm text-gray-600 truncate">
//                             {blog.author?.name || "Earthvine"}
//                           </span>
//                         </div>

//                         {/* READ MORE */}
//                         <span
//                           className="
//                             flex-shrink-0
//                             text-xs
//                             sm:text-sm
//                             font-medium
//                             text-gray-900
//                             border-b
//                             border-gray-900
//                             pb-0.5
//                             transition-opacity
//                             group-hover:opacity-60
//                           "
//                         >
//                           Read More
//                         </span>
//                       </div>
//                     </div>
//                   </article>
//                 </Link>
//               ))}
//             </div>
//           )}
//         </div>
//       </section>
//     </main>
//   );
// }

import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Blogs | Earthvine",
  description:
    "Explore the latest insights, ideas, and inspiration from Earthvine.",
  alternates: {
    canonical: "/blogs",
  },
};
type Blog = {
  _id: string;
  title: string;
  slug: string;
  featuredImage: string;
  content: string;

  author: {
    name: string;
    description?: string;
    photo?: string;
  };

  status?: "draft" | "published";

  publishedAt?: string | null;
  createdAt: string;
  updatedAt?: string;
};

type BlogsPageProps = {
  searchParams: Promise<{
    search?: string;
  }>;
};

/* =========================================================
FETCH BLOGS
========================================================= */

async function getBlogs(): Promise<Blog[]> {
  try {
    const apiUrl = process.env.NEXT_PUBLIC_API_URL;

    if (!apiUrl) {
      console.error("NEXT_PUBLIC_API_URL is missing");
      return [];
    }

    const res = await fetch(`${apiUrl}/api/blogs`, {
      cache: "no-store",
    });

    if (!res.ok) {
      console.error("Failed to fetch blogs:", res.status);
      return [];
    }

    const json = await res.json();

    return Array.isArray(json.data) ? json.data : [];
  } catch (error) {
    console.error("Failed to fetch blogs:", error);
    return [];
  }
}

/* =========================================================
EXCERPT
========================================================= */

function getExcerpt(html: string, maxLength = 115) {
  if (!html) return "";

  const text = html
    .replace(/<br\s*\/?>/gi, " ")
    .replace(/<\/p>/gi, " ")
    .replace(/<[^>]*>/g, "")
    .replace(/&nbsp;/gi, " ")
    .replace(/&amp;/gi, "&")
    .replace(/&quot;/gi, '"')
    .replace(/&#39;/gi, "'")
    .replace(/&#x27;/gi, "'")
    .replace(/\s+/g, " ")
    .trim();

  if (text.length <= maxLength) return text;

  return `${text.substring(0, maxLength).trim()}...`;
}

/* =========================================================
DATE
========================================================= */

function formatDate(date?: string | null) {
  if (!date) return "";

  const parsed = new Date(date);

  if (Number.isNaN(parsed.getTime())) return "";

  return parsed.toLocaleDateString("en-IN", {
    day: "2-digit",
    month: "short",
    year: "numeric",
  });
}

/* =========================================================
   SEARCH
   IMPORTANT:
   Search ONLY:
   - title
   - slug
   - author

   DO NOT search content.
   This keeps public search behavior consistent
   with the admin blog search.
========================================================= */

function matchesSearch(blog: Blog, search: string) {
  if (!search) return true;

  const query = search.toLowerCase().trim();

  const title = blog.title?.toLowerCase() || "";
  const slug = blog.slug?.toLowerCase() || "";
  const author = blog.author?.name?.toLowerCase() || "";

  return (
    title.includes(query) || slug.includes(query) || author.includes(query)
  );
}

/* =========================================================
   PAGE
========================================================= */

export default async function BlogsPage({ searchParams }: BlogsPageProps) {
  const [blogs, params] = await Promise.all([getBlogs(), searchParams]);

  const search = params.search?.trim() || "";

  const filteredBlogs = blogs.filter((blog) => matchesSearch(blog, search));

  return (
    <main className="blogs-page">
      {/* =====================================================
          HERO
      ===================================================== */}

      <section className="blog-hero">
        {/* BACKGROUND */}

        <div className="blog-hero-background" />

        {/* OVERLAY */}

        <div className="blog-hero-overlay" />

        {/* HERO CONTENT */}

        <div className="blog-hero-content">
          {/* TITLE */}

          <h1 className="blog-hero-title">
            From Blueprint To
            <br />
            Beautiful Reality
          </h1>

          {/* SEARCH */}

          <form method="GET" action="/blogs" className="blog-search-form">
            <input
              type="search"
              name="search"
              defaultValue={search}
              placeholder="Search Here..."
              aria-label="Search blogs"
              className="blog-search-input"
            />

            <button type="submit" className="blog-search-button">
              Search
            </button>
          </form>
        </div>
      </section>

      {/* =====================================================
          BLOG SECTION
      ===================================================== */}

      <section className="blogs-section">
        <div className="blogs-container">
          {/* =================================================
              SEARCH RESULT HEADER
          ================================================= */}

          {search && (
            <div className="search-result-header">
              <p className="search-result-text">
                Showing <strong>{filteredBlogs.length}</strong>{" "}
                {filteredBlogs.length === 1 ? "blog" : "blogs"} for{" "}
                <strong>“{search}”</strong>
              </p>

              <Link href="/blogs" className="clear-search-button">
                Clear Search
              </Link>
            </div>
          )}

          {/* =================================================
              NO SEARCH RESULTS
          ================================================= */}

          {search && filteredBlogs.length === 0 && (
            <div className="no-search-results">
              <h2>No blogs found</h2>

              <p>We couldn't find any blogs matching “{search}”.</p>

              <Link href="/blogs" className="view-all-button">
                View All Blogs
              </Link>
            </div>
          )}

          {/* =================================================
              BLOG GRID
          ================================================= */}

          {filteredBlogs.length > 0 && (
            <div className="blogs-grid">
              {filteredBlogs.map((blog) => (
                <article key={blog._id} className="blog-card">
                  {/* =================================================
                      BLOG IMAGE
                  ================================================= */}

                  <Link
                    href={`/blogs/${blog.slug}`}
                    className="blog-card-image-link"
                  >
                    {blog.featuredImage ? (
                      <img
                        src={blog.featuredImage}
                        alt={blog.title}
                        className="blog-card-image"
                      />
                    ) : (
                      <div className="blog-card-no-image">
                        Earthvine Interiors
                      </div>
                    )}
                  </Link>

                  {/* =================================================
                      CARD CONTENT
                  ================================================= */}

                  <div className="blog-card-content">
                    {/* DATE */}

                    <p className="blog-card-date">
                      {formatDate(blog.publishedAt || blog.createdAt)}
                    </p>

                    {/* TITLE */}

                    <Link
                      href={`/blogs/${blog.slug}`}
                      className="blog-card-title-link"
                    >
                      <h2 className="blog-card-title">{blog.title}</h2>
                    </Link>

                    {/* EXCERPT */}

                    <p className="blog-card-excerpt">
                      {getExcerpt(blog.content)}
                    </p>

                    {/* DIVIDER */}

                    <div className="blog-card-divider" />

                    {/* AUTHOR / READ MORE */}

                    <div className="blog-card-footer">
                      {/* AUTHOR */}

                      <div className="blog-author">
                        {blog.author?.photo ? (
                          <img
                            src={blog.author.photo}
                            alt={blog.author.name || "Author"}
                            className="blog-author-image"
                          />
                        ) : (
                          <div className="blog-author-placeholder">
                            {blog.author?.name?.charAt(0)?.toUpperCase() || "E"}
                          </div>
                        )}

                        <span className="blog-author-name">
                          {blog.author?.name || "Earthvine"}
                        </span>
                      </div>

                      {/* READ MORE */}

                      <Link
                        href={`/blogs/${blog.slug}`}
                        className="blog-read-more"
                      >
                        Read More
                      </Link>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          )}

          {/* =================================================
              NO BLOGS AT ALL
          ================================================= */}

          {!search && filteredBlogs.length === 0 && (
            <div className="no-blogs">
              <h2>No blogs available</h2>

              <p>Check back soon for new insights from Earthvine.</p>
            </div>
          )}
        </div>
      </section>

      {/* =====================================================
          STYLES
      ===================================================== */}

      <style>{`
        /* =====================================================
          PAGE
        ===================================================== */

        .blogs-page {
          min-height: 100vh;
          background: #f7f7f5;
        }

        /* =====================================================
          HERO
        ===================================================== */

        .blog-hero {
          position: relative;
          width: 100%;
          height: 374px;
          margin-top: 80px;
          overflow: hidden;
        }

        .blog-hero-background {
          position: absolute;
          inset: -8px;
          background-image: url("/new/Frame146.png");
          background-size: cover;
          background-position: center;
          background-repeat: no-repeat;
          filter: blur(3px);
          transform: scale(1.02);
          z-index: 0;
        }

        .blog-hero-overlay {
          position: absolute;
          inset: 0;
          background: rgba(224, 196, 158, 0.29);
          z-index: 1;
        }

        .blog-hero-content {
          position: relative;
          z-index: 2;

          width: 100%;
          height: 100%;

          display: flex;
          flex-direction: column;
          align-items: center;

          padding-top: 43px;
          box-sizing: border-box;
        }

        /* =====================================================
           HERO TITLE
        ===================================================== */

        .blog-hero-title {
          margin: 0;

          color: #3c2a20;

          font-family:
            "Frank Ruhl Libre",
            "Playfair Display",
            Georgia,
            serif;

          font-size: 55.74px;
          font-style: normal;
          font-weight: 600;
          line-height: 1.19;

          letter-spacing: 2.211px;

          text-transform: uppercase;
          text-align: center;
        }

        /* =====================================================
           SEARCH
        ===================================================== */

        .blog-search-form {
          width: calc(100% - 40px);
          max-width: 1100px;

          height: 58px;

          margin-top: 25px;

          display: flex;
          flex-direction: row;
          align-items: stretch;

          gap: 14px;

          box-sizing: border-box;
        }

        .blog-search-input {
          display: block;

          flex: 1 1 auto;

          width: auto;
          min-width: 0;

          height: 58px;

          box-sizing: border-box;

          border: none;

          background: #ffffff;

          padding: 0 22px;

          color: #795547;

          font-family:
            "Frank Ruhl Libre",
            "Playfair Display",
            Georgia,
            serif;

          font-size: 25px;
          font-weight: 600;

          line-height: 58px;

          outline: none;

          appearance: none;
        }

        .blog-search-input::placeholder {
          color: #bca99f;
          opacity: 1;
        }

        .blog-search-button {
          display: flex;

          flex: 0 0 150px;

          width: 150px;
          min-width: 150px;
          max-width: 150px;

          height: 58px;

          box-sizing: border-box;

          align-items: center;
          justify-content: center;

          border: none;

          background: #3c2a20;

          color: #ffffff;

          font-family:
            "Frank Ruhl Libre",
            "Playfair Display",
            Georgia,
            serif;

          font-size: 23px;
          font-weight: 600;

          line-height: 1;

          padding: 0;
          margin: 0;

          cursor: pointer;

          transition:
            background 0.2s ease,
            transform 0.2s ease;
        }

        .blog-search-button:hover {
          background: #2f2119;
        }

        .blog-search-button:active {
          transform: translateY(1px);
        }

        /* =====================================================
          BLOG SECTION
        ===================================================== */

        .blogs-section {
          width: 100%;

          box-sizing: border-box;

          padding:
            72px
            clamp(24px, 5vw, 72px)
            100px;
        }

        .blogs-container {
          width: 100%;
          max-width: 1320px;

          margin: 0 auto;
        }

        /* =====================================================
          SEARCH RESULT HEADER
        ===================================================== */

        .search-result-header {
          display: flex;
          align-items: center;
          justify-content: space-between;

          gap: 20px;

          margin-bottom: 34px;
        }

        .search-result-text {
          margin: 0;

          color: #795547;

          font-family:
            "Jost",
            Arial,
            sans-serif;

          font-size: 15px;
          line-height: 1.5;
        }

        .search-result-text strong {
          font-weight: 600;
        }

        /* =====================================================
          CLEAR SEARCH
        ===================================================== */

        .clear-search-button {
          flex-shrink: 0;

          display: inline-flex;

          align-items: center;
          justify-content: center;

          min-height: 38px;

          padding: 0 18px;

          border: 1px solid rgba(60, 42, 32, 0.35);

          color: #3c2a20;

          background: transparent;

          font-family:
            "Jost",
            Arial,
            sans-serif;

          font-size: 14px;
          font-weight: 500;

          text-decoration: none;

          transition:
            background 0.2s ease,
            color 0.2s ease,
            border-color 0.2s ease;
        }

        .clear-search-button:hover {
          background: #3c2a20;
          border-color: #3c2a20;
          color: #ffffff;
        }

        /* =====================================================
          BLOG GRID
        ===================================================== */

        .blogs-grid {
          width: 100%;

          display: grid;

          grid-template-columns:
            repeat(3, minmax(0, 1fr));

          column-gap: 32px;
          row-gap: 64px;

          align-items: start;
        }

        /* =====================================================
          BLOG CARD
        ===================================================== */

        .blog-card {
          width: 100%;

          max-width: 390px;

          margin: 0 auto;

          overflow: hidden;

          border:
            1px solid
            rgba(121, 85, 71, 0.22);

          background: white ;

          box-sizing: border-box;

          transition:
            transform 0.25s ease,
            box-shadow 0.25s ease;
        }

        .blog-card:hover {
          transform: translateY(-3px);

          box-shadow:
            0 10px 30px
            rgba(60, 42, 32, 0.08);
        }

        /* =====================================================
          BLOG IMAGE
        ===================================================== */

        .blog-card-image-link {
          position: relative;

          display: block;

          width: 100%;

          aspect-ratio: 1.55 / 1;

          overflow: hidden;

          background: #e8ded2;

          text-decoration: none;
        }

        .blog-card-image {
          display: block;

          width: 100%;
          height: 100%;

          object-fit: cover;

          transition: transform 0.45s ease;
        }

        .blog-card:hover .blog-card-image {
          transform: scale(1.03);
        }

        .blog-card-no-image {
          display: flex;

          width: 100%;
          height: 100%;

          align-items: center;
          justify-content: center;

          color: #795547;

          font-family:
            "Jost",
            Arial,
            sans-serif;

          font-size: 14px;
        }

        /* =====================================================
          CARD CONTENT
        ===================================================== */

        .blog-card-content {
          padding:
            17px
            20px
            15px;

          box-sizing: border-box;
        }

        /* =====================================================
          DATE
        ===================================================== */

        .blog-card-date {
          margin: 0;

          color: #795547;

          font-family:
            "Jost",
            Arial,
            sans-serif;

          font-size: 12px;

          letter-spacing: 2px;

          text-transform: uppercase;

          font-weight: 500;
        }

        /* =====================================================
          TITLE
        ===================================================== */

        .blog-card-title-link {
          display: block;

          text-decoration: none;
        }

        .blog-card-title {
          margin:
            18px
            0
            0;

          color: #0f243c;

          font-family:
            "Frank Ruhl Libre",
            "Playfair Display",
            Georgia,
            serif;

          font-size: 22px;

          font-weight: 500;

          line-height: 1.3;

          display: -webkit-box;

          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;

          overflow: hidden;
        }

        /* =====================================================
          EXCERPT
        ===================================================== */

        .blog-card-excerpt {
          margin:
            14px
            0
            0;

          color: #172a3d;

          font-family:
            "Jost",
            Arial,
            sans-serif;

          font-size: 15px;

          line-height: 1.55;

          min-height: 47px;

          display: -webkit-box;

          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;

          overflow: hidden;
        }

        /* =====================================================
          DIVIDER
        ===================================================== */

        .blog-card-divider {
          width: 100%;
          height: 1px;

          background:
            rgba(121, 85, 71, 0.2);

          margin:
            15px
            0
            13px;
        }

        /* =====================================================
          FOOTER
        ===================================================== */

        .blog-card-footer {
          display: flex;

          align-items: center;

          justify-content: space-between;

          gap: 12px;
        }

        /* =====================================================
          AUTHOR
        ===================================================== */

        .blog-author {
          display: flex;

          align-items: center;

          gap: 10px;

          min-width: 0;
        }

        .blog-author-image,
        .blog-author-placeholder {
          width: 34px;
          height: 34px;

          min-width: 34px;

          border-radius: 50%;

          display: block;

          object-fit: cover;
        }

        .blog-author-placeholder {
          display: flex;

          align-items: center;
          justify-content: center;

          background: #3c2a20;

          color: #ffffff;

          font-family:
            "Jost",
            Arial,
            sans-serif;

          font-size: 13px;
        }

        .blog-author-name {
          min-width: 0;

          overflow: hidden;

          text-overflow: ellipsis;

          white-space: nowrap;

          color: #3c2a20;

          font-family:
            "Jost",
            Arial,
            sans-serif;

          font-size: 14px;
        }

        /* =====================================================
          READ MORE
        ===================================================== */

        .blog-read-more {
          flex-shrink: 0;

          color: #3c2a20;

          font-family:
            "Jost",
            Arial,
            sans-serif;

          font-size: 14px;

          font-weight: 500;

          text-decoration: none;

          transition: opacity 0.2s ease;
        }

        .blog-read-more:hover {
          opacity: 0.65;
        }

        /* =====================================================
          NO SEARCH RESULTS
        ===================================================== */

        .no-search-results {
          width: 100%;

          text-align: center;

          padding:
            40px
            20px
            80px;
        }

        .no-search-results h2 {
          margin: 0;

          color: #3c2a20;

          font-family:
            "Frank Ruhl Libre",
            "Playfair Display",
            Georgia,
            serif;

          font-size: 32px;

          font-weight: 500;
        }

        .no-search-results p {
          margin:
            10px
            0
            24px;

          color: #795547;

          font-family:
            "Jost",
            Arial,
            sans-serif;

          font-size: 15px;
        }

        /* =====================================================
          VIEW ALL
        ===================================================== */

        .view-all-button {
          display: inline-flex;

          align-items: center;
          justify-content: center;

          height: 46px;

          padding: 0 24px;

          background: #3c2a20;

          color: #ffffff;

          border-radius: 5px;

          font-family:
            "Jost",
            Arial,
            sans-serif;

          font-size: 14px;

          text-decoration: none;

          transition:
            background 0.2s ease;
        }

        .view-all-button:hover {
          background: #2f2119;
        }

        /* =====================================================
          NO BLOGS
        ===================================================== */

        .no-blogs {
          width: 100%;

          text-align: center;

          padding:
            40px
            20px
            80px;
        }

        .no-blogs h2 {
          margin: 0;

          color: #3c2a20;

          font-family:
            "Frank Ruhl Libre",
            "Playfair Display",
            Georgia,
            serif;

          font-size: 30px;

          font-weight: 500;
        }

        .no-blogs p {
          margin-top: 10px;

          color: #795547;

          font-family:
            "Jost",
            Arial,
            sans-serif;

          font-size: 15px;
        }

        /* =====================================================
          TABLET
        ===================================================== */

        @media (max-width: 1100px) {
          .blog-hero-title {
            font-size: clamp(40px, 5vw, 52px);
          }

          .blog-search-form {
            max-width: calc(100% - 64px);
          }

          .blogs-grid {
            grid-template-columns:
              repeat(2, minmax(0, 1fr));

            column-gap: 28px;
          }

          .blog-card {
            max-width: 390px;
          }
        }

        /* =====================================================
          MOBILE
        ===================================================== */

        @media (max-width: 640px) {
          .blog-hero {
            height: 390px;
            margin-top: 70px;
          }

          .blog-hero-content {
            padding-top: 38px;
            padding-left: 16px;
            padding-right: 16px;
          }

          .blog-hero-title {
            font-size: clamp(30px, 8vw, 40px);
            line-height: 1.18;
            letter-spacing: 1px;
          }

          .blog-search-form {
            width: 100%;
            max-width: 100%;

            height: auto;

            margin-top: 25px;

            flex-direction: column;

            gap: 10px;
          }

          .blog-search-input {
            width: 100%;

            height: 54px;

            flex: none;

            padding:
              0
              18px;

            font-size: 21px;

            line-height: 54px;
          }

          .blog-search-button {
            width: 70%;
            min-width: 0;
            max-width: none;

            height: 54px;

            flex: none;

            font-size: 21px;
          }

          .blogs-section {
            padding:
              50px
              20px
              70px;
          }

          .search-result-header {
            align-items: flex-start;

            flex-direction: column;

            gap: 12px;

            margin-bottom: 28px;
          }

          .clear-search-button {
            min-height: 36px;

            padding:
              0
              16px;
          }

          .blogs-grid {
            grid-template-columns:
              minmax(0, 1fr);

            row-gap: 40px;
          }

          .blog-card {
            width: 100%;
            max-width: 390px;
          }

          .blog-card-content {
            padding:
              16px
              18px
              15px;
          }

          .blog-card-title {
            font-size: 21px;
          }

          .blog-card-excerpt {
            font-size: 14px;
          }
        }

        /* =====================================================
          SMALL MOBILE
        ===================================================== */

        @media (max-width: 380px) {
          .blog-hero {
            height: 380px;
          }

          .blog-hero-title {
            font-size: 29px;
          }

          .blogs-section {
            padding-left: 16px;
            padding-right: 16px;
          }

          .blog-card-title {
            font-size: 20px;
          }
        }
      `}</style>
    </main>
  );
}
