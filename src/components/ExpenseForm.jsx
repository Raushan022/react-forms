import React, { useState } from "react";
import Input from "./Input";

const ExpenseForm = ({ setExpenses }) => {
  const [expense, setExpense] = useState({
    title: "",
    category: "",
    amount: "",
  });

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
    console.log(error);
    if (Object.keys(validateResult).length) return;

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
      <div className="input-container">
        <label htmlFor="category">Category</label>
        <select
          id="category"
          name="category"
          value={expense.category}
          onChange={handleChange}
        >
          <option value="" hidden>
            Select Category
          </option>
          <option value="grocery">Grocery</option>
          <option value="clothes">Clothes</option>
          <option value="bills">Bills</option>
          <option value="education">Education</option>
          <option value="medicine">Medicine</option>
        </select>
        <p className="error">{error.category}</p>
      </div>
      <Input
        id="amount"
        label="Amount"
        name="amount"
        value={expense.amount}
        onChange={handleChange}
        error={error.amount}
      />
      <button className="add-btn">Add</button>
    </form>
  );
};

export default ExpenseForm;
