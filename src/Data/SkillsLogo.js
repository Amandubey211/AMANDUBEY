import ReactLogo from "../Images/Skills/ReactLogo.svg";
import ReduxLogo from "../Images/Skills/ReduxLogo.svg";
import TailwindCssLogo from "../Images/Skills/TailwindCssLogo.svg";
import ReactRouterLogo from "../Images/Skills/ReactRouterLogo.svg";
import GithubLogo from "../Images/Skills/Github.svg";
import JavascriptLogo from "../Images/Skills/JavascriptLogo.svg";
import Ant from "../Images/Skills/Ant.svg";
import MongoDBLogo from "../Images/Skills/MongoDBLogo.svg";
import NodeJsLogo from "../Images/Skills/NodeJsLogo.svg";
import SEOLogo from "../Images/Skills/SEOLogo.svg";
import JestLogo from "../Images/Skills/JestLogo.svg";
import Express from "../Images/Skills/Express.svg";

export const SkillsLogo = [
  {
    id: 1,
    label: "React",
    logo: ReactLogo,
  },
  {
    id: 2,
    label: "Redux",
    logo: ReduxLogo,
  },
  {
    id: 3,
    label: "Tailwind-Css",
    logo: TailwindCssLogo,
  },
  {
    id: 4,
    label: "Github",
    logo: GithubLogo,
  },
  {
    id: 5,
    label: "React-Router-Dom",
    logo: ReactRouterLogo,
  },
  {
    id: 6,
    label: "Javascript",
    logo: JavascriptLogo,
  },
  {
    id: 7,
    label: "Ant Design",
    logo: Ant,
  },
  {
    id: 10,
    label: "MongoDB",
    logo: MongoDBLogo,
  },
  {
    id: 8,
    label: "NodeJs",
    logo: NodeJsLogo,
  },
  {
    id: 12,
    label: "SEO",
    logo: SEOLogo,
  },
  {
    id: 11,
    label: "Jest",
    logo: JestLogo,
  },
  {
    id: 9,
    label: "Express",
    logo: Express,
  },
].sort((a, b) => a.id - b.id);
