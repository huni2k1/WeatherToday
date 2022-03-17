import React, { useEffect, useState } from 'react'
import "./DisplayBoard.css"
const DisplayBoard = (props) => {
    const months = ["Jan", "Feb", "Mar", "Apr", "May", "June", "July", "Aug", "Sept", "Oct", "Nov", "Dec"];
    const week = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
    const [date, setDate] = useState(new Date());
    const [time, setTime] = useState();
    const [weekDay, setWeekDay] = useState(week[date.getDay()]);
    const [temp, setTemp] = useState();
    const [day, setDay] = useState(date.getDate() + " " + months[date.getMonth()] + " " + date.getFullYear());
    useEffect(() => {
        let currTime=date.getHours() + ":"
            if(date.getMinutes()<10)
                currTime+="0"+date.getMinutes()
            else
                currTime+=date.getMinutes()
        setTime(currTime)
    })
    return (
        <div className='display-board-container'>
            <div className='creator'>Creator: Ninh Van</div>
            <div className='weather-infor-container'>
                <h1 className='temperature'>{Math.round(props.temp)}°</h1>
                <div className='info-wrapper'>
                    <div className='place'>{props.city}</div>
                    <div className='time'>{time}-{weekDay}, {day}</div>
                </div>
                <div className='cloud'>{props.weather}</div>
            </div>
        </div>
    )
}

export default DisplayBoard