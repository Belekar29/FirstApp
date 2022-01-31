import React, { useState } from 'react';
import Card from '../cards/Card';
import ExpenseItem from './ExpenseItem';
import './Expenses.css';
import '../expensefilter/ExpenseFilter.css';
import ExpenseForm from '../addexpense/ExpenseForm';
import ExpensesFilter from '../expensefilter/ExpensesFilter';
import ExpenseList from './ExpenseList';
import ExpenseChart from './ExpenseChart';

// This component is stateful or controlled component
// Since it is managing the state and controlling values in other components
function Expenses(props){
  const [yearFilter,setYearFilter] = useState('2019');
  const onSelectedYearHandler = data =>{
    // console.log(data);
    setYearFilter(data);
    
  };
  // const filteredText = <h2>No Expense Found!</h2>;
  // if(filteredArr.length === 0){

  // } else {
  //   filteredArr.map(exp => <ExpenseItem key = {exp.id} date={exp.date} title={exp.title} price={exp.price}/>)};
  // }
  const filteredArr = props.data.filter(expense => new Date(expense.date).getFullYear().toString() === yearFilter);
    return (<div>
    <Card className="expenses">
      {/* ExpensesFilter is controlled component its values are controlled by Expenses component*/}
    <ExpensesFilter selected={yearFilter} className='expenses-filter' onSelectedYear = {onSelectedYearHandler}/>
    {/* ExenseList -> Code separated and made Expenses component cleaner and more readable */}
    <ExpenseChart expenses={filteredArr}/>
    <ExpenseList filteredArray={filteredArr}/>

    {/* {props.data.map(expense => <ExpenseItem key = {expense.id} date={expense.date} title={expense.title} price={expense.price}/>)} */
    // filteredArr.map(exp => <ExpenseItem key = {exp.id} date={exp.date} title={exp.title} price={exp.price}/>)
    }
    {/* <ExpenseItem date={props.data[0].date} title={props.data[0].title} price={props.data[0].price}/>
    <ExpenseItem date={props.data[1].date} title={props.data[1].title} price={props.data[1].price}/>
    <ExpenseItem date={props.data[2].date} title={props.data[2].title} price={props.data[2].price}/> */}
  </Card></div>);
}
export default Expenses;