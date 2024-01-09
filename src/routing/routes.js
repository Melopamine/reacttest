import { createBrowserRouter } from 'react-router-dom';
import HomePage from './HomePage';
import ContactPage from './ContactPage';
import UserListPage from './UserListPage';
import UserDetailPage from './UserDetailPage';
import Layout from './Layout';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      { index: true, element: <HomePage /> },
      { path: 'contact', element: <ContactPage /> },
      { path: 'users', element: <UserListPage /> },
      { path: 'users/:id', element: <UserDetailPage /> },
    ],
  },
]);

export default router;
