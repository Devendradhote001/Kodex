import Link from "next/link";
import React from "react";

const ContactLayout = ({ children }) => {
  return (
    <div>
      <div className="flex gap-5">
        <Link href={"/contact/phone"}>Phone</Link>
        <Link href={"/contact/message"}>Message</Link>
      </div>
      {children}
    </div>
  );
};

export default ContactLayout;
