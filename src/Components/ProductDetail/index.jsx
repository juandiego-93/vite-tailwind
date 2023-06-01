import React from 'react'
import { XMarkIcon } from '@heroicons/react/24/solid'
import { Context } from '../../Context'
import './styles.css'



function ProductDetail() {
    const context = React.useContext(Context)

    return (
        <aside className={`${context?.isProductDetailOpen ? 'flex' : 'hidden'} product-detail flex-col fixed right-0 border border-black rounded-lg bg-white`}>
            <div className='flex justify-between items-center p-6'>
                <h2 className='font-medium text-xl'>Detail</h2>
                <div>
                    <XMarkIcon
                        className={`h-6 w-6 text-black-500 cursor-pointer bg-gray-100 rounded-full p-1`}
                        onClick={() => { context?.closeProductDetail() }}
                    />
                </div>
            </div>
            <figure className='px-6'>
                <img 
                    className='w-full h-full rounded-lg' src={context.productShow?.images[1]} 
                    alt={context.productShow?.title} />
            </figure>
            <p className='flex flex-col p-6'>
                <span className='font-medium text-2xl mb-2'>S/{context.productShow?.price}.00</span>
                <span className='font-medium text-md'>{context.productShow?.title}</span>
                <span className='font-medium text-sm'>{context.productShow?.description}</span>
            </p>
        </aside>
    )
}

export default ProductDetail