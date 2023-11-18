import DrumPad from "./DrumPad.jsx";
import Display from "./Display.jsx";

const pads = [
  ["Q", "Heater 1", "https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3"],
  ["W", "Heater 2", "https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3"],
  ["E", "Heater 3", "https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3"],
  ["A", "Heater 4", "https://s3.amazonaws.com/freecodecamp/drums/Heater-4.mp3"],
  ["S", "Clap", "https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3"],
  ["D", "Open-HH", "https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3"],
  [
    "Z",
    "Kick-n'-Hat",
    "https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3",
  ],
  ["X", "Kick", "https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3"],
  ["C", "Closed-HH", "https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3"],
];

export default function DrumMachine() {
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
        <Display text="Hi Tobi" />
      </div>
    </div>
  );
}
