import React, { useState } from "react";
import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";

const dummyData = [
  {
    id: "e1",
    title: "Toilet Paper",
    amount: 94.12,
    date: new Date(2020, 7, 14),
  },
  { id: "e2", title: "New TV", amount: 799.49, date: new Date(2021, 2, 12) },
  {
    id: "e3",
    title: "Car Insurance",
    amount: 294.67,
    date: new Date(2022, 2, 28),
  },
  {
    id: "e4",
    title: "New Desk (Wooden)",
    amount: 450,
    date: new Date(2021, 5, 12),
  },
];
function App() {
  const [expenses, setExpenses] = useState(dummyData);

  //lifting up state
  const addExpenseHandler = (expense) => {
    setExpenses((prevData) => {
      return [expense, ...prevData];
    });
    // console.log("In App.js");
    // console.log(expense);
  };

  // behind the scene react work like this
  // return React.createElement(
  //   "div",
  //   {},
  //   React.createElement("h2", {}, "let's get started!"),//1]element=>2]attribute=>3]content between
  //   React.createElement(Expenses, { expenses: expenses })
  // );

  //with jsx
  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses expenses={expenses} />
    </div>
  );
}

export default App;
