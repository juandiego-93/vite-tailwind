import React from 'react'
import PropTypes from 'prop-types'

const Context = React.createContext()

function ContextProvider({ children }) {

    // ShoppingCart Increment quantity
    const [count, setCount] = React.useState(0)
    
    // Product Detail - Open Close 
    const [isProductDetailOpen, setIsProductDetailOpen] = React.useState(false)

    function openProductDetail() {setIsProductDetailOpen(true)}
    function closeProductDetail() {setIsProductDetailOpen(false)}

    // Product Detail - Show product
    const [productShow, setProductShow] = React.useState({})

    // ShoppingCart - Add products to Cart
    const [cartProducts, setCartProducts] = React.useState([])


    console.log('COUNT: '+ count)

    return (
        <Context.Provider value={{
            count,
            setCount,
            openProductDetail,
            closeProductDetail,
            isProductDetailOpen,
            productShow,
            setProductShow,
            cartProducts,
            setCartProducts,

        }}>
            {children}
        </Context.Provider>

    )
}

ContextProvider.propTypes = {
    children: PropTypes.node.isRequired,
  };

export { Context }
export default ContextProvider