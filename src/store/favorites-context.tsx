import { useState, createContext, type ReactNode } from 'react';

import MealType from '../components/meals/model/meal-type';

type FavoritesState = {
  favoritesList?: MealType[];
  totalFavoritesCount?: number;
};

type FavoritesContextValue = FavoritesState & {
  handleAddFavorite: (favoriteMeal: MealType) => void;
  handleRemoveFavorite: (mealId: string) => void;
  handleItemIsFavorite: (mealId: string) => boolean;
};

type FavoritesContextProviderProps = {
  children: ReactNode;
};

export const FavoritesContext = createContext<FavoritesContextValue | null>(
  null
);

export default function FavoritesContextProvider(
  props: FavoritesContextProviderProps
) {
  const [userFavorites, setUserFavorites] = useState<MealType[]>([]);

  const ctx: FavoritesContextValue = {
    favoritesList: userFavorites,
    totalFavoritesCount: userFavorites?.length,
    handleAddFavorite(favoriteMeal) {
      setUserFavorites((prevValue) => {
        return prevValue?.concat(favoriteMeal);
      });
    },
    handleRemoveFavorite(mealId) {
      setUserFavorites((prevValue) => {
        return prevValue?.filter((meal) => meal.id !== mealId);
      });
    },

    handleItemIsFavorite(mealId) {
      return userFavorites.some((meal) => meal.id === mealId);
    },
  };

  return (
    <FavoritesContext.Provider value={ctx}>
      {props.children}
    </FavoritesContext.Provider>
  );
}
