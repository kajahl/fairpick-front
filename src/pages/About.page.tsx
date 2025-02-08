import { useNavigate } from "react-router-dom";
import ButtonComponent from "../components/Button.component";

const AboutPage = () => {
    const navigate = useNavigate();
    
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-4xl font-bold mb-4">About FairPick</h1>
      <p className="mb-4">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio quo quia reprehenderit maiores rerum veritatis voluptatem eius unde, ratione possimus obcaecati, saepe, odio ea? Perspiciatis totam doloremque maxime perferendis quis.
      </p>
      <h2 className="text-2xl font-semibold mb-2">Our Vision</h2>
      <p className="mb-4">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque tempora dolor necessitatibus iste quos, iure doloremque quas ducimus architecto eligendi sed tempore voluptates nobis, expedita adipisci repellat dolore, itaque reprehenderit.
      </p>
      <h2 className="text-2xl font-semibold mb-2">How It Works</h2>
      <p className="mb-4">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum, nemo expedita esse maiores ipsa totam exercitationem adipisci temporibus porro architecto amet cumque iusto eos, doloremque sint laboriosam tenetur aut repellat.
      </p>
      <h2 className="text-2xl font-semibold mb-2">Contact Us</h2>
      <p>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Totam beatae nam qui harum aut velit. Blanditiis sint, non reiciendis ut qui quae culpa, incidunt, recusandae quidem quibusdam natus neque accusantium? <a href="mailto:info@fairpick.com" className="text-blue-500 hover:underline">info@fairpick.com</a>.
      </p>
      <ButtonComponent text="Home" color="green" onClick={() => navigate('/home')}/>
    </div>
  );
};

export default AboutPage;