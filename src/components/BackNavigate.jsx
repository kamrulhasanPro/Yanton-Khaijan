"use client";
import { useRouter } from "next/navigation";
import React from "react";

const BackNavigate = ({ children }) => {
  const router = useRouter();
  return <div onClick={() => router.back(-1)} className="cursor-pointer">{children}</div>;
};

export default BackNavigate;
