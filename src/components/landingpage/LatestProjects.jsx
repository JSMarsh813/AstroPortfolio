import React from "react";
import Project from "../Project";
export default function LatestProjects() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
      <Project
        webmsrc={"images/petProfileTailor.webm"}
        mp4src={"images/petProfileTailor.mp4"}
        vidTitles={"Video of pet profile tailors website"}
        projectTitle={"Pet Profile Tailor"}
        projectLanguages={
          " Next.js, React, Next-Auth, JavaScript, Tailwindcss, CSS, HTML5, MongoDB, Mongoose, Cloudinary, Node Mailer, SendGrid, SWR"
        }
        projectDescription={
          "Help adoption counselors improve pet adoption rates with impactful, fun, and tailor-fitted adoption profiles! Users can easily search and filter through community submitted names and descriptions. After signing up, users can save favorites, follow other users, and submit new names and descriptions."
        }
        linkToCode={"https://pet-profile-tailor.vercel.app/"}
        linkToLiveSite={"https://pet-profile-tailor.vercel.app/"}
      ></Project>

      {/* *********************** PROJECT TWO ************************** */}

      <Project
        webmsrc={"images/petProfileTailor.webm"}
        mp4src={"images/petProfileTailor.mp4"}
        vidTitles={"Video of pet profile tailors website"}
        projectTitle={"Pet Profile Tailor"}
        projectLanguages={
          " Next.js, React, Next-Auth, JavaScript, Tailwindcss, CSS, HTML5, MongoDB, Mongoose, Cloudinary, Node Mailer, SendGrid, SWR"
        }
        projectDescription={
          "Help adoption counselors improve pet adoption rates with impactful, fun, and tailor-fitted adoption profiles! Users can easily search and filter through community submitted names and descriptions. After signing up, users can save favorites, follow other users, and submit new names and descriptions."
        }
        linkToCode={"https://pet-profile-tailor.vercel.app/"}
        linkToLiveSite={"https://pet-profile-tailor.vercel.app/"}
      ></Project>
    </div>
  );
}
