import { useStore } from "@nanostores/react";
import { isOpen } from "../store";
import { windowWidth } from "../store";
import DesktopNav from "./navigation/DesktopNav";
import { useState, useEffect } from "react";
// only add space if the navbar is open AND the screen is desktop sized
//aka only add space for desktop sidebar nav, not mobile nav
export default function SpaceForDesktopSidebar() {
  let windowWidthSize = windowWidth.value;
  let open = useStore(isOpen);

  const [windowSize, setWindowSize] = useState(window.innerWidth > 800);

  useEffect(() => {
    const windowSizeHandler = () => {
      setWindowSize(window.innerWidth > 800);
    };
    window.addEventListener("resize", windowSizeHandler);

    return () => {
      window.removeEventListener("resize", windowSizeHandler);
    };
  }, []);

  //desktop currently only checks useStore once, does not check for updates
  //if screen resized, double check if window.innerWidth is >800
  return (
    <>
      {open && window.innerWidth > 800 && (
        <div className="grow-0 shrink-0 basis-64 border-r-8 gradient-line">
          {/* div is not fixed OR flexed
          BUT we also don't want the div flexed, or it will shrink smaller than any given width
          Desktop nav will be fixed WITHIN the flexed div container */}
          <DesktopNav className="h-screen-full"></DesktopNav>
        </div>
      )}
    </>
  );
}
