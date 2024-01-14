import { MealData } from '../meals/NewMealForm';

export async function postRequest(url: string, mealData: MealData) {
  const response = await fetch(url, {
    method: 'POST',
    body: JSON.stringify(mealData),
    headers: {
      'Content-Type': 'application/json',
    },
  });

  return response;
}

export async function getRequest(url: string) {
  const response = await fetch(url);

  return response;
}

export async function deleteRequest(url: string) {
  const response = await fetch(url, {
    method: 'DELETE',
  });

  return response;
}
