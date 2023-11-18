/* eslint-disable react/prop-types */


export default function DrumPad(props) {
    return (
      <button className="col-4" id={props.drumName} onClick={props.padClick}>
        <audio id={props.drumKey} src={props.drumSource}></audio>
        {props.drumKey}
      </button>
    );
  }