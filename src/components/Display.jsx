/* eslint-disable react/prop-types */


export default function Display(props) {
    return (
      <div className="col-4">
        <div id="display" className="border border-2 bg-warning">{props.text}</div>
      </div>
    );
  }