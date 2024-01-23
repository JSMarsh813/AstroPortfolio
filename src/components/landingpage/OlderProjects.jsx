import Project from "../Project";
export default function LatestProjects() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 2xl:grid-cols-3 gap-12">
      <Project
        webmsrc={"/images/pokemon-gym.webm"}
        mp4src={"/images/pokemon-gym.mp4"}
        vidTitles={"Video of a pokemon gym themed website"}
        projectTitle={"Level Ground Pokemon Gym"}
        projectLanguages={"HTML5, CSS"}
        projectDescription={"Responsive mock site of a pokemon gym's services."}
        linkToCode={"https://github.com/JSMarsh813/gym"}
        linkToLiveSite={"https://jsmarsh813.github.io/gym/"}
      ></Project>

      {/* *********************** PROJECT TWO ************************** */}

      <Project
        imgsrc={"/images/pokemonREADMEgiphy.gif"}
        vidTitles={"Video of pet profile tailors website"}
        projectTitle={"PokéDeck"}
        projectLanguages={
          " CSS, JavaScript, EJS, Express.js, Node.js, MongoDB, Mongoose, Sessions, Bcrypt"
        }
        projectDescription={
          "This project is dedicated to one of the best stories ever told that influenced millions of kids and adults alike. A CRUD app with local authentication so you can add different Pokemon to your deck to view their abilities and information to plan out your perfect PokéDeck."
        }
        linkToCode={"https://github.com/JSMarsh813/group-project-todo-mvc"}
      ></Project>
    </div>
  );
}
