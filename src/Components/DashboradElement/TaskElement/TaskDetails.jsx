import { RiEdit2Fill } from "react-icons/ri";
import iconImg from "../../../assets/image/icons.png";
import { MdEditCalendar } from "react-icons/md";
import { GoDotFill } from "react-icons/go";
import { useNavigate, useParams } from "react-router";
import {
  useDeleteTaskMutation,
  useGetATaskQuery,
  useUpdateTaskStatusMutation,
} from "../../../redux/feature/task/taskApi";
import moment from "moment";
import { useEffect, useState } from "react";
import { Select } from "antd";
import Swal from "sweetalert2";
import objectImg from "../../../assets/image/OBJECTS.png";
import doneImg from "../../../assets/image/done.png";
import EditTask from "./EditTask";

const { Option } = Select;

const TaskDetails = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const { data: task } = useGetATaskQuery(id);

  const [updateTaskStatus, { isSuccess: updateSuccess }] =
    useUpdateTaskStatusMutation();
  const [deleteTask, { isSuccess }] = useDeleteTaskMutation();

  const [selectedStatus, setSelectedStatus] = useState(task?.status);
  const [lastStatus, setLastStatus] = useState("");

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
    setLastStatus(selectedStatus);
    updateTaskStatus({ id, status: selectedStatus });
  };

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
    if (isSuccess) {
      Swal.fire({
        position: "top-end",
        icon: "success",
        title: "Your Task has been Deleted",
        showConfirmButton: false,
        timer: 1500,
      });
      navigate("/");
    }
  }, [isSuccess, navigate]);

  useEffect(() => {
    if (updateSuccess && lastStatus === "Done") {
      Swal.fire({
        imageUrl: doneImg,
        imageAlt: "Success Image",
        showConfirmButton: false,
        timer: 2000,
        position: "top-middle",
      });
    }
  }, [updateSuccess, lastStatus]);

  return (
    <div className="bg-white shadow-2xl mb-6 rounded-lg p-4 sm:p-6 md:p-10 relative z-20 -mt-[60px] max-w-[1320px] mx-auto">
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border-b pb-6 sm:pb-[30px] border-gray-300">
        <h2 className="text-xl sm:text-2xl font-semibold text-[#1F1F1F]">Task Details</h2>
        <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4 w-full sm:w-auto">
          <button
            onClick={() => document.getElementById(id).showModal()}
            className="btn text-[#FFAB00] border-none bg-[#FFAB001A] text-sm sm:text-base"
          >
            <RiEdit2Fill /> Edit Task
          </button>
          <button
            onClick={() => navigate(-1)}
            className="btn btn-success border-none bg-[#60E5AE] text-sm sm:text-base"
          >
            Back
          </button>
        </div>
      </div>

      {/* modal Edit */}
      <dialog id={id} className="modal">
        <EditTask task={task} />
      </dialog>

      {/* details */}
      <div className="pt-6 sm:pt-[42px]">
        <div className="flex flex-col md:flex-row items-start gap-4 sm:gap-6">
          <img className="w-16 sm:w-auto" src={iconImg} alt="icon" />

          <div className="w-full">
            <h1 className="font-semibold text-2xl sm:text-[31px] text-[#161616]">
              {task?.name}
            </h1>
            <p className="text-base sm:text-lg text-justify font-normal text-[#667085] mt-2 sm:mt-0">
              {task?.des}
            </p>
            <div className="py-8 sm:py-16 flex flex-col sm:flex-row gap-6 sm:gap-11">
              <div className="border-b sm:border-b-0 sm:border-r border-gray-300 pb-6 sm:pb-0 sm:pr-6 md:pr-14">
                <h2 className="font-semibold text-base sm:text-lg text-[#1F1F1F]">
                  End Date
                </h2>
                <p className="flex text-[#1F1F1F] items-center gap-3 text-lg sm:text-[21px] mt-3 sm:mt-[18px] font-normal">
                  <MdEditCalendar />{" "}
                  {moment(task?.end).format("dddd, MMMM D - YYYY")}
                </p>
              </div>
              <p
                className={`flex items-center gap-3 text-xl sm:text-2xl md:text-[32px] font-medium ${
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
                className="w-full sm:w-64"
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
      <div className="flex flex-col sm:flex-row justify-end gap-4 sm:gap-5 mt-8 sm:mt-16 md:mt-32">
        <div className="w-full sm:w-1/4">
          <button
            onClick={() => handleTaskDelete(id)}
            className="w-full btn bg-[#FF4C24]/10 text-[#FF4C24] border-none"
          >
            Delete Task
          </button>
        </div>
        <div className="w-full sm:w-1/4">
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