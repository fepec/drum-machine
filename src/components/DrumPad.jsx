/* eslint-disable react/prop-types */


export default function DrumPad(props) {
    return (
      <button className="col-4 drum-pad" id={props.drumName} onClick={props.padClick}>
        {props.drumKey}
        <audio className="clip" id={props.drumKey} src={props.drumSource}></audio>
      </button>
    );
  }