import React from "react";
import { FaEdit } from "react-icons/fa/index";
import { MdDelete } from "react-icons/md/index";
import "./todos.scss";
const Todo = ({ gotoEditPage, todos, deleteTodo }) => {
  return (
    <div className="todo-container">
      {todos.map((todo) => {
        return (
          <div className="todo" key={todo.id}>
            <p>{todo.value}</p>
            <div>
              <FaEdit
                className="icon edit"
                onClick={() => gotoEditPage(todo.id, todo.value)}
              />
              <MdDelete
                className=" icon delete"
                onClick={() => deleteTodo(todo.id)}
              />
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Todo;
