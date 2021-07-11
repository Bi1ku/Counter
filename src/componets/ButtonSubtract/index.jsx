import React from "react";

export default function SubtractButton({ SubtractCounter }) {
  return (
    <button onClick={SubtractCounter} className="btn-red">
      Subtract
    </button>
  );
}
