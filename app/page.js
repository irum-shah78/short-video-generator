import { UserButton } from "@clerk/nextjs";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <h2 className="bg-amber-800 text-7xl">Short Video Generator</h2>
      <UserButton />
    </div>
  );
}
