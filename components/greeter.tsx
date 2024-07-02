"use client";

import { useUser } from "@clerk/nextjs";
import React from "react";

const Greeter = () => {
  const { user, isLoaded } = useUser();

  return (
    <div className="space-y-2 mb-4">
      <h2 className="text-2xl lg:text-4xl text-white font-semibold">
        Welcome Back{isLoaded ? `, ${user?.firstName} 👋` : ` `}
      </h2>
      <p className="text-xl lg:2xl text-slate-500">
        This is your Financial Report!
      </p>
    </div>
  );
};

export default Greeter;
