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
  );
};
export default ExpensesForm;
