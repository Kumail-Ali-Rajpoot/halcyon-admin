'use server'
import { prisma } from "@/lib/prisma";
import { category } from "@prisma/client";
export async function getCategory () :Promise<category[]> {
    const categories = await prisma.category.findMany();
    return categories;
}
const fetchCategory = await getCategory();

export const categories = fetchCategory;