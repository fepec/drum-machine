import DrumPad from "./DrumPad.jsx";
import Display from "./Display.jsx";
import { useEffect, useState } from "react";

import heater1 from "../assets/Heater-1.mp3";
import heater2 from "../assets/Heater-2.mp3";
import heater3 from "../assets/Heater-3.mp3";
import heater4 from "../assets/Heater-4_1.mp3";
import clap from "../assets/Heater-6.mp3";
import openHh from "../assets/Dsc_Oh.mp3";
import kickNHat from "../assets/Kick_n_Hat.mp3";
import Kick from "../assets/RP4_KICK_1.mp3";
import ClosedHH from "../assets/Cev_H2.mp3";

// Declare array of possible keypresses
const pads = [
  ["Q", "Heater 1", heater1],
  ["W", "Heater 2", heater2],
  ["E", "Heater 3", heater3],
  ["A", "Heater 4", heater4],
  ["S", "Clap", clap],
  ["D", "Open-HH", openHh],
  ["Z", "Kick-n'-Hat", kickNHat],
  ["X", "Kick", Kick],
  ["C", "Closed-HH", ClosedHH],
];

export default function DrumMachine() {
  useEffect(() => {
    document.addEventListener("keydown", handleKeyDown);
  });

  const [display, setDisplay] = useState("drum machine");

  function handleKeyDown(e) {
    const pressedKey = e.key.toUpperCase();
    const indexOfKey = pads.map((el) => el[0]).indexOf(pressedKey)
    
    if (indexOfKey != -1) {
      document.getElementById(pressedKey).play();
      setDisplay(pads[indexOfKey][1])
    }

  }

  function handleClick(padId, padName) {
    document.getElementById(padId).play();
    setDisplay(padName);
  }

  let drumPads = [];
  for (let i = 0; i < 3; i++) {
    let row = [];
    for (let j = 0; j < 3; j++) {
      const padIndex = i * 3 + j;
      row.push(
        <DrumPad
          key={padIndex}
          drumKey={pads[padIndex][0]}
          drumName={pads[padIndex][1]}
          drumSource={pads[padIndex][2]}
          padClick={() => handleClick(pads[padIndex][0], pads[padIndex][1])}
        />
      );
    }
    drumPads.push(
      <div key={"row" + i} className="drumpad-row d-flex">
        {row}
      </div>
    );
  }

  return (
    <div id="drum-machine" className="container text-center">
      <div className="row">
        <h2>fepec&apos;s drum machine </h2>
      </div>
      <div className="row d-flex align-items-center justify-content-center">
        <div className="drumpad-container col-4 d-flex flex-column">
          {drumPads}
        </div>
        <Display text={display} />
      </div>
    </div>
  );
}
