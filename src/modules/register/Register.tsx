import RegisterForm from '../../components/register-form/RegisterForm';
import styles from './Register.module.scss';

const Register: React.FC = () => {

  return (
    <section className="container">
      <div className={ styles.login }>
        <RegisterForm />
      </div>
    </section>
  )
};

export default Register;