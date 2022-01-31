import React,{useState} from 'react';
import ExpenseDate from "./ExpenseDate";
import './ExpenseItem.css';

// This component is stateless or uncontrolled component
// if we remove the useState and button click event
const ExpenseItem = (props) => {
    const [title,setTitle] = useState(props.title);
    const clickEventHandler = (event) => {
        setTitle('Updated!');
    };


return <div className="expense-item" >
<ExpenseDate date={props.date}/>
<div className="expense-item__description">
    <h2>{title}</h2>
    <div className="expense-item__price">Rs.{props.price}</div>
    <div><button onClick={clickEventHandler}>Update Title</button></div></div>
</div>
}

export default ExpenseItem;