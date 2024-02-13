import { windowWidth } from "../../store";
import MobileNav from "./MobileNav";
import NavToggleButton from "../buttons/NavToggleButton";

export default function Header() {
  return (
    <div className="text-white">
      {/* Button to open sidebar 
         if the sidebar is open, this button will be hidden*/}
      {/* <div className="flex justify-between">
        <NavToggleButton />
        <SocialLinksNav />
      </div> */}

      {/* * * * * * * * * * * * * *mobile nav bar * * * * * * * */}
      {/* //we only want the nav bar to open if its been clicked by user, otherwise if screen is shrunk down, hide mobile nav */}
      <div className="md:hidden">
        {/* 
      windowWidth.value < 800 && open && */}
        <MobileNav open={open} />
      </div>
    </div>
  );
}
