import React from 'react'
import AdminProductSlider from '@/components/AdminProductSlider'

function page() {
  return (
    <div className='p-5 md:p-15 flex flex-col items-center'>
        <div className='md:w-[60%] text-center'>
            <h2 className='text-3xl text-gray-900 font-extrabold leading-snug capitalize'>Manage your products</h2>
            <p className='text-gray-600 text-sm md:text-base  leading-relaxed'>
                The section is prodvide you faciliteies just like if you want to remove the product we easily remove the product by this page and if you want to edit or delete to the product you easily perform this work.
                
            </p>
        </div>
        <AdminProductSlider></AdminProductSlider>
    </div>
  )
}

export default page