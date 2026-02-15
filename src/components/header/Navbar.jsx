import Link from "next/link";
import React from "react";
import MyLink from "./MyLink";
import Image from "next/image";

const Navbar = () => {
  return (
    <nav className="flex items-center justify-between px-[4%]">
      <Link href={"/"}>
        <Image
          src="/Logo.png"
          alt="Logo"
          className="w-16"
          width={64}
          height={64}
        />
      </Link>

      <div className="space-x-4">
        <MyLink href={"/"}>Home</MyLink>
        <MyLink href={"/foods"}>Foods</MyLink>
        <MyLink href={"/reviews"}>Reviews</MyLink>
        <MyLink href={"/feedback"}>Feedbacks</MyLink>
      </div>
    </nav>
  );
};

export default Navbar;
