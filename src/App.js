import Home from  './Component/Home'
import About from './Component/About'
import Portofolio from './Component/Portofolio'
import Contact from './Component/Contact'
import { Navigate, RouterProvider, createBrowserRouter } from 'react-router-dom';
import Layout from './Component/Layout';

export default  function App() {

  const routers= createBrowserRouter([
    {path:'',element:<Layout/>, children:[
      {path:'',element:<Navigate to={'/home'}/>},
      {path:'home',element:<Home/>},
      {path:'about',element:<About/>},
      {path:'portfolio',element:<Portofolio/>},
      {path:'contact',element:<Contact/>}
    ]}
  ]
    
  )
  return (
  <RouterProvider router={routers}></RouterProvider>
  );
}


