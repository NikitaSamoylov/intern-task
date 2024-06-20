import styles from './Button.module.scss';

type TButtonProps = {
  title: string;
};

const Button: React.FC<TButtonProps> = (
  { title }
) => {

  return (
    <button className={ styles.btn }>
      { title }
    </button>
  )
};

export default Button;