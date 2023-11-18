/* eslint-disable react/prop-types */


export default function Display(props) {
    return (
      <div className="col-4">
        <div id="display">{props.text}</div>
      </div>
    );
  }