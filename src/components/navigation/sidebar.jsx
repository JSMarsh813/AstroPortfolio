import React from "react";
import { useState } from "react";
import { Disclosure, Transition } from "@headlessui/react";

const sidebar = ({ open = false, setOpen, setUserClicked }) => {
  const [iconMenuClose, setIconMenuClose] = useState("icon-menu-close");

  return (
    <>
      <Transition show={open}>
        {/* Sliding sidebar */}
        <Transition.Child
          className="fixed left-0 top-0 w-[250px] z-30 h-screen"
          enter="transition ease-in-out duration-300 transform"
          enterFrom="translate-x-0"
          enterTo="translate-x-0"
          leave="transition ease-in-out duration-300 transform"
          leaveFrom="translate-x-0"
          leaveTo="-translate-x-full"
        >
          {/* ***********************TOGGABLE MENU ICONS WITH PLAIN BACKGROUND************* */}
          <div className="bg-mainColor pt-5 p-8 z-50 ">
            <button
              onClick={() => {
                setOpen(false);
                setUserClicked(true);
              }}
              aria-expanded={open}
              aria-controls="sidebar"
              aria-label="close Menu"
              className="text-shadow-lg text-shadow-white"
            >
              <img
                className=""
                src={`images/${iconMenuClose}.svg`}
                alt="Close SideBar"
                onMouseEnter={() => setIconMenuClose("icon-menu-close-bright")}
                onMouseOut={() => setIconMenuClose("icon-menu-close")}
              />
            </button>
          </div>
          {/*  ********************    MAIN NAV, DOTTED BACKGROUND*****************  */}
          <div
            id="sidebar"
            className={`left-0 top-20 w-[250px] h-screen bg-mainColor bg-dot-pattern  pt-5 p-8 z-51 gradient-line border-t-4`}
          >
            <ul className="flex flex-col space-y-3 pt-6 ">
              {/* ************************** FIRST ITEM ***********************  */}
              <li className="glow">HOME</li>

              <li>
                {/* ************************** PROJECTS/ DROPPABLE LIST ***********************  */}
                <Disclosure>
                  {({ open }) => (
                    <>
                      <Disclosure.Button className="flex items-center text-left">
                        <span className="mr-4 glow"> PROJECTS </span>
                        <img
                          className=""
                          src={`images/icon-arrow-${open ? "up" : "down"}.svg`}
                          alt="Arrow"
                        />
                      </Disclosure.Button>
                      <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm">
                        <ul className="flex flex-col space-y-3">
                          <li className="cursor-pointer glow">
                            NEWEST PROJECTS{" "}
                          </li>
                          <li className="cursor-pointer glow">
                            SIDE PROJECTS{" "}
                          </li>
                          <li className="cursor-pointer glow">
                            OLDER PROJECTS{" "}
                          </li>
                        </ul>
                      </Disclosure.Panel>
                    </>
                  )}
                </Disclosure>
              </li>
              <li className="glow">ABOUT ME</li>
              <li className="glow">SERVICES</li>
              <li className="glow">LANGUAGES</li>
              <li className="glow">CONTACT </li>
            </ul>

            <div className="flex flex-col space-y-5 items-center justify-items-center pt-8"></div>
          </div>
        </Transition.Child>
      </Transition>
    </>
  );
};

export default sidebar;
