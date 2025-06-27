export const revalidate = 5;
export const dynamic = "force-dynamic";

import React from 'react'
import OrderCard from '@/components/OrderCard';
import { prisma } from "@/lib/prisma"

export default async function page() {
    const orderDB = await prisma.order.findMany();
  return (
    <div className='p-5 md:p-15 flex flex-col items-center'>
        <div className='md:w-[60%] text-center'>
            <h2 className='text-3xl text-gray-900 font-extrabold leading-snug capitalize'>
                Manage your orders
            </h2>
            <p className='text-gray-600 text-sm md:text-base  leading-relaxed'>
                This section allows you to view all customer orders in detail. You can easily see the customer's name, contact information, delivery address, and the product they ordered. It helps you keep track of orders and ensure smooth processing and delivery.
            </p>
        </div>
        <div className='flex flex-col-reverse gap-y-6'>
        {
            orderDB.map((data)=>(
                <OrderCard key={data.id} order={data}></OrderCard>
            ))
        }
        </div>

    </div>
  )
}
