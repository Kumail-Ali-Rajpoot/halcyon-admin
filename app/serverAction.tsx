'use server';

import { prisma } from "@/lib/prisma";
import { writeFile } from "fs/promises";
import { revalidatePath } from "next/cache";
import path from "path";
import { redirect } from "next/navigation";

export default async function serverAction(formData: FormData): Promise<void> {
  const title = formData.get("title")?.toString() || "";
  const price = formData.get("price")?.toString() || "";
  const discountPrice = formData.get("discountPrice")?.toString() || "";
  const rating = formData.get("rating")?.toString() || "";
  const description = formData.get("description")?.toString() || "";
  const featureDescription = formData.get("featureDescription")?.toString() || "";
  const relative = formData.get("relative")?.toString() || "";
  const image = formData.get("image") as File;

  // ✅ Save image to /public/uploads and get URL
  const bytes = await image.arrayBuffer();
  const buffer = Buffer.from(bytes);
  const fileName = `${Date.now()}_${image.name}`;
  const filePath = path.join(process.cwd(), "public/uploads", fileName);
  await writeFile(filePath, buffer);
  const imageUrl = `/uploads/${fileName}`;

  // ✅ Save image URL to DB
  await prisma.products.create({
    data: {
      title,
      price,
      discountPrice,
      rating,
      description,
      featureDescription,
      relative,
      image: imageUrl, // use URL, not File object
    },
  });
  revalidatePath('/products');  // ✅ Refresh /products page
  redirect('/products');    
}
