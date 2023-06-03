import React from 'react'
import { Context } from '../../Context'
import Layout from '../../Components/Layout'
import Card from '../../Components/Card'
import ProductDetail from '../../Components/ProductDetail'

function Home() {
const context = React.useContext(Context)
console.log('Search by title: ', context.searchByTitle)
    return (
        <Layout>
            <div className='flex items-center justify-center  relative w-80 mb-6'>
                <h1 className='font-medium text-xl'>Exclusive Products</h1>
            </div>
            <input 
                className='rounded-lg border border-black w-80 p-4 mb-6 focus:outline-blue-700' 
                type="text" 
                placeholder='Search a product'
                onChange={(event) => context?.setSearchByTitle(event.target.value) } />
            <div className='grid gap-5 grid-cols-4 w-full max-w-screen-lg'>
                {
                    context.items?.map((item) => (
                        <Card key={item.id} data={item} />
                    ))
                }
            </div>
            <ProductDetail />
        </Layout>

    )
}

export default Home