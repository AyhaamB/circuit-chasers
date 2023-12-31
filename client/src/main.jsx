import ReactDOM from 'react-dom/client';


import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import axios from 'axios'

import 'bootstrap/dist/css/bootstrap.css';
import App from './App.jsx';
import Home from './pages/Home';
import Community from './pages/Community.jsx';
import Post from './pages/Post';
import Vote from './pages/Vote';
import Browse from './pages/Browse';
import Merch from './pages/Merch';
import News from './pages/News.jsx';
import NotFound from './pages/NotFound';
import Donate from './pages/Donate.jsx';
import Login from './pages/Login.jsx'
import RaceSchedule from './pages/RaceSchedule.jsx'
import RacerPage from './pages/Racer.jsx';
import TeamsPage from './pages/TeamsPage.jsx';
import CircuitPage from './pages/CircuitsPage.jsx'
import SignupPage from './pages/SignupPage.jsx'





const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <NotFound />,
    children: [
      {
        index: true,
        element: <Home />
      }, {
        path: '/community',
        element: <Community />
      }, {
        path: '/matchup/:id',
        element: <Vote />
      }, {
        path: '/post/:id',
        element: <Post />
      }, {
        path: '/browse',
        element: <Browse />
      }, {
        path: '/merch',
        element: <Merch />
      }, {
        path: '/news',
        element: <News />
      }, {
        path: '/donate',
        element: <Donate/>

      },
      {
        path: '/login',
        element: <Login/>

      }, {
        path: '/raceschedule',
        element: <RaceSchedule/>
      }, {
        path: '/racers',
        element: <RacerPage/>
      }, {
        path: '/teams',
        element: <TeamsPage/>
      },{
        path: '/circuits',
        element: <CircuitPage/>
      }, {
        path: '/signup',
        element: <SignupPage />
      }
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
);
