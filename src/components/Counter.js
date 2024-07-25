import React from "react";
import CountUp from "react-countup";

export default function Counter({ number, title }) {
  return (
    <div className="counter">
      <CountUp duration={10} end={number} />
      <span>{title}</span>
    </div>
  );
}
