import React from 'react'
import PropTypes from 'prop-types'

const Context = React.createContext()

function ContextProvider({ children }) {

    const [count, setCount] = React.useState(0)
    const [isProductDetailOpen, setIsProductDetailOpen] = React.useState(false)

    function openProductDetail() {setIsProductDetailOpen(true)}
    function closeProductDetail() {setIsProductDetailOpen(false)}

    console.log('COUNT: '+ count)

    return (
        <Context.Provider value={{
            count,
            setCount,
            openProductDetail,
            closeProductDetail,
            isProductDetailOpen,

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