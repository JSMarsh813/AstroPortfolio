import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";

function SocialLinksNav() {
  let SocialLinks = [
    {
      href: "https://twitter.com/Janetthedev",
      icon: "twitter",
      title: "twitter",
      alt: "Link to twitter",
    },
    {
      href: "https://www.linkedin.com/in/janet-spellmanmarsh/",
      icon: "linkedIn",
      title: "LinkedIn",
      alt: "Link to LinkedIn",
    },
    {
      href: "https://github.com/JSMarsh813",
      icon: "github",
      title: "github",
      alt: "Link to github",
    },
    {
      href: "mailto:janetspellman13@gmail.com",
      icon: "icon-envelope",
      title: "email link",
      alt: "Link to email",
    },
    {
      href: "https://wellfound.com/u/janet-spellmanmarsh",
      icon: "wellfound",
      title: "wellfound",
      alt: "Link to email",
    },
  ];
  //title used to make the font awesome icons accessible     https://fontawesome.com/v5/docs/web/other-topics/accessibility#svg-with-javascript-semantic-icons

  // https://stackoverflow.com/questions/69911071/mapping-and-displaying-fontawesome-icons had to change icon name to a non string value
  return (
    <NavigationMenu
      className="md:pr-10 py-2 text-violet-900 bg-mainColor"
      id="social"
    >
      <NavigationMenuList>
        <a
          className="skip-link right-5 top-5 p-3 bg-mainColor text-white"
          href="#home"
        >
          Skip to content
        </a>

        {SocialLinks.map((item) => (
          <NavigationMenuItem key={`${item.title} Nav Menu Item`}>
            <NavigationMenuLink href={item.href}>
              <img
                className="mx-1 inline-block size-7
                hover:border-4 hover:rounded-sm hover:border-violet-500 
        md:size-8"
                src={`/images/${item.icon}.svg`}
                alt={item.alt}
                title={item.title}
                loading="eager"
              />
            </NavigationMenuLink>
          </NavigationMenuItem>
        ))}
      </NavigationMenuList>
    </NavigationMenu>
  );
}

export default SocialLinksNav;
