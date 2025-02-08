import { faUser } from '@fortawesome/free-regular-svg-icons';
import { useAuthContext } from '../contexts/Auth.context';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const LoggedAs = () => {
  const { user, isAuthenticated } = useAuthContext();

  if (!isAuthenticated || !user) {
    return null;
  }

  return (
    <div className="flex items-center space-x-2 p-2 bg-gray-200 rounded-lg shadow-md">
      {user.avatar ? (
        <img
          src={user.avatar}
          alt={`${user.name}'s avatar`}
          className="w-6 h-6 rounded-full"
        />
      ) : (
        <FontAwesomeIcon icon={faUser} className="w-6 h-6 text-gray-500" />
      )}
      <div>
        <p className="text-lg font-semibold text-gray-500">{user.name || user.email}</p>
      </div>
    </div>
  );
};

export default LoggedAs;