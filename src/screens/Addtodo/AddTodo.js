import React from "react";
import "./addtodo.scss";

const AddTodo = ({ isEditOn, sendTodo, todoText, changeTodoText }) => {
  return (
    <div className="add-todo-container">
      <input
        type="text"
        value={todoText}
        onChange={changeTodoText}
        placeholder="Add Todo"
      />
      <button onClick={sendTodo}>{isEditOn ? "Edit" : "Add"}</button>
    </div>
  );
};

export default AddTodo;
