import { useState } from "react";
import style from "./App.module.css";
function App() {
  let time = new Date().toLocaleTimeString();
  const [currentTime, setCurrentTime] = useState(time);

  const updateTime = () => {
    time = new Date().toLocaleTimeString();
    setCurrentTime(time);
  };
  setInterval(updateTime, 1000);
  return (
    <div className={style.app}>
      <h1>{currentTime}</h1>
    </div>
  );
}

export default App;
