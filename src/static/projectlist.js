import { GithubLogo, Link } from "@phosphor-icons/react";

export const projectlist = [
  {
    id: 1,
    image: "eclipsered-project.png",
    project_title: "EclipseRed",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veritatis officia, veniam, accusantium sit ab at commodi blanditiis porro ex consequuntur iure fuga ducimus! Iure expedita suscipit eligendi, sapiente reiciendis officia.",
    tools: ["HTML", "CSS", "Bootstrap", "JavaScript", "JSON"],
    links: [
      {
        icon: <GithubLogo size={24} />,
        link: "https://github.com/Jessepelumi/eclipseRed",
      },
      {
        icon: <Link size={24} />,
        link: "https://marketplace.visualstudio.com/items?itemName=AdesinaJesse.eclipseRed",
      },
    ],
  },
  {
    id: 2,
    image: "belleville-project.png",
    project_title: "Belleville Dentals",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veritatis officia, veniam, accusantium sit ab at commodi blanditiis porro ex consequuntur iure fuga ducimus! Iure expedita suscipit eligendi, sapiente reiciendis officia.",
    tools: ["HTML", "CSS", "Bootstrap", "JavaScript", "JSON"],
    links: [
      {
        icon: <GithubLogo size={24} />,
        link: "https://github.com/Jessepelumi/BellevilleDental",
      },
      {
        icon: <Link size={24} />,
        link: "jessepelumi.github.io/BellevilleDental/belleville.html#",
      },
    ],
  },
  {
    id: 3,
    image: "styvic-project.png",
    project_title: "Styvic",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veritatis officia, veniam, accusantium sit ab at commodi blanditiis porro ex consequuntur iure fuga ducimus! Iure expedita suscipit eligendi, sapiente reiciendis officia.",
    tools: ["VSCode", "JavaScript"],
    links: [
      {
        icon: <GithubLogo size={24} />,
        link: "https://github.com/Jessepelumi/styvicImages",
      },
      {
        icon: <Link size={24} />,
        link: "jessepelumi.github.io/styvicImages/public/styvic.html",
      },
    ],
  },
  {
    id: 4,
    image: "eclipsered-project.png",
    project_title: "EclipseRed",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veritatis officia, veniam, accusantium sit ab at commodi blanditiis porro ex consequuntur iure fuga ducimus! Iure expedita suscipit eligendi, sapiente reiciendis officia.",
    tools: ["VSCode", "JavaScript"],
    links: [
      { icon: <GithubLogo size={24} />, link: "https://google.com" },
      { icon: <Link size={24} />, link: "https://google.com" },
    ],
  },
];
