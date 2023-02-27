import { useState } from "react";
import { useNavigate } from "react-router-dom";
import IAlbumItems from "../interfaces/entry.interface";
import classes from '../styles/Settings.module.css'

const Settings = () => {
    const navigate = useNavigate();
    let originalValues = {
        cached: localStorage.getItem('maxCachedAlbums') ? localStorage.getItem('maxCachedAlbums'): '10',
        showInFooter: localStorage.getItem('maxFooterAlbums')? localStorage.getItem('maxFooterAlbums'): '5'
    }
    const [ cachedAlbumsVal, setCachedAlbumsVal ] = useState<string>(originalValues.cached as string);
    const [ showInFooterAlbumsVal, setshowInFooterAlbumsVal ] = useState<string>(originalValues.showInFooter as string);
    const updateCahcedAlbumsValue = (event: React.ChangeEvent<HTMLInputElement>) => {
        setCachedAlbumsVal(event.target.value);
    }
    const updateFooterAlbumsValue = (event: React.ChangeEvent<HTMLInputElement>) => {
        setshowInFooterAlbumsVal(event.target.value);
    }
    const applyValues = (event: React.MouseEvent<HTMLDivElement>) => {
        localStorage.setItem('maxCachedAlbums', cachedAlbumsVal);
        localStorage.setItem('maxFooterAlbums', showInFooterAlbumsVal);
        let cachedAlbums: IAlbumItems[] = localStorage.getItem('cachedAlbums') ? JSON.parse(localStorage.getItem('cachedAlbums') as string): [];
        localStorage.setItem('cachedAlbums', JSON.stringify(cachedAlbums.slice(-cachedAlbumsVal)));
        navigate(-1); // go back in history
    }
    return(
        <div className={classes.settingsContainer}>
            <div className={classes.settingsRow}>
                Number of albums to be cached:
                <input type='text' className={classes.settingsInput} onChange={updateCahcedAlbumsValue} defaultValue={cachedAlbumsVal} />
            </div>
            <div className={classes.settingsRow}>
                Number of chached albums to be shown in footer:
                <input type='text' className={classes.settingsInput} onChange={updateFooterAlbumsValue} defaultValue={showInFooterAlbumsVal} />
            </div>
            <div className={classes.settingsRow}>
                <div className={classes.setingsButton} onClick={applyValues}>Apply</div>
            </div>
        </div>
    );
}

export default Settings;