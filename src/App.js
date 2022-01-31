import logo from './logo.svg';
import './App.css';
import Expenses from './components/expenses/Expenses';
import AddExpense from './components/addexpense/AddExpense';
import { useState } from 'react';

function App() {
  const dummyData = [{id:'e1', date:'01.02.2021', title:'Honey', price:50},
  {id:'e2', date:'12.03.2021', title:'Mango', price:250},
  {id:'e3', date:'10.04.2021', title:'Rice', price:550}];
  const [expData,setExpData] = useState(dummyData);
  const addingExpenseHandler = expense => {
    // console.log(expData);
    setExpData(prevExp => {return [expense,...prevExp]});
  };
  return (
    <div classExpenseFormName="App">
      {/* <button class="App-link"><h2>Hello! This is first app.</h2></button> */}
      <AddExpense onAddingExpense={addingExpenseHandler}/>
      {/* (Lifting State Up concept) Added custom prop (onAddingExpense) to pass function for two way data binding */}
      <Expenses data={expData}/>
    </div>
  );
}

export default App;
