import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import Link from "next/link";
import AvatarPlaceholder from "@/assets/icons/avatar-placeholder.png";
import { ModeToggle } from "../ModeToggle";
import { MyAvatar } from "../SideAvatar/MyAvatar";
import { HeaderLists } from "@/lib/constants/static-json";
import { Routes } from "@/config/routes";

export default function Header() {
  return (
    <NavigationMenu className="mt-2 w-full rounded border border-black p-3 dark:border-white">
      <NavigationMenuList className="justify-end space-x-3">
        {HeaderLists.map((header) => (
          <NavigationMenuItem key={header.id}>
            <Link href={header.href} legacyBehavior passHref>
              <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                {header.title}
              </NavigationMenuLink>
            </Link>
          </NavigationMenuItem>
        ))}
        <NavigationMenuItem>
          <Link href={Routes.login} legacyBehavior passHref>
            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
              {"Login"}
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <MyAvatar logoName={"IS"} />
        </NavigationMenuItem>
        <NavigationMenuItem>
          <ModeToggle />
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
}
