import React, { useState, useEffect } from "react";
import "./style.css";

const Clock = () => {
    const [currentTime, setCurrentTime] = useState(new Date());

    useEffect(() => {
        const intervalId = setInterval(() => {
            setCurrentTime(new Date());
        }, 1000);

        return () => clearInterval(intervalId);
    }, []);

    const formatDate = (date) => {
        const days = [
            "niedziela", "poniedziałek", "wtorek", "środa",
            "czwartek", "piątek", "sobota"
        ];
        const day = days[date.getDay()];
        const dayOfMonth = date.getDate();
        const month = date.toLocaleString('pl-PL', { month: 'long' });
        const hours = date.getHours().toString().padStart(2, "0");
        const minutes = date.getMinutes().toString().padStart(2, "0");
        const seconds = date.getSeconds().toString().padStart(2, "0");

        return `Dzisiaj jest ${day}, ${dayOfMonth} ${month}, ${hours}:${minutes}:${seconds}`;
    };

    return (
        <div className="clock">
            {formatDate(currentTime)}
        </div>
    );
};

export default Clock;