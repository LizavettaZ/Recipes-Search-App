import React, { useState } from 'react'
import classes from '../style/components/SearchForm.module.scss'
import { useDispatch, useSelector } from 'react-redux'
import { hide, show } from '../store/actions/alert'
import Alert from './UI/Alert'
import { clearList, search } from '../store/actions/search'


const SearchForm = () => {
  const [value, setValue] = useState('')
  const alertStatus = useSelector(state => state.alert.active)
  const dispatch = useDispatch()

  const onSubmit = (event) => {
    if (event.key !== 'Enter') return null

    if (value.trim()) {
      dispatch(hide())
      dispatch(search(value))
    } else {
      dispatch(clearList())
      dispatch(show('Enter product name'))
    }
  }

  return (
    <div className={classes.SearchForm}>
      <input
        type="text"
        className={classes.search_form__input}
        placeholder="Enter products..."
        value={value}
        onChange={(event) => setValue(event.target.value)}
        onKeyPress={onSubmit}
        onFocus={() => alertStatus && dispatch(hide())}
      />
      <Alert/>
    </div>

  )
}

export default SearchForm
