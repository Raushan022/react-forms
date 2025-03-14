import React, { useState } from "react";
import Input from "./Input";
import Select from "./Select";

const ExpenseForm = ({
  setExpenses,
  expense,
  setExpense,
  editingRowId,
  setEditingRowId,
}) => {
  const [error, setErrors] = useState({});

  const validate = (formData) => {
    const errorsData = {};

    if (!formData.title) {
      errorsData.title = "Title is required";
    }

    if (!formData.category) {
      errorsData.category = "category is required";
    }

    if (!formData.amount) {
      errorsData.amount = "please enter some amount";
    }

    setErrors(errorsData);
    return errorsData;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const validateResult = validate(expense);
    if (Object.keys(validateResult).length) return;

    if (editingRowId) {
      setExpenses((prevState) => 
        prevState.map((prevExpense) => {
          if (prevExpense.id === editingRowId) {
            return {...expense, id:editingRowId}
          }
          return prevExpense
        })
      );
      setExpense({
        title: "",
        category: "",
        amount: "",
      });
      setEditingRowId('')
      return
    }

    setExpenses((prevState) => [
      ...prevState,
      { ...expense, id: crypto.randomUUID() },
    ]);

    setExpense({
      title: "",
      category: "",
      amount: "",
    });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setExpense((prevData) => ({
      ...prevData,
      // [name]: value,
      [name]: e.target.value, //can write like this also, same thing
    }));

    //remove error when typing
    setErrors({});
  };

  return (
    <form className="expense-form" onSubmit={handleSubmit}>
      <Input
        id="title"
        label="Title"
        name="title"
        value={expense.title}
        onChange={handleChange}
        error={error.title}
      />
      <Select
        id="category"
        label="Category"
        name="category"
        value={expense.category}
        onChange={handleChange}
        options={["Grocery", "Clothes", "Bills", "Education", "Medicine"]}
        defaultOption="Select Category"
        error={error.category}
      />
      <Input
        id="amount"
        label="Amount"
        name="amount"
        value={expense.amount}
        onChange={handleChange}
        error={error.amount}
      />
      <button className="add-btn">{editingRowId ? "Save" : "Add"}</button>
    </form>
  );
};

export default ExpenseForm;
