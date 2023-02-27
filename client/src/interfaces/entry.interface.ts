type ImagesType = {
    url: string;
}

type NameType = {
    name: string;
}
export default interface IAlbumItems {
    id: string;
    uri: string;
    images: ImagesType[];
    artists: NameType[];
    name: string;
};

type AlbumsType = {
    items: []
}
export interface IAlbums {
    albums: AlbumsType[]
}

export interface IAlbumSongs {
    id: string;
    name: string;
    preview_url: string;
}