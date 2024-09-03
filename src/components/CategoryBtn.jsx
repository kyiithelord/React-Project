import React from "react";

const CategoryBtn = ({ categoryName, current }) => {
  return (
      <button
      className={` ${
        current && " bg-black text-white" 
      } text-nowrap border border-black px-4 py-2 me-2 rounded-lg`}
    >
      {categoryName}
    </button>
  );
};

export default CategoryBtn;
