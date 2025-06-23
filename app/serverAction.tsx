'use server';

import { prisma } from "@/lib/prisma";
import { revalidatePath } from "next/cache";
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

  // ✅ Convert image to base64 and get MIME type
  const bytes = await image.arrayBuffer();
  const buffer = Buffer.from(bytes);
  const base64Image = buffer.toString("base64");
  const imageType = image.type; // like "image/png" or "image/jpeg"

  // ✅ Validate required fields
  const isValid =
    base64Image &&
    imageType &&
    title &&
    price &&
    discountPrice &&
    rating &&
    description &&
    featureDescription &&
    relative;

  if (isValid) {
    // ✅ Save base64 image and type to DB
    await prisma.products.create({
      data: {
        title,
        price,
        discountPrice,
        rating,
        description,
        featureDescription,
        relative,
        imageBase64: base64Image,
        imageType: imageType,
      },
    });
  }

  revalidatePath('/products');
  redirect('/products');
}
