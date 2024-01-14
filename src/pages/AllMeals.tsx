import { useState, useEffect, useContext } from 'react';

import MealList from '../components/meals/MealList';
import MealType from '../components/meals/model/meal-type';
import { deleteRequest, getRequest } from '../components/utils/http';
import CircularProgressIndicator from '../components/utils/CircularProgressIndicator';
import { antdNotification } from '../components/utils/antd-notification';
import emptyImg from '../images/empty.png';
import { FavoritesContext } from '../store/favorites-context';
// import DUMMY_DATA from '../data/dummy-data';

type RawMealData = {
  category: string;
  description: string;
  image: string;
  name: string;
  price: number;
};

function AllMeals() {
  const [isLoading, setIsLoading] = useState(false);
  const [fetchedMeals, setFetchedMeals] = useState<MealType[]>([]);

  const favoritesCtx = useContext(FavoritesContext);

  function fetchMeals() {
    getRequest('https://meals-app-a400b-default-rtdb.firebaseio.com/meals.json')
      .then((res) => {
        return res.json();
      })
      .then((data: RawMealData[]) => {
        let meals: MealType[] = [];

        for (const key in data) {
          const meal = {
            id: key,
            ...data[key],
          };

          meals.push(meal);
        }
        setFetchedMeals(meals);
        setIsLoading(false);
      });
  }

  useEffect(() => {
    setIsLoading(true);
    fetchMeals();
  }, []);

  function handleMealDelete(id: string) {
    setIsLoading(true);
    deleteRequest(
      `https://meals-app-a400b-default-rtdb.firebaseio.com/meals/${id}.json`
    ).then((res) => {
      if (res.ok) {
        antdNotification('success', 'Meal deleted successfully');
        fetchMeals();

        favoritesCtx?.handleRemoveFavorite(id);
        setIsLoading(false);
      } else {
        setIsLoading(false);
        antdNotification('error', 'Failed to delete a meal');
      }
    });
  }

  if (isLoading) {
    return (
      <section>
        <CircularProgressIndicator />
      </section>
    );
  }

  return (
    <section>
      <h1>All Meals</h1>
      {fetchedMeals.length === 0 ? (
        <div className='no-meal-container'>
          <img src={emptyImg} alt='a favorite meal icon' />
          <p>Feeling hungry, start adding some meals!</p>
        </div>
      ) : (
        <MealList
          meals={fetchedMeals}
          onDelete={handleMealDelete}
          listType='All-Meals'
        />
      )}
    </section>
  );
}

export default AllMeals;
