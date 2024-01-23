export default function GradientNavigationButton({
  aria,
  link,
  target,
  rel,
  text,
}) {
  return (
    <a
      className="px-4 py-2 rounded-lg bg-violet-900 text-white hover:text-mainColor  animated-gradient hover:font-bold text-center"
      aria-label={aria}
      href={link}
      target={"" || target}
      rel={"" || rel}
      role="button"
    >
      {text}
    </a>
  );
}
