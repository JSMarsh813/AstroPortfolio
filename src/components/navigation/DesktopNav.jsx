import { Disclosure, Transition } from "@headlessui/react";

const sidebar = () => {
  return (
    <div>
      {/*  ********************    MAIN NAV, DOTTED BACKGROUND*****************  */}
      <div
        id="sidebar"
        className={`fixed left-0 top-0 w-[250px] h-screen bg-mainColor pt-24 p-6 z-51 text-white border-r-4 gradient-line`}
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
    </div>
  );
};

export default sidebar;
