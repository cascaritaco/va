import React, { useState } from "react";
import Nav from "./components/Nav";
import Banner from "./components/Banner";
import TabbedContent from "./components/TabbedContent";

const App = () => {
  const [toggleState, setToggleState] = useState(1);
  const toggleTab = (index) => {
    setToggleState(index);
  };

  return (
    <div>
      <Nav />
      <Banner toggleState={toggleState} toggleTab={toggleTab} />
      <TabbedContent toggleState={toggleState}/>
    </div>
  );
};

export default App;
