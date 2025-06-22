import { FaFileCirclePlus } from "react-icons/fa6";
import { Select } from "antd";
import { useForm } from "react-hook-form";
import moment from "moment";
import { useAddTaskMutation } from "../../../redux/feature/task/taskApi";
import { useEffect } from "react";
import Swal from "sweetalert2";

const { Option } = Select;

const SelectBox = ({
  setSelectedItems,
  selectedItems,
  setSelectedCategory,
  selectedCategory,
}) => {
  const { register, handleSubmit } = useForm();
  const [addTask, { data, isSuccess }] = useAddTaskMutation();

  const handleChange = (value) => {
    setSelectedCategory(value);
  };
  const handleChangeStatus = (value) => {
    setSelectedItems(value);
  };

  const option1 = [
    "Arts and Craft",
    "Nature",
    "Family",
    "Sports",
    "Friends",
    "Meditation",
  ];
  const options = [
    "All Tasks",
    "Ongoing",
    "Pending",
    "Collaborative Task",
    "Done",
  ];

  const onSubmit = (taskData) => {
    taskData.end = moment(taskData.end).format("YYYY-MM-DD HH:mm:ss");
    addTask(taskData);
  };

  useEffect(() => {
    if (isSuccess) {
      Swal.fire({
        position: "top-end",
        icon: "success",
        title: "Your Task Added Successfully",
        showConfirmButton: false,
        timer: 1500,
      });
      document.getElementById("my_modal_4").close();
    }
  }, [isSuccess]);

  return (
    <div className="alFont flex flex-col md:flex-row items-end gap-4">
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
      <button
        onClick={() => document.getElementById("my_modal_4").showModal()}
        className="btn btn-success border-none bg-[#60E5AE] mt-6"
      >
        <FaFileCirclePlus className="mr-2" />
        Add New Task
      </button>

      {/* modal */}
      <dialog id="my_modal_4" className="modal">
        <div className="modal-box w-11/12 max-w-4xl">
          <h3 className="font-bold text-3xl text-[#161616] text-center mb-6">
            Add New Task
          </h3>
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
            {/* Name */}
            <div>
              <label className="block font-semibold mb-1" htmlFor="name">
                Name
              </label>
              <input
                {...register("name", { required: true })}
                type="text"
                id="name"
                placeholder="Enter task name"
                className="input input-bordered w-full"
              />
            </div>

            {/* Description */}
            <div>
              <label className="block font-semibold mb-1" htmlFor="description">
                Description
              </label>
              <textarea
                {...register("des", { required: true })}
                id="description"
                placeholder="Enter task description"
                className="textarea textarea-bordered w-full"
                rows="4"
              ></textarea>
            </div>

            {/* Category */}
            <div>
              <label className="block font-semibold mb-1" htmlFor="category">
                Category
              </label>
              <select
                {...register("category", { required: true })}
                id="category"
                className="select select-bordered w-full"
              >
                <option value="">Select Category</option>
                <option value="Arts and Craft">Arts and Craft</option>
                <option value="Nature">Nature</option>
                <option value="Family">Family</option>
                <option value="Sports">Sports</option>
                <option value="Friends">Friends</option>
                <option value="Meditation">Meditation</option>
              </select>
            </div>

            {/* End Date */}
            <div>
              <label className="block font-semibold mb-1" htmlFor="end">
                End Date
              </label>
              <input
                {...register("end", { required: true })}
                type="datetime-local"
                id="end"
                className="input input-bordered w-full"
              />
            </div>

            {/* Actions */}
            <div className="modal-action justify-end pt-4">
              <button
                type="submit"
                className="btn btn-success border-none bg-[#60E5AE]"
              >
                Save Task
              </button>
              <button
                type="button"
                className="btn"
                onClick={() => document.getElementById("my_modal_4").close()}
              >
                Cancel
              </button>
            </div>
          </form>
        </div>
      </dialog>
    </div>
  );
};

export default SelectBox;
