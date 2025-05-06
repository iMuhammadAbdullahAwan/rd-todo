// frontend/app/page.js
"use client";

import { useState, useEffect } from "react";
import axios from "axios";
import TodoItem from "../components/TodoItem";

export default function Home() {
  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState("");
  const [error, setError] = useState("");

  const fetchTodos = async () => {
    try {
      const response = await axios.get("http://localhost:8000/api/todos/");
      setTodos(response.data);
      setError("");
    } catch (err) {
      setError("Failed to fetch todos. Please try again.");
    }
  };

  const addTodo = async (e) => {
    e.preventDefault();
    if (!newTodo.trim()) {
      setError("Todo cannot be empty.");
      return;
    }
    try {
      await axios.post("http://localhost:8000/api/todos/", {
        title: newTodo,
        completed: false,
      });
      setNewTodo("");
      setError("");
      fetchTodos();
    } catch (err) {
      setError("Failed to add todo. Please try again.");
    }
  };

  useEffect(() => {
    fetchTodos();
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-100 to-indigo-100 flex items-center justify-center p-4">
      <div className="w-full max-w-2xl bg-white rounded-2xl shadow-xl p-8">
        <h1 className="text-4xl font-extrabold text-indigo-600 mb-6 text-center">
          Todo App
        </h1>

        {/* Form */}
        <form
          onSubmit={addTodo}
          className="mb-8 flex flex-col sm:flex-row gap-3"
        >
          <input
            type="text"
            value={newTodo}
            onChange={(e) => setNewTodo(e.target.value)}
            placeholder="Add a new todo..."
            className="flex-1 p-3 text-gray-700 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 transition duration-200"
          />
          <button
            type="submit"
            className="bg-indigo-600 text-white px-6 py-3 rounded-lg hover:bg-indigo-700 transition duration-200 font-semibold"
          >
            Add Todo
          </button>
        </form>

        {/* Error Message */}
        {error && (
          <div className="mb-6 p-3 bg-red-100 text-red-700 rounded-lg text-center">
            {error}
          </div>
        )}

        {/* Todo List */}
        <div className="space-y-4">
          {todos.length === 0 ? (
            <p className="text-gray-700 text-center">No todos yet. Add one!</p>
          ) : (
            todos.map((todo) => (
              <TodoItem key={todo.id} todo={todo} fetchTodos={fetchTodos} />
            ))
          )}
        </div>
      </div>
    </div>
  );
}
