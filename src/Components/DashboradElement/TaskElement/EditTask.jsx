import React, { useEffect } from "react";
import moment from "moment";
import { useForm } from "react-hook-form";
import { useUpdateTaskMutation } from "../../../redux/feature/task/taskApi";
import Swal from "sweetalert2";
import { useNavigate } from "react-router";

const EditTask = ({ task }) => {
  const { register, handleSubmit, reset } = useForm();
  const [updateTask, {data ,isSuccess}] = useUpdateTaskMutation();
  const navigate = useNavigate();

  console.log(data)

  useEffect(() => {
    if (task) {
      reset({
        name: task.name || "",
        des: task.des || "",
        category: task.category || "",
        end: task.end ? moment(task.end).format("YYYY-MM-DDTHH:mm") : "",
      });
    }
  }, [task, reset]);

  const onSubmit = (data) => {
    data.end = moment(data.end).format("YYYY-MM-DD HH:mm:ss");
    updateTask({id: task?._id ,data})
  };

  useEffect(() => {
      if (isSuccess) {
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "Task details Updated",
          showConfirmButton: false,
          timer: 1500,
        });
        navigate("/");
      }
    }, [isSuccess, navigate]);

  return (
    <div className="modal-box w-11/12 max-w-4xl">
      <h3 className="font-bold text-3xl text-[#161616] text-center mb-6">
        Edit Task
      </h3>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        {/* Name */}
        <div>
          <label className="block font-semibold mb-1" htmlFor="name">Name</label>
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
          <label className="block font-semibold mb-1" htmlFor="description">Description</label>
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
          <label className="block font-semibold mb-1" htmlFor="category">Category</label>
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
          <label className="block font-semibold mb-1" htmlFor="end">End Date</label>
          <input
            {...register("end", { required: true })}
            type="datetime-local"
            id="end"
            className="input input-bordered w-full"
          />
        </div>

        {/* Actions */}
        <div className="modal-action justify-end pt-4">
          <button type="submit" className="btn btn-success border-none bg-[#60E5AE]">
            Save Task
          </button>
          <button
            type="button"
            className="btn"
            onClick={() => document.getElementById(task?._id).close()}
          >
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
};

export default EditTask;
