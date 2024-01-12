import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import NewMealForm from '../components/meals/NewMealForm';
import { MealData } from '../components/meals/NewMealForm';
import { postRequest } from '../components/utils/http';
import { antdNotification } from '../components/utils/antd-notification';
import CircularProgressIndicator from '../components/utils/CircularProgressIndicator';

function NewMeal() {
  const [isLoading, setIsLoading] = useState(false);

  const navigate = useNavigate();

  async function handleAddMeal(mealData: MealData) {
    setIsLoading(true);
    const response = await postRequest(
      'https://meals-app-a400b-default-rtdb.firebaseio.com/meals.json',
      mealData
    );

    if (response.ok) {
      setIsLoading(false);
      antdNotification('success', 'Meal added successfully!');
      navigate('/', { replace: true });
    } else {
      setIsLoading(false);
      antdNotification('error', 'Failed to add a meal!');
    }

    if (isLoading) {
      return (
        <section>
          <CircularProgressIndicator />
        </section>
      );
    }
  }

  return (
    <section>
      <h1>Add New Meal</h1>
      <NewMealForm onAddMeal={handleAddMeal} />
    </section>
  );
}

export default NewMeal;
