import { useContext } from 'react';

import classes from './MealItem.module.css';
import MealType from './model/meal-type';
import CustomCard from '../utils/CustomCard';
import { FavoritesContext } from '../../store/favorites-context';
import { antdNotification } from '../utils/antd-notification';

import { MdOutlineAttachMoney, MdDelete } from 'react-icons/md';
import { FaHeart } from 'react-icons/fa';
import { CiHeart } from 'react-icons/ci';
import { Popconfirm } from 'antd';

type MealItemProps = {
  onDelete?: (id: string) => void;
  listType: 'All-Meals' | 'Favorites';
};

function MealItem(props: MealType & MealItemProps) {
  const favoritesCtx = useContext(FavoritesContext);

  const itemIsFavorite = favoritesCtx?.handleItemIsFavorite(props.id);

  function handleFavorite() {
    if (itemIsFavorite) {
      favoritesCtx?.handleRemoveFavorite(props.id);
      antdNotification('warning', `${props.name} removed from favorites.`);
    } else {
      antdNotification('success', `${props.name} added to favorites.`);
      favoritesCtx?.handleAddFavorite({
        id: props.id,
        name: props.name,
        image: props.image,
        category: props.category,
        description: props.description,
        price: props.price,
      });
    }
  }

  const confirmDelete = () => {
    props.onDelete!(props.id);
  };

  const cancelDelete = () => null;

  return (
    <li className={classes.item}>
      <CustomCard>
        <div className={classes.imageContainer}>
          <img src={props.image} alt={props.name} />
        </div>
        <div className={classes.info}>
          <h3>{props.name}</h3>
          <p>{props.description}</p>
          <p>({props.category})</p>
          <p>
            <MdOutlineAttachMoney />
            {props.price}
          </p>
        </div>
        <div className={classes.btnContainer}>
          <div
            className={classes.favoriteBtnContainer}
            onClick={handleFavorite}
          >
            {itemIsFavorite ? (
              <FaHeart size={35} className={classes.btn} />
            ) : (
              <CiHeart size={35} className={classes.btn} />
            )}

            <div className={classes.tooltip}>
              {itemIsFavorite ? 'Remove Favorite' : 'Favorite'}
            </div>
          </div>
          {props.listType === 'All-Meals' && (
            <div className={classes.deleteBtnContainer}>
              <Popconfirm
                title='Delete Meal'
                description='Are you sure to delete this meal?'
                onConfirm={confirmDelete}
                onCancel={cancelDelete}
                okText='Yes'
                cancelText='No'
                okButtonProps={{
                  style: { background: '#db005b', color: 'white' },
                }}
                cancelButtonProps={{
                  style: { background: '#f79327', color: 'white' },
                }}
              >
                <MdDelete
                  size={35}
                  className={classes.btn}
                  // onClick={handleDelete}
                />
              </Popconfirm>

              <div className={classes.tooltip}>Remove</div>
            </div>
          )}
        </div>
      </CustomCard>
    </li>
  );
}

export default MealItem;
