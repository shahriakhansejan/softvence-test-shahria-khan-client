import { CgProfile } from "react-icons/cg";
import { CiStopwatch } from "react-icons/ci";
import { IoIosArrowDown } from "react-icons/io";
import { MdTask } from "react-icons/md";
import { PiSpinnerBall } from "react-icons/pi";
import { NavLink } from "react-router";
import leftImg from "../../assets/image/left.png";
import rightImg from "../../assets/image/right.png";
import dashImg from "../../assets/image/dash.png";

const Banner = () => {
  return (
    <div className="relative h-[306px] bg-[#040612] overflow-hidden">
      {/* Background Images */}
      <img
        src={leftImg}
        alt="Left Decoration"
        className="absolute top-0 left-0 z-0"
      />
      <img
        src={rightImg}
        alt="Right Decoration"
        className="absolute bottom-0 right-0 z-0"
      />
      <img
        src={dashImg}
        alt="Dash Decoration"
        className="absolute right-0 top-1/2 -translate-y-1/2 z-0"
      />

      <div className="flex z-20 text-white max-w-[1306px] py-8 mx-auto">
        <div className="w-1/2">
          <div className="flex justify-between items-center">
            <h2 className="text-2xl font-semibold flex items-center gap-2">
              <span className="bg-white/25 p-1 rounded">
                <CiStopwatch />
              </span>
              Tasko
            </h2>

            <ul className="flex items-center gap-12 activeNav text-lg font-medium">
              <NavLink to="/">
                {" "}
                <li className="flex items-center gap-2">
                  <span>
                    <MdTask />
                  </span>
                  Task List
                </li>
              </NavLink>
              <NavLink to="/spin">
                <li className="flex items-center gap-2">
                  <span>
                    <PiSpinnerBall />
                  </span>
                  Spin
                </li>
              </NavLink>
            </ul>
          </div>
          <div className="pt-12">
            <h3 className="text-2xl font-semibold text-[#60E5AE]">
              Hi, Thomas
            </h3>
            <h1 className="font-semibold text-[40px]">Welcome to Dashboard</h1>
          </div>
        </div>

        <div className="w-1/2 text-end">
          <div className="dropdown dropdown-end">
            <div
              tabIndex={0}
              role="button"
              className="m-1 flex items-center gap-2 text-lg font-medium"
            >
              <CgProfile /> Name <IoIosArrowDown />
            </div>
            <ul
              tabIndex={0}
              className="dropdown-content menu rounded-box z-1 w-36 bg-white/25 p-2 shadow-sm"
            >
              <li>
                <a>Item 1</a>
              </li>
              <li>
                <a>Item 2</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
