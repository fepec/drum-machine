import DrumPad from './DrumPad.jsx'

export default function DrumMachine() {
  const pads = [
    [
      "Q",
      "Heater 1",
      "https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3",
    ],
    [
      "W",
      "Heater 2",
      "https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3",
    ],
    [
      "E",
      "Heater 3",
      "https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3",
    ],
    [
      "A",
      "Heater 4",
      "https://s3.amazonaws.com/freecodecamp/drums/Heater-4.mp3",
    ],
    ["S", "Clap", "https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3"],
    ["D", "Open-HH", "https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3"],
    [
      "Z",
      "Kick-n'-Hat",
      "https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3",
    ],
    ["X", "Kick", "https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3"],
    [
      "C",
      "Closed-HH",
      "https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3",
    ],
  ];

  let drumPads = pads.reduce( (acc, e) => {
        acc.push(<DrumPad drumKey={e[0]} drumSource={e[1]} drumName={e[2]} />)
        return acc
  }, [])
  
  return (
    <div>
      <p>This is a DrumMachine</p>
      <div className="drumpad-container">{drumPads}</div>
    </div>
  );
}


