import { useState } from "react";

export default function NavToggleButton() {
  const [iconMenuClose, setIconMenuClose] = useState("icon-menu-close");
  const [hamburgerImage, setHamburgerImage] = useState("");
  const [openNav, setOpenNav] = useState(false);

  return (
    <div className={`bg-mainColor md:hidden flex justify-center`}>
      {openNav ? (
        <button
          onClick={() => {
            setOpenNav(false);
          }}
          aria-expanded={open}
          aria-controls="sidebar"
          aria-label="close Menu"
          className="pl-2"
        >
          <img
            className=""
            src={`/images/${iconMenuClose}.svg`}
            alt="Close SideBar"
            onMouseEnter={() => setIconMenuClose("icon-menu-close-bright")}
            onMouseOut={() => setIconMenuClose("icon-menu-close")}
          />
        </button>
      ) : (
        <button
          onClick={() => {
            setOpenNav(true);
          }}
          aria-expanded={open}
          aria-controls="sidebar"
          aria-label="Open Menu"
          className={`pl-2`}
        >
          {/* https://upmostly.com/tutorials/react-onhover-event-handling-with-examples */}

          <img
            src={`/images/icon-menu-hamburger${hamburgerImage}.svg`}
            alt="open menu"
            onMouseEnter={() => setHamburgerImage("-bright")}
            onMouseOut={() => setHamburgerImage("")}
          />
        </button>
      )}
    </div>
  );
}
