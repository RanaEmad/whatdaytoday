let week = [
  {
    day: "Sunday",
    img: "sunday.svg",
  },
  {
    day: "Monday",
    img: "monday.svg",
  },
  {
    day: "Tuesday",
    img: "tuesday.svg",
  },
  {
    day: "Wednesday",
    img: "wednesday.svg",
  },
  {
    day: "Thursday",
    img: "thursday.svg",
  },
  {
    day: "Friday",
    img: "friday.svg",
  },
  {
    day: "Saturday",
    img: "saturday.svg",
  },
];

const day = new Date().getDay();
const today = week[day];

const App = (
  <div className={"day " + today.day.toLowerCase()}>
    <div className="heading">{today.day}</div>
    <img src={today.img} alt={today.day} />
  </div>
);

ReactDOM.render(App, document.getElementById("app"));
