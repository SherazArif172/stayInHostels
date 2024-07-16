import React from "react";

const Benifits = () => {
  return (
    <div className="lg:pt-16 pt-8 pb-16 md:px-16 px-4">
      <div className="flex md:flex-row flex-col justify-between lg:gap-28 gap-5">
        <p className="md:text-4xl text-3xl md:max-w-96 font-semibold">
          The main benefits to choose Hosteller
        </p>
        <p className="md:text-right text-lg md:w-5/12">
          Aliquam eleifend mi in nulla. Viverra nibh cras pulvinar mattis nunc
        </p>
      </div>
      <div className="flex shadow-custom mt-7">
        <div className="px-16 my-16">
          <p className="text-5xl font-semibold text-primary">240+</p>
          <p className="mt-3">
            Consequat interdum varius sit amet mattis vulputate enim nulla
          </p>
        </div>
        <div className="px-16 my-16 border-l-2 border-primary-cstm">
          <p className="text-5xl font-semibold text-primary">60+</p>
          <p className="mt-3">
            Consequat interdum varius sit amet mattis vulputate enim nulla
          </p>
        </div>
        <div className="px-16 my-16 border-l-2 border-primary-cstm">
          <p className="text-5xl font-semibold text-primary">98%</p>
          <p className="mt-3">
            Consequat interdum varius sit amet mattis vulputate enim nulla
          </p>
        </div>
      </div>
    </div>
  );
};

export default Benifits;
