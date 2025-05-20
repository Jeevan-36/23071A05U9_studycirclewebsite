import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {createBrowserRouter,RouterProvider} from 'react-router-dom';
import About from './components/About.jsx';
import Login from './components/Login.jsx';
import Register from './components/Register.jsx';
import Contact from './components/Contact.jsx';
import Payment from './components/Payment.jsx';
import UploadMaterial from './components/UploadMaterial.jsx';
import CheckMaterial from './components/CheckMaterial.jsx';

const router=createBrowserRouter([
  {
    path: '/',
    element: <App />,
     children:[
      {
        path:"login",
        element: <Login />
      },
      {
        path: "register", element: <Register />
      },
      {
        path:"About",
        element: <About />
      },{
        path:"contact",
        element:<Contact/>
      },,{
        path:"/payment",
        element:<Payment/>
      },
      {
        path:"/upload",
        element:<UploadMaterial/>
      },{
        path:"/check-material",
        element:<CheckMaterial/>
      }
      ,
      ,{
        path: '',
        element: (
          <div className="text-center  text-xl font-semibold mt-10 h-[78vh]">
            Welcome to My App! Please select a page from the navigation menu.
          </div>
        ),
      },
     ]
  }
])
createRoot(document.getElementById('root')).render(
  <StrictMode>
   <RouterProvider router={router}></RouterProvider>
  </StrictMode>,
)
