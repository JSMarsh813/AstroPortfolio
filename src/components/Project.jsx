import React from "react";
import GradientNavigationButton from "./buttons/GradientNavigationButton";

export default function Projects({
  webmsrc,
  mp4src,
  vidTitles,
  projectTitle,
  projectLanguages,
  projectDescription,
  linkToCode,
  linkToLiveSite,
}) {
  return (
    <article>
      <video
        controls
        autoPlay
        muted
        loop
        width="100%"
      >
        <source
          src={`${webmsrc}`}
          title={vidTitles}
          type="video/mp4"
        />
        <source
          src={`${mp4src}`}
          title={vidTitles}
          type="video/webm"
        />
        Sorry, your browser doesn't support embedded videos.
      </video>
      <h3 class="project-titles">{projectTitle}</h3>

      <span class="project-coding-languages">{projectLanguages}</span>

      <p class="">{projectDescription}</p>

      <ul class="flex gap-4 my-10">
        <li>
          <GradientNavigationButton
            text={"Code"}
            aria="link to codebase"
            link={linkToCode}
            target={"_blank"}
            rel={"noopener noreferrer"}
          />
        </li>
        <li>
          <GradientNavigationButton
            text="View Live!"
            aria="link to codebase"
            link={linkToLiveSite}
            target={"_blank"}
            rel={"noopener noreferrer"}
          />
        </li>
      </ul>
    </article>
  );
}
