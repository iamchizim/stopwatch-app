import React from "react";
import { useState, useEffect } from "react";

const Stopwatch = () => {
  const [elapsedTime, setElapsedTime] = useState(0);
  const [isRunning, setIsRunning] = useState(false);

  const startStopwatch = () => {
    setIsRunning(true);
  };

  const stopStopwatch = () => {
    setIsRunning(false);
  };
  const resetStopwatch = () => {
    setElapsedTime(0);
    setIsRunning(false);
  };

  const formatTime = () => {
    const hour = Math.floor(elapsedTime / (1000 * 60 * 60));
    const minute = Math.floor(elapsedTime / (1000 * 60));
    const second = Math.floor(elapsedTime / 1000);
    return `${hour.toString().padStart(2, "0")}:${minute
      .toString()
      .padStart(2, "0")}:${second.toString().padStart(2, "0")}`;
  };
  useEffect(() => {
    let interval = 0;
    if (isRunning === true) {
      interval = setInterval(() => {
        setElapsedTime((prevTime) => prevTime + 100);
      }, 100);
    } else {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [isRunning]);

  return (
    <section>
      <h2>STOPWATCH</h2>
      <div>{formatTime()}</div>
      <button onClick={startStopwatch}>Start</button>
      <button onClick={stopStopwatch}>Stop</button>
      <button onClick={resetStopwatch}>Reset</button>
    </section>
  );
};
export default Stopwatch;
