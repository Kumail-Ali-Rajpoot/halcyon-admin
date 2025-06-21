'use server';

import { prisma } from "@/lib/prisma";

export default async function serverAction(formData: FormData): Promise<void> {
  const title = formData.get("title")?.toString() || "";
  const price = formData.get("price")?.toString() || "";
  const discountPrice = formData.get("discountPrice")?.toString() || "";
  const rating = formData.get("rating")?.toString() || "";
  const description = formData.get("description")?.toString() || "";
  const featureDescription = formData.get("featureDescription")?.toString() || "";
  const relative = formData.get("relative")?.toString() || "";
  const image = formData.get("image")?.toString() || "";

  await prisma.products.create({
    data: {
      title,
      price,
      discountPrice,
      rating,
      description,
      featureDescription,
      relative,
      image
    },
  });
}
