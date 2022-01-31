import './AddExpense.css';
import AddExpenseToggle from './AddExpenseToggle';
import ExpenseForm from './ExpenseForm';

const AddExpense = (props) => {
    const addExpenseHandler = (data) => {
        const expenseData = {...data,id:Math.random()};
        props.onAddingExpense(expenseData);
    };
return <div className='new-expense'>
    <AddExpenseToggle addExpenseHandler={addExpenseHandler} />
    {/* <ExpenseForm onAddExpense = {addExpenseHandler}/> */}
    {/* Added custom prop (onAddExpense) to pass function for two way data binding */}
</div>
}

export default AddExpense;