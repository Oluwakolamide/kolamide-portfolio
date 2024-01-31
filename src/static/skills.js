import {
  Globe,
  Browser,
  AppleLogo,
  AndroidLogo,
  FigmaLogo,
  AppWindow,
} from "@phosphor-icons/react";

export const skills = [
  {
    id: 1,
    name: "Web Development",
    icon: [<Globe size={24} />, <Browser size={24} />],
  },
  {
    id: 2,
    name: "Mobile App Development",
    icon: [<AppleLogo size={24} />, <AndroidLogo size={24} />],
  },
  {
    id: 3,
    name: "UI/UX Design",
    icon: [<FigmaLogo size={24} />, <AppWindow size={24} />],
  },
];
