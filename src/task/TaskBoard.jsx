import { useState } from "react";
import AddEditModal from "./AddEditModal";
import SearchTask from "./SearchTask";
import TaskActions from "./TaskActions";
import TaskList from "./TaskList";

export default function TaskBoard() {
  const defaultTask = {
    id: crypto.randomUUID(),
    title: "Learn React Native",
    description:
      "The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from.",
    tags: ["React", "Node", "SQL", "Oracle"],
    priority: "High",
    isFavorite: false,
  };

  const [tasks, setTasks] = useState([defaultTask]);
  const [showAddEditModal, setShowAddEditModal] = useState(false);
  const [taskToUpdate, setTaskToUpdate] = useState(null);

  function handleAddOrEditTask(newTask, isAdd) {
    if (isAdd) {
      setTasks([...tasks, newTask]);
    } else {
      setTasks(
        tasks.map((task) => {
          if (task.id === newTask.id) {
            return newTask;
          }
          return task;
        })
      );
    }

    setShowAddEditModal(false);
  }

  function handleEditTask(task) {
    setTaskToUpdate(task);
    setShowAddEditModal(true);
  }

  function handleDeleteTask(taskId) {
    const taskAfterDelete = tasks.filter((task) => task.id !== taskId);
    setTasks(taskAfterDelete);
  }

  function handleOnDeleteAllClick() {
    tasks.length = 0;
    setTasks([...tasks]);
  }

  function handleCloseBtn() {
    setShowAddEditModal(false);
    setTaskToUpdate(null);
  }

  return (
    <section className="mb-20" id="tasks">
      {showAddEditModal && (
        <AddEditModal
          onSave={handleAddOrEditTask}
          taskToUpdate={taskToUpdate}
          onCloseModal={handleCloseBtn}
        />
      )}
      <div className="container">
        <div className="p-2 flex justify-end">
          <SearchTask />
        </div>
        <div className="rounded-xl border border-[rgba(206,206,206,0.12)] bg-[#1D212B] px-6 py-8 md:px-9 md:py-16">
          <TaskActions
            onAddClick={() => setShowAddEditModal(true)}
            onDeleteAllClick={handleOnDeleteAllClick}
          />
          <TaskList
            tasks={tasks}
            onEdit={handleEditTask}
            onDelete={handleDeleteTask}
          />
        </div>
      </div>
    </section>
  );
}
