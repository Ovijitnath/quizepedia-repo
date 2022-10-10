import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Blog from './components/Blogs/Blog';
import ErrorPage from './components/ErrorPage/ErrorPage';
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
          errorElement: <ErrorPage />,
          loader: () => fetch('https://openapi.programming-hero.com/api/quiz'),
          element: <Home></Home>
        },
        {
          path: '/statistics',
          element: <Statistics></Statistics>
        },
        {
          path: '/blog',
          element: <Blog></Blog>
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
