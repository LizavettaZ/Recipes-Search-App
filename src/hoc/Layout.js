import React, { memo } from 'react'
import classes from '../style/hoc/Layout.module.scss'
import NavMenu from '../components/UI/Menu/NavMenu'


const Layout = ({ children }) => {
  return (
    <div className={classes.Layout}>
      <NavMenu/>
      <main>
        { children }
      </main>

    </div>
  )
}

export default memo(Layout)
