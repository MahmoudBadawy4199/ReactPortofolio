import TodoListComponent from "../../components/todo/TodoList.Component";
import TodoFormComponent from "../../components/todo/TodoForm.Component";
import { useDispatch, useSelector } from 'react-redux';
import { addTodo, deleteTodo } from "../../redux/features/todoSlice";

import './todo.page.css';
function TodoPage() {

  const todos = useSelector(state => state.todos.todos);
  const dispatch = useDispatch();

  const onAddTodo = (task) => {
    
    if (task.title && task.content) {
      dispatch(addTodo(task));
    }
    else{
      alert("Please Enter Valid Values");
    }
  };

  const onDeleteTodo = (index) => {
    dispatch(deleteTodo(index));

  }

  return (
    <div className="text-center py-2 todo-wrapper container d-flex">
      <TodoFormComponent addTodo={onAddTodo} />
      <TodoListComponent todos={todos} deleteTodo={onDeleteTodo} />
    </div>
  );
}

export default TodoPage;
