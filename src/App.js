import React from "react";

import sunday from "./sunday.svg";
import monday from "./monday.svg";
import tuesday from "./tuesday.svg";
import wednesday from "./wednesday.svg";
import thursday from "./thursday.svg";
import friday from "./friday.svg";
import saturday from "./saturday.svg";

import "./App.css";
let week = [
  {
    day: "Sunday",
    img: sunday,
  },
  {
    day: "Monday",
    img: monday,
  },
  {
    day: "Tuesday",
    img: tuesday,
  },
  {
    day: "Wednesday",
    img: wednesday,
  },
  {
    day: "Thursday",
    img: thursday,
  },
  {
    day: "Friday",
    img: friday,
  },
  {
    day: "Saturday",
    img: saturday,
  },
];

const day = new Date().getDay();
const today = week[day];

function App() {
  return (
    <div className={"day " + today.day.toLowerCase()}>
      <div className="heading">{today.day}</div>
      <img src={today.img} alt={today.day} />
    </div>
  );
}

export default App;
