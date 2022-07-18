import React, { Fragment } from 'react'
import classes from '../../style/components/Checkbox.module.scss'


const Checkbox = ({ value, index }) => {
  return (
    <Fragment>
      <input
        type="checkbox"
        className={classes.Checkbox}
        id={index}
        name={value}
        value="yes"
      />
      <label htmlFor={index}>{value}</label>
    </Fragment>
  )
}

export default Checkbox
