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
  loadingtype,
  readmeLink,
}) {
  return (
    <article>
      {(webmsrc || mp4src) && (
        <video
          controls
          autoPlay
          muted
          loop
        >
          <source
            src={`${webmsrc}`}
            title={vidTitles}
            type="video/webm"
            loading={loadingtype}
          />
          <source
            src={`${mp4src}`}
            title={vidTitles}
            type="video/mp4"
            loading={loadingtype}
          />
          Sorry, your browser doesn't support embedded videos.
        </video>
      )}
      {imgsrc && (
        <img
          src={`${imgsrc}`}
          title={vidTitles}
          className="h-48 md:h-64"
          loading={loadingtype}
        />
      )}

      <h3 className="project-titles">{projectTitle}</h3>

      <span className="project-coding-languages">{projectLanguages}</span>

      <p className="">{projectDescription}</p>

      <ul className="gap-4 my-10 flex">
        {linkToCode && (
          <li>
            <GradientNavigationButton
              text={"Code"}
              aria="link to codebase"
              link={linkToCode}
              target={"_blank"}
              rel={"noopener noreferrer"}
            />
          </li>
        )}
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
        {readmeLink && (
          <li>
            <GradientNavigationButton
              text="Readme Link!"
              aria="readme Link!"
              link={readmeLink}
              target={"_blank"}
              rel={"noopener noreferrer"}
            />
          </li>
        )}
      </ul>
    </article>
  );
}
