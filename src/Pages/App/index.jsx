import { useRoutes, BrowserRouter } from 'react-router-dom'
import ContextProvider from '../../Context'
import Home from '../Home'
import MyAccount from '../MyAccount'
import MyOrder from '../MyOrder'
import MyOrders from '../MyOrders'
import NotFound from '../Notfound'
import SignIn from '../SignIn'
import Navbar from '../../Components/Navbar'
import CheckoutSideMenu from '../../Components/CheckoutSideMenu'
import './App.css'

function AppRoutes() {
  let routes = useRoutes([
    { path:'/', element: <Home />},
    { path:'/clothes', element: <Home />},
    { path:'/electronics', element: <Home />},
    { path:'/furnitures', element: <Home />},
    { path:'/toys', element: <Home />},
    { path:'/others', element: <Home />},
    { path:'/my-account', element: <MyAccount />},
    { path:'/my-order', element: <MyOrder />},
    { path:'/my-orders', element: <MyOrders />},
    { path:'/my-orders/last', element: <MyOrder />},
    { path:'/my-orders/:id', element: <MyOrder />},
    { path:'/sign-in', element: <SignIn />},
    { path:'/*', element: <NotFound />},
  ])

  return routes
}

function App() {

  return (
    <ContextProvider>
      <BrowserRouter>
        <AppRoutes />
        <Navbar />
        <CheckoutSideMenu />
      </BrowserRouter>
    </ContextProvider>

  )
}

export default App
