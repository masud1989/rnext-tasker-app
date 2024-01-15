import { useState } from "react";

export default function AddEditModal({ onSave, taskToUpdate }) {
  const [task, setTask] = useState(
    taskToUpdate || {
      id: crypto.randomUUID(),
      title: "",
      description: "",
      tags: [],
      priority: "",
      isFavorite: false,
    }
  );

  const handleOnchange = (evt) => {
    const name = evt.target.name;
    let value = evt.target.value;
    if (name === "tags") {
      value = value.split(",");
    }
    setTask({
      ...task,
      [name]: value,
    });
  };

  const [isAdd, setIsAdd] = useState(Object.is(taskToUpdate, null));

  return (
    <>
      <div className="bg-black bg-opacity-70 h-1/2 z-10 absolute top-0 left-0"></div>
      <form className="mx-auto my-2 w-full max-w-[740px] rounded-xl border border-[#FEFBFB]/[36%] bg-[#191D26] p-9 max-md:px-4 lg:my-10 lg:p-11 z-10 absolute top-1/4 left-1/4">
        <div className="flex items-center justify-between">
          <h2 className="mb-20 text-center text-2xl font-bold text-white lg:mb-11 lg:text-[28px]">
            {isAdd ? " Add New Task" : "Update Task"}
          </h2>
        </div>

        <div className="space-y-3 text-white lg:space-y-5">
          <div className="space-y-2 lg:space-y-3">
            <label htmlFor="title">Title</label>
            <input
              className="block w-full rounded-md bg-[#2D323F] px-3 py-2.5"
              type="text"
              name="title"
              id="title"
              value={task.title}
              onChange={handleOnchange}
              required
            />
          </div>

          <div className="space-y-2 lg:space-y-3">
            <label htmlFor="description">Description</label>
            <textarea
              className="block min-h-[100px] w-full rounded-md bg-[#2D323F] px-3 py-2.5 lg:min-h-[180px]"
              type="text"
              name="description"
              id="description"
              value={task.description}
              onChange={handleOnchange}
              required
            ></textarea>
          </div>

          <div className="grid-cols-2 gap-x-4 max-md:space-y-3 md:grid lg:gap-x-10 xl:gap-x-20">
            <div className="space-y-2 lg:space-y-3">
              <label htmlFor="tags">Tags</label>
              <input
                className="block w-full rounded-md bg-[#2D323F] px-3 py-2.5"
                type="text"
                name="tags"
                id="tags"
                value={task.tags}
                onChange={handleOnchange}
                required
              />
            </div>

            <div className="space-y-2 lg:space-y-3">
              <label htmlFor="priority">Priority</label>
              <select
                className="block w-full cursor-pointer rounded-md bg-[#2D323F] px-3 py-2.5"
                name="priority"
                id="priority"
                value={task.priority}
                onChange={handleOnchange}
                required
              >
                <option value="">Select Priority</option>
                <option value="low">Low</option>
                <option value="medium">Medium</option>
                <option value="high">High</option>
              </select>
            </div>
          </div>
        </div>

        <div className="mt-16 flex justify-end lg:mt-20 ">
          <button
            type="submit"
            className="mx-5 rounded bg-red-500 px-4 py-2 text-white font-bold transition-all hover:opacity-80"
          >
            Cancel
          </button>
          <button
            onClick={() => onSave(task, isAdd)}
            type="submit"
            className="rounded bg-indigo-600 px-4 py-2 text-white font-bold transition-all hover:opacity-80"
          >
            Save Task
          </button>
        </div>
      </form>
    </>
  );
}
