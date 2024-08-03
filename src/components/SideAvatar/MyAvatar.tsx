import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import Image from "next/image";
type Avatar = {
  avatarPlaceholder?: any;
  logoName?: string;
};
export function MyAvatar({ avatarPlaceholder, logoName }: Avatar) {
  return (
    <Avatar>
      {avatarPlaceholder ? (
        <Image
          src={avatarPlaceholder}
          alt="@shadcn"
          placeholder="blur"
          fill={true}
          sizes={"(max-width: 768px) 100vw, 33vw"}
        />
      ) : (
        <AvatarFallback>{logoName}</AvatarFallback>
      )}
    </Avatar>
  );
}
