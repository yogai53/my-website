import {
  GitHubIcon,
  LinkedInIcon,
  ArrowIcon,
  TwitterIcon,
} from "components/icons";

export const metadata = {
  title: "About",
  description: "VP of Developer Experience at Vercel.",
};

export default function AboutPage() {
  return (
    <section>
      <h1 className="font-serif text-3xl font-bold">About Me</h1>
      <p className="my-5 text-neutral-800 dark:text-neutral-200">
        Hey, I`m Yoganandan from Tamilnadu, India. I have a bachelor of
        Information Technology from PSG Tech, Coimbatore, India.
      </p>
      <div className="prose prose-neutral dark:prose-invert text-neutral-800 dark:text-neutral-200">
        <p className="mb-10">
          I`m currently the <b>Team Lead</b> at Teachedison.
        </p>
        <hr className="mb-10" />
        <p className="mb-6">
          I`m <b>passionate</b> about contributing to the society in various
          forms. I like to listen a lot of classical musics and sometimes try to
          play them with my guitar and keyboard. I was a Pro cricket player and
          now continuing to play it regularly to maintain my fitness.
        </p>
        <p className="mb-6">
          Web is a magic. From a barebone server to cloud, from plain HTML to a
          Headless CMS and from vanilla php to serverless, it is evolving
          constantly. It is becoming very important to stay updated to keep
          producing magical products.
        </p>
        <p className="mb-8">
          I am from Tamilnadu India, currently residing in Copenhagen, a
          beautify city of love. I am able to meet lots of good people around
          and discuss on interesting things. It is winter out here, so no Sports
          activity. Eagerly waiting for the long summer.
        </p>
        <div className="flex flex-col gap-2 md:flex-row md:gap-2">
          <a
            rel="noopener noreferrer"
            target="_blank"
            href="https://twitter.com/Yoganandan_P"
            className="flex items-center justify-between w-full p-4 no-underline transition-all border rounded-lg border-neutral-200 dark:border-neutral-800 text-neutral-800 dark:text-neutral-200 hover:dark:bg-neutral-900 hover:bg-neutral-100"
          >
            <div className="flex items-center">
              <TwitterIcon />
              <div className="ml-3">Twitter</div>
            </div>
            <ArrowIcon />
          </a>
          <a
            rel="noopener noreferrer"
            target="_blank"
            href="https://github.com/yogai53"
            className="flex items-center justify-between w-full p-4 no-underline transition-all border rounded-lg border-neutral-200 dark:border-neutral-800 text-neutral-800 dark:text-neutral-200 hover:dark:bg-neutral-900 hover:bg-neutral-100"
          >
            <div className="flex items-center">
              <GitHubIcon />
              <div className="ml-3">GitHub</div>
            </div>
            <ArrowIcon />
          </a>
          <a
            rel="noopener noreferrer"
            target="_blank"
            href="https://www.linkedin.com/in/yoganandan-pandiyan/"
            className="flex items-center justify-between w-full p-4 no-underline transition-all border rounded-lg border-neutral-200 dark:border-neutral-800 text-neutral-800 dark:text-neutral-200 hover:dark:bg-neutral-900 hover:bg-neutral-100"
          >
            <div className="flex items-center">
              <LinkedInIcon />
              <div className="ml-3">Linkedin</div>
            </div>
            <ArrowIcon />
          </a>
        </div>
      </div>
    </section>
  );
}
