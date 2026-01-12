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
    <div className="min-h-screen bg-gray-100 flex justify-center ">
      <div className="w-full max-w-xl bg-white rounded-xl shadow-md p-6 mt-10">
        <h1 className="text-3xl font-bold text-zinc-900 tracking-tiht mb-6 text-center">
          Lista de gastos
        </h1>
        <ExpensesForm onAddExpense={addExpense} />
        <ExpenseList expenses={expenses} onDeleteExpense={deleteExpense} />
      </div>
    </div>
  );
}

export default App;
