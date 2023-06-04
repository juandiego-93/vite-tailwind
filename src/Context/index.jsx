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

    //Get products
    const[items, setItems] = React.useState(null)
    const[filteredItems, setFilteredItems] = React.useState(null) 

    // Get products by title
    const[SearchByTitle, setSearchByTitle] = React.useState(null) 

    // Get products by category
    const[searchByCategory, setSearchByCategory] = React.useState(null) 

    React.useEffect(() => {
        fetch('https://api.escuelajs.co/api/v1/products')
            .then(response => response.json())
            .then(data => setItems(data),)
            
    }, [])

    function filteredItemsByTitle(items, SearchByTitle) {
        return items?.filter(item => item.title.toLowerCase().includes(SearchByTitle.toLowerCase()))
    }

    function filteredItemsByCategory(items, searchByCategory) {
        return items?.filter(item => item.category?.name.toLowerCase().includes(searchByCategory.toLowerCase()))
    }

    function filterBy(searchType, items, SearchByTitle, searchByCategory) {
        if (searchType === 'BY_TITLE') {
            return filteredItemsByTitle(items, SearchByTitle)
        }

        if (searchType === 'BY_CATEGORY') {
            return filteredItemsByCategory(items, searchByCategory)
        }
        if (searchType === 'BY_TITLE_AND_CATEGORY') {
            return filteredItemsByCategory(items, searchByCategory).filter(item => item?.title.toLowerCase().includes(SearchByTitle.toLowerCase()))
        }
        if (!searchType) {
            return items
        }
    }

    React.useEffect(() => { 
        if (SearchByTitle && !searchByCategory) setFilteredItems(filterBy('BY_TITLE', items, SearchByTitle, searchByCategory))

        if (!SearchByTitle && searchByCategory) setFilteredItems(filterBy('BY_CATEGORY', items, SearchByTitle, searchByCategory))
        if (!SearchByTitle && !searchByCategory) setFilteredItems(filterBy(null, items, SearchByTitle, searchByCategory))
        if (SearchByTitle && searchByCategory) setFilteredItems(filterBy('BY_TITLE_AND_CATEGORY', items, SearchByTitle, searchByCategory))
    }, [items, SearchByTitle, searchByCategory])

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
            items,
            setItems,
            SearchByTitle,
            setSearchByTitle,
            filteredItems,
            searchByCategory,
            setSearchByCategory

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