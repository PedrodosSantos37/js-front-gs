import ReactDOM from 'react-dom/client'
import App from './App.jsx'

import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Erro404 from "./routes/Erro404/Erro404.jsx"
import Login from "./routes/Login/Login.jsx"
import Cadastro from "./routes/Cadastro/Cadastro.jsx"
import Home from "./routes/Home/Home.jsx"

const router = createBrowserRouter([
  {path:"/", element: <App/>, errorElement:<Erro404/>,
   children:[
    {path:"/login", element:<Login/>},
    {path:"/cadastrar", element:<Cadastro/>},
    {path:"/", element:<Home/>}
   ] 
 },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
 
  <RouterProvider router={router}/>

)