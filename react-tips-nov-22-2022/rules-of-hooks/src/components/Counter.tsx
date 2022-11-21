import React from "../../react";

interface CounterProps {
  name: string;
  count: number;
  clickHandler: () => void;
}

export default function Counter({ clickHandler, name, count }: CounterProps) {
  return (
    <div>
      <p>{name}:</p>
      <p>{count}</p>
      <button type="button" onClick={clickHandler}>
        +1
      </button>
    </div>
  );
}
