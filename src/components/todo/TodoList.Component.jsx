
const TodoListComponent = ({ todos, deleteTodo }) => {
  const todosList =
    todos && todos.length > 0 ? (
      todos.map((todo, i) => {
        return (
          <div className="d-flex align-items-center border bg-white m-4 " key={i}>
            <div className="content__wrapper text-start py-3 ps-4 col-10 w-75">
              <h3 style={{ fontSize: '1.2rem', wordWrap: 'break-word', fontWeight: '600', textTransform: 'capitalize' }} className="pe-4">{todo.title}</h3>
              <p style={{ wordWrap: 'break-word' }} className="pe-4">{todo.content}</p>
            </div>
            <button className="btn btn-danger col-2 " onClick={() => deleteTodo(i)}>x</button>

          </div>
        );
      })
    ) : (
      <p className="h5 mx-5 text-muted">no items on the list ..</p>
    );

  return (
    <div className="text-left bg-light border my-4 col-6">
      <h5 className="text-muted my-4">Todos List</h5>
      {todosList}
    </div>
  );
};

export default TodoListComponent;
