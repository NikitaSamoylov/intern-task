import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAppDispatch } from '../../hooks';
import { addNewUser } from '../../store/user-slice/user-slice';
import UsersList from '../../components/users-list/UsersList';
import Header from '../../components/header/Header';

import Button from '../../ui/button/Button';
import styles from './Main.module.scss';

const Main: React.FC = () => {
  const dispatch = useAppDispatch();

  const navigate = useNavigate();

  // const handleUser = () => {
  //   if (localStorage.getItem('currentUser') !== null) {
  //     const data = localStorage.getItem('currentUser');
  //     const parsedData = data && JSON.parse(data);
  //     dispatch(addNewUser(parsedData));
  //   } else {
  //     dispatch(addNewUser(
  //       { username: '', email: '', password: '' }
  //     ));
  //     navigate('/');
  //   }
  // };

  const handleUser = () => {
    if (
      localStorage
        .getItem('currentUser') === null
    ) {
      navigate('/');
    }
  };

  const removeUser = () => {
    localStorage.removeItem('currentUser');
    handleUser();
  };

  useEffect(() => {
    handleUser();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <div>
        <Header>
          <div className={ styles.header }>
            <div className={ styles.main__btn_exit }
              onClick={ removeUser }
            >
              <Button title={ 'Выход' } />
            </div>
            <h1 className={ styles.main__title }>
              Наша команда
            </h1>
            <p className={ styles.main__description }>
              Это опытные специалисты, хорошо разбирающиеся во всех задачах, которые ложатся на их плечи, и умеющие находить выход из любых, даже самых сложных ситуаций.
            </p>
          </div>
        </Header>
        <div className='container'>
          <UsersList />
        </div>
      </div>
    </>
  )
};

export default Main;