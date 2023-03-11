import React, { useState, useRef } from "react";
import { RiCheckboxCircleLine } from "react-icons/ri";
import { HiOutlinePlus, HiOutlineArrowDown ,HiArrowUp } from "react-icons/hi";

function TodoForm(props) {
  const [input, setInput] = useState(props.edit ? props.edit.value : "");
  const [showDescription, setShowDescription] = useState(false);
  const [description, setDescription] = useState(
    props.edit ? props.edit.description : ""
  );

  const inputRef = useRef(null);

  const handleChange = (e) => {
    setInput(e.target.value);
  };

  const handleDescriptionChange = (e) => {
    setDescription(e.target.value);
  };

  const handleDescription = (e) => {
    e.preventDefault();
    setShowDescription(!showDescription);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    props.onSubmit({
      id: Math.floor(Math.random() * 10000),
      title: input,
      description: description ? description : "not description",
      is_done: false,
      showDescription: false,
    });
    setInput('');
    setDescription('');
  };

  return (
    <form onSubmit={handleSubmit} className="todo-form">
      {props.edit ? (
        <div className="todo-form--update">
          <h2>Edit the task</h2>
          <input
            placeholder="Update your item"
            value={input}
            onChange={handleChange}
            name="title"
            ref={inputRef}
            className="todo-input edit todo-title"
          />
          <textarea
            placeholder="Description"
            value={description}
            onChange={handleDescriptionChange}
            name="description"
            className="todo-input todo-description"
          />

          <button onClick={handleSubmit} className="todo-button">
            <RiCheckboxCircleLine />
          </button>
        </div>
      ) : (
        <>
          <input
            placeholder="Add a todo"
            value={input}
            onChange={handleChange}
            name="title"
            className="todo-input"
            ref={inputRef}
          />
          <button onClick={handleDescription} className="todo-button edit">  
          {!showDescription && (
              <HiOutlineArrowDown/>
          )}
          {showDescription && (
              <HiArrowUp />
          )}
          </button>
          <button onClick={handleSubmit} className="todo-button">
            <HiOutlinePlus />
          </button>
          {showDescription && (
            <textarea
              placeholder="Description"
              value={description}
              onChange={handleDescriptionChange}
              name="description"
              className="todo-input todo-description"
            />
          )}
        </>
      )}
    </form>
  );
}

export default TodoForm;
