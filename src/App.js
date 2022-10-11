import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import About from './components/About/About';
import Blog from './components/Blogs/Blog';
import ErrorPage from './components/ErrorPage/ErrorPage';
import Home from './components/Home/Home'
import Languages from './components/Languages/Languages';
import Statistics from './components/Statistics/Statistics';
import Main from './layouts/Main'



function App() {

  const router = createBrowserRouter([
    {
      path: '/',
      element: <Main></Main>,
      children: [
        {
          path: '/',
          errorElement: <ErrorPage />,
          loader: () => fetch('https://openapi.programming-hero.com/api/quiz'),
          element: <Home></Home>
        },
        {
          path: '/languages',
          element: <Languages></Languages>
        },
        {
          path: '/statistics',
          element: <Statistics></Statistics>
        },
        {
          path: '/blog',
          element: <Blog></Blog>

        },
        {
          path: '/about',
          element: <About></About>
        }
      ]
    }
  ])
  return (
    <div className='App'>
      <RouterProvider router={router}></RouterProvider>
    </div>
  )
}

export default App
