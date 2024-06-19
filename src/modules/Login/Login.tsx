import LoginForm from "../../components/login-form/LoginForm";
import styles from './Login.module.scss';

const Login: React.FC = () => {

  return (
    <section className="container">
      <div className={ styles.login }>
        <LoginForm />
      </div>
    </section>
  )
};

export default Login;