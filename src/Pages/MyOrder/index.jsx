import React from 'react'
import { Context } from '../../Context'
import OrderCard from '../../Components/OrderCard'
import Layout from '../../Components/Layout'

function MyOrder() {
    const context = React.useContext(Context)
    console.log(context.order?.slice(-1)[0])
    return (
        <Layout>
            MyOrder
            <div className='flex flex-col w-80'>
                {
                    context.order?.slice(-1)[0].products.map((product) => (
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