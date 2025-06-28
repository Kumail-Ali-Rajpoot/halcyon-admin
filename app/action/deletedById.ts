'use server'
import { prisma } from "@/lib/prisma"
import { revalidatePath } from "next/cache"

export default async function deleteCategory (id:string) {
    await prisma.category.delete({
      where:{id}
    })
    revalidatePath("/management")
  }