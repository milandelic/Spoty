import { useNavigate } from "react-router-dom";
import IAlbumItems from "../../interfaces/entry.interface";
import classes from './Albums.module.css';

const Albums = (props: { albumsList: IAlbumItems[]; }) =>{
    const navigate = useNavigate();
    const openAlbum = (album: IAlbumItems) => {
        let cachedAlbums: IAlbumItems[] = localStorage.getItem('cachedAlbums') ? JSON.parse(localStorage.getItem('cachedAlbums') as string): [];
        let maxCachedAlbums = parseInt(localStorage.getItem('maxCachedAlbums') as string);
        if(cachedAlbums?.length > maxCachedAlbums){
            cachedAlbums.shift()
        } else {
            cachedAlbums = cachedAlbums.filter((current) =>{
                return current.id !== album.id;
            });
        }
        cachedAlbums.push({
            id: album.id,
            uri: album.uri,
            images: album.images,
            artists: album.artists,
            name: album.name
        });
        localStorage.setItem('cachedAlbums', JSON.stringify(cachedAlbums));
        navigate('/album/' + album.id);
    }
    const albums = props.albumsList.map((album: IAlbumItems, index) => {
        return (
            <div onClick={() => openAlbum(album)} className={classes.albumContent} key={index}>
                <div className={classes.albumCover} style={{ backgroundImage: `url("${album.images[1].url}")`}}></div>
                <div className={classes.albumTexts}>
                    <div className={classes.artistName}>{album.artists[0].name}</div>
                    <div>{album.name}</div>
                </div>
            </div>
        );
    });
    return(
        <>
            {albums}
        </>
    );
}

export default Albums;