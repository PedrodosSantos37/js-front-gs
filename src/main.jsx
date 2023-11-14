import ReactDOM from 'react-dom/client'
import App from './App.jsx'

import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Erro404 from "../src/routes/Erro404"
import Login from "../src/routes/Login"
import Cadastro from "../src/routes/Cadastro"
import Home from "../src/routes/Home"

const router = createBrowserRouter([
  {path:"/",element: <App/>,errorElement:<Erro404/>,
   children:[
    {path:"/", element:<Home/>},
    {path:"/login",element:<Login/>},
    {path:"/cadastrar",element:<Cadastro/>}
   ] 
 },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
 
  <RouterProvider router={router}/>

)