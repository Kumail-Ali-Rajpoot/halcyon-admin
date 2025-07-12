'use server'
import { prisma } from "@/lib/prisma"
import { revalidatePath } from "next/cache";

export async function addTags (formData:FormData) {
    const tagName = formData.get("tagName");
    const categoryName = formData.get("categoryName");
    await prisma.tags.create({
        data:{
            categoryName,
            tagName,
        }
    })
      revalidatePath("/management");
}