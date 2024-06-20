import styles from './Header.module.scss';

type THeaderProps = {
  children: React.ReactNode;
};

const Header: React.FC<THeaderProps> = ({ children }) => {

  return (
    <header className={ styles.header }>
      <div className='container'>
        { children }
      </div>
    </header>
  )
};

export default Header;