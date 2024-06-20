import { Link } from 'react-router-dom';
import { useAppSelector, useAppDispatch } from '../../hooks';
import styles from './UserItem.module.scss';
import { addItem, removeItem } from '../../store/liked-slice/liked-slice';

import likeIcon from './Vector.png';
import likedIcon from './like.png';

const UserItem: React.FC = () => {
  const teamStore = useAppSelector(state => state.team);
  const likedUsersStore = useAppSelector(state => state.likedUsers);
  const dispatch = useAppDispatch();

  const addLike = (id: string) => {
    dispatch(addItem(id));
  };

  const removeLike = (id: string) => {
    dispatch(removeItem(id));
  };

  return (
    <>
      {
        teamStore.team.map(el => {
          return (
            <li key={ el.firstName }
              className={ styles.item }
            >
              <Link to={ `/main/${ el.id }` }
                className={ styles.item__link }
              >
                <img src={ el.picture }
                  alt={ el.firstName }
                  className={ styles.item__img }
                />
                <span className={ styles.item__name }>
                  {
                    `${ el.firstName } 
                  ${ el.lastName }`
                  }
                </span>
              </Link>
              {
                likedUsersStore.filter(item => item === el.id)
                  .length !== 0 ?
                  (
                    <button className={ styles.item__like }
                      onClick={ () => removeLike(el.id) }
                    > {
                        <img src={ likedIcon } alt="like" />
                      }
                    </button>
                  ) :
                  (
                    <button className={ styles.item__like }
                      onClick={ () => addLike(el.id) }
                    > {
                        <img src={ likeIcon } alt="like" />
                      }
                    </button>
                  )
              }
            </li>
          )
        })
      }
    </>
  )
};

export default UserItem;