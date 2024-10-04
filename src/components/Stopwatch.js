import React from "react";
import { useState, useEffect } from "react";

const Stopwatch = () => {
  const [elapsedTime, setElaspsedTime] = useState(0);
  const [isRunning, setIsRunning] = useState(false);

  const startStopwatch = () => {
    setIsRunning(true);
  };

  const stopStopwatch = () => {
    setIsRunning(false);
  };
  const resetStopwatch = () => {
    setElaspsedTime(0);
    setIsRunning(false);
  };

  const formatTime = () => {
    const hour = (elapsedTime / (1000 * 60 * 60))
    const minute = (elapsedTime /(1000 * 60))
    const second = (elapsedTime / 1000)
  }
  useEffect(() => {
    if (isRunning === true) {
      setInterval(() => {
        setElaspsedTime((prevTime) => prevTime + 1000);
      }, 100);
    }
  }, [isRunning]);

  return (
    <section>
      <h2>STOPWATCH</h2>
      <div>{elapsedTime}</div>
      <button onClick={startStopwatch}>Start</button>
      <button onClick={stopStopwatch}>Stop</button>
      <button onClick={resetStopwatch}>Reset</button>
    </section>
  );
};
export default Stopwatch;
