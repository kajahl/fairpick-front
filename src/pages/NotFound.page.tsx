import { useNavigate } from "react-router-dom";
import ButtonComponent from "../components/Button.component";

const NotFoundPage = () => {
    const navigate = useNavigate();

    return (
      <div className="flex items-center justify-center h-screen">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">404 - Page Not Found</h1>
          <p className="mb-4">
            Sorry, the page you are looking for does not exist. Please check the URL or go back to the homepage.
          </p>
          <ButtonComponent text="Back to main page" onClick={() => navigate('/home')}/>
        </div>
      </div>
    );
  };
  
  export default NotFoundPage;