import classes from '../styles/Login.module.css'
import useAuth from '../components/useAuth';
import { useNavigate } from 'react-router-dom';

 const Login = () => {
    const navigate = useNavigate();
    const token = useAuth();
    if(localStorage.getItem('accessToken')){
        navigate('/Content');
        return <></>;
    }
    const setToken = () => {
        let secconds = token.expiresIn ? token.expiresIn: 0;
        let date = new Date();
        date.setSeconds(date.getSeconds() + secconds);
        localStorage.setItem('accessToken', token.accessToken);
        localStorage.setItem('expiresIn', JSON.stringify(date));
        navigate('/Content');
    }
    return(
        <div className={classes.logInContainer}>
            <div className={classes.logInButton} onClick={setToken}>Log in</div>
        </div>
    );
}

export default Login;