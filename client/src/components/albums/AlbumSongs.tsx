import { useState } from "react";
import { useLoaderData } from "react-router-dom";
import ErrorHandling from "../../helpers/ErrorHandler";
import { IAlbumSongs } from "../../interfaces/entry.interface";
import Player from "./Player";
import classes from './AlbumSongs.module.css';

const AlbumSongs = () => {
    const albumSongs: any = useLoaderData();
    const artistName: string = albumSongs.items.length ? albumSongs.items[0].artists[0].name: '';
    const [ playingTrack, setPlayingTrack ] = useState('');
    const playSong = (uri: string) => {
        if(uri === null)
            uri = 'NOT FOUNDED';
        setPlayingTrack(uri);
    }
    const songsList = albumSongs.items.map(({id, name, preview_url}: IAlbumSongs) => {
        return (
            <div key={id} onClick={() => playSong(preview_url)} className={classes.artistSongsContainer}>{name}</div>
        );
    });
    return(
        <div>
            <div>
                <div className={classes.caption}>Tracks</div>
                <div className={classes.artistContainer}>
                    <span className={classes.artistCaption}>Album Artist:</span>
                    <span className={classes.artistName}>{artistName}</span>
                </div>
                <div>{songsList}</div>
            </div>
            <Player playingTrack={playingTrack} />
        </div>
    );
}

export default AlbumSongs;

export async function AlbumSongsList(albumId: string){
    var token = localStorage.getItem('accessToken');
    var artistParams = {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + token
        }
    }
    const response = await fetch('https://api.spotify.com/v1/albums/' + albumId + '/tracks', artistParams);
    if(response.ok){
        const receivedData = await response.json();
        return receivedData;
    } else {
        ErrorHandling(response);
    }
    console.log(albumId);
}