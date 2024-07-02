import React from "react";
import Link from "next/link";
const Navbar = () => {
  return (
    <header>
      <Link href={"/"} className="">
        <div className="navbar-start">
          <h1 className="font-anton text-2xl">ByAkinyaz</h1>
        </div>
      </Link>
      <Link href={"columns"}>
        <div className="navbar-end">
          <h1>Columns</h1>
        </div>
      </Link>
    </header>
  );
};

export default Navbar;
