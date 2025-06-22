// app/actions/delete.ts
'use server';

import { prisma } from "@/lib/prisma";
import { revalidatePath } from "next/cache";

export async function deleteProduct(formData: FormData) {
  const id = formData.get("id")?.toString();

  if (!id || id.trim() === "") {
    throw new Error("Invalid ID");
  }

  await prisma.products.delete({
    where: { id },
  });

  revalidatePath("/products");
}
