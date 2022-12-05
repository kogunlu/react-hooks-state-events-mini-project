import React, {useState} from "react";
import CategoryFilter from "./CategoryFilter";
import NewTaskForm from "./NewTaskForm";
import TaskList from "./TaskList";

import { CATEGORIES, TASKS } from "../data";
console.log("Here's the data you're working with");
console.log({ CATEGORIES, TASKS });

function App() {
  const [tasks, setTasks] = useState(TASKS);
  const [selectedCategory, setSelectedCategory] = useState("")

  function handleDeleteTask(deletedTaskText) {
    setTasks(tasks.filter((task) => task.text !== deletedTaskText));
  }

  function handleAddTask(newTask){
    setTasks([...tasks, newTask])
  }

  const selectedCategoryTasks = tasks.filter(item => {
    if(selectedCategory === "" || selectedCategory === "All"){
      return item
    }else{
      return item.category === selectedCategory
    }
    
  })

  return (
    <div className="App">
      <h2>My tasks</h2>
      <CategoryFilter categories={CATEGORIES} selectedCategory={selectedCategory} setSelectedCategory={setSelectedCategory} />
      <NewTaskForm categories={CATEGORIES} onTaskFormSubmit={handleAddTask} tasks={tasks}  />
      <TaskList taskList={selectedCategoryTasks} onDeleteTask={handleDeleteTask} />
    </div>
  );
}

export default App;
