import { useState } from "react";
import "./App.css";
import type { Expense } from "./types/expense";
import { ExpensesForm } from "./components/ExpensesForm";

function App() {
  const [expenses, setExpenses] = useState<Expense>([]);

  const addExpense = (expense: Expense) => {
    setExpenses((prev) => [...prev, expense]);
  };

  return (
    <div>
      <h1>Lista de gastos</h1>
      <ExpensesForm onAddExpense={addExpense} />
      {expenses.map((expense) => (
        <div key={expense.id}>
          <p>
            {expense.title}: {expense.amount}
          </p>
        </div>
      ))}
    </div>
  );
}

export default App;
