import React, { useState } from "react";
import "./NewExpense.css";
import ExpenseForm from "./ExpenseForm";

function NewExpense(props) {
  const [showForm, setShowForm] = useState(false);

  //lifting up state
  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };
    props.onAddExpense(expenseData);
  };

  function handleClick() {
    setShowForm(true);
  }

  function onCancelClick() {
    setShowForm(false);
  }
  return (
    <div className="new-expense">
      {showForm && (
        <ExpenseForm
          onSaveExpenseData={saveExpenseDataHandler}
          onCancelClick={onCancelClick}
        />
      )}

      {!showForm && <button onClick={handleClick}>Add New Expenses</button>}
    </div>
  );
}
export default NewExpense;
