import { useState } from "react";
import DesktopNav from "./DesktopNav";
import { useEffect } from "react";
import { useStore } from "@nanostores/react";
import { isOpen } from "../../store";
import { userClicked } from "../../store";
import { windowWidth } from "../../store";
import MobileNav from "./MobileNav";
import SocialLinksNav from "./SocialLinksNav";

export default function Header() {
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

  //have navs automatically close below 800px, if user has not clicked the hamburger button
  useEffect(() => {
    if (userClickedStatus == false) {
      let resizeSidebarState = windowSize[0] > 800 ? true : false;
      isOpen.set(resizeSidebarState);
    } else {
      return;
    }
  }, [windowSize]);

  return (
    <div className="text-white">
      {/* Button to open sidebar 
         if the sidebar is open, this button will be hidden*/}
      <div className="flex justify-between">
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
        <SocialLinksNav />
      </div>

      {/* * * * * * * * * * * * * *mobile nav bar * * * * * * * */}
      {/* //we only want the nav bar to open if its been clicked by user, otherwise if screen is shrunk down, hide mobile nav */}
      <div className="">
        {windowWidth.value < 800 && open && <MobileNav open={open} />}
      </div>
    </div>
  );
}
