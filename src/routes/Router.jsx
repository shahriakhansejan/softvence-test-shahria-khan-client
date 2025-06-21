import { Routes, Route } from "react-router";
import Root from "../Components/layout/Root";
import SingUp from "../Pages/SingUp";
import SingIn from "../Pages/SingIn";
import Dashboard from "../Pages/Dashboard";
import TaskDetails from "../Components/DashboradElement/TaskElement/TaskDetails";
import ResetPassword from "../Pages/ResetPassword";
import SpinWheel from "../Pages/SpinWheel";

const Router = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Root />}>
          <Route index element={<Dashboard />} />
          <Route path="/spin" element={<SpinWheel />} />
          <Route path="/task-details/:id" element={<TaskDetails />} />
          <Route path="/sign-up" element={<SingUp />} />
          <Route path="/sign-in" element={<SingIn />} />
          <Route path="/reset" element={<ResetPassword />} />
        </Route>
      </Routes>
    </div>
  );
};

export default Router;
