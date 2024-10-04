import React from "react";
import { useState, useEffect } from "react";

const Stopwatch = () => {
  const [elapsedTime, setElaspsedTime] = useState("");
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
  useEffect(() => {
    if(isRunning === true){
        setElaspsedTime((prevTime) => prevTime + 1000);
    }
  
  }, [isRunning]);

  return (
    <section> 
        <h2>STOPWATCH</h2>
        <div>{elapsedTime}</div>
        <button onClick={startStopwatch}>Start</button>
        <button ></button>
    </section>
  )
};
export default Stopwatch;
