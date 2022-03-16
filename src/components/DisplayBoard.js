import React, { useState } from 'react'
import "./DisplayBoard.css"
const DisplayBoard = () => {
    const months = ["Jan", "Feb", "Mar", "Apr", "May", "June", "July", "Aug", "Sept", "Oct", "Nov", "Dec"];
    const week = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
    const [date, setDate] = useState(new Date());
    const [time, setTime] = useState(date.getHours() + ":" + date.getMinutes());
    const [weekDay, setWeekDay] = useState(week[date.getDay()]);
    const [day, setDay] = useState(date.getDate()+" "+months[date.getMonth()]);
    console.log(week[date.getDay])
    return (
        <div className='display-board-container'>
            <div className='creator'>Creator: Ninh Van</div>
            <div className='weather-infor-container'>
                <h1 className='temperature'>16°</h1>
                <div className='info-wrapper'>
                    <div className='place'>London</div>
                    <div className='time'>{time}-{weekDay}, {day}</div>
                </div>
                <div className='cloud'>Cloudy</div>
            </div>
        </div>
    )
}

export default DisplayBoard