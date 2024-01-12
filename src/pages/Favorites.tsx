import { type ReactNode, useContext } from 'react';

import { FavoritesContext } from '../store/favorites-context';
import MealList from '../components/meals/MealList';
import emptyImg from '../images/empty.png';

function Favorites() {
  const favoritesCtx = useContext(FavoritesContext);

  let content: ReactNode;

  if (favoritesCtx?.totalFavoritesCount === 0) {
    content = (
      <div className='favorites-container'>
        <img src={emptyImg} alt='No Favorites icon' />
        <p>No favorites added yet!</p>
      </div>
    );
  } else {
    content = <MealList meals={favoritesCtx?.favoritesList} />;
  }

  return (
    <section>
      <h1>Favorites Page</h1>
      {content}
    </section>
  );
}

export default Favorites;
