import React from 'react'
import { ShoppingCartIcon } from '@heroicons/react/24/solid'
import { Context } from '../../Context'

function ShoppingCart() {
    const context = React.useContext(Context)

    function openCheckoutSideMenu() {
        context.openCheckoutSideMenu()
        context.closeProductDetail()

    }

    return (
        <div className='relative flex gap-0.5 items-center' onClick={()=> openCheckoutSideMenu()}>
            <ShoppingCartIcon className='w-6 h-6 fill-none stroke-black cursor-pointer'/>
            <div className='absolute bottom-3.5 left-3.5  flex justify-center items-center rounded-full bg-green-500 w-4 h-4 text-xs text-white'>
                {context.cartProducts.length}
            </div>
        </div>
    )
}

export default ShoppingCart