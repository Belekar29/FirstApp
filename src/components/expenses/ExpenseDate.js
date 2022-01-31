import React from 'react';
import './ExpenseDate.css';

function ExpenseDate(props){
    const inputDate = new Date(props.date);
    const year = inputDate.getFullYear();
    const month = inputDate.toLocaleString('default', { month: 'long' });;
    const day = inputDate.getDate();
return (<div className="expense-date">
    <div className="expense-date__year">{year}</div>
    <div className="expense-date__month">{month}</div>
    <div className="expense-date__day">{day}</div>
</div>);
}

export default ExpenseDate;