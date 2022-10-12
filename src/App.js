import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import About from './components/About/About';
import Blog from './components/Blogs/Blog';
import ErrorPage from './components/ErrorPage/ErrorPage';
import Home from './components/Home/Home'
import Statistics from './components/Statistics/Statistics';
import Main from './layouts/Main'
import Subjects from './components/Subjects/Subjects';
import Quizes from './components/Quizes/Quizes';



function App() {

  const router = createBrowserRouter([
    {
      path: '/',
      element: <Main></Main>,
      children: [

        {
          path: '/home',
          loader: () => fetch('https://openapi.programming-hero.com/api/quiz'),
          element: <Home></Home>
        },
        {
          path: '/',
          loader: () => fetch('https://openapi.programming-hero.com/api/quiz'),
          element: <Home></Home>
        },

        {
          path: '/subjects',
          loader: () => fetch('https://openapi.programming-hero.com/api/quiz'),
          element: <Subjects></Subjects>
        },
        {
          path: '/statistics',
          loader: () => fetch('https://openapi.programming-hero.com/api/quiz'),
          element: <Statistics></Statistics>
        },
        {
          path: '/blog',
          element: <Blog></Blog>

        },
        {
          path: '/about',
          element: <About></About>
        },
        {
          path: '/quizes/:quizesId',
          loader: async ({ params }) => {
            return fetch(`https://openapi.programming-hero.com/api/quiz/${params.quizesId}`)
          },
          element: <Quizes></Quizes>
        }
      ]
    },
    {
      path: '*',
      element: <ErrorPage></ErrorPage>
    }
  ])
  return (
    <div className='App'>
      <RouterProvider router={router}></RouterProvider>
    </div>
  )
}

export default App
