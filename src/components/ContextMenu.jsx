import React from "react";

const ContextMenu = ({
  menuPosition,
  setMenuPosition,
  setExpenses,
  rowId,
  expenses,
  setExpense,
  setEditingRowId
}) => {
  // if (!menuPosition.left) return
  return (
    <div className="context-menu" style={menuPosition}>
      <div
        onClick={() => {
          const foundExpense = expenses.find((expense) => expense.id === rowId)
          console.log(foundExpense)
          setEditingRowId(rowId)
          setExpense(foundExpense)
          setMenuPosition({});
        }}
      >
        Edit
      </div>
      <div
        onClick={() => {
          setExpenses((prevState) =>
            prevState.filter((expense) => expense.id !== rowId)
          );
          setMenuPosition({});
        }}
      >
        Delete
      </div>
    </div>
  );
};

export default ContextMenu;
