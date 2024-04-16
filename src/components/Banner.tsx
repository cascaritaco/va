import React from "react";

const Banner = () => {
  return (
    <header className="h-44 bg-url bg-no-repeat bg-cover bg-center bg-[url('src/assets/background/scattered-forcefields.svg')]">
      <div className="flex flex-col h-full justify-between mx-auto max-w-7xl px-4">
        <div></div>
        <h1 className="text-primaryB font-bold text-h2 lg:text-h1"> Tablas </h1>
        <div className="max-w-fit">
          <div role="tablist" className="tabs tabs-lifted">
            <a
              role="tab"
              className="tab [--tab-border-color:transparent] tab-active"
            >
              Tab 1
            </a>
            <a
              role="tab"
              className="tab [--tab-border-color:transparent] [--tab-bg:gray]"
            >
              Tab 2
            </a>
            <a
              role="tab"
              className="tab [--tab-border-color:transparent] [--tab-bg:gray]"
            >
              Tab 3
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Banner;

