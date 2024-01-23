import { useStore } from "@nanostores/react";
import { isOpen } from "../store";

export default function SpaceForSidebar() {
  console.log(useStore(isOpen));
  return <>{useStore(isOpen) && <div className="h-screen-full mr-56"></div>}</>;
}
