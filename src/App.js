import React, { useEffect } from 'react'

import { useSelector, useDispatch } from 'react-redux'
import { fetchRecipes, recipesSelector } from './slices/recipes'

const App = () => {
  // const recipes = useSelector(recipesSelector).recipes
  // console.log('here', useSelector(recipesSelector))
  const { recipes, loading, hasErrors } = useSelector(recipesSelector)

  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(fetchRecipes())
  }, [dispatch])

  const renderRecipes = () => {
    if (loading) return <p>Loading recipes...</p>
    if (hasErrors) return <p>Cannot display recipes...</p>

    return recipes.map(recipe =>
      <div key={recipe.idMeal} className='tile'>
        <h2>{recipe.strMeal}</h2>
        <img src={recipe.strMealThumb} alt='others' />
      </div>
    )
  }
  return (
    <section>
      <h1>Recipes</h1>
      <div className="content">
        {renderRecipes()}
      </div>
    </section>
  )
}

export default App