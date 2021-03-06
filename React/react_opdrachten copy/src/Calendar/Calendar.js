import React, { useState } from 'react';
import Calendar from 'react-calendar';


const datumLijst =
[
    {
        "date": "1-1-2020",
        "name": "NewYearsEve"
    },
    {
        "date": "4-10-2020",
        "name": "GoodFriday"
    },
    {
        "date": "4-12-2020",
        "name": "Easter"
    },
    {
        "date": "4-13-2020",
        "name": "Easter"
    },
    {
        "date": "4-27-2020",
        "name": "KingsDay"
    },
    {
        "date": "5-5-2020",
        "name": "LiberationDay"
    },
    {
        "date": "5-21-2020",
        "name": "Ascension"
    },
    {
        "date": "5-31-2020",
        "name": "Penetecost"
    },
    {
        "date": "6-1-2020",
        "name": "Ascension"
    },
    {
        "date": "12-25-2020",
        "name": "ChristmasEve"
    },
    {
        "date": "12-26-2020",
        "name": "Christmas"
    },
    {
        "date": "12-31-2020",
        "name": "NewYearsEve"
    },
    {
        "adress": "blabla ik word gestoord"
    }
]


export default function Results() {
    const [calDate, setCalDate] = usestate(new Date())

    function onChange (calDate) {
        setCalDate(calDate)
        const filteredResults = userResults.filter(result => {
            const newResultFormat = new Date(result.created_at).toLocaleString().split(",")[0]
            const newCalDateFormat = calDate.toLocaleString().split(",")[0]
            return newResultFormat === newCalDateFormat
        })
    }
    return (
        <div className="result-calendar">
            <Calendar onChange={onChange} value={calData}/>
            </div>
    )
}

const Calendar = () => {
    const [value, onChange] = useState(new Date());

    return (
    <Calendar
    onChange={onChange}
    value={value}
    tileContent={tileContent}
    />
    )
    };

export default 'Calendar';