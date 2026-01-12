import type { Expense } from "../types/expense";

interface ExpenseItemProps {
  expense: Expense;
  onDelete: (id: number) => void;
}

const ExpenseItem: React.FC<ExpenseItemProps> = ({ expense, onDelete }) => {
  return (
    <div key={expense.id}>
      <p>
        {expense.title} - {expense.amount}
      </p>
      <button onClick={() => onDelete(expense.id)}>Eliminar</button>
    </div>
  );
};

export default ExpenseItem;
