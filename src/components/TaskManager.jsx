import { useState } from "react";

function TaskManager() {

  const [task, setTask] = useState("");
  const [tasks, setTasks] = useState([]);

  // Store the ID of the task being edited
  const [editId, setEditId] = useState(null);

  function handleChange(event) {
    setTask(event.target.value);
  }

  // Add Task
  function addTask() {

    if (task.trim() === "") {
      return;
    }

    const newTask = {
      id: Date.now(),
      title: task,
      completed: false
    };

    setTasks([...tasks, newTask]);
    setTask("");
  }

  // Delete Task
  function deleteTask(id) {

    const updatedTasks = tasks.filter((task) => {
      return task.id !== id;
    });

    setTasks(updatedTasks);
  }

  // Complete / Incomplete Task
  function toggleTask(id) {

    const updatedTasks = tasks.map((task) => {

      if (task.id === id) {
        return {
          ...task,
          completed: !task.completed
        };
      }

      return task;
    });

    setTasks(updatedTasks);
  }

  // Start Editing
  function startEdit(task) {
    setTask(task.title);
    setEditId(task.id);
  }

  // Update Existing Task
  function updateTask() {

    if (task.trim() === "") {
      return;
    }

    const updatedTasks = tasks.map((item) => {

      if (item.id === editId) {
        return {
          ...item,
          title: task
        };
      }

      return item;
    });

    setTasks(updatedTasks);

    setTask("");
    setEditId(null);
  }

  return (
    <section className="p-8">

      <h2 className="text-3xl font-bold text-center text-gray-800">
        Task Manager
      </h2>

      <div className="max-w-xl mx-auto mt-6">

        {/* Add / Edit Task */}
        <div className="flex gap-3">

          <input
            type="text"
            placeholder="Enter a new task"
            value={task}
            onChange={handleChange}
            className="border p-3 rounded flex-1"
          />

          {editId === null ? (

            <button
              onClick={addTask}
              className="bg-blue-600 text-white px-5 py-2 rounded"
            >
              Add Task
            </button>

          ) : (

            <button
              onClick={updateTask}
              className="bg-green-600 text-white px-5 py-2 rounded"
            >
              Update
            </button>

          )}

        </div>

        {/* Task List */}
        <div className="mt-6">

          {tasks.length === 0 ? (

            <p className="text-center text-gray-500">
              No tasks added yet.
            </p>

          ) : (

            tasks.map((task) => {

              return (
                <div
                  key={task.id}
                  className="bg-white p-4 mb-3 rounded-lg shadow flex justify-between items-center"
                >

                  <div className="flex items-center gap-3">

                    <input
                      type="checkbox"
                      checked={task.completed}
                      onChange={() => toggleTask(task.id)}
                    />

                    <span
                      className={
                        task.completed
                          ? "line-through text-gray-400"
                          : "text-gray-800"
                      }
                    >
                      {task.title}
                    </span>

                  </div>

                  <div className="flex gap-2">

                    <button
                      onClick={() => startEdit(task)}
                      className="bg-yellow-500 text-white px-3 py-1 rounded"
                    >
                      Edit
                    </button>

                    <button
                      onClick={() => deleteTask(task.id)}
                      className="bg-red-500 text-white px-3 py-1 rounded"
                    >
                      Delete
                    </button>

                  </div>

                </div>
              );

            })

          )}

        </div>

      </div>

    </section>
  );
}

export default TaskManager;