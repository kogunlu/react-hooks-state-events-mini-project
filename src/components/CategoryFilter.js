import React from "react";

function CategoryFilter({ categories, setSelectedCategory, selectedCategory }) {

  const categoryList = categories.map(item => {
   return(
    <button 
    key={item}
    className={item === selectedCategory ? "selected" : null} 
    onClick={() => setSelectedCategory(item)}
    >
    {item}
    </button>
   )
  })

  return (
    <div className="categories">
      <h5>Category filters</h5>
      {categoryList}
    </div>
  );
}

export default CategoryFilter;
