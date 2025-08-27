import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Image from "next/image";

function Page() {
  return (
    <div className="h-dvh flex items-center justify-center">
      <div className="bg-card w-[350px] h-[350px] px-9 rounded-xl flex items-center flex-col">
        <Image
          className="mt-3"
          src="https://upload.wikimedia.org/wikipedia/commons/3/38/Google_Admin_icon.svg"
          width={64}
          height={20}
          alt="Logo"
        />
        <h1 className="text-2xl font-semibold mt-5">Welecome Back</h1>

        <form>
          <Input className="mt-5" type="email" placeholder="Email address" />
          <Input className="mt-5" type="password" placeholder="Password" />

          <Button className="mt-8 w-full" variant="ghost">Login</Button>
        </form>
      </div>
    </div>
  );
}

export default Page;
