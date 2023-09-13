import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import './App.css';
import routes from './router/routes';

function App() {
  return (
    <RouterProvider router={createBrowserRouter(routes)} />
  );
}

export default App;
