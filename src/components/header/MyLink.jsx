"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const MyLink = ({ children, href }) => {
  const path = usePathname();
  const isActive = href === path;
  return (
    <Link href={href} className={`${isActive && "bg-yellow-500"} h-full inline-block px-2`}>
      {children}
    </Link>
  );
};

export default MyLink;
