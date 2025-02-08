import { useNavigate } from "react-router-dom";
import ButtonComponent from "../components/Button.component";
import LoggedAs from "../components/LoggedAs.component";
import { authProviders, useAuthContext } from "../contexts/Auth.context";

const LoginPage = () => {
  const authContext = useAuthContext();
  const navigate = useNavigate();

  const buttonStyle = (classes: string) =>
    "w-64 text-white py-3 rounded-lg shadow-md transition flex items-center justify-center cursor-pointer mb-6 " +
    classes;

  return authContext.isLoading ? <>Loading</> : authContext.isAuthenticated ? (
    <>
        <h2 className="text-2xl font-semibold mb-6">Logged as</h2>
        <LoggedAs />
        <ButtonComponent text="Home" color="green" onClick={() => navigate('/home')}/>
        <ButtonComponent text="Logout" onClick={authContext.logout}/>
    </>
  ) : (
    <>
      <h2 className="text-2xl font-semibold mb-6">Sign in</h2>
      {authProviders.map((provider) => {
        return (
          <a
            key={provider.name}
            className={buttonStyle(provider.colors)}
            onClick={() => {
              window.location.href = provider.authUrl;
            }}
          >
            {provider.content}
          </a>
        );
      })}
    </>
  );
};

export default LoginPage;
