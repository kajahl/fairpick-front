import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faDiscord } from "@fortawesome/free-brands-svg-icons";
import ButtonComponent from "../components/Button.component";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";

const ContactPage = () => {
  const navigate = useNavigate();

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-4xl font-bold mb-4">Contact Us</h1>
      <p className="mb-4">
        If you have any questions or would like to get in touch, you can reach us through the following channels:
      </p>
      <div className="flex flex-col space-y-4">
        <a href="https://github.com/kajahl" target="_blank" className="flex items-center space-x-2 hover:underline">
          <FontAwesomeIcon icon={faGithub} className="w-6 h-6" />
          <span>GitHub/kajahl</span>
        </a>
        <div className="flex items-center space-x-2">
          <FontAwesomeIcon icon={faDiscord} className="w-6 h-6" />
          <span>Discord: hak3r37</span>
        </div>
        <a href="mailto:info@fairpick.com" target="_blank" className="flex items-center space-x-2 over:underline">
          <FontAwesomeIcon icon={faEnvelope} className="w-6 h-6" />
          <span>Email: info@fairpick.com</span>
        </a>
      </div>
      <div className="mt-8">
        <ButtonComponent text="Home" color="green" onClick={() => navigate('/home')} />
      </div>
    </div>
  );
};

export default ContactPage;