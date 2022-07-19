import React, { memo } from 'react'
import classes from '../style/hoc/Layout.module.scss'
import NavMenu from '../components/UI/Menu/NavMenu'
import { useSelector } from 'react-redux'


const Layout = ({ children }) => {
  const background = useSelector(state => state.layout.background)

  const style = {
    background: `${background}`
  }

  return (
    <div className={classes.Layout} style={style}>
      <NavMenu/>
      <main>
        { children }
      </main>
    </div>
  )
}

export default memo(Layout)
