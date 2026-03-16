import { services } from "@/data/services";
import ServiceLayout from "@/components/service-page/ServiceLayout";
import { notFound } from "next/navigation";

interface PageProps {
  params: Promise<{
    category: string;
    service: string;
  }>;
}

export default async function ServicePage({ params }: PageProps) {
  const { category, service } = await params;

  const categoryData = services[category as keyof typeof services];

  if (!categoryData) return notFound();

  // category must have children to access service
  if (!("children" in categoryData)) {
    return notFound();
  }

  const serviceData =
    categoryData.children[service as keyof typeof categoryData.children];

  if (!serviceData) return notFound();

  return <ServiceLayout {...serviceData} />;
}
