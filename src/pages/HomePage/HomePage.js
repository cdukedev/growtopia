import "./HomePage.scss";
import CircleButton from "../../components/CircleButton/CircleButton";
import React, { useState, useEffect } from "react";

import CPButton from "../../components/CPButton/CPButton";
import DraggableDiv from "../../components/DraggableDiv/DraggableDiv";
import { data } from "../../data/user";
function HomePage() {
  return (
    <div className="App">
      <CPButton />
      <DraggableDiv />
      <CircleButton />
      <img 
        className="background"
        src="https://i.imgur.com/ftThhhs.png" alt="" />
    </div>
  );
}

export default HomePage;
