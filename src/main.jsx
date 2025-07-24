import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Layout from './Layout.jsx'
import About from './components/About/About.jsx'
import Home from './components/home/home.jsx'  // ✅ Import Home
import Contact from './components/Contact/Contact.jsx'
import Github, { githubInfoLoader } from './components/Github/Github.jsx'
import Aujla1 from './components/Aujla1/Aujla1.jsx'
import Cheema1 from './components/Aujla1/Cheema1.jsx'


const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        path: '', // same as index route
        element: <Home />
      },
      {
        path: 'about',
        element: <About />
      },
      {
        path:'Contact',
        element:<Contact/>
      },
      {
        path:'Github',
        element:<Github/>
      },
      {
        path:'Aujla1',
        element:<Aujla1/>
      },
      { path: 'Cheema1', element: <Cheema1 /> }

    ]
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
)
