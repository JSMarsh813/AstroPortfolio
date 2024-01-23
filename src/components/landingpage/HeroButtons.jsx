import React from "react";

import GradientNavigationButton from "../buttons/GradientNavigationButton";

export default function HeroButtons() {
  return (
    <div className="py-10 flex space-x-4">
      <GradientNavigationButton
        text="ABOUT ME"
        aria="About me page button"
        link="/about/"
      />

      <GradientNavigationButton
        text="GET A FREE CONSULATION"
        aria="get a free consulation button"
        link="/#contact"
      />
    </div>
  );
}
