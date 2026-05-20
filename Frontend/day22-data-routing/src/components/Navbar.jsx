import React from "react";

const Navbar = () => {
  return (
    <div className="flex justify-between items-center">
      <h1>Logo</h1>
      <div className="flex gap-10 text-xl">
        <p>Home</p>
        <p>About</p>
        <p>Contact</p>
      </div>
      <div>login</div>
    </div>
  );
};

export default Navbar;
