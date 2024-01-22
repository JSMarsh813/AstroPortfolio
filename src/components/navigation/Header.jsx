import { useState } from "react";
import Sidebar from "./sidebar";
import { useRef, useEffect } from "react";
import React from "react";

export default function Header() {
  const [userClicked, setUserClicked] = useState(false);
  // as the screen gets resized, we want to change whether the sidebar is shown or not
  // but we also want to give the user the ability to open and close it at any screen size as well, so we can't just focus on media breaks for this behavior
  const [open, setOpen] = useState(false);
  const [windowSize, setWindowSize] = useState([
    window.innerHeight,
    window.innerWidth,
  ]);

  const [hamburgerImage, setHamburgerImage] = useState("");

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
    if (userClicked == false) {
      windowSize[0] > 800 ? setOpen(true) : setOpen(false);
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
          setOpen(true);
          setUserClicked(true);
        }}
        aria-expanded={open}
        aria-controls="sidebar"
        aria-label="Open Menu"
        className={`pl-2 ${open && "hidden"} bg-mainColor`}
      >
        {/* https://upmostly.com/tutorials/react-onhover-event-handling-with-examples */}

        <img
          src={`images/icon-menu-hamburger${hamburgerImage}.svg`}
          alt="open menu"
          onMouseEnter={() => setHamburgerImage("-bright")}
          onMouseOut={() => setHamburgerImage("")}
        />
      </button>

      {/* Actual sidebar */}
      <div className="">
        <Sidebar
          open={open}
          setOpen={setOpen}
          userClicked={userClicked}
          setUserClicked={setUserClicked}
        />
      </div>
    </div>
  );
}
