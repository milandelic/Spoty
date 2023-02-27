import Footer from "./footer/Footer";
import Header from "./header/Header";
import classes from './Error.module.css'

const ErrorPage = () => {
    return(
        <>
            <Header />
            <div className={classes.content}>
                <div className={classes.mainContainer}>
                    <h1>Not Found</h1>
                </div>
            </div>
            <Footer />
        </>
    );
}

export default ErrorPage;