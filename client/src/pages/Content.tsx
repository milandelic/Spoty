import {  useState } from "react";
import { useAppSelector } from "../app/hooks";
import Albums from "../components/albums/Albums";
import { selectAlbums } from "../components/albumsSlice";
import Search from "../components/Search";
import IAlbumItems from "../interfaces/entry.interface";
import classes from '../styles/Content.module.css';

const Content = () => {
    const artistAlbums: IAlbumItems[] = useAppSelector(selectAlbums);
    return(
        <div>
            <Search />
            <div className={classes.contetntContainer}>
                <Albums albumsList={artistAlbums} />
            </div>
        </div>
    );
}

export default Content;