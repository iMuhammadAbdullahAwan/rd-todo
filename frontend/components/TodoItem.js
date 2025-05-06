// frontend/components/TodoItem.js
import axios from "axios";

const TodoItem = ({ todo, fetchTodos }) => {
  const toggleTodo = async () => {
    try {
      await axios.put(`http://localhost:8000/api/todos/${todo.id}/`, {
        ...todo,
        completed: !todo.completed,
      });
      fetchTodos();
    } catch (err) {
      console.error("Failed to update todo:", err);
    }
  };

  const deleteTodo = async () => {
    try {
      await axios.delete(`http://localhost:8000/api/todos/${todo.id}/`);
      fetchTodos();
    } catch (err) {
      console.error("Failed to delete todo:", err);
    }
  };

  return (
    <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg shadow-sm hover:shadow-md transition duration-200">
      <div className="flex items-center">
        <input
          type="checkbox"
          checked={todo.completed}
          onChange={toggleTodo}
          className="h-5 w-5 text-indigo-600 rounded focus:ring-indigo-500"
        />
        <span
          className={`ml-3 text-lg ${
            todo.completed
              ? "line-through text-gray-500"
              : "text-gray-800 font-medium"
          }`}
        >
          {todo.title}
        </span>
      </div>
      <button
        onClick={deleteTodo}
        className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600 transition duration-200 font-semibold"
      >
        Delete
      </button>
    </div>
  );
};

export default TodoItem;
