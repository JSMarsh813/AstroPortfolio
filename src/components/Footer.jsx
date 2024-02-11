import { useStore } from "@nanostores/react";
import { isOpen } from "../store";
import { windowWidth } from "../store";

// only add space if the navbar is open AND the screen is desktop sized
//aka only add space for desktop sidebar nav, not mobile nav
export default function Footer() {
  let width = useStore(isOpen) && windowWidth.value > 800 ? "250px" : "0px";
  return (
    <>
      <footer
        id="footer"
        className={`ml-8 ml-[${width}] z-100`}
      >
        <small>&copy; Janet Spellman. All rights reserved.</small>
      </footer>
    </>
  );
}
