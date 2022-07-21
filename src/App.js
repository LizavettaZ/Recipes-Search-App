import classes from './style/App.module.scss'
import Layout from './hoc/Layout'
import Home from './pages/Home'
import { Route, Routes } from 'react-router-dom'
import About from './pages/About'
import Search from './pages/Search'
import Recipe from './pages/Recipe'
import MyRecipes from './pages/MyRecipes'
import Auth from './pages/Auth'
import { useDispatch, useSelector } from 'react-redux'
import NotFound from './pages/NotFound'
import { useEffect } from 'react'
import { authLogin } from './store/actions/auth'


function App() {
  const isAuthenticated = useSelector(state => !!state.auth.token)
  const dispatch = useDispatch()

  useEffect(() => {
     dispatch(authLogin())
  })

  return (
    <Layout>
      <Routes>
        <Route path='/' exact="true" element={<Home/>}/>
        <Route path='/search' element={<Search/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/recipe/:label' element={<Recipe/>}/>
        {isAuthenticated && <Route path='/my_recipes' element={<MyRecipes/>}/>}
        <Route path='/auth' element={<Auth/>}/>
        <Route path="*" element={<NotFound/>}/>
      </Routes>
    </Layout>
  )
}

export default App

