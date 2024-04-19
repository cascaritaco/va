import React, { useState } from "react";
import Nav from "./components/Nav";
import Banner from "./components/Banner";
import TabbedContent from "./components/TabbedContent";
import ScoreBoard from "./components/ScoreBoard/ScoreBoard";

const App = () => {
  const [toggleState, setToggleState] = useState(1);
  const toggleTab = (index) => {
    setToggleState(index);
  };

  return (
    <div>
      <Nav />
      <Banner toggleState={toggleState} toggleTab={toggleTab} />
      <ScoreBoard />
      <TabbedContent toggleState={toggleState} toggleTab={toggleTab} />
    </div>
  );
};

export default App;
