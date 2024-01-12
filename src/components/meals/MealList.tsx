import MealType from './model/meal-type';
import MealItem from './MealItem';

interface MealListType {
  meals?: MealType[];
}

function MealList(props: MealListType) {
  return (
    <ul>
      {props.meals?.map((meal: MealType) => {
        return (
          <MealItem
            key={meal.id}
            id={meal.id}
            image={meal.image}
            name={meal.name}
            category={meal.category}
            description={meal.description}
            price={meal.price}
          />
        );
      })}
    </ul>
  );
}

export default MealList;
