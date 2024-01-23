import React from "react";
import GradientNavigationButton from "./buttons/GradientNavigationButton";

export default function Projects({
  webmsrc,
  mp4src,
  imgsrc,
  vidTitles,
  projectTitle,
  projectLanguages,
  projectDescription,
  linkToCode,
  linkToLiveSite,
}) {
  return (
    <article>
      {(webmsrc || mp4src) && (
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
      )}
      {imgsrc && (
        <img
          src={`${imgsrc}`}
          title={vidTitles}
          class="h-auto max-w-full aspect-video"
        />
      )}
      <h3 className="project-titles">{projectTitle}</h3>

      <span className="project-coding-languages">{projectLanguages}</span>

      <p className="">{projectDescription}</p>

      <ul className="flex gap-4 my-10 flex">
        <li>
          <GradientNavigationButton
            text={"Code"}
            aria="link to codebase"
            link={linkToCode}
            target={"_blank"}
            rel={"noopener noreferrer"}
          />
        </li>
        {linkToLiveSite && (
          <li>
            <GradientNavigationButton
              text="View Live!"
              aria="View Live!"
              link={linkToLiveSite}
              target={"_blank"}
              rel={"noopener noreferrer"}
            />
          </li>
        )}
      </ul>
    </article>
  );
}
