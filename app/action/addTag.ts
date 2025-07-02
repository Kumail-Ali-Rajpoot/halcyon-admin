'use server'
import { prisma } from "@/lib/prisma"

export async function addTags (formData:FormData) {
    const tagName = formData.get("tagName");
    const categoryName = formData.get("categoryName");
    await prisma.tags.create({
        data:{
            categoryName,
            tagName,
        }
    })
}