import { Outlet, useLocation } from "react-router";
import Nav from "../Shared/Nav";

const Root = () => {
  const location = useLocation();

  const hideNavRoutes = ["/sign-in", "/sign-up", "/"];

  const shouldHideNav = hideNavRoutes.includes(location.pathname);

  return (
    <div>
      {!shouldHideNav && <Nav />}
      <Outlet />
    </div>
  );
};

export default Root;
