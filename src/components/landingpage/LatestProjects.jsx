import Project from "../Project";
export default function LatestProjects() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 2xl:grid-cols-3 gap-12">
      <Project
        imgsrc={"images/comingSoon.jpg"}
        // webmsrc={"images/petProfileTailor.webm"}
        // mp4src={"images/petProfileTailor.mp4"}
        vidTitles={"Video of Only Tech Bangers"}
        projectTitle={"Only Tech Bangers"}
        projectLanguages={
          " Next.js 15, React 19, Appwrite, TypeScript, Tailwindcss, SWR, React-hook-form, React-Select, HeadlessUI,CSS, HTML5"
        }
        projectDescription={
          "An app to easily filter through technical resources so you can find the 'banger' resources you need! Spend less time finding the best resources (or looking for an old resource you love) and more time learning. Whether you're looking for technical resources, AI resources, the right community for you or career tips, theres resources for everyone. Logged in users can save favorites, sort through their liked and submitted posts, flag contents and submit content. "
        }
        linkToCode={"https://github.com/JSMarsh813/only-bangers"}
        linkToLiveSite={"https://www.onlytechbangers.com"}
        loadingtype={"eager"}
        readmeLink={
          "https://github.com/JSMarsh813/only-bangers/blob/main/README.md"
        }
      ></Project>

      <Project
        webmsrc={"images/petProfileTailor.webm"}
        mp4src={"images/petProfileTailor.mp4"}
        vidTitles={"Video of tailored Pet Names website"}
        projectTitle={"Tailored Pet Names"}
        projectLanguages={
          " Next.js, React, Next-Auth, JavaScript, Tailwindcss, CSS, HTML5, MongoDB, Mongoose, Cloudinary, Node Mailer, SendGrid, SWR"
        }
        projectDescription={
          "Help adoption counselors improve pet adoption rates with impactful, fun, and tailor-fitted adoption profiles! Users can easily search and filter through community submitted names and descriptions. After signing up, users can save favorites, follow other users, and submit new names and descriptions."
        }
        linkToCode={"https://github.com/JSMarsh813/PetProfileTailor"}
        linkToLiveSite={"https://www.tailoredpetnames.com/"}
        loadingtype={"eager"}
        readmeLink={
          "https://github.com/JSMarsh813/PetProfileTailor/blob/main/README.md"
        }
      ></Project>

      <Project
        webmsrc={"images/ufancy.webm"}
        mp4src={"images/ufancy.mp4"}
        vidTitles={"Video of a responsive wordpress site"}
        projectTitle={"Ufancy Photobooth"}
        projectLanguages={
          "Digital Ocean, linux-based Virtual Machine/Droplet, Ubuntu Server, mySQL, mySQL turner, WordPress Plugins (Elementor, Contact Form 7, Autocomplete Location Field Contact Form 7, All in One Seo, Flamingo, Optimole, Independent Analyics, OMGF, POST SMTP, Royal Elementor Addons, updraft Plus, w3 Total Cache, Wordfence Security, WP fail2ban, Wp fail2ban blocklist, WP rollback, Wp-sweep), CSS, HTML, Figma"
        }
        projectDescription={
          "A WordPress site for a client's photobooth business hosted with Digital Ocean. To improve site speed and experience, in the Ubuntu server I added Swap Space and created a SSL certificate. To improve security I setup SSH login, removed root login, and setup http2 and fail2ban. I used various plugins and the Royal Elementor Kit to create the site in wordpress."
        }
        linkToCode={""}
        linkToLiveSite={"https://ufancyphotobooth.com/"}
        loadingtype={"eager"}
      ></Project>

      <Project
        webmsrc={"images/nourishedByKeto.webm"}
        mp4src={"images/nourishedByKeto.mp4"}
        vidTitles={"Video of a responsive blog site"}
        projectTitle={"Nourished by Keto"}
        projectLanguages={
          " Gatsby.js, Netlify CMS/Decap CMS, React, JavaScript, Tailwindcss, CSS, HTML5,gatsby-plugin-disquis, postcss, daisyui, headlessui"
        }
        projectDescription={
          "A personal blog site for a client; the main theme is how their food choices have affected their health. Their blog posts are integrated with netlify's cms, so the client can add, edit and delete blog post by signing in."
        }
        linkToCode={"https://github.com/JSMarsh813/jillyannesite"}
        linkToLiveSite={"https://nourishedbyketo.netlify.app/"}
        loadingtype={"eager"}
      ></Project>

      <Project
        webmsrc={"images/tataru.webm"}
        mp4src={"images/tataruo.mp4"}
        vidTitles={"Video of the Tatarus Corner Website"}
        projectTitle={"Tataru's Corner"}
        projectLanguages={
          " HTML, CSS, Tailwindcss, JavaScript, React, Node.JS, React Router, GIMP"
        }
        projectDescription={
          "A fansite for everyones favorite fiesty Final Fantasy 14 receptionist. Originally created as a Christmas present at the request of a client, this public version keeps the functionality but replaces their personal character with the popular NPC, Tataru!"
        }
        linkToCode={"https://github.com/JSMarsh813/Tataru"}
        linkToLiveSite={"https://tataru.onrender.com/"}
        loadingtype={"eager"}
        readmeLink={"https://github.com/JSMarsh813/Tataru/blob/main/README.md"}
      ></Project>

      {/* *********************** PROJECT THREE ************************** */}
    </div>
  );
}
