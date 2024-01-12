import { type FormEvent, useRef } from 'react';

import CustomCard from '../utils/CustomCard';
import classes from './NewMealForm.module.css';

export type MealData = {
  name: string;
  image: string;
  category: string;
  price: number;
  description: string;
};

type NewMealFormProps = {
  onAddMeal: (mealData: MealData) => void;
};

function NewMealForm(props: NewMealFormProps) {
  const nameRef = useRef<HTMLInputElement>(null);
  const imgUrlRef = useRef<HTMLInputElement>(null);
  const categoryRef = useRef<HTMLSelectElement>(null);
  const priceRef = useRef<HTMLInputElement>(null);
  const descriptionRef = useRef<HTMLTextAreaElement>(null);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const enteredName = nameRef.current!.value;
    const enteredImgURL = imgUrlRef.current!.value;
    const eneteredCategory = categoryRef.current!.value;
    const enteredPrice = +priceRef.current!.value;
    const enteredDescription = descriptionRef.current!.value;

    const mealData = {
      name: enteredName,
      image: enteredImgURL,
      category: eneteredCategory,
      price: enteredPrice,
      description: enteredDescription,
    };

    props.onAddMeal(mealData);
  }

  return (
    <CustomCard>
      <form className={classes.form} onSubmit={handleSubmit}>
        <div className={classes.control}>
          <label htmlFor='name'>Name</label>
          <input type='text' id='name' required ref={nameRef} />
        </div>
        <div className={classes.control}>
          <label htmlFor='image-url'>Image URL</label>
          <input type='url' id='image-url' required ref={imgUrlRef} />
        </div>
        <div className={classes.control}>
          <label htmlFor='category'>Category</label>
          <select name='category' id='category' required ref={categoryRef}>
            <option value='' defaultValue='NA'>
              Select Meal Category
            </option>
            <option value='veg'>Veg</option>
            <option value='non-veg'>Non veg</option>
          </select>
        </div>
        <div className={classes.control}>
          <label htmlFor='price'>Price (in $)</label>
          <input
            type='number'
            id='price'
            step='.01'
            required
            min={0}
            ref={priceRef}
          />
        </div>
        <div className={classes.control}>
          <label htmlFor='description'>Description</label>
          <textarea
            id='description'
            rows={5}
            style={{ resize: 'none' }}
            required
            ref={descriptionRef}
          ></textarea>
        </div>
        <div className={classes.actions}>
          <button type='submit'>Add Meal</button>
        </div>
      </form>
    </CustomCard>
  );
}

export default NewMealForm;
