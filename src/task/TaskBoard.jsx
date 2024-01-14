import { useState } from "react";
import SearchTask from "./SearchTask";
import TaskActions from "./TaskActions";
import TaskList from "./TaskList";
import AddEditModal from "./AddEditModal";

export default function TaskBoard() {

  const defaultTask = {
    id: crypto.randomUUID(),
    title: "Learn React Native",
    description:
      "The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from.",
    tags: ["React", "Node", "SQL", "Oracle"],
    priority: "High",
    isFavorite: false
  };

  const [tasks, setTasks] = useState([defaultTask]);
  const [showAddEditModal, setShowAddEditModal] = useState(false);


  function handleAddTask(newTask){
    // console.log("Adding a new Task", newTask);
    setTasks([...tasks, newTask])
    setShowAddEditModal(false)
  }

  return (
    <section className="mb-20" id="tasks">
      {showAddEditModal && <AddEditModal onSave={handleAddTask} /> }
      <div className="container">
        <div className="p-2 flex justify-end">
          <SearchTask />
        </div>
        <div className="rounded-xl border border-[rgba(206,206,206,0.12)] bg-[#1D212B] px-6 py-8 md:px-9 md:py-16">
          <TaskActions onAddClick={()=> setShowAddEditModal(true)} />
          <TaskList tasks={tasks} />
        </div>
      </div>
    </section>
  );
}
