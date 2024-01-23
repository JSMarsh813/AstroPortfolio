import Project from "../Project";
export default function LatestProjects() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 2xl:grid-cols-3 gap-12">
      <Project
        webmsrc={"images/petProfileTailor.webm"}
        mp4src={"images/petProfileTailor.mp4"}
        vidTitles={"Video of a responsive blog site"}
        projectTitle={"Nourished by Keto"}
        projectLanguages={
          " Gatsby.js, Netlify CMS/Decap CMS, React, JavaScript, Tailwindcss, CSS, HTML5,gatsby-plugin-disquis, postcss, daisyui, headlessui"
        }
        projectDescription={
          "A personal blog site for a client; the main theme is how the ketogenic diet has effected their health. Their blog posts are integrated with netlify's cms, so the client can add, edit and delete blog post by signing in."
        }
        linkToCode={"https://github.com/JSMarsh813/jillyannesite"}
        linkToLiveSite={"https://nourishedbyketo.com/"}
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

      {/* *********************** PROJECT TWO ************************** */}

      <Project
        webmsrc={
          "https://user-images.githubusercontent.com/101692334/204751393-7349a015-6414-4ed1-a8f7-ee156c4c9f89.webm"
        }
        mp4src={"images/petProfileTailor.mp4"}
        vidTitles={"Video of pet profile tailors website"}
        projectTitle={"Tataru's Corner"}
        projectLanguages={
          " HTML, CSS, Tailwindcss, JavaScript, React, Node.JS, React Router, GIMP"
        }
        projectDescription={
          "A fansite for everyones favorite fiesty Final Fantasy 14 receptionist. Originally created as a Christmas present at the request of a client, this public version keeps the functionality but replaces their personal character with the popular NPC, Tataru!"
        }
        linkToCode={"https://github.com/JSMarsh813/Tataru"}
        linkToLiveSite={"https://tataru.onrender.com/"}
      ></Project>

      {/* *********************** PROJECT THREE ************************** */}
      <Project
        webmsrc={"images/nasa.webm"}
        mp4src={"images/NASA picture of the day.mp4"}
        vidTitles={"video of a site showing NASA's picture of the day"}
        projectTitle={"NASA's Picture of the Day"}
        projectLanguages={"JavaScript, HTML5, CSS"}
        projectDescription={
          "Enter a date and recieve a picture, video or game of the day directly from NASA's API. Select the date, 6/19/2022, to play Super Planet Crash!"
        }
        linkToCode={"https://github.com/JSMarsh813/Nasa-daily-photo"}
        linkToLiveSite={"https://jsmarsh813.github.io/Nasa-daily-photo/"}
      ></Project>

      {/* *********************** PROJECT FOUR ************************** */}
      <Project
        webmsrc={"images/leaping-rabbit.webm"}
        mp4src={"images/leaping-rabbit.mp4"}
        vidTitles={"video showing a responsive restaurant webpage"}
        projectTitle={"The Leaping Rabbit"}
        projectLanguages={"HTML5, CSS, Shopify"}
        projectDescription={
          "A one-page, responsive website for a unique rabbit themed restaurant called The Leaping Rabbit. A shopify storefront for The Leaping Rabbit was created and integrated to the website."
        }
        linkToCode={"https://github.com/JSMarsh813/TheLeapingRabbit"}
        linkToLiveSite={"https://jsmarsh813.github.io/TheLeapingRabbit/"}
      ></Project>

      {/* *********************** PROJECT FOUR ************************** */}
      <Project
        webmsrc={"images/friendapp.webm"}
        mp4src={"images/friendapp.mp4"}
        vidTitles={
          "video showing a responsive website that allows users to make posts about a friend"
        }
        projectTitle={"Thanks to a Friend"}
        projectLanguages={"JavaScript, HTML5, CSS, EJS, Express, Mongoose"}
        projectDescription={
          "A public version of a CRUD app created as a gift to a friend, where users can add, edit or delete personalized messages."
        }
        linkToCode={"https://github.com/JSMarsh813/thanksapp"}
        linkToLiveSite={"https://thanksfriend.cyclic.app/"}
      ></Project>
    </div>
  );
}
