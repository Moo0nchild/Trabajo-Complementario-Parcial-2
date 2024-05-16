//? React Imports
import { Routes, Route } from 'react-router-dom'
import { lazy, Suspense } from 'react'
//? Components Imports
const Dielectric = lazy(() => import('./labs/dielectric/Dielectric'))
const IndexPage = lazy(() => import('./pages/overview/IndexPage'))
const Login = lazy(() => import('./pages/login/Login'))
const PageNotFound = lazy(() => import('./pages/pagenotfound/PageNotFound'))
//? CSS Imports
import './App.css'
import { Preloader } from './pages/preloader/Preloader'

function App() {
  return (
    <>
      <Suspense
        fallback={
          <div>
            <Preloader />
          </div>
        }
      >
        <Routes>
          <Route path='/' element={<IndexPage />} />
          <Route path='/dielectric' element={<Dielectric />} />
          <Route path='/login' element={<Login />} />
          <Route path='*' element={<PageNotFound />} />
        </Routes>
      </Suspense>
    </>
  )
}
export default App
