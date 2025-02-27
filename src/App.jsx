import { useState } from "react";
import "./App.css";
import ContextMenu from "./components/ContextMenu";
import ExpenseForm from "./components/ExpenseForm";
import ExpenseTable from "./components/ExpenseTable";
import ExpenseData from "./ExpenseData";
import { useLocalStorage } from "./hooks/useLocalStorage";

function App() {
  const [expense, setExpense] = useState({
    title: "",
    category: "",
    amount: "",
  });
  const [expenses, setExpenses] = useLocalStorage("expenses", ExpenseData);
  const [editingRowId, setEditingRowId] = useState("");

  return (
    <main>
      <h1>Track Your Expense</h1>
      <div className="expense-tracker">
        <ExpenseForm
          setExpenses={setExpenses}
          expense={expense}
          setExpense={setExpense}
          editingRowId={editingRowId}
          setEditingRowId={setEditingRowId}
        />
        <ExpenseTable
          expenses={expenses}
          setExpenses={setExpenses}
          setExpense={setExpense}
          setEditingRowId={setEditingRowId}
        />
        <ContextMenu />
      </div>
    </main>
  );
}

export default App;
