import UsersList from '../../components/users-list/UsersList';
import Header from '../../components/header/Header';

import styles from './Main.module.scss';

const Main: React.FC = () => {

  return (
    <>
      <Header>
        <h1 className={ styles.main__title }>
          Наша команда
        </h1>
        <p className={ styles.main__description }>
          Это опытные специалисты, хорошо разбирающиеся во всех задачах, которые ложатся на их плечи, и умеющие находить выход из любых, даже самых сложных ситуаций.
        </p>
      </Header>
      <section className='container'>
        <UsersList />
      </section>
    </>
  )
};

export default Main;