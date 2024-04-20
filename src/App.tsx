import React, { useState } from "react";
import Nav from "./components/Nav";
import Banner from "./components/Banner";
import TabbedContent from "./components/Tables/TabbedContent";
import ScoreBoard from "./components/ScoreBoard/ScoreBoard";
import Schedule from "./components/Schedule/Schedule";
import News from "./components/News/News";

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
      <TabbedContent toggleState={toggleState}/>
      <Schedule />
      <News />
    </div>
  );
};

export default App;
