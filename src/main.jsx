import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Contact from './Components/Contact.jsx'
import Skills from './Components/Skills.jsx'
import Projects from './Components/Projectspage.jsx'
import About from './Components/Aboutpage.jsx'
import App from './App.jsx'
import {createBrowserRouter, RouterProvider} from 'react-router-dom'

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/about",
    element: <About />,
  },
  {
    path: "/projects",
    element: <Projects />,
  },
  {
    path:"/skills",
    element:<Skills />
  }
  ,{
    path:"/contact",
    element:<Contact/>
  }
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
