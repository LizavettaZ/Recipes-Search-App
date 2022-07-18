import React from 'react'
import classes from '../style/pages/Search.module.scss'
import { RecipesMore } from '../store/actions/search'
import Arrow from './UI/Arrow'
import { useDispatch, useSelector } from 'react-redux'


const ShowMore = () => {
  const isMore = useSelector(state => state.search.isMore)
  const showMore = useSelector(state => state.search.showMore)
  const loading = useSelector(state => state.search.loading)
  const dispatch = useDispatch()

  return (
    isMore
      ? <div className={classes.more} onClick={() => dispatch(RecipesMore(showMore))}>
          <p>more</p>
          <Arrow course={'down'} />
        </div>
      : !loading && <div className={classes.more} onClick={() => window.scrollTo(0, 0)}>
          <Arrow course={'up'} />
          <p>up</p>
        </div>
  )
}

export default ShowMore
