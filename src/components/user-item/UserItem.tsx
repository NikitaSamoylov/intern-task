import { Link } from 'react-router-dom';
import { useAppSelector } from '../../hooks';
import styles from './UserItem.module.scss';

import likeIcon from './Vector.png';

const UserItem: React.FC = () => {
  const teamStore = useAppSelector(state => state.team);
  console.log(teamStore.team)

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
                <button className={ styles.item__like }>
                  <img src={ likeIcon } alt="like" />
                </button>
              </Link>
            </li>
          )
        })
      }
    </>
  )
};

export default UserItem;