import React from "react";
import CategoryBtn from "./CategoryBtn";

const CategorySection = () => {
  const title = "Product Categories";
  const categories = [
    "electronics",
    "jewelery",
    "men's clothing",
    "women's clothing",
  ];
  return (
    <section id="category-section" className="p-5">
      <p className="text-sm text-gray-500 mb-2">{title}</p>
      <div className="flex overflow-scroll category-hide-scroll-bar">
        <CategoryBtn categoryName='all' current={true} />
        {categories.map((category) => (
          <CategoryBtn key={category} categoryName={category} current={false} />
        ))}
      </div>
    </section>
  );
};

export default CategorySection;
