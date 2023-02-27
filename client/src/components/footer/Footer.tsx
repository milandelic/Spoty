import { Link } from 'react-router-dom';
import IAlbumItems from '../../interfaces/entry.interface';
import classes from './Footer.module.css';

const Footer = () => {
    let cachedAlbums: IAlbumItems[] = localStorage.getItem('cachedAlbums') ? JSON.parse(localStorage.getItem('cachedAlbums') as string): [];
    let maxFooterAlbums = parseInt(localStorage.getItem('maxFooterAlbums') as string);
    let albumsToBeShown = cachedAlbums;
    if(albumsToBeShown.length > maxFooterAlbums)
        albumsToBeShown = cachedAlbums.slice(-maxFooterAlbums)
    const albums = albumsToBeShown.map(({id, uri, images}: IAlbumItems) => {
        return (
            <Link to={`/album/${id}`} className={classes.albumContent} key={uri}>
                <div className={classes.albumCover} style={{ backgroundImage: `url("${images[1].url}")`}}></div>
            </Link>
        );
    });
    return <div className={classes.bottomCenter} key={cachedAlbums.length}>{albums}</div>;
}

export default Footer;