import React, { useState } from "react";
import TodoForm from "./TodoForm";
import {
  RiCloseCircleLine,
  RiCheckboxCircleLine,
  RiArrowDownCircleLine,
  RiArrowUpCircleLine,
} from "react-icons/ri";
import { FcApproval, FcIdea, FcSurvey } from "react-icons/fc";
import { TiEdit } from "react-icons/ti";

const Todo = ({
  todos,
  isDoneTodo,
  removeTodo,
  updateTodo,
  showDescription,
}) => {
  const [edit, setEdit] = useState({
    id: null,
    value: "",
  });

  const submitUpdate = (value) => {
    updateTodo(edit.id, value);
    setEdit({
      id: null,
      value: "",
    });
  };

  if (edit.id) {
    return <TodoForm edit={edit} onSubmit={submitUpdate} />;
  }

  return todos.map((todo, index) => (
    // <div>
    <div className="todo-row" key={index}>

      <div className="description" key={todo.id}>
      {todo.is_done ? 
          <div className="button" onClick={() => isDoneTodo(todo.id)}>
            <FcApproval className="notification-icon" />
          </div>
           :
           <div onClick={() => isDoneTodo(todo.id)}>
            <FcIdea className="notification-icon animate__animated animate__headShake animate__repeat-2 animate__delay-1s" />
          </div> 
          }
        <p
          onClick={() => isDoneTodo(todo.id)}
          className={todo.is_done ? "todo complete" : "todo"}
        >
          {todo.title}
        </p>
        <div className="icons">
          <RiCheckboxCircleLine
            onClick={() => isDoneTodo(todo.id)}
            className="delete-icon icon-success"
          />
          {!todo.showDescription && (
            <RiArrowDownCircleLine
            onClick={() => showDescription(todo.id)}
            className="delete-icon icon-primary"
          />
          )}{todo.showDescription && (
            <RiArrowUpCircleLine
            onClick={() => showDescription(todo.id)}
            className="delete-icon icon-primary"
          />
          )}
          <RiCloseCircleLine
            onClick={() => removeTodo(todo.id)}
            className="delete-icon icon-delete"
          />
          <TiEdit
            onClick={() =>
              {setEdit({
                  id: todo.id,
                  value: todo.title,
                  description: todo.description,
                })
              }
            }
            className="icon-edit"
          />
        </div>
      </div>
      {todo.showDescription && (
        <div onClick={() => isDoneTodo(todo.id)} className={todo.is_done ? "description complete" : "description"}>
          <FcSurvey
            className="delete-icon"
          /> {todo.description}
        </div>
      )}

    </div>
    // </div>
  ));
};

export default Todo;
