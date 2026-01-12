import { useState } from "react";
import "./App.css";
import type { Expense } from "./types/expense";

function App() {
  const [expenses, setExpenses] = useState<Expense>([]);
  const [title, setTitle] = useState("");
  const [amount, setAmount] = useState("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!title || !amount) return;

    const nuevoGasto: Expense = {
      id: Date.now(),
      title,
      amount: Number(amount),
    };

    setExpenses((prev) => [...prev, nuevoGasto]);

    setTitle("");
    setAmount("");
  };

  return (
    <div>
      <h1>Lista de gastos</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <input
          type="number"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
        />
        <button type="submit">Agregar gasto</button>
      </form>
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
