import type { Expense } from "../types/expense";

interface ExpenseItemProps {
  expense: Expense;
  onDelete: (id: number) => void;
}

const ExpenseItem: React.FC<ExpenseItemProps> = ({ expense, onDelete }) => {
  return (
    <div
      className="flex justify-between items-center bg-gray-50 border rounded-lg px-4 py-3"
      key={expense.id}
    >
      <p className="font-medium text-gray-800">{expense.title}</p>
      <span className="text-sm text-gray-500">{expense.amount}</span>
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
