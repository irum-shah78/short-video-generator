import { SignIn } from "@clerk/nextjs";
import Image from "next/image";

export default function Page() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 h-screen">
      <div className="relative w-full h-full">
        <Image src={'/login-image.jpg'} alt="login" fill  className="object-cover" />
      </div>
      <div className="flex justify-center items-center">
        <SignIn />
      </div>
    </div>
  );
}
