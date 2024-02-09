import { useState, useEffect } from "react";

export function Header() {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const intervalId = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  Date.prototype.toShortFormat = function () {

    const monthNames = ["January", "February", "March", "April",
      "May", "June", "July", "August",
      "September", "October", "November", "December"];
    const dayNames = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

    const dayName = dayNames[this.getDay()];
    const day = this.getDate();
    const monthName = monthNames[this.getMonth()];
    const year = this.getFullYear();

    return `${dayName}, ${day} ${monthName} ${year}`;
  }

  return (
    <header>
      <h1>To-Do List</h1>
      <p>{new Date().toShortFormat()}<br />{time.toLocaleTimeString()}</p>
    </header>
  )
}