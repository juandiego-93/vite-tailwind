import React from 'react'
import { Context } from '../../Context'
import OrderCard from '../../Components/OrderCard'
import Layout from '../../Components/Layout'
import { ChevronLeftIcon } from '@heroicons/react/24/solid'
import { Link } from 'react-router-dom'

function MyOrder() {
    const context = React.useContext(Context)
    const currentPath = window.location.pathname
    let index = currentPath.substring(currentPath.lastIndexOf('/')+1)
    if (index === 'last') index = context.order?.length - 1

    return (
        <Layout>
            <div className='flex items-center justify-center  relative w-80 mb-7'>
                <Link to= '/my-orders' className='absolute left-0'>
                    <ChevronLeftIcon className='h-6 w-6 text-black cursor pointer'/>
                </Link>
                <h1>MyOrder</h1>
            </div>
            <div className='flex flex-col w-80'>
                {
                    context.order?.[index]?.products.map((product) => (
                        <OrderCard
                            key={product.id}
                            id={product.id}
                            title={product.title}
                            imgUrl={product.images[0]}
                            price={product.price}
                        />
                    ))
                }
            </div>
        </Layout>
    )
}

export default MyOrder