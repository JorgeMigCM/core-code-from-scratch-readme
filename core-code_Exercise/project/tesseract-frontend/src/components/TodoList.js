import React, { useState } from "react";
import TodoForm from "./TodoForm";
import Todo from "./Todo";
import { useEffect } from "react";

function TodoList() {
  
  const [todos, setTodos] = useState([]);

  const getTodos = async () => {
    const request = await fetch('http://localhost:3000/v1/to-dos');
    const requestJson = await request.json();
    setTodos(requestJson.todos);
  };

  useEffect(() => {
    getTodos();
  }, []);

  const addTodo = async (todo) => {
    if (!todo.title || /^\s*$/.test(todo.title)) {
      
      return window.alert("the title can't be empty! ❌");
    }
    await fetch('http://localhost:3000/v1/to-do', {
      method: "POST",
      body: JSON.stringify(todo),
      headers: { 'Content-Type': 'application/json' },
    });

    const newTodos = [todo, ...todos];

    setTodos(newTodos);
    getTodos();
  };

  const showDescription = (todoId) => {
    let updatedTodos = todos.map((todo) => {
      if (todo.id === todoId) {
        todo.showDescription = !todo.showDescription;
      }
      return todo;
    });
    setTodos(updatedTodos);
  };

  const updateTodo = async (todoId, newValue) => {
    if (!newValue.title || /^\s*$/.test(newValue.title)) {
      return;
    }

    await fetch(`http://localhost:3000/v1/to-do/${todoId}`, {
      method: 'PATCH',
      body: JSON.stringify({
        title: newValue.title,
        description: newValue.description,
      }),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    });
    setTodos((prev) =>
      prev.map((item) => (item.id === todoId ? newValue : item))
    );
  };

  const removeTodo = async (id) => {

    const removedArr = [...todos].filter((todo) => todo.id !== id);

    await fetch(`http://localhost:3000/v1/to-do/${id}`, {
      method: "DELETE",
    });
    setTodos(removedArr);
  };

  const isDoneTodo = (id) => {
    let updatedTodos = todos.map((todo) => {
      if (todo.id === id) {
        todo.is_done = !todo.is_done;
        fetch(`http://localhost:3000/v1/to-do/${id}`, {
          method: 'PATCH',
          body: JSON.stringify({
            is_done: todo.is_done,
          }),
          headers: {
            'Content-type': 'application/json; charset=UTF-8',
          },
        });
      }
      return todo;
    });
    setTodos(updatedTodos);
  };

  return (
    <>
      <h1>What's the Plan for Today?</h1>
      <TodoForm onSubmit={addTodo} />
      <Todo
        todos={todos}
        isDoneTodo={isDoneTodo}
        removeTodo={removeTodo}
        updateTodo={updateTodo}
        showDescription={showDescription}
      />
    </>
  );
}

export default TodoList;
