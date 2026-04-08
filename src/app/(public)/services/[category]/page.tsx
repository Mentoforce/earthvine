import ServiceLayout from "@/components/service-page/ServiceLayout";
import { notFound } from "next/navigation";

interface PageProps {
  params: {
    category: string;
  };
}

export async function generateMetadata({ params }: any) {
  const { category } = await params;

  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/api/services/${category}`,
    { cache: "no-store" },
  );

  if (!res.ok) {
    return {
      title: "Category Not Found",
      description: "This category does not exist.",
    };
  }

  const json = await res.json();
  const data = json.data;
  console.log("CATEGORY SEO:", data.seo);

  return {
    title: data.seo?.metaTitle || `${data.title || category} Services`,

    description:
      data.seo?.metaDescription ||
      `Explore professional ${data.title || category} services tailored for your needs.`,
  };
}

export default async function CategoryPage({ params }: PageProps) {
  const { category } = await params;

  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/api/services/${category}`,
    { cache: "no-store" },
  );
  // console.log("CATEGORY:", category);

  if (!res.ok) return notFound();

  const json = await res.json();
  const data = json.data;

  if (!data) return notFound();

  return <ServiceLayout {...data} />;
}

// import { services } from "@/data/services";
// import ServiceLayout from "@/components/service-page/ServiceLayout";
// import { notFound } from "next/navigation";

// interface PageProps {
//   params: Promise<{
//     category: string;
//   }>;
// }
//--------------------------------------------
// export default async function CategoryPage({ params }: PageProps) {
//   const { category } = await params;

//   const categoryData = services[category as keyof typeof services];

//   if (!categoryData) return notFound();

//   // if category contains sub-services (like residential)
//   // if ("children" in categoryData) {
//   //   return notFound();
//   // }

//   return <ServiceLayout {...(categoryData as any)} />;

//   // category itself is a service page (like terrace)
//   return <ServiceLayout {...(categoryData as any)} />;
// }
//------------------------------
// export async function generateMetadata({
//   params,
// }: {
//   params: { category: string };
// }) {
//   return {
//     title: `${params.category} Services`,
//     description: `Explore professional ${params.category} services tailored for your needs.`,
//   };
// }
