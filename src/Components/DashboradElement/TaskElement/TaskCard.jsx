import iconImg from "../../../assets/image/icons.png";
import objectImg from "../../../assets/image/OBJECTS.png";
import { GoDotFill } from "react-icons/go";
import { MdEditCalendar } from "react-icons/md";
import { RiDeleteBin6Line } from "react-icons/ri";
import {
  useDeleteTaskMutation,
  useGetTaskQuery,
} from "../../../redux/feature/task/taskApi";
import moment from "moment";
import FrameImg from "../../../assets/image/Frame.svg";
import { useEffect } from "react";
import { Link } from "react-router";
import Swal from "sweetalert2";

const TaskCard = ({ selectedItems, selectedCategory }) => {
  const { data: tasks, isLoading } = useGetTaskQuery({
    selectedItems,
    selectedCategory,
  });

  const [deleteTask] = useDeleteTaskMutation();

  const handleTaskDelete = (id) => {
    Swal.fire({
      title: "<strong>Are you Sure!!</strong>",
      html: "Do you want to delete this Task on this app?",
      imageUrl: objectImg,
      imageAlt: "Delete Illustration",
      showCancelButton: true,
      confirmButtonText: "Yes",
      cancelButtonText: "No",
      reverseButtons: true,
      buttonsStyling: false,
      customClass: {
        popup: "rounded-xl",
        title: "text-xl font-semibold",
        htmlContainer: "text-sm text-gray-500",
        confirmButton:
          "bg-[#60E5AE] text-white px-5 py-2 rounded hover:bg-green-600 ml-3",
        cancelButton:
          "bg-red-200 text-red-600 px-5 py-2 rounded hover:bg-red-300",
      },
    }).then((result) => {
      if (result.isConfirmed) {
        deleteTask(id);
      }
    });
  };

  useEffect(() => {
    if (isLoading) {
      <p>Loading...</p>;
    }
  }, [isLoading]);

  return (
    <div>
      {tasks?.result ? (
        <div className="mt-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6">
          {tasks?.result?.map((task) => (
            <div
              key={task._id}
              className="border border-gray-300 p-5 shadow rounded"
            >
              <div className="flex justify-between">
                <Link to={`/task-details/${task._id}`}>
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
                </Link>

                <span role="button"
                  onClick={() => handleTaskDelete(task._id)}
                  className="text-xl text-[#FF4C24]"
                >
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
