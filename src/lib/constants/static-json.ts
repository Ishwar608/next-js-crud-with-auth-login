import { Routes } from "@/config/routes";
import { HeaderList } from "@/types/contents";

export const HeaderLists: HeaderList[] = [
  {
    id: 1,
    title: "Home",
    href: Routes.home,
  },
  {
    id: 2,
    title: "Products",
    href: Routes.dashboard,
  },
  {
    id: 3,
    title: "Weather",
    href: Routes.weather,
  },
];
