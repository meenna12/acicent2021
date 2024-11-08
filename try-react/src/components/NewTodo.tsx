import React, { useRef, useState } from "react";

import "./NewTodo.css";

type NewTodoProps = {
  onAddTodo: (todoText: string) => void;
};

const NewTodo: React.FC<NewTodoProps> = (props) => {
  const [text, setText] = useState("");
  const textInputRef = useRef<HTMLInputElement>(null);

  const todoSubmitHandler = (event: React.FormEvent) => {
    event.preventDefault();
    const enteredText = textInputRef.current!.value;
    props.onAddTodo(enteredText);
    setText("");
  };

  const handleOnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setText(event.currentTarget.value);
  };

  return (
    <form
      onSubmit={todoSubmitHandler}
      style={{ display: "flex", flexDirection: "column", alignItems: "center" }}
    >
      <div
        className="form-control"
        style={{ textAlign: "center", fontSize: "1.8rem" }}
      >
        <label htmlFor="todo-text">Todo List Application</label>
        <input
          type="text"
          id="todo-text"
          ref={textInputRef}
          onChange={(event) => handleOnChange(event)}
          value={text}
        />
      </div>
      <button type="submit" style={{ marginTop: "10px" }}>
        ADD TODO
      </button>
    </form>
  );
};

export default NewTodo;
