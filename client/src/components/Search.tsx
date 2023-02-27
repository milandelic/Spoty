import {  useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAppDispatch } from '../app/hooks';
import { setAlbums } from './albumsSlice';
import classes from './Search.module.css';

const Search = () => {
    const navigate = useNavigate();
    const token = localStorage.getItem('accessToken');
    const [searchParams, setSearchParams] = useState('');
    const dispatch = useAppDispatch();
    const search = async () => {
        if (!searchParams)
            return;
        let artistParams = {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + token
            }
        }
        
        // get artist id based on typed name with access token
        let artistId = await fetch('https://api.spotify.com/v1/search?q=' + searchParams + '&type=artist', artistParams)
            .then(response => response.json())
            .then(data => {return data.artists.items[0].id});

        // get artist albums based on artist id and access token
        fetch('https://api.spotify.com/v1/artists/' + artistId + '/albums?include_groups=album', artistParams)
            .then(response => response.json())
            .then(data => {
                dispatch(setAlbums(data.items));
                navigate('/Content');
            });
    }
    return (
        <>
            <div className={classes.headerContainer}>
                <input 
                    type="text" 
                    className={classes.searchBar} 
                    placeholder="Search" 
                    onKeyPress={event => {
                            if(event.key == "Enter"){
                                search();
                            }
                        }
                    }
                    onChange={event => setSearchParams(event.target.value)}
                />
                <div className={classes.searchButton} onClick={search}>Search</div>
            </div>
        </>
    );
}
export default Search;