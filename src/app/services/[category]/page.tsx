import { services } from "@/data/services";
import ServiceLayout from "@/components/service-page/ServiceLayout";
import { notFound } from "next/navigation";

interface PageProps {
  params: Promise<{
    category: string;
  }>;
}

export default async function CategoryPage({ params }: PageProps) {
  const { category } = await params;

  const categoryData = services[category as keyof typeof services];

  if (!categoryData) return notFound();

  // if category contains sub-services (like residential)
  // if ("children" in categoryData) {
  //   return notFound();
  // }

  return <ServiceLayout {...(categoryData as any)} />;

  // category itself is a service page (like terrace)
  return <ServiceLayout {...(categoryData as any)} />;
}
