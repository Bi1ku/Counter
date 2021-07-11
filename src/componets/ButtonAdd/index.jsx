import React from "react";

export default function AddButton({ AddCounter }) {
  return (
    <button onClick={AddCounter} className="btn-green">
      Add
    </button>
  );
}
