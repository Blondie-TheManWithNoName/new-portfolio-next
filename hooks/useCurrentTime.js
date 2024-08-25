import { useState, useEffect } from "react";

export const useCurrentTime = () => {
  const [currentTime, setCurrentTime] = useState(() => getFormattedTime());

  useEffect(() => {
    const updateTime = () => {
      setCurrentTime(getFormattedTime());
    };
    const intervalId = setInterval(updateTime, 60000);
    updateTime();
    return () => clearInterval(intervalId);
  }, []);

  return currentTime;
};

const getFormattedTime = () => {
  const now = new Date();
  let hours = now.getHours();
  const minutes = String(now.getMinutes()).padStart(2, "0");
  const ampm = hours >= 12 ? "PM" : "AM";

  hours = hours % 12;
  hours = hours ? hours : 12;
  const formattedHours = String(hours).padStart(2, "0");

  return `${formattedHours}:${minutes} ${ampm} GMT+2`;
};
