import React from "react";
import { Ellipsis } from "lucide-react";

const loading = () => {
  return (
    <div className=" w-screen h-screen flex justify-center items-center  ">
      <Ellipsis className="w-36 h-36 m-auto animate-ping text-primary" />
    </div>
  );
};

export default loading;
