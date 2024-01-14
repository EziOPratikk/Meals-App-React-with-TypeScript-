import { type ReactNode, useContext } from 'react';

import { FavoritesContext } from '../store/favorites-context';
import MealList from '../components/meals/MealList';
import favoriteImg from '../images/favorite-meal.png';

function Favorites() {
  const favoritesCtx = useContext(FavoritesContext);

  let content: ReactNode;

  if (favoritesCtx?.totalFavoritesCount === 0) {
    content = (
      <div className='no-meal-container'>
        <img src={favoriteImg} alt='a favorite meal icon' />
        <p>No favorites added yet!</p>
      </div>
    );
  } else {
    content = <MealList meals={favoritesCtx?.favoritesList} listType='Favorites'/>;
  }

  return (
    <section>
      <h1>Your Favorites</h1>
      {content}
    </section>
  );
}

export default Favorites;
