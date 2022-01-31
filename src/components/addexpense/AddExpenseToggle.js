import { useState } from "react";
import ExpenseForm from "./ExpenseForm";

const AddExpenseToggle = (props) =>{
    const [toggleAddExp,setToggleAddExp] = useState(false);
const onClickEvent = (event) =>{
    setToggleAddExp(!toggleAddExp);
};
console.log('toggle Val ' + toggleAddExp);
    if(!toggleAddExp){
        return <div>
        <button type='button' onClick={onClickEvent}>Add Expenses</button>
    </div>;
    }else{
        return <ExpenseForm onAddExpense = {props.addExpenseHandler} toggleEvent={onClickEvent}/>;
    }
    
}

export default AddExpenseToggle;