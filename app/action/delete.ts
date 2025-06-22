// app/action/delete.ts
'use server'
import { prisma } from "@/lib/prisma";
import { revalidatePath } from "next/cache";

export async function deleteProduct (id:any):Promise<void> {
    try {
        await prisma.products.delete({
            where: {id}
        })
    revalidatePath("/products")
    }
    catch(err) {
        console.log("The error is",err)
        throw err
    }
}