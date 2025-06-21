import { RiEdit2Fill } from "react-icons/ri";
import iconImg from "../../../assets/image/icons.png";
import { MdEditCalendar } from "react-icons/md";
import { GoDotFill } from "react-icons/go";
import { useNavigate, useParams } from "react-router";
import {
  useGetATaskQuery,
  useUpdateTaskStatusMutation,
} from "../../../redux/feature/task/taskApi";
import moment from "moment";
import { useState } from "react";
import { Select } from "antd";

const { Option } = Select;

const TaskDetails = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const { data: task } = useGetATaskQuery(id);

  const [updateTaskStatus, { data }] = useUpdateTaskStatusMutation();

  const [selectedStatus, setSelectedStatus] = useState(task?.status);

  const statusOptions = [
    "InProgress",
    "Ongoing",
    "Pending",
    "Collaborative Task",
    "Done",
  ];

  const handleChange = (value) => {
    setSelectedStatus(value);
  };

  const handleOnclick = ({ selectedStatus, id }) => {
    updateTaskStatus({ id, status: selectedStatus });
    console.log({ id, status: selectedStatus });
  };
  return (
    <div className="bg-white shadow-2xl mb-6 rounded-lg p-10 relative z-20 -mt-[60px] max-w-[1320px] mx-auto">
      <div className="flex items-center justify-between border-b pb-[30px] border-gray-300">
        <h2 className="text-2xl font-semibold text-[#1F1F1F]">Task Details</h2>
        <div className="alFont flex items-center gap-4">
          <button className="btn text-[#FFAB00] border-none bg-[#FFAB001A]">
            <RiEdit2Fill /> Edit Task
          </button>
          <button
            onClick={() => navigate(-1)}
            className="btn btn-success border-none bg-[#60E5AE]"
          >
            Back
          </button>
        </div>
      </div>

      <div className="pt-[42px]">
        <div className="flex items-start gap-6">
          <img className="" src={iconImg} alt="icon" />

          <div>
            <h1 className="font-semibold text-[31px] text-[#161616]">
              {task?.name}
            </h1>
            <p className="text-lg text-justify font-normal text-[#667085]">
              {task?.des}
            </p>
            <div className="py-16 flex gap-11">
              <div className="border-r border-gray-300 pr-14">
                <h2 className="font-semibold text-lg text-[#1F1F1F]">
                  End Date
                </h2>
                <p className="flex text-[#1F1F1F] items-center gap-3 text-[21px] mt-[18px] font-normal">
                  <MdEditCalendar />{" "}
                  {moment(task?.end).format("dddd, MMMM D - YYYY")}
                </p>
              </div>
              <p
                className={`flex items-center gap-3 text-[32px] font-medium ${
                  task?.status === "InProgress"
                    ? "text-[#DD9221]"
                    : task?.status === "Done"
                    ? "text-[#21D789]"
                    : task?.status === "Pending"
                    ? "text-[#E343E6]"
                    : task?.status === "Ongoing"
                    ? "text-[#1E90FF]"
                    : task?.status === "Collaborative Task"
                    ? "text-[#FF7F50]"
                    : "text-gray-400"
                }`}
              >
                <GoDotFill /> {task?.status}
              </p>
            </div>
            <div className="text-[#1F1F1F]">
              <h2 className="font-semibold mb-2">Changing Status</h2>
              <Select
                value={selectedStatus}
                onChange={handleChange}
                placeholder={task?.status}
                className="w-64"
              >
                {statusOptions.map((status) => (
                  <Option key={status} value={status}>
                    <div className="flex items-center gap-2">
                      <input
                        type="checkbox"
                        readOnly
                        checked={selectedStatus === status}
                        className="accent-[#60E5AE]"
                      />
                      <span>{status}</span>
                    </div>
                  </Option>
                ))}
              </Select>
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-end gap-5 mt-32">
        <div className="w-1/4">
          <button className="w-full btn bg-[#FF4C24]/10 text-[#FF4C24] border-none">
            Delete Task
          </button>
        </div>
        <div className="w-1/4">
          <button
            onClick={() => handleOnclick({ selectedStatus, id })}
            className="w-full btn btn-success border-none bg-[#60E5AE]"
          >
            Submit
          </button>
        </div>
      </div>
    </div>
  );
};

export default TaskDetails;
