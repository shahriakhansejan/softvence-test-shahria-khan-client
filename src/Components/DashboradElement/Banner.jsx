import { CgProfile } from "react-icons/cg";
import { CiStopwatch } from "react-icons/ci";
import { IoIosArrowDown } from "react-icons/io";
import { MdTask } from "react-icons/md";
import { PiSpinnerBall } from "react-icons/pi";
import { NavLink } from "react-router";
import leftImg from "../../assets/image/left.png";
import rightImg from "../../assets/image/right.png";
import dashImg from "../../assets/image/dash.png";
import { useLogoutUserMutation } from "../../redux/feature/user/userApi";

const Banner = () => {
  const [logoutUser] = useLogoutUserMutation();
  return (
    <div className="relative h-[306px] bg-[#040612] overflow-hidden">
      {/* Background Images - Made responsive */}
      <img
        src={leftImg}
        alt="Left Decoration"
        className="absolute top-0 left-0 z-0 h-full md:h-auto"
      />
      <img
        src={rightImg}
        alt="Right Decoration"
        className="absolute bottom-0 right-0 z-0 h-full md:h-auto"
      />
      <img
  src={dashImg}
  alt="Dash Decoration"
  className="absolute right-0 top-1/2 -translate-y-1/2 z-0 h-24 md:h-auto"
/>


      <div className="flex z-40 text-white max-w-[1306px] py-8 mx-auto px-4 sm:px-6">
        <div className="w-full md:w-1/2">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
            <h2 className="text-xl sm:text-2xl font-semibold flex items-center gap-2">
              <span className="bg-white/25 p-1 rounded">
                <CiStopwatch />
              </span>
              Tasko
            </h2>

            <ul className="flex items-center gap-4 sm:gap-12 text-sm sm:text-base activeNav">
              <NavLink to="/">
                <li className="flex items-center gap-1 sm:gap-2">
                  <span>
                    <MdTask />
                  </span>
                  Task List
                </li>
              </NavLink>
              <NavLink to="/spin">
                <li className="flex items-center gap-1 sm:gap-2">
                  <span>
                    <PiSpinnerBall />
                  </span>
                  Spin
                </li>
              </NavLink>
            </ul>
          </div>
          <div className="pt-8 sm:pt-12">
            <h3 className="text-xl sm:text-2xl font-semibold text-[#60E5AE]">
              Hi, Thomas
            </h3>
            <h1 className="font-semibold text-2xl md:text-3xl sm:text-[40px]">
              Welcome to Dashboard
            </h1>
          </div>
        </div>

        <div className="w-full md:w-1/2 text-end block">
          <div className="dropdown dropdown-end">
            <div
              tabIndex={0}
              role="button"
              className="m-1 flex items-center gap-2 text-base font-medium"
            >
              <CgProfile /> Name <IoIosArrowDown />
            </div>
            <ul
              tabIndex={0}
              className="dropdown-content menu rounded-box z-1 w-36 bg-white/25 p-2 shadow-sm"
            >
              <button onClick={()=>logoutUser()}>Log OUt</button>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;