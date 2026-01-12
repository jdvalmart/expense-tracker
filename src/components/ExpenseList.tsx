import type { Expense } from "../types/expense";
import ExpenseItem from "./ExpenseItem";

interface ExpenseListProps {
  expenses: Expense[];
  onDeleteExpense: (id: number) => void;
}

const ExpenseList: React.FC<ExpenseListProps> = ({
  expenses,
  onDeleteExpense,
}) => {
  return expenses.map((expense) => (
    <ExpenseItem
      key={expense.id}
      expense={expense}
      onDelete={onDeleteExpense}
    />
  ));
};

export default ExpenseList;
