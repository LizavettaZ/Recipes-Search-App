import React from 'react'
import classes from '../../style/components/Arrow.module.scss'


const Arrow = ({ course }) => {
  let arrow

  switch (true) {
    case course === 'down':
      return arrow = (
        <div className={classes.arrow_down}>
          <span></span>
          <span></span>
          <span></span>
        </div>
      )
    case course === 'up':
      return arrow = (
        <div className={classes.arrow_up}>
          <span></span>
          <span></span>
          <span></span>
        </div>
      )
    case course === 'right':
      return arrow = (
        <div className={classes.arrow_right}>
          <span></span>
          <span></span>
          <span></span>
        </div>
      )
    default:
      return arrow = (
        <div className={classes.arrow_left}>
          <span></span>
          <span></span>
          <span></span>
        </div>
      )
  }
}

export default Arrow
