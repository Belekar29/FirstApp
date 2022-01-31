import { useState } from 'react';
import './ExpenseForm.css';
const ExpenseForm = (props) => {
    // State hook -> useState
    // Start of multiple state handling in one component
    const [updTitle,setUpdTitle] = useState(''); // de-structuring
    const titleHandler = (event) =>{
        setUpdTitle(event.target.value);
        // doesn't set the value immediately
        // console.log(event.target.value); prints old value
    }
    // State hook -> useState
    const [updPrice,setUpdPrice] = useState(''); // de-structuring
    const priceHandler = (event) =>{
        setUpdPrice(event.target.value);
        // console.log(event.target.value);
    }
    // State hook -> useState
    const [updDate,setUpdDate] = useState(''); // de-structuring
    const dateHandler = (event) =>{
        setUpdDate(event.target.value);
        // console.log(event.target.value);
    }
    // Above code has multiple states
    // End of multiple state handling in one component
    // Start use of single state for multiple inputs
    const [userInput, setUserInput] = useState({updTitle:'', updDate:'', updPrice:''});
    // const titleHandler = (event) =>{
    //     // setUserInput({ ...userInput, // using spread operater to copy data from last updated userInput
    //     //    updTitle:event.target.value} // overrite title value
    //     //    );
    //     // Following set function is used instead of above because of scheduling of the state
    //     // above set function may not always have latest state of user input
    //     setUserInput((prevState) => { // passing function inside set method
    //         // this anonymus function has default object of previously updated state object
    //         return {
    //             ...userInput, // using spread operater to copy data from last updated userInput
    //             updTitle:event.target.value // overrite title value
    //         }
    //         });
    //     // doesn't set the value immediately
    //     // React schedules state updates and re run the component
    //     // console.log(event.target.value); prints old value
    // }
    // End use of single state for multiple inputs
    const submitHandler = (event)=>{
        event.preventDefault();
        const expenseData = {
            title:updTitle,
            price:+updPrice,
            date: new Date(updDate)
        };
        // console.log(expenseData);
        // Calling parent component function to pass data to parent component
        props.onAddExpense(expenseData);
        // resetting form values after submission
        setUpdTitle('');
        setUpdPrice('');
        setUpdDate('');
        props.toggleEvent(); // calling toggle event after form submission.
    };
    return <form onSubmit={submitHandler}>
            <div className='new-expense__controls'>
            <div className='new-expense__control'>
                <label>Title</label>
                <input type='text' value={updTitle} onChange={titleHandler}/>
                {/* two way binding from state to input field using value={updTitle} */}
            </div>
            <div className='new-expense__control'>
                <label>Date</label>
                <input type='date' value={updDate} min='2019-01-01' max='2022-12-31' onChange={dateHandler}/>
            </div>
            <div className='new-expense__control'>
                <label>Price</label>
                <input type='number' value={updPrice} min='0.01' step='0.01' onChange={priceHandler}/> 
            </div>
            <div className='new-expense__actions'>
                <button type='button' onClick={props.toggleEvent}>Cancel</button>
            </div>
            <div className='new-expense__actions'>
                <button type='submit'>Add Expense</button>
            </div>
            </div>
        </form>
    
}
export default ExpenseForm;