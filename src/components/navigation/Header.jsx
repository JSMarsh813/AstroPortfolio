import { useState } from "react";
import Sidebar from "./sidebar";
import { useEffect } from "react";
import { useStore } from "@nanostores/react";
import { isOpen } from "../../store";
import { userClicked } from "../../store";

export default function Header() {
  const [hamburgerImage, setHamburgerImage] = useState("");
  let open = useStore(isOpen);
  let userClickedStatus = useStore(userClicked);

  const [windowSize, setWindowSize] = useState([
    window.innerWidth,
    window.innerHeight,
  ]);

  useEffect(() => {
    const windowSizeHandler = () => {
      setWindowSize([window.innerWidth, window.innerHeight]);
    };
    window.addEventListener("resize", windowSizeHandler);

    return () => {
      window.removeEventListener("resize", windowSizeHandler);
    };
  }, []);

  useEffect(() => {
    if (userClickedStatus == false) {
      let resizeSidebarState = windowSize[0] > 800 ? true : false;
      isOpen.set(resizeSidebarState);
    } else {
      return;
    }
  }, [windowSize]);

  return (
    <div className="flex text-white">
      {/* Button to open sidebar 
         if the sidebar is open, this button will be hidden*/}
      <button
        onClick={() => {
          isOpen.set(true);
          userClicked.set(true);
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

      {/* Actual sidebar */}
      <div className="">
        <Sidebar open={open} />
      </div>
    </div>
  );
}
