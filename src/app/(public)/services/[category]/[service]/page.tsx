import ServiceLayout from "@/components/service-page/ServiceLayout";
import { notFound } from "next/navigation";

interface PageProps {
  params: {
    category: string;
    service: string;
  };
}

export async function generateMetadata({ params }: any) {
  const { category, service } = await params;

  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/api/services/${category}/${service}`,
    { cache: "no-store" },
  );

  if (!res.ok) {
    return {
      title: "Service Not Found",
      description: "This service does not exist.",
    };
  }

  const json = await res.json();
  const data = json.data;

  if (!data) {
    return {
      title: "Service Not Found",
      description: "This service does not exist.",
    };
  }

  return {
    title: data.seo?.metaTitle || data.title || "Service",

    description:
      data.seo?.metaDescription ||
      data.intro?.content?.replace(/<[^>]+>/g, "").slice(0, 150) ||
      "Explore our services",
  };
}
export default async function ServicePage({ params }: PageProps) {
  const { category, service } = await params;

  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/api/services/${category}/${service}`,
    { cache: "no-store" },
  );

  if (!res.ok) return notFound();

  const json = await res.json();
  const data = json.data;
  // console.log("SERVICE:", service);
  if (!data) return notFound();

  return <ServiceLayout {...data} />;
}

// import { services } from "@/data/services";
// import ServiceLayout from "@/components/service-page/ServiceLayout";
// import { notFound } from "next/navigation";

// interface PageProps {
//   params: Promise<{
//     category: string;
//     service: string;
//   }>;
// }

// export default async function ServicePage({ params }: PageProps) {
//   const { category, service } = await params;

//   const categoryData = services[category as keyof typeof services];

//   if (!categoryData) return notFound();

//   // category must have children to access service
//   if (!("children" in categoryData)) {
//     return notFound();
//   }

//   const serviceData =
//     categoryData.children[service as keyof typeof categoryData.children];

//   if (!serviceData) return notFound();

//   return <ServiceLayout {...serviceData} />;
// }
//---------------------------------------------------

// export async function generateMetadata({
//   params,
// }: {
//   params: { category: string; service: string };
// }) {
//   const res = await fetch(
//     `${process.env.NEXT_PUBLIC_API_URL}/api/services/${params.category}/${params.service}`,
//     { cache: "no-store" },
//   );

//   if (!res.ok) {
//     return {
//       title: "Service Not Found",
//       description: "This service does not exist.",
//     };
//   }

//   const json = await res.json();
//   const service = json.data;

//   if (!service) {
//     return {
//       title: "Service Not Found",
//       description: "This service does not exist.",
//     };
//   }

//   return {
//     title: service.seo?.metaTitle || service.title,
//     description:
//       service.seo?.metaDescription ||
//       service.intro?.content?.replace(/<[^>]+>/g, "").slice(0, 150) ||
//       "Explore our services",

//     openGraph: {
//       title: service.seo?.metaTitle || service.title,
//       description: service.seo?.metaDescription || "Explore our services",
//       images: service.hero?.image ? [service.hero.image] : [],
//     },
//   };
// }
