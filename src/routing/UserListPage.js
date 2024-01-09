import {Link} from 'react-router-dom'

const UserListPage = () => {
  const users = [
    { id: 1, name: 'Patrick' },
    { id: 2, name: 'Richard' },
    { id: 3, name: 'Paul' },
  ];

  return users.map(user =>
  <p>
    <Link to={`/users/${user.id}`}>{user.name}</Link>
  </p>);
};

export default UserListPage