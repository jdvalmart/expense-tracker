import { useState } from "react";
import type { Expense } from "../types/expense";

interface ExpensesFormProps {
  onAddExpense: (expense: Expense) => void;
}

const ExpensesForm: React.FC<ExpensesFormProps> = ({ onAddExpense }) => {
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

    onAddExpense(nuevoGasto);

    setTitle("");
    setAmount("");
  };
  return (
    <form onSubmit={handleSubmit} className=" space-y-4 mb-6">
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-300"
        placeholder="Gasto"
      />
      <input
        type="number"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
        className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-300"
        placeholder="Valor"
      />
      <button
        type="submit"
        className="w-full bg-indigo-600 text-white py-2 rounded-md hover:bg-indigo-700 transition"
      >
        Agregar gasto
      </button>
    </form>
  );
};
export default ExpensesForm;
