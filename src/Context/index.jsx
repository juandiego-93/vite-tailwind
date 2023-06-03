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

    // Checkout Side Menu - Open Close 
    const [isCheckoutSideMenuOpen, setIsCheckoutSideMenuOpen] = React.useState(false)

    function openCheckoutSideMenu() {setIsCheckoutSideMenuOpen(true)}
    function closeCheckoutSideMenu() {setIsCheckoutSideMenuOpen(false)}    

    // Product Detail - Show product
    const [productShow, setProductShow] = React.useState({})

    // ShoppingCart - Add products to Cart
    const [cartProducts, setCartProducts] = React.useState([])
    
    // ShoppingCart - Add products to Cart
    const [order, setOrder] = React.useState([])

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
            openCheckoutSideMenu,
            closeCheckoutSideMenu,
            isCheckoutSideMenuOpen,
            order,
            setOrder,

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