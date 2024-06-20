import { useEffect, useState } from 'react';
import { useAppDispatch, useAppSelector } from '../../hooks';
import UserItem from '../user-item/UserItem';
import { fetchTeam } from '../../store/team-slice/team-slice';

import styles from './UsersList.module.scss';

import btnArrowIcon from './arrow.png';

const UsersList: React.FC = () => {
  const dispatch = useAppDispatch();
  const teamStore = useAppSelector(state => state.team);

  const [page, setPage] = useState(0);

  const uploadList = () => {
    dispatch(fetchTeam(page));
    setPage(page => page + 1);
  };

  useEffect(() => {
    dispatch(fetchTeam(page));
    setPage(page + 1)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const loadingView = teamStore.loading &&
    (
      <h2 style={ {
        textAlign: 'center'
      } }>
        Загрузка...
      </h2>
    );

  const errorView = teamStore.error && (
    <h2 style={ {
      textAlign: 'center'
    } }>
      Ошибка получения данных
    </h2>
  );

  const listView = !teamStore.loading &&
    !teamStore.error && (
      <UserItem />
    );

  return (
    <div className={ styles.users }>
      { errorView }
      { loadingView }
      <ul className={ styles.users__list }>
        { listView }
      </ul>
      {
        listView && (
          <button className={ styles.users__button }
            onClick={ () => uploadList() }
          >
            Показать еще
            <img src={ btnArrowIcon } alt="стрелка" />
          </button>
        )
      }
    </div>
  )
};

export default UsersList;