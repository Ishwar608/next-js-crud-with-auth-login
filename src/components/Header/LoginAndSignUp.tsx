"use client";
import React from "react";
import {
  NavigationMenuItem,
  NavigationMenuLink,
  navigationMenuTriggerStyle,
} from "../ui/navigation-menu";
import { useLogout } from "@/helpers/hooks/rest-user/user";
import { useAtom } from "jotai";
import { authorizationAtom } from "@/helpers/hooks/authorization-atom/authorization-atom";
import { Routes } from "@/config/routes";
import Link from "next/link";

export default function LoginAndSignUp() {
  const [isAuthorize] = useAtom(authorizationAtom);
  const { mutate } = useLogout();
  return (
    <>
      {isAuthorize ? (
        <NavigationMenuItem className="cursor-pointer">
          <button onClick={() => mutate()}>
            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
              {"Logout"}
            </NavigationMenuLink>
          </button>
        </NavigationMenuItem>
      ) : (
        <>
          <NavigationMenuItem>
            <Link href={Routes.signup} legacyBehavior passHref>
              <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                {"Sign Up"}
              </NavigationMenuLink>
            </Link>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <Link href={Routes.login} legacyBehavior passHref>
              <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                {"Login"}
              </NavigationMenuLink>
            </Link>
          </NavigationMenuItem>
        </>
      )}
    </>
  );
}
