

export default function DrumPad(props) {
    return (
      <div>
        <div>DrumPad {props.drumKey}</div>
        <audio id={props.drumKey} src={props.drumFile}></audio>
      </div>
    );
  }