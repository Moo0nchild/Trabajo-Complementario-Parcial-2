import { Routes, Route } from 'react-router-dom'
import './App.css'
import { Dielectric } from './labs/dielectric/Dielectric'
import { IndexPage } from './pages/overview/IndexPage'
import { Login } from './pages/login/Login'


function App() {
  return (
    <Routes>
      <Route path='/' element={<IndexPage />} />
      <Route path='/dielectric' element={<Dielectric />} />
      <Route path='/login' element={<Login />} />
    </Routes>
  )
}
export default App
