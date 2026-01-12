import { useState } from "react";
import "./App.css";
import type { Expense } from "./types/expense";
import ExpensesForm from "./components/ExpensesForm";
import ExpenseList from "./components/ExpenseList";

function App() {
  const [expenses, setExpenses] = useState<Expense[]>([]);

  const addExpense = (expense: Expense) => {
    setExpenses((prev) => [...prev, expense]);
  };

  const deleteExpense = (id: number) => {
    setExpenses((prev) => prev.filter((expense) => expense.id !== id));
  };

  return (
    <div>
      <h1>Lista de gastos</h1>
      <ExpensesForm onAddExpense={addExpense} />
      <ExpenseList expenses={expenses} onDeleteExpense={deleteExpense} />
    </div>
  );
}

export default App;
