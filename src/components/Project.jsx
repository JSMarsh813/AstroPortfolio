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
}) {
  return (
    <article>
      <div className="h-56 md:h-80">
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
              className="h-48 md:h-64"
              type="video/webm"
              loading={loadingtype}
            />
            <source
              src={`${mp4src}`}
              title={vidTitles}
              className="h-48 md:h-64"
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
            // style={{ maxHeight: "255px", minHeight: "200px" }}
            className="h-48 md:h-64"
            loading={loadingtype}
          />
        )}
      </div>
      <h3 className="project-titles">{projectTitle}</h3>

      <span className="project-coding-languages">{projectLanguages}</span>

      <p className="">{projectDescription}</p>

      <ul className="gap-4 my-10 flex">
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
