import { useState, useEffect } from "react";
import { format } from "date-fns";
import { toZonedTime } from "date-fns-tz";

export const useCurrentTime = () => {
  const [currentTime, setCurrentTime] = useState(() => getFormattedTime());

  useEffect(() => {
    const updateTime = () => {
      setCurrentTime(getFormattedTime());
    };
    const intervalId = setInterval(updateTime, 60000);
    updateTime(); // Initial update
    return () => clearInterval(intervalId);
  }, []);

  return currentTime;
};

const getFormattedTime = () => {
  const timeZone = "Europe/Berlin";
  const now = new Date();

  const zonedDate = toZonedTime(now, timeZone);

  const formattedTime = format(zonedDate, "hh:mm a 'GMT+2'");

  return formattedTime;
};
