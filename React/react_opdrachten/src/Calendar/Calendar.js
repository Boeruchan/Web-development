import React from 'react';

const Calendar = () => {
const style = {
    width: '100px',
    padding:  '16px',
    margin: '16px',
    border: '1px solid black',
    textAlign: 'center'
}

    return (
    <Calendar
    style={style}
    onChange={onChange}
    value={value}
    />
)
};

export default 'Calendar';