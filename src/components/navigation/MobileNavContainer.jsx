import React from "react";
import MobileNav from "./MobileNav";
import { useStore } from "@nanostores/react";
import { isNavOpen } from "../../store/navStore";

export default function MobileNavContainer() {
  const $isNavOpen = useStore(isNavOpen);
  return <div className="md:hidden">{$isNavOpen ? <MobileNav /> : null}</div>;
}
