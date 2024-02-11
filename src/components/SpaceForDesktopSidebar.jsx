import { useStore } from "@nanostores/react";
import { isOpen } from "../store";
import { windowWidth } from "../store";
import DesktopNav from "./navigation/DesktopNav";
// only add space if the navbar is open AND the screen is desktop sized
//aka only add space for desktop sidebar nav, not mobile nav
export default function SpaceForDesktopSidebar() {
  return (
    <>
      {useStore(isOpen) && windowWidth.value > 800 && (
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
