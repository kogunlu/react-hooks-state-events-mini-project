import React, {useState} from "react";

function NewTaskForm({categories, onTaskFormSubmit}) {
  const [text, setText] = useState("")
  const [category, setCategory] = useState("Code")

  const categoryList = categories.map(item => {
  if(item === "All"){
    return null
  }else{
    return <option key={item}>{item}</option>
  }
  })

  function handleSubmit(e){
    e.preventDefault()
    onTaskFormSubmit({text, category})
    setText("")
    setCategory("Code")
   
  }

  return (
    <form className="new-task-form" onSubmit={handleSubmit}>
      <label>
        Details
        <input type="text" name="text" 
        value={text} 
        onChange={(e) => setText(e.target.value)} />
      </label>
      <label>
        Category
        <select name="category" 
        value={category}
        onChange={(e) => setCategory(e.target.value)}>
          {categoryList}
        </select>
      </label>
      <input type="submit" value="Add task"   />
    </form>
  );
}

export default NewTaskForm;
