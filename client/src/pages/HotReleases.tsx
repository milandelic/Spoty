import ErrorHandling from "../helpers/ErrorHandler";
import { useLoaderData } from 'react-router-dom';
import classes from '../styles/HotReleases.module.css';
import IAlbumItems, { IAlbums } from "../interfaces/entry.interface";
import Albums from "../components/albums/Albums";
import Search from "../components/Search";

const HotReleases = () => {
    const hotList: any = useLoaderData();
    const albums: IAlbumItems[] = hotList.albums.items;
    return(
        <>
            <Search />
            <div className={classes.contetntContainer}>
                <Albums albumsList={albums} />
            </div>
        </>
    );
}

export default HotReleases;

export const HotReleasesList = async () => {
    let token = localStorage.getItem('accessToken');
    let artistParams = {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + token
        }
    }
    const response = await fetch('https://api.spotify.com/v1/browse/new-releases', artistParams);
    if(response.ok){
        const receivedData = await response.json();
        return receivedData;
    } else {
        ErrorHandling(response);
    }
}