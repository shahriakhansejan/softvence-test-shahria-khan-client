import SelectBox from "./Selectbox";
import TaskCard from "./TaskCard";
import { useState } from "react";

const Task = () => {
  const [selectedCategory, setSelectedCategory] = useState([]);
  const [selectedItems, setSelectedItems] = useState([]);

  return (
    <div className="bg-white shadow-2xl mb-6 rounded-lg p-3 lg:p-10 relative z-20 -mt-[60px] max-w-[1320px] mx-auto">
      <div className="flex flex-col lg:flex-row items-center justify-between">
        <h2 className="text-2xl font-semibold text-[#1F1F1F]">All Task List</h2>
        <div>
          <SelectBox
            selectedCategory={selectedCategory}
            setSelectedCategory={setSelectedCategory}
            selectedItems={selectedItems}
            setSelectedItems={setSelectedItems}
          />
        </div>
      </div>

      {/* tasks */}
      <TaskCard selectedCategory={selectedCategory} selectedItems={selectedItems}/>
    </div>
  );
};

export default Task;
