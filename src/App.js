import classes from './style/App.module.scss'
import Layout from './hoc/Layout'
import Home from './pages/Home'
import { Navigate, Route, Routes } from 'react-router-dom'
import About from './pages/About'
import Search from './pages/Search'
import Recipe from './pages/Recipe'


function App() {
  return (
    <Layout>
      <Routes>
        <Route path='/' exact="true" element={<Home/>}/>
        <Route path='/search' element={<Search/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/recipe/:label' element={<Recipe/>}/>
        <Route path='/redirect' element={<Navigate to='/' />}/>
      </Routes>
    </Layout>
  )
}

export default App

