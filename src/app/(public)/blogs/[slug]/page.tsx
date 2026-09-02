// import type { Metadata } from "next";
// import { notFound } from "next/navigation";

// type Blog = {
//   _id: string;
//   title: string;
//   slug: string;
//   featuredImage: string;
//   imageAlt?: string;
//   content: string;

//   author: {
//     name: string;
//     description?: string;
//     photo?: string;
//     photoAlt?: string;
//   };

//   seo?: {
//     metaTitle?: string;
//     metaDescription?: string;
//   };

//   publishedAt?: string | null;
//   createdAt: string;
// };

// interface PageProps {
//   params: Promise<{
//     slug: string;
//   }>;
// }

// async function getBlog(slug: string): Promise<Blog | null> {
//   try {
//     const res = await fetch(
//       `${process.env.NEXT_PUBLIC_API_URL}/api/blogs/${slug}`,
//       {
//         cache: "no-store",
//       },
//     );

//     if (!res.ok) {
//       return null;
//     }

//     const json = await res.json();

//     return json.data || null;
//   } catch (error) {
//     console.error("Failed to fetch blog:", error);

//     return null;
//   }
// }

// export async function generateMetadata({
//   params,
// }: PageProps): Promise<Metadata> {
//   const { slug } = await params;

//   const blog = await getBlog(slug);

//   if (!blog) {
//     return {
//       title: "Blog Not Found | Earthvine",
//       description: "The requested blog could not be found.",
//     };
//   }

//   const plainTextDescription =
//     blog.content
//       ?.replace(/<[^>]+>/g, "")
//       .replace(/\s+/g, " ")
//       .trim()
//       .slice(0, 160) || "";

//   return {
//     title: blog.seo?.metaTitle || blog.title,

//     description: blog.seo?.metaDescription || plainTextDescription,

//     alternates: {
//       canonical: `/blogs/${blog.slug}`,
//     },

//     openGraph: {
//       title: blog.seo?.metaTitle || blog.title,

//       description: blog.seo?.metaDescription || plainTextDescription,

//       images: blog.featuredImage
//         ? [
//             {
//               url: blog.featuredImage,
//               alt: blog.imageAlt || blog.title,
//             },
//           ]
//         : undefined,
//     },
//   };
// }

// export default async function BlogPage({ params }: PageProps) {
//   const { slug } = await params;

//   const blog = await getBlog(slug);

//   if (!blog) {
//     notFound();
//   }

//   const publishedDate = new Date(
//     blog.publishedAt || blog.createdAt,
//   ).toLocaleDateString("en-IN", {
//     day: "2-digit",
//     month: "long",
//     year: "numeric",
//   });

//   return (
//     <main className="min-h-screen">
//       {/* HERO IMAGE */}
//       <section className="pt-28 md:pt-36">
//         <div className="max-w-7xl mx-auto px-6">
//           <div className="relative w-full aspect-[16/8] overflow-hidden rounded-lg">
//             {blog.featuredImage ? (
//               <img
//                 src={blog.featuredImage}
//                 alt={blog.imageAlt || blog.title}
//                 className="w-full h-full object-cover"
//               />
//             ) : (
//               <div className="w-full h-full bg-gray-100 flex items-center justify-center">
//                 <span className="text-gray-400">No Image</span>
//               </div>
//             )}
//           </div>
//         </div>
//       </section>

//       {/* BLOG CONTENT */}
//       <article className="py-14 md:py-20">
//         <div className="max-w-4xl mx-auto px-6">
//           {/* CATEGORY / DATE */}
//           <div className="flex items-center gap-4 mb-6">
//             <div className="w-8 h-px bg-[hsl(var(--gold))]" />

//             <span className="text-[11px] uppercase tracking-[0.3em] text-[hsl(var(--secondary))]">
//               Journal
//             </span>

//             <span className="text-xs text-gray-400">{publishedDate}</span>
//           </div>

//           {/* TITLE */}
//           <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif leading-tight mb-10">
//             {blog.title}
//           </h1>

//           {/* CONTENT */}
//           <div
//             className="prose prose-lg max-w-none earthvine-prose"
//             dangerouslySetInnerHTML={{
//               __html: blog.content,
//             }}
//           />

//           {/* AUTHOR */}
//           <div className="mt-16 pt-10 border-t border-gray-200">
//             <div className="flex flex-col sm:flex-row gap-5 sm:items-center">
//               {/* AUTHOR PHOTO */}
//               {blog.author?.photo ? (
//                 <img
//                   src={blog.author.photo}
//                   alt={blog.author.photoAlt || blog.author.name}
//                   className="w-20 h-20 rounded-full object-cover"
//                 />
//               ) : (
//                 <div className="w-20 h-20 rounded-full bg-gray-100 flex items-center justify-center text-2xl font-serif">
//                   {blog.author?.name?.charAt(0)?.toUpperCase() || "A"}
//                 </div>
//               )}

//               {/* AUTHOR DETAILS */}
//               <div>
//                 <p className="text-[10px] uppercase tracking-[0.3em] text-gray-500 mb-1">
//                   Written by
//                 </p>

//                 <h2 className="text-xl font-serif">
//                   {blog.author?.name || "Earthvine"}
//                 </h2>

//                 {blog.author?.description && (
//                   <p className="text-sm text-gray-600 mt-2 max-w-xl leading-relaxed">
//                     {blog.author.description}
//                   </p>
//                 )}
//               </div>
//             </div>
//           </div>
//         </div>
//       </article>
//     </main>
//   );
// }

import type { Metadata } from "next";
import { notFound } from "next/navigation";

type Blog = {
  _id: string;
  title: string;
  slug: string;
  featuredImage: string;
  imageAlt?: string;
  content: string;

  author: {
    name: string;
    description?: string;
    photo?: string;
    photoAlt?: string;
  };

  seo?: {
    metaTitle?: string;
    metaDescription?: string;
  };

  publishedAt?: string | null;
  createdAt: string;
};

interface PageProps {
  params: Promise<{
    slug: string;
  }>;
}

async function getBlog(slug: string): Promise<Blog | null> {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/api/blogs/${slug}`,
      {
        cache: "no-store",
      },
    );

    if (!res.ok) {
      return null;
    }

    const json = await res.json();

    return json.data || null;
  } catch (error) {
    console.error("Failed to fetch blog:", error);

    return null;
  }
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params;

  const blog = await getBlog(slug);

  if (!blog) {
    return {
      title: "Blog Not Found | Earthvine",
      description: "The requested blog could not be found.",
    };
  }

  const plainTextDescription =
    blog.content
      ?.replace(/<[^>]+>/g, "")
      .replace(/\s+/g, " ")
      .trim()
      .slice(0, 160) || "";

  return {
    title: blog.seo?.metaTitle || blog.title,

    description: blog.seo?.metaDescription || plainTextDescription,

    alternates: {
      canonical: `/blogs/${blog.slug}`,
    },

    openGraph: {
      title: blog.seo?.metaTitle || blog.title,

      description: blog.seo?.metaDescription || plainTextDescription,

      images: blog.featuredImage
        ? [
            {
              url: blog.featuredImage,
              alt: blog.imageAlt || blog.title,
            },
          ]
        : undefined,
    },
  };
}

export default async function BlogPage({ params }: PageProps) {
  const { slug } = await params;

  const blog = await getBlog(slug);

  if (!blog) {
    notFound();
  }

  const publishedDate = new Date(
    blog.publishedAt || blog.createdAt,
  ).toLocaleDateString("en-IN", {
    day: "2-digit",
    month: "long",
    year: "numeric",
  });

  return (
    <main className="min-h-screen">
      {/* =====================================================
          FEATURED IMAGE
      ===================================================== */}

      <section className="blog-featured-image-section">
        {blog.featuredImage ? (
          <img
            src={blog.featuredImage}
            alt={blog.imageAlt || blog.title}
            className="blog-featured-image"
          />
        ) : (
          <div className="blog-featured-image-placeholder">
            <span>No Image</span>
          </div>
        )}
      </section>

      {/* =====================================================
          BLOG CONTENT
      ===================================================== */}

      <article className="blog-article">
        <div className="blog-article-container">
          {/* CATEGORY / DATE */}

          <div className="flex items-center gap-4 mb-6">
            <div className="w-8 h-px bg-[hsl(var(--gold))]" />

            <span className="text-[11px] uppercase tracking-[0.3em] text-[hsl(var(--secondary))]">
              Journal
            </span>

            <span className="text-xs text-gray-400">{publishedDate}</span>
          </div>

          {/* TITLE */}

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif leading-tight mb-10 max-w-5xl">
            {blog.title}
          </h1>

          {/* CONTENT */}

          <div
            className="prose prose-lg max-w-none earthvine-prose"
            dangerouslySetInnerHTML={{
              __html: blog.content,
            }}
          />

          {/* AUTHOR */}

          <div className="mt-16 pt-10 border-t border-gray-200">
            <div className="flex flex-col sm:flex-row gap-5 sm:items-center">
              {/* AUTHOR PHOTO */}

              {blog.author?.photo ? (
                <img
                  src={blog.author.photo}
                  alt={blog.author.photoAlt || blog.author.name}
                  className="w-20 h-20 rounded-full object-cover"
                />
              ) : (
                <div className="w-20 h-20 rounded-full bg-gray-100 flex items-center justify-center text-2xl font-serif">
                  {blog.author?.name?.charAt(0)?.toUpperCase() || "A"}
                </div>
              )}

              {/* AUTHOR DETAILS */}

              <div>
                <p className="text-[10px] uppercase tracking-[0.3em] text-gray-500 mb-1">
                  Written by
                </p>

                <h2 className="text-xl font-serif">
                  {blog.author?.name || "Earthvine"}
                </h2>

                {blog.author?.description && (
                  <p className="text-sm text-gray-600 mt-2 max-w-xl leading-relaxed">
                    {blog.author.description}
                  </p>
                )}
              </div>
            </div>
          </div>
        </div>
      </article>

      {/* =====================================================
          RESPONSIVE STYLES
      ===================================================== */}

      <style>{`
  /* =====================================================
     FEATURED IMAGE
  ===================================================== */

  .blog-featured-image-section {
    width: 100%;
    margin-top: 88px;

    display: flex;
    justify-content: center;
    align-items: flex-start;

    box-sizing: border-box;
  }

  .blog-featured-image {
    display: block;

    /*
     * EXACTLY THE SAME WIDTH AS BLOG CONTENT
     *
     * Blog content:
     * max-width: 1080px
     *
     * Therefore image:
     * max-width: 1080px
     */
    width: 100%;
    max-width: 1080px;

    /*
     * Keep the original aspect ratio.
     *
     * NOTHING IS CROPPED.
     */
    height: auto;

    object-fit: contain;
    object-position: center;

    /*
     * Prevent any accidental inline-image gap.
     */
    vertical-align: top;
  }

  .blog-featured-image-placeholder {
    width: 100%;
    max-width: 1080px;
    min-height: 400px;

    display: flex;
    align-items: center;
    justify-content: center;

    background: #f1eee9;
    color: #9a8b82;

    font-family: Jost, Arial, sans-serif;
    font-size: 14px;

    box-sizing: border-box;
  }


  /* =====================================================
     BLOG CONTENT
  ===================================================== */

  .blog-article {
    width: 100%;

    padding: 64px 24px 90px;

    box-sizing: border-box;
  }

  .blog-article-container {
    width: 100%;
    max-width: 1080px;

    margin: 0 auto;
  }


  /* =====================================================
     TABLET
  ===================================================== */

  @media (max-width: 1024px) {

    .blog-featured-image-section {
      margin-top: 88px;
      padding: 0 32px;
    }

    .blog-featured-image {
      width: 100%;
      max-width: 1080px;
      height: auto;

      object-fit: contain;
      object-position: center;
    }

    .blog-featured-image-placeholder {
      width: 100%;
      max-width: 1080px;
      min-height: 320px;
    }

    .blog-article {
      padding-left: 32px;
      padding-right: 32px;
    }
  }


  /* =====================================================
     MOBILE
  ===================================================== */

  @media (max-width: 640px) {

    .blog-featured-image-section {
      margin-top: 70px;
      padding: 0 20px;
    }

    .blog-featured-image {
      /*
       * Full available content width.
       */
      width: 100%;
      max-width: none;

      /*
       * Preserve complete image.
       */
      height: auto;

      object-fit: contain;
      object-position: center;
    }

    .blog-featured-image-placeholder {
      width: 100%;
      max-width: none;
      min-height: 220px;
    }

    .blog-article {
      padding: 42px 20px 70px;
    }

    .blog-article-container {
      max-width: 100%;
    }

    .blog-article h1 {
      font-size: 2.25rem;
      line-height: 1.15;
    }
  }


  /* =====================================================
     SMALL MOBILE
  ===================================================== */

  @media (max-width: 380px) {

    .blog-featured-image-section {
      margin-top: 70px;
      padding: 0 16px;
    }

    .blog-featured-image {
      width: 100%;
      max-width: none;
      height: auto;

      object-fit: contain;
    }

    .blog-article {
      padding-left: 16px;
      padding-right: 16px;
    }

    .blog-article h1 {
      font-size: 2rem;
    }
  }
`}</style>
    </main>
  );
}
