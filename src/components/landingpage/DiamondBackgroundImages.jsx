import React from "react";

export default function DiamondBackgroundImages({ imgSrc }) {
  return (
    <div class="my-auto mr-4 shadow-transition-effect icon gradient rotate-45">
      {/* image needs to be in div, so the image centers in the y axis correctly when the div rotated into a diamond shape */}
      <img
        src={`/images/${imgSrc}.svg`}
        class="min-w-24 p-4 shadow-transition-effect "
      />
    </div>
  );
}
