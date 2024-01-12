import { useState, useEffect } from 'react';

import MealList from '../components/meals/MealList';
import MealType from '../components/meals/model/meal-type';
import { getRequest } from '../components/utils/http';
import CircularProgressIndicator from '../components/utils/CircularProgressIndicator';
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

  useEffect(() => {
    setIsLoading(true);
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
  }, []);

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
      <MealList meals={fetchedMeals} />
    </section>
  );
}

export default AllMeals;
