import { useState } from "react";

const TodoFormComponent = ({ addTodo }) => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const handleSubmission = (e) => {
    e.preventDefault();
    addTodo({ title, content });
    setTitle("");
    setContent("");
  };

  return (
    <div className="bg-light border p-4 h-100 m-4 col-5">
      <h5 className="text-muted mb-4">Lets add a to-do task</h5>

      <form onSubmit={handleSubmission}>
        <input
          className="form-control"
          placeholder="Todo-Title"
          type="text"
          name="title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <textarea
          className="form-control my-3"
          placeholder="Todo-Description"
          name="content"
          value={content}
          onChange={(e) => setContent(e.target.value)}
        ></textarea>
        <button className="my-4 btn btn-dark btn-sm px-4 w-100 py-2" type="submit">Add Todo</button>
      </form>
    </div>
  );
};

export default TodoFormComponent;
