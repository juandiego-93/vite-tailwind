import React from 'react'
import { Link } from 'react-router-dom'
import Layout from '../../Components/Layout'
import  OrdersCard from '../../Components/OrdersCard'
import { Context } from '../../Context'

function MyOrders() {
    const context = React.useContext(Context)

    return (
        <Layout>
                <div className='flex items-center justify-center  relative w-80'></div>
                <h1>MyOrders</h1>
            {
                context.order.map((order, index) => (
                    <Link key={index} to= {`/my-orders/${index}`}>
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