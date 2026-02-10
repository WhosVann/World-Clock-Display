import {DateTime} from "luxon"
import React, {useState, useEffect} from 'react'

function DigitalClock({zone, label}){
    const [time, setTime] = useState(DateTime.now().setZone(zone));
    
    useEffect(() => {
        const interval = setInterval(() => {
            setTime(DateTime.now().setZone(zone));
        },1000)
        return () => clearInterval(interval)},[zone])

    return(
        <div className="clock-container">
            <div className="clock">
                <h3>{label}: {time.toFormat("HH:mm:ss")}</h3>
            </div>
        </div>
    )
}

export default DigitalClock