import ExpenseItem from "./ExpenseItem";
import './ExpenseList.css';

// New component for separating code and making Expenses component cleaner and more readable.
const ExpenseList = (props) => {
    if(props.filteredArray.length === 0){
        return <div className="expenses-list__fallback"><h2>No Expense Found!</h2></div>;
    }else{
        return props.filteredArray.map(exp => <ExpenseItem key = {exp.id} date={exp.date} title={exp.title} price={exp.price}/>);
    }
}
export default ExpenseList;