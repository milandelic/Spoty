import { Outlet, useLocation } from 'react-router-dom';
import Header from './header/Header';
import Footer from './footer/Footer';
import classes from './Root.module.css';

const Root = () => {
    const {pathname} = useLocation();
    return (
        <div>
            {pathname !== '/' && <Header />}
            <div className={pathname !== '/' ? classes.content: ''}>
                <div className={classes.mainContainer}>
                    <Outlet />
                </div>
            </div>
            {pathname !== '/' && <Footer />}
        </div>
    );
}

export default Root;