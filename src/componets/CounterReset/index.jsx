import React from "react";

export default function ResetCounter({ ResetCounter }) {
  return (
    <button onClick={ResetCounter} className="btn-gray">
      Reset Counter
    </button>
  );
}
