import React from "react";
import Task from "./Task";


function TaskList({taskList, onDeleteTask}) {

  
  const taskListShown = taskList.map((task) => (
    <Task
      key={task.text}
      text={task.text}
      category={task.category}
      onDeleteTask={onDeleteTask}
    />
  ))

  return (
    <div className="tasks">
      {taskListShown}
    </div>
  );
}

export default TaskList;
