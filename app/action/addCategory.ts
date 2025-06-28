'use server'
import { prisma } from "@/lib/prisma"

export async function addCategory (formData:FormData) {
    const name = formData.get("name");
    await prisma.category.create({
        data:{
            name
        }
    })
}