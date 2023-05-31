import React, { useEffect } from 'react'
import Layout from '../../Components/Layout'
import Card from '../../Components/Card'

function Home() {
    const[items, setItems] = React.useState(null) 

    React.useEffect(() => {
        fetch('https://api.escuelajs.co/api/v1/products')
            .then(response => console.log(response.json()))
    }, [])

    return (
        <Layout>
            Home
            <Card/>
        </Layout>

    )
}

export default Home