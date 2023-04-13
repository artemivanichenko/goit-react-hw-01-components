import PropTypes from 'prop-types';
import { User } from '../user/User';

export const UserList = ({ users }) => {
  return (
    <ul>
      {users.map(({ name, email, id }) => {
        return (
          <li key={id}>
            <User user={{ name, email }} />
          </li>
        );
      })}
    </ul>
  );
};

UserList.propTypes = {
  users: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      email: PropTypes.string,
      id: PropTypes.string,
    })
  ),
};
