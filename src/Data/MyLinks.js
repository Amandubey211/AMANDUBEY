import { BsGithub, BsInstagram, BsLinkedin } from "react-icons/bs";
import { SiReplit } from "react-icons/si";

const MyLinks = [
  {
    url: "https://www.linkedin.com/in/profile-amandubey/",
    logo: (
      <BsLinkedin role="button" className="fs-2 rounded-2  hoverlink p-2 " />
    ),
    id: "1",
    role: "Linkedin",
  },
  {
    url: "https://www.instagram.com/aman_dubey_444/",
    logo: (
      <BsInstagram role="button" className="fs-2 rounded-2 hoverlink p-2 " />
    ),
    id: "2",
    role: "Instagram",
  },
  {
    url: "https://github.com/Amandubey211",
    logo: <BsGithub role="button" className="fs-2 rounded-2 hoverlink p-2 " />,
    id: "3",
    role: "github",
  },
  {
    url: "https://replit.com/@TYIT211-DUBEYAM",
    logo: <SiReplit role="button" className="fs-2 rounded-2 hoverlink p-2 " />,
    id: "4",
    role: "replit",
  },
];

export default MyLinks;
