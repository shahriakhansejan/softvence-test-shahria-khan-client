import { FaFileCirclePlus } from "react-icons/fa6";
import { Select } from "antd";

const { Option } = Select;

const SelectBox = ({setSelectedItems, selectedItems, setSelectedCategory, selectedCategory}) => {

  const handleChange = (value) => {
    setSelectedCategory(value);
  };
  const handleChangeStatus = (value) => {
    setSelectedItems(value);
  };

  const option1 = ["Arts and Craft", "Nature", "Family", "Sports", "Friends", "Meditation"];
  const options = ["All Tasks", "Ongoing", "Pending", "Collaborative Task", "Done"];

  return (
    <div className="alFont flex items-end gap-4">
      {/* category */}
      <div className="min-w-[200px] w-full">
        <Select
          mode="multiple"
          allowClear
          placeholder="Select Task Category"
          value={selectedCategory}
          onChange={handleChange}
          className="w-full h-10"
        >
          {option1.map((item) => (
            <Option key={item} value={item}>
              <div className="flex items-center gap-2">
                <input
                  type="checkbox"
                  readOnly
                  checked={selectedCategory.includes(item)}
                  className="accent-[#60E5AE]"
                />
                <span>{item}</span>
              </div>
            </Option>
          ))}
        </Select>
      </div>

      {/* status */}
      <div className="min-w-[200px] w-full">
        <Select
          mode="multiple"
          allowClear
          placeholder="All Tasks"
          value={selectedItems}
          onChange={handleChangeStatus}
          className="w-full h-10"
        >
          {options.map((item) => (
            <Option key={item} value={item}>
              <div className="flex items-center gap-2">
                <input
                  type="checkbox"
                  readOnly
                  checked={selectedItems.includes(item)}
                  className="accent-[#60E5AE]"
                />
                <span>{item}</span>
              </div>
            </Option>
          ))}
        </Select>
      </div>

      {/* Add New Task Button */}
      <button className="btn btn-success border-none bg-[#60E5AE] mt-6">
        <FaFileCirclePlus className="mr-2" />
        Add New Task
      </button>
    </div>
  );
};

export default SelectBox;
