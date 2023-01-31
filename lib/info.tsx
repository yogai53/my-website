import me from "./avatar.jpeg";
import Link from "next/link";

export const name = "Yoganandan Pandiyan";
export const avatar = me;
export const about = () => {
  return (
    <>
      Hi, I`m Yoga, working as a Senior Software developer in a SAAS based LMS
      Product -{" "}
      <Link href="https://edisonos.com" target="_" className="underline">
        EdisonOS
      </Link>{" "}
      at{" "}
      <Link href="https://teachedison.com" target="_" className="underline">
        Teachedison
      </Link>
      .
    </>
  );
};
export const bio = () => {
  return (
    <>
      I am a full stack developer with experiences on different tech stacks and
      i have deep understanding between various frameworks and their use cases.
      I also mentor people who needs heads-up on any tech matters. Recently,
      just started to write{" "}
      <Link
        target="_"
        href="https://medium.com/@p.yoganandan"
        className="underline"
      >
        articles
      </Link>
      . Interested in contributing to Open source projects.
    </>
  );
};
