import TodoListComponent from "../../components/todo/TodoList.Component";
import TodoFormComponent from "../../components/todo/TodoForm.Component";
import { useDispatch, useSelector } from 'react-redux';
import { addTodoAction,deleteTodoAction } from "../../redux";


import './todo.page.css';
function TodoPage() {

  const todos = useSelector(state => state.todos);
  const dispatch = useDispatch();

  const addTodo = (task) => {
    dispatch(addTodoAction(task));
  };

  const deleteTodo = (index) => {
    dispatch(deleteTodoAction(index));
  }

  return (
    <div className="text-center py-2 todo-wrapper container">
      <TodoFormComponent addTodo={addTodo} />
      <TodoListComponent todos={todos} deleteTodo={deleteTodo} />
    </div>
  );
}

export default TodoPage;
