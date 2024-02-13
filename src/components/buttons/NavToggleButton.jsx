import { useState } from "react";
import { useEffect } from "react";
import { useStore } from "@nanostores/react";
import { isOpen } from "../../store";
import { userClicked } from "../../store";
import { windowWidth } from "../../store";

export default function NavToggleButton() {
  const [iconMenuClose, setIconMenuClose] = useState("icon-menu-close");
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
      windowWidth.set(window.innerWidth);
    };
    window.addEventListener("resize", windowSizeHandler);

    return () => {
      window.removeEventListener("resize", windowSizeHandler);
    };
  }, []);

  //   have navs automatically close below 800px, if user has not clicked the hamburger button
  useEffect(() => {
    if (userClickedStatus == false) {
      let resizeSidebarState = windowSize[0] > 800 ? true : false;
      isOpen.set(resizeSidebarState);
    } else {
      return;
    }
  }, [windowSize]);

  return (
    <div className={`bg-mainColor py-2 md:hidden`}>
      {open ? (
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
      ) : (
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
      )}
    </div>
  );
}
