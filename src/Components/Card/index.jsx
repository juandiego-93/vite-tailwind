import { PlusIcon } from '@heroicons/react/24/solid'
import { CheckIcon } from '@heroicons/react/24/solid'
import { useContext } from 'react'
import { Context } from '../../Context'

function Card(data) {
    const context = useContext(Context)

    function showProduct(productDetail) {
        context?.openProductDetail()
        context?.closeCheckoutSideMenu()
        context?.setProductShow(productDetail)
    }

    function addProductsToCart(event, productData) {
        event.stopPropagation()
        context?.setCartProducts([...context.cartProducts, productData])
        context?.setCount(context.count + 1)
        context?.openCheckoutSideMenu()
        context?.closeProductDetail()
    }

    function renderIcon(id) {
        const isInCart = context.cartProducts.filter(product => product.id === id).length > 0

        if (isInCart) {
            return (
                <div
                    className="absolute top-0 right-0 flex justify-center items-center bg-slate-50 w-6 h-6 rounded-full m-2 p-1 cursor-default"
                    onClick={(event)=>{
                        event.stopPropagation()
                        context?.openCheckoutSideMenu()
                        context?.closeProductDetail()

                    }}
                >
                    <CheckIcon
                        className='w-6 h-6 fill-green-500'
                    >
                    </CheckIcon>
                </div>
            )
        } else {
            return (
                <div
                    className="absolute top-0 right-0 flex justify-center items-center bg-white w-6 h-6 rounded-full m-2 p-1"
                    onClick={(event) => addProductsToCart(event, data?.data)}
                >
                    <PlusIcon
                        className='h-6 w-6 text-black'
                    >
                    </PlusIcon>
                </div>
            )
        }

    }
    return (
        <div 
            className="bg-white cursor-pointer w-56 h-60"
            onClick={() => showProduct(data?.data)}
        >
            <figure className="relative mb-2 w-full h-4/5">
                <span className="absolute bottom-0 left-0 bg-white/60 rounded-lg text-black text-xs m-2 px-3 py-0.5">{data.data?.category?.name}</span>
                <img className="w-full h-full object-cover rounded-lg" src={data.data?.images[0]} />
                {renderIcon(data.data?.id)}

            </figure>
            <p className=" flex justify-between">
                <span className="text-sm font-light">{data.data?.title} </span>
                <span className="text-lg font-medium">S/ {data.data?.price}.00 </span>
            </p>
        </div>

    )

}

export default Card