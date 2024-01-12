import { useContext } from 'react';
import { Link } from 'react-router-dom';

import logo from '../../images/logo.png';
import classes from './MainNavigation.module.css';
import { FavoritesContext } from '../../store/favorites-context';

function MainNavigation() {
  const favoritesCtx = useContext(FavoritesContext);

  return (
    <header className={classes.navbar}>
      <div className={classes.logo}>
        <img src={logo} alt='meal-logo' />
        <h1>Deli Meals</h1>
      </div>
      <nav>
        <ul>
          <Link to='/'>
            <li>All Meals</li>
          </Link>
          <Link to='/new-meal'>
            <li>Add Meal</li>
          </Link>
          <Link to='/favorites'>
            <li>Favorites</li>
            <span className={classes.badge}>
              {favoritesCtx?.totalFavoritesCount}
            </span>
          </Link>
        </ul>
      </nav>
    </header>
  );
}

export default MainNavigation;
