"use client";

import Link from "next/link";
import React from "react";
import ThemeToggle from "./ThemeToggle";

const Navbar = () => {
  return (
    <div className="flex justify-between items-center py-6 px-10 border-b border-0">
      <h1>Logo</h1>
      <div className="flex gap-7 font-semibold">
        <Link href={"/"}>Home</Link>
        <Link href={"/about"}>About</Link>
        <Link href={"/console"}>Console</Link>
      </div>
      <div>
        <ThemeToggle />
      </div>
    </div>
  );
};

export default Navbar;
