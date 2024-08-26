import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './App.css'
import Layout from './Components/Layout/Layout';
import Home from './Components/Home/Home';
import Cart from './Components/cart/cart';
import Products from './Components/Products/Products';
import Categories from './Components/Categories/Categories';
import Brands from './Components/Brands/Brands';
import SingOut from './Components/SingOut/SingOut';
import NotFound from './Components/NotFound/NotFound';

function App() {

  const router = createBrowserRouter([
    {path : '' , element : <Layout /> , children : [
      {index : true , element : <Home />},
      {path : 'cart' , element : <Cart />},
      {path : 'products' , element : <Products />},
      {path : 'categories' , element : <Categories />},
      {path : 'brands' , element : <Brands />},
      {path : 'singout' , element : <SingOut />},
      {path : '*' , element : <NotFound />},
    ]}
  ])

  
  return (
    <>
      <RouterProvider router={router}></RouterProvider>
    </>
  )
}

export default App
