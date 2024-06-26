import { FaReact } from "react-icons/fa";
import client1 from "../Images/Clients/logo1.png";
import client2 from "../Images/Clients/logo2.png";
import client5 from "../Images/Clients/logo5.png";
import client6 from "../Images/Clients/logo6.png";
import { BsCodeSlash } from "react-icons/bs";

export const Objective =
  "With 1 year of front-end development experience in React and the MERN stack, I excel in advanced React concepts, performance optimization, and security. At Student Diwan, Qatar, I boosted productivity by 25% through workflow optimization. At Acuity Educare Ltd, Mulund, I led 10 React projects and 5 MERN apps, mastering front-end technologies and rigorous testing. My dedication to code quality ensures seamless project execution and successful deployments.";

export const ClientsImage = [client1, client2, client5, client6];

export const whatIDoData = [
  {
    bgImage: " linear-gradient(to right, #ff512f, #f09819)",
    color: "black",
    logo: <BsCodeSlash />,
    title: "WEB-DEVELOPMENT",
    description:
      "Creating websites or web applications using technologies like HTML, CSS, JavaScript, and server-side scripting for online functionality.",
  },
  {
    bgImage: "linear-gradient(to right, #00b4db, #0083b0)",
    color: "black",
    logo: <FaReact />,
    title: "Front-End Dev",
    description:
      "Designing and building the user interface and user experience of websites and web applications using code.",
  },
];
