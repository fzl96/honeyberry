import { Icons } from "../components/icons";

export type SiteConfig = {
  name: string;
  description: string;
  url: string;
  ogImage: string;
  links: {
    name: string;
    url: string;
    icon: keyof typeof Icons;
  }[];
};
