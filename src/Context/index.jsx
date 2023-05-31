import React from 'react'
import PropTypes from 'prop-types'

const Context = React.createContext()

function ContextProvider({ children }) {

    const [count, setCount] = React.useState(0)

    console.log('COUNT: '+ count)

    return (
        <Context.Provider value={{
            count,
            setCount,
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