import React from "react";
import bannerImage from "./../assets/background/scattered-forcefields.svg";

const styles = {
  backgroundImage: "url(" + bannerImage + ")",
};

const Banner = ({ toggleState, toggleTab }) => {
  return (
    <header
      className="h-44 bg-url bg-no-repeat bg-cover bg-center"
      style={styles}
    >
      <div className="flex flex-col h-full justify-between mx-auto max-w-7xl px-4">
        <div></div>
        <h1 className="text-primaryB font-bold text-h2 lg:text-h1">
          {" "}
          Veteranos Soccer League{" "}
        </h1>
        <div className="max-w-fit">
          <div role="tablist" className="tabs tabs-lifted">
            <a
              role="tab"
              className={
                toggleState === 1
                  ? "tab [--tab-border-color:transparent] tab-active"
                  : "tab [--tab-border-color:transparent] [--tab-bg:gray]"
              }
              onClick={() => toggleTab(1)}
            >
              {" "}
              Veteranos 45+{" "}
            </a>
            <a
              role="tab"
              className={
                toggleState === 2
                  ? "tab [--tab-border-color:transparent] tab-active"
                  : "tab [--tab-border-color:transparent] [--tab-bg:gray]"
              }
              onClick={() => toggleTab(2)}
            >
              {" "}
              Veteranos 35+{" "}
            </a>
            {/* <a role="tab" className={toggleState === 3 ? "tab [--tab-border-color:transparent] tab-active" : "tab [--tab-border-color:transparent] [--tab-bg:gray]"} onClick={() => toggleTab(3)}> Division 3 </a> */}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Banner;
