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
        <p className="mb-10">
          I`m passionate about many creative pursuits, including music,
          photography, videography, and of course, coding. This combination of
          interests is what ultimately led me to my current role in building
          developer communities.
        </p>
        <p className="mb-10">
          I <b>love</b> building for the web. From something as simple as a
          single HTML file – all the way to large Next.js applications. The web
          is incredible. Anyone can become a developer, writer, or creator – and
          no one has to ask for permission. You can just build.
        </p>
        <p className="mb-8">
          Outside of Vercel, I <b>angel invest</b> in developer tools companies
          and <b>advise early-stage startups</b>. I also do Developer Relations
          consulting work, helping companies take their DevRel function from 0
          to 1, or provide guidance on growing communities, content creation,
          and developer marketing.
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
