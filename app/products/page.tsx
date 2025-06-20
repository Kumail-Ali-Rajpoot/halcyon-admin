import React from 'react'
import AdminProductSlider from '@/components/AdminProductSlider'

function page() {
  return (
    <div className='p-5 md:p-15 flex flex-col items-center'>
        <div className='md:w-[50%] text-center'>
            <h2 className='text-2xl text-gray-900 font-bold leading-tight'>Products</h2>
            <p className='text-gray-700 text-[0.7rem] font-semibold leading-tight'>
                The section is prodvide you faciliteies just like if you want to remove the product we easily remove the product by this page and if you want to edit or delete to the product you easily perform this work.
                
            </p>
        </div>
        <AdminProductSlider></AdminProductSlider>
    </div>
  )
}

export default page