// import ServiceLayout from "@/components/service-page/ServiceLayout";
// import { notFound } from "next/navigation";

// interface PageProps {
//   params: {
//     slug: string;
//   };
// }

// // ✅ META
// export async function generateMetadata({ params }: any) {
//   const { slug } = await params;

//   const res = await fetch(
//     `${process.env.NEXT_PUBLIC_API_URL}/api/services/${slug}`,
//     { cache: "no-store" },
//   );

//   if (!res.ok) {
//     return {
//       title: "Not Found",
//       description: "Page not found",
//     };
//   }

//   const json = await res.json();
//   const data = json.data;

//   return {
//     title: data.seo?.metaTitle || data.title,
//     description:
//       data.seo?.metaDescription ||
//       data.intro?.content?.replace(/<[^>]+>/g, "").slice(0, 150),
//   };
// }

// // ✅ PAGE
// export default async function Page({ params }: PageProps) {
//   const { slug } = await params;

//   const res = await fetch(
//     `${process.env.NEXT_PUBLIC_API_URL}/api/services/${slug}`,
//     { cache: "no-store" },
//   );

//   if (!res.ok) return notFound();

//   const json = await res.json();
//   const data = json.data;

//   return <ServiceLayout {...data} />;
// }

import ServiceLayout from "@/components/service-page/ServiceLayout";
import { notFound } from "next/navigation";

interface PageProps {
  params: {
    slug: string;
  };
}

// ✅ META
export async function generateMetadata({ params }: any) {
  const { slug } = await params;

  // 1. TRY SERVICE
  let res = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/api/services/single/${slug}`,
    { cache: "no-store" },
  );

  if (res.ok) {
    const json = await res.json();
    const data = json.data;

    return {
      title: data.seo?.metaTitle || data.title,
      description:
        data.seo?.metaDescription ||
        data.intro?.content?.replace(/<[^>]+>/g, "").slice(0, 150),
    };
  }

  // 🔥 2. FALLBACK → CATEGORY
  res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/services/${slug}`, {
    cache: "no-store",
  });

  if (!res.ok) {
    return {
      title: "Not Found",
      description: "Page not found",
    };
  }

  const json = await res.json();
  const data = json.data;

  return {
    title: data.seo?.metaTitle || data.title,
    description: data.seo?.metaDescription || `Explore ${data.title} services`,
  };
}

// ✅ PAGE
export default async function Page({ params }: PageProps) {
  const { slug } = await params;

  // 1. TRY SERVICE
  let res = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/api/services/single/${slug}`,
    { cache: "no-store" },
  );

  if (res.ok) {
    const json = await res.json();
    const data = json.data;

    return <ServiceLayout {...data} />;
  }

  // 2. FALLBACK → CATEGORY
  res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/services/${slug}`, {
    cache: "no-store",
  });

  if (!res.ok) return notFound();

  const json = await res.json();
  const data = json.data;

  return (
    <div className="container py-20">
      <h1 className="text-3xl font-bold mb-6">{data.title}</h1>

      <div className="grid md:grid-cols-3 gap-6">
        {data.children?.map((child: any) => (
          <a
            key={child._id}
            href={`/services/${child.slug}`}
            className="border p-4 rounded hover:shadow"
          >
            <h2 className="font-semibold">{child.title}</h2>
          </a>
        ))}
      </div>
    </div>
  );
}
