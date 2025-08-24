import GradientNavigationButton from "../buttons/GradientNavigationButton";

export default function HeroButtons() {
  return (
    <div className="py-10 flex space-x-4 justify-center">
      <GradientNavigationButton
        text="About Me"
        aria="About me page button"
        link="/about/"
      />

      <GradientNavigationButton
        text="Get a Free Consultation"
        aria="get a free consultation
 button"
        link="/#contact"
      />
    </div>
  );
}
