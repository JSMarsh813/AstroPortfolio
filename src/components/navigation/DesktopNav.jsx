import { useState } from "react";
import { Disclosure, Transition } from "@headlessui/react";
import { useStore } from "@nanostores/react";
import { isOpen } from "../../store";
import { userClicked } from "../../store";

const sidebar = () => {
  const [iconMenuClose, setIconMenuClose] = useState("icon-menu-close");
  let open = useStore(isOpen);

  return (
    <>
      <Transition show={open}>
        {/* Sliding sidebar */}

        <Transition.Child
          className="fixed left-0 top-0 w-[250px] h-screen"
          enter="transition ease-in-out duration-600 transform"
          enterFrom="translate-x-0"
          enterTo="translate-x-0"
          leave="transition ease-in-out duration-600 transform"
          leaveFrom="translate-x-0"
          leaveTo="-translate-x-full"
        >
          <div className="bg-mainColor border-b-2 gradient-line">
            <button
              onClick={() => {
                isOpen.set(false);
                userClicked.set(true);
              }}
              aria-expanded={open}
              aria-controls="sidebar"
              aria-label="close Menu"
              className="text-shadow-lg text-shadow-white pl-2 mt-2"
            >
              <a
                className="skip-link right-5 top-5 p-3"
                href="#social"
              >
                Skip to social links
              </a>

              <img
                className=""
                src={`/images/${iconMenuClose}.svg`}
                alt="Close SideBar"
                onMouseEnter={() => setIconMenuClose("icon-menu-close-bright")}
                onMouseOut={() => setIconMenuClose("icon-menu-close")}
              />
            </button>
          </div>

          {/*  ********************    MAIN NAV, DOTTED BACKGROUND*****************  */}
          <div
            id="sidebar"
            className={`left-0 top-20 w-[250px] h-screen bg-mainColor pt-5 p-8 z-51 text-white`}
            style={{ backgroundImage: `url("/images/dotsBackground.png")` }}
          >
            <ul className="flex flex-col space-y-3 pt-6 bg-mainColor text-center">
              {/* ************************** FIRST ITEM ***********************  */}
              <li className="glow gradient-line border-b-2 pb-1">
                <a href="/#home">
                  <span className="text-center">HOME</span>
                </a>
              </li>

              <li className="gradient-line border-b-2 pb-1">
                {/* ************************** PROJECTS/ DROPPABLE LIST ***********************  */}
                <Disclosure>
                  {({ open }) => (
                    <>
                      <Disclosure.Button className="flex mx-auto ">
                        <span className="pl-6 mr-2 glow ">PROJECTS </span>
                        <img
                          className=""
                          src={`/images/icon-arrow-${open ? "up" : "down"}.svg`}
                          alt="Arrow"
                        />
                      </Disclosure.Button>
                      <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm">
                        <ul className="flex flex-col space-y-3">
                          <li className="cursor-pointer glow ">
                            <a href="/#projects">NEWEST PROJECTS</a>
                          </li>

                          <li className="cursor-pointer glow">
                            <a href="/otherprojects/">OTHER PROJECTS</a>
                          </li>
                        </ul>
                      </Disclosure.Panel>
                    </>
                  )}
                </Disclosure>
              </li>

              <li className="glow gradient-line border-b-2 pb-1">
                <a href="/about/">ABOUT ME</a>
              </li>

              <li className="glow gradient-line border-b-2 pb-1">
                <a href="/#services">
                  <span>SERVICES</span>
                </a>
              </li>

              <li className="glow gradient-line border-b-2 pb-1">
                <a href="/#process">THE PROCESS</a>
              </li>

              <li className="glow gradient-line border-b-2 pb-1">
                <a href="/#skills">SKILLS</a>
              </li>

              <li className="glow gradient-line border-b-2 pb-1">
                <a href="/#contact">CONTACT</a>
              </li>
            </ul>

            <div className="flex flex-col space-y-5 items-center justify-items-center pt-8"></div>
          </div>
        </Transition.Child>
      </Transition>
    </>
  );
};

export default sidebar;
