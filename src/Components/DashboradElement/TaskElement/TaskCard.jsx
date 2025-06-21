import iconImg from "../../../assets/image/icons.png";
import { GoDotFill } from "react-icons/go";
import { MdEditCalendar } from "react-icons/md";
import { RiDeleteBin6Line } from "react-icons/ri";
import { useGetTaskQuery } from "../../../redux/feature/task/taskApi";
import moment from "moment";
import FrameImg from "../../../assets/image/Frame.svg";
import { useEffect } from "react";
import { Link } from "react-router";

const TaskCard = ({ selectedItems, selectedCategory }) => {
  const { data: tasks, isLoading } = useGetTaskQuery({
    selectedItems,
    selectedCategory,
  });

  console.log(tasks);

  useEffect(() => {
    if (isLoading) {
      <p>Loading...</p>;
    }
  }, [isLoading]);

  return (
    <div>
      {tasks ? (
        <div className="mt-14 grid grid-cols-3 gap-6">
          {tasks?.map((task) => (
            <Link to={`/task-details/${task._id}`} key={task._id}>
              <div
                className="border border-gray-300 p-5 shadow rounded"
              >
                <div className="flex justify-between">
                  <div className="flex gap-[14px] items-start">
                    <img src={iconImg} alt="icon" />
                    <span>
                      <h1 className="text-2xl font-semibold text-[#161616]">
                        {task.name}
                      </h1>
                      <p className="text-sm text-[#667085] text-justify">
                        {task.des.slice(0, 99)}...
                      </p>
                    </span>
                  </div>

                  <span className="text-xl text-[#FF4C24]">
                    <RiDeleteBin6Line />
                  </span>
                </div>
                <div className="flex justify-between mt-7">
                  <p className="flex text-[#1F1F1F] items-center gap-3 text-sm font-normal">
                    <MdEditCalendar />
                    {moment(task.end).format("dddd, MMMM D - YYYY")}
                  </p>
                  <p
                    className={`flex items-center gap-3 text-sm font-medium ${
                      task.status === "InProgress"
                        ? "text-[#DD9221]"
                        : task.status === "Done"
                        ? "text-[#21D789]"
                        : task.status === "Pending"
                        ? "text-[#E343E6]"
                        : task.status === "Ongoing"
                        ? "text-[#1E90FF]"
                        : task.status === "Collaborative Task"
                        ? "text-[#FF7F50]"
                        : "text-gray-400"
                    }`}
                  >
                    <GoDotFill /> {task.status}
                  </p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      ) : (
        <div className="py-28 flex flex-col justify-center items-center">
          <img src={FrameImg} alt="Frame" />
          <h2 className="text-2xl mt-7 font-semibold text-[#1F1F1F]">
            No Task is Available yet, Please Add your New Task
          </h2>
        </div>
      )}
    </div>
  );
};

export default TaskCard;
