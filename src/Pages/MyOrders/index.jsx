import React from 'react'
import { Link } from 'react-router-dom'
import Layout from '../../Components/Layout'
import  OrdersCard from '../../Components/OrdersCard'
import { Context } from '../../Context'

function MyOrders() {
    const context = React.useContext(Context)

    return (
        <Layout>
            <div className='flex items-center justify-center  relative w-80 mb-6'>
                <h1 className='font-medium text-xl'>MyOrders</h1>
            </div>
            {
                context.order.map((order, index) => (
                    <Link key={index} to={`/my-orders/${index}`}>
                        <OrdersCard
                            totalPrice={order.totalPrice}
                            totalProducts={order.totalProducts} />
                    </Link>
                ))
            }
        </Layout>
    )
}

export default MyOrders