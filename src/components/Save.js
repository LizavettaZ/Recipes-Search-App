import React, { useEffect, useState } from 'react'
import classes from '../style/components/Save.module.scss'
import { postFavorite, saveRecipe } from '../store/actions/favorite'
import SaveImg from '../img/icons/save.svg'
import { useDispatch, useSelector } from 'react-redux'


const Save = ({ recipe }) => {
  const favorite = useSelector(state => state.favorite.favorite)
  const id = useSelector(state => state.auth.UserId)
  const dispatch = useDispatch()
  const [save, setSave] = useState(false)

  const cls = [
    classes.Save,
    save ? classes.selected : null
  ]

  useEffect(() => {
    favorite.find(item => item.label === recipe.label) && setSave(true)
  }, [])

  const addFavorite = () => {
    setSave(true)
    dispatch(saveRecipe(recipe))
    dispatch(postFavorite(recipe, id))
  }

  return (
    <div className={cls.join(' ')}>
      { save
        ? <div>
            <img src={SaveImg} alt={'Saved'}/>
            <p>Saved</p>
          </div>
        : <img
          src={SaveImg}
          alt={'to Save'}
          onClick={addFavorite}
        />
      }
    </div>
  )
}

export default Save
