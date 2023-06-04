import React from 'react'
import { useRoutes, BrowserRouter, Navigate } from 'react-router-dom'
import {ContextProvider, initializeLocalStorage, Context} from '../../Context'
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
  const context = React.useContext(Context)
  // Account
  const account = localStorage.getItem('account')
  const parsedAccount = JSON.parse(account)

  // Sign out
  const signout = localStorage.getItem('sign-out')
  const parsedSignout = JSON.parse(signout)

  // Has an account
  const NoAccountInLocalStorage = parsedAccount ? Object.keys(parsedAccount).length === 0 : true
  const NoAccountInLocalState = context.account ? Object.keys(context.account).length === 0 : true
  const hasUserAnAccount = !NoAccountInLocalStorage || !NoAccountInLocalState
  const isUserSignout = context.signout || parsedSignout

  let routes = useRoutes([
    { path:'/', element: hasUserAnAccount&&!isUserSignout?<Home />:<Navigate replace to={'sign-in'}/>},
    { path:'/clothes', element: hasUserAnAccount&&!isUserSignout?<Home />:<Navigate replace to={'sign-in'}/>},
    { path:'/electronics', element: hasUserAnAccount&&!isUserSignout?<Home />:<Navigate replace to={'sign-in'}/>},
    { path:'/furnitures', element: hasUserAnAccount&&!isUserSignout?<Home />:<Navigate replace to={'sign-in'}/>},
    { path:'/toys', element: hasUserAnAccount&&!isUserSignout?<Home />:<Navigate replace to={'sign-in'}/>},
    { path:'/others', element: hasUserAnAccount&&!isUserSignout?<Home />:<Navigate replace to={'sign-in'}/>},
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
  initializeLocalStorage()
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
