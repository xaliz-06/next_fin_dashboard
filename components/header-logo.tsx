import Image from "next/image";
import Link from "next/link";
import React from "react";

const HeaderLogo = () => {
  return (
    <Link href="/">
      <div className="lg:flex hidden flex-row gap-3 items-center justify-center">
        <Image src="/hero_squirrel.svg" alt="logo" height={60} width={60} />
        <p className="font-bold text-white text-4xl ml-2.4">Finsquirrel</p>
      </div>
    </Link>
  );
};

export default HeaderLogo;
