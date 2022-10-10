import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Blogs from './components/Blogs/Blogs';
import Home from './components/Home/Home'
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
          loader: () => fetch('https://openapi.programming-hero.com/api/quiz'),
          element: <Home></Home>
        },
        {
          path: '/statistics',
          element: <Statistics></Statistics>
        },
        {
          path: '/blogs',
          element: <Blogs></Blogs>
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
