import PropTypes from 'prop-types'
import { XMarkIcon } from '@heroicons/react/24/solid'

function OrderCard(props) {
    const { id, title, imgUrl, price, handleDelete } = props 
    let renderXMarkIcon
    if (handleDelete) {
        renderXMarkIcon = <XMarkIcon
        className={`h-6 w-6 text-black-500 cursor-pointer bg-gray-100 rounded-full p-1`}
        onClick={()=> handleDelete(id)}

    />
    OrderCard.propTypes = {handleDelete: PropTypes.node.isRequired
    }
    }

    return (
        <div className='flex justify-between items-center mb-3'>
            <div className='flex items-center gap-2'>
                <figure className='w-20 h-20'>
                    <img className='w-20 h-20 rounded-lg object-cover' src={imgUrl} alt={title} />
                </figure>
                <p className='text-sm font-light'>{title}</p>
            </div>
            <div className='flex items-center gap-2'>
                <p className='text-sm font-medium'>S/.{price}.00</p>
                {renderXMarkIcon}
            </div>
        </div>
    )
}

OrderCard.propTypes = {
    id: PropTypes.node.isRequired,
    title: PropTypes.node.isRequired,
    imgUrl: PropTypes.node.isRequired,
    price: PropTypes.node.isRequired,
  };

export default OrderCard