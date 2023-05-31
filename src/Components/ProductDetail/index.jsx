import React from 'react'
import { XMarkIcon } from '@heroicons/react/24/solid'
import { Context } from '../../Context'
import './styles.css'



function ProductDetail() {
    const context = React.useContext(Context)

    return(
        <aside className = {`${context?.isProductDetailOpen ? 'flex' : 'hidden' } product-detail flex-col fixed right-0 border border-black rounded-lg bg-white`}>
            <div className='flex justify-between items-center p-6'>
                <h2 className='font-medium text-xl'>Detail</h2>
                <XMarkIcon 
                    className={`h-6 w-6 text-black-500 cursor-pointer bg-gray-100 rounded-full p-1`} 
                    onClick={() => { context?.closeProductDetail()}}
                />
            </div>
        </aside>
    )
}

export default ProductDetail