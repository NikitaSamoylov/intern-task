import { useNavigate } from 'react-router-dom';
import Button from '../../ui/button/Button';
import styles from './Header.module.scss';

import backMobileIcon from './back-mobile-icon.png';
import exitMobileIcon from './exit-mobile-icon.png';

type THeaderProps = {
  children: React.ReactNode;
};

const Header: React.FC<THeaderProps> = ({ children }) => {
  const navigate = useNavigate();

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

  return (
    <header className={ styles.header }>
      <div className='container'>
        <div className={ styles.header__content }>
          {
            window.location.href.endsWith('main') ?
              (
                <div className={ styles.header__btns_exit }>
                  <div className={ styles.header__btn }
                    onClick={ removeUser }
                  >
                    <Button title={ 'Выход' } />
                  </div>
                  <button className={ styles.header__btn_mobile }
                    onClick={ removeUser }
                  >
                    <img src={ exitMobileIcon } alt="выход" />
                  </button>
                </div>
              ) :
              (
                <>
                  <div className={ styles.header__btns }>
                    <div className={ styles.header__btns_back }>
                      <div className={ styles.header__btn_back }
                        onClick={ () => navigate(-1) }
                      >
                        <Button title={ 'Назад' } />
                      </div>
                      <div className={ styles.header__btn_back_mobile }
                        onClick={ () => navigate(-1) }
                      >
                        <img src={ backMobileIcon } alt="выход" />
                      </div>
                    </div>
                    <div className={ styles.header__btns_exit }>
                      <div className={ styles.header__btn }
                        onClick={ removeUser }
                      >
                        <Button title={ 'Выход' } />
                      </div>
                      <button className={ styles.header__btn_mobile }
                        onClick={ removeUser }
                      >
                        <img src={ exitMobileIcon } alt="выход" />
                      </button>
                    </div>
                  </div>
                </>
              )
          }
          { children }
        </div>
      </div>
    </header>
  )
};

export default Header;