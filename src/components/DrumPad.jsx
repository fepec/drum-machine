/* eslint-disable react/prop-types */


export default function DrumPad(props) {
    return (
      <div className="col-4" id={props.drumName}>
        <audio id={props.drumKey} src={props.drumFile}></audio>
        <p>{props.drumKey}</p>
        <p>{props.drumName}</p>
      </div>
    );
  }