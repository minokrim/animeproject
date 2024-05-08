import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min'; 
import {createBrowserRouter,RouterProvider} from 'react-router-dom'
import Characters from './viewmore/characters';
import FullPage from './Popular/Fullpopular';
import Viewmore3 from './viewmore/viewmore3';
import Charinfo from './viewmore/characterinfo';
import Textt from './Sucess';
import FrontPage from './FrontPage/Front';
import Bookmarksection from './bookmark/bookmark';

const router = createBrowserRouter([
{path : '/animeProject', element: <App /> },
{path : '/popular', element: <FullPage /> },
{path : '/characters', element: <Characters /> },
{path : '/viewmore/:id', element: <Viewmore3 /> },
{path : '/characterinfo/:id', element: <Charinfo /> },
{path : '/test', element: <Textt /> },
{path : '/front', element: <FrontPage /> },
{path : '/bookmark', element: <Bookmarksection /> },
 ]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
