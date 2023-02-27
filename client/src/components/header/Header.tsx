import { NavLink, useNavigate } from 'react-router-dom';
import { useAppDispatch } from '../../app/hooks';
import logo from '../../img/spotify.png';
import { setAlbums } from '../albumsSlice';
import classes from './Header.module.css';

const Header = () => {
    const navigate = useNavigate();
    const dispatch = useAppDispatch();
    const startingPage = () => {
        dispatch(setAlbums([]));
        navigate('/Content');
    }
    return (
        <div className={classes.headerContainer}>
            <div className={classes.logoContainer} onClick={startingPage}>
                <img src={logo} alt="Logo" className={classes.logo} />
                <div className={classes.logoText}>MusicBOX</div>
            </div>
            <NavLink to={'/hot'} className={({isActive}) => isActive ? classes.active: classes.buttons}>Hot Releases</NavLink>
            <NavLink to={'/settings'} className={({isActive}) => isActive ? classes.active: classes.buttons}>Settings</NavLink>
        </div>
    );
}

export default Header;