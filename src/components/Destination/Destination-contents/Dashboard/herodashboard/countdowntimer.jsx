import { useState, useEffect, useCallback } from "react";
import "./countdowntimer.css";

export function CountdownTimer({ startTime }) {
  const calculateTimeLeft = useCallback(() => {
    const now = new Date().getTime();
    const difference = startTime - now;

    if (difference <= 0) return "00:00:00";

    const hours = String(
      Math.floor((difference / (1000 * 60 * 60)) % 24)
    ).padStart(2, "0");
    const minutes = String(
      Math.floor((difference / (1000 * 60)) % 60)
    ).padStart(2, "0");
    const seconds = String(Math.floor((difference / 1000) % 60)).padStart(
      2,
      "0"
    );

    return `${hours}:${minutes}:${seconds}`;
  }, [startTime]);

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft);

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, [calculateTimeLeft]); // ✅ Now it's properly added as a dependency

  return (
    <div className="countdown-timer">
      <span className="countdown-label">Launch Time</span>
      <span className="countdown-time">{timeLeft}</span>
    </div>
  );
}
