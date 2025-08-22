import Image from "next/image";
import Link from "next/link";
import React from "react";

function Logo() {
  return (
    <Link className="mt-0.5 flex items-center" href="/">
      <Image
        src="https://upload.wikimedia.org/wikipedia/commons/3/38/Google_Admin_icon.svg"
        width={64}
        height={64}
        alt="Logo"
      />
      <h1 className="text-lg font-bold italic">Store Dashboard</h1>
    </Link>
  );
}

export default Logo;
