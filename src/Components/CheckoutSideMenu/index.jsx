import React from 'react'
import { XMarkIcon } from '@heroicons/react/24/solid'
import { Context } from '../../Context'
import './styles.css'
import OrderCard from '../OrderCard'



function CheckoutSideMenu() {
    const context = React.useContext(Context)
    console.log('CART: ', context.cartProducts)


    return (
        <aside className={`${context?.isCheckoutSideMenuOpen ? 'flex' : 'hidden'} check-out-side-menu flex-col fixed right-0 border border-black rounded-lg bg-white`}>
            <div className='flex justify-between items-center p-6'>
                <h2 className='font-medium text-xl'>My Order</h2>
                <div>
                    <XMarkIcon
                        className={`h-6 w-6 text-black-500 cursor-pointer bg-gray-100 rounded-full p-1`}
                        onClick={() => { context?.closeCheckoutSideMenu() }}
                    />
                </div>
            </div>
            <div className='px-6'>
                {
                    context.cartProducts.map((product) => (
                        <OrderCard
                            key={product.id}
                            title={product.title}
                            imgUrl={product.images}
                            price={product.price}
                        />
                    ))
                }
            </div>
        </aside>
    )
}

export default CheckoutSideMenu