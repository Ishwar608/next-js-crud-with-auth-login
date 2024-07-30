import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { HeaderLists } from "@/lib/constants/static-json";
import dynamic from "next/dynamic";
import Link from "next/link";
import { ModeToggle } from "../ModeToggle";
import { MyAvatar } from "../SideAvatar/MyAvatar";

const LoginAndSignUp = dynamic(() => import("./LoginAndSignUp"), {
  ssr: false,
});

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
        <LoginAndSignUp />
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
