import PropTypes from 'prop-types'
import { ChevronRightIcon } from '@heroicons/react/24/solid'

function OrdersCard(props) {
    const {totalPrice, totalProducts } = props 


    return (
        <div className='flex justify-between items-center border border-black w-80 p-4 rounded-lg mb-5'>
            <div className='flex justify-between w-full'>
                <p className='flex flex-col'>
                    <span>01.02.23</span>
                    <span>{totalProducts} articles</span>
                </p>
                <p className='flex items-center gap-2'>
                    <span className='font-medium text-2xl'>S/ {totalPrice}.00</span>
                    <ChevronRightIcon className='h-6 w-6 text-black cursor pointer' />
                </p>
            </div>
        </div>
    )
}

OrdersCard.propTypes = {
    totalPrice: PropTypes.node.isRequired,
    totalProducts: PropTypes.node.isRequired,
  };

export default OrdersCard