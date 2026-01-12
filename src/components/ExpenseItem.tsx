import type { Expense } from "../types/expense";

interface ExpenseItemProps {
  expense: Expense;
  onDelete: (id: number) => void;
}

const ExpenseItem: React.FC<ExpenseItemProps> = ({ expense, onDelete }) => {
  return (
    <div
      className="flex justify-between items-center bg-gray-100 p-4 rounded shadow-sm"
      key={expense.id}
    >
      <p>
        {expense.title} - {expense.amount}
      </p>
      <button
        className=" border rounded  py-1 px-1 bg-red-500  text-white text-red-600 hover:text-red-800 transition"
        onClick={() => onDelete(expense.id)}
      >
        Eliminar
      </button>
    </div>
  );
};

export default ExpenseItem;
