import React from "react";

const Footer = () => {
  return (
    <footer className="relative  pt-8 pb-6 mt-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap items-center md:justify-between justify-center">
          <div className="w-full md:w-6/12 px-4 mx-auto text-center">
            <div className="text-sm text-blueGray-500 font-semibold py-1">
              Made by{" "}
              <a
                href="https://www.diegocisneros.dev"
                className="text-blueGray-500 hover:text-blueGray-800"
                target="_blank"
              >
                {" "}
                Diego Cisneros{" "}
              </a>
              .
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
