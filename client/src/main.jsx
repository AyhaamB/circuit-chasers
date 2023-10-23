import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

// import 'bootstrap/dist/css/bootstrap.css';
import App from './App.jsx';
import Home from './pages/Home';
import Community from './pages/Community.jsx';
import Post from './pages/Post';
import Vote from './pages/Vote';
import Browse from './pages/Browse';
import Merch from './pages/Merch';
import NotFound from './pages/NotFound';

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
      }
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
);
