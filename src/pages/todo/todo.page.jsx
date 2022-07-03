import TodoListComponent from "../../components/todo/TodoList.Component";
import TodoFormComponent from "../../components/todo/TodoForm.Component";
import { useDispatch, useSelector } from 'react-redux';
import { addTodo,deleteTodo } from "../../redux/features/todoSlice";
// import { addTodoAction,deleteTodoAction } from "../../redux/config"; old redux

import './todo.page.css';
function TodoPage() {

  const todos = useSelector(state => state.todos.todos);
  const dispatch = useDispatch();

  const onAddTodo = (task) => {
    // dispatch(addTodoAction(task));  old redux
    dispatch(addTodo(task));
  };

  const onDeleteTodo = (index) => {
    // dispatch(deleteTodoAction(index)); old redux
    dispatch(deleteTodo(index));

  }

  return (
    <div className="text-center py-2 todo-wrapper container">
      <TodoFormComponent addTodo={onAddTodo} />
      <TodoListComponent todos={todos} deleteTodo={onDeleteTodo} />
    </div>
  );
}

export default TodoPage;
