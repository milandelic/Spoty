import React from 'react';
import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Root from './components/Root';
import ErrorPage from './components/Error';
import AlbumSongs, { AlbumSongsList } from './components/albums/AlbumSongs';
import Content from './pages/Content';
import Login from './pages/Login';
import HotReleases, { HotReleasesList } from './pages/HotReleases';
import Settings from './pages/Settings';


const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <Login />
      },
      {
        path: 'Content',
        element: <Content />
      },
      {
        path: 'hot',
        element: <HotReleases />,
        loader: () => {
          return HotReleasesList();
        }
      },
      {
        path: 'album/:albumId',
        element: <AlbumSongs />,
        loader: ({params}) => {
          return AlbumSongsList(params.albumId as string);
        }
      },
      {
        path: 'settings',
        element: <Settings />
      }
    ]
  }
]);


function App() {
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
