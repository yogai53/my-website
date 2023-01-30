import Image from "next/image";
import {
  ArrowIcon,
  GitHubIcon,
  TwitterIcon,
  ViewsIcon,
  FrontEnd,
  BackEnd,
  Database,
  Cloud,
} from "components/icons";
import { name, about, bio, avatar } from "lib/info";

export const revalidate = 60;

export const metadata = {
  description: "Developer, writer, and creator.",
  openGraph: {
    title: "Lee Robinson",
    description: "Developer, writer, and creator.",
    url: "https://leerob.io",
    siteName: "Lee Robinson",
    images: [
      {
        url: "https://leerob.io/og.jpg",
        width: 1920,
        height: 1080,
      },
    ],
    locale: "en-US",
    type: "website",
  },
};

export default function HomePage() {
  return (
    <section className="">
      <h1 className="font-serif text-3xl font-bold">{name}</h1>
      <p className="my-5 max-w-[460px] text-neutral-800 dark:text-neutral-200">
        {about()}
      </p>
      <p className="my-5 max-w-[460px] text-neutral-800 dark:text-neutral-200">
        I am open for interesting opportunities, consulting or any other
        discussions specific to tech.
      </p>
      <div className="flex flex-col items-start my-8 md:items-center md:flex-row">
        <Image
          alt={name}
          className="object-cover w-40 h-40 rounded-2xl"
          src={avatar}
          placeholder="blur"
          priority
        />
        <div className="mt-8 ml-0 space-y-2 md:mt-0 md:ml-6 text-neutral-500 dark:text-neutral-400">
          <p className="flex items-center gap-2">
            <FrontEnd />
            <>ReactJs, NextJs, VueJs, AngularJs, JQuery, CSS</>
          </p>
          <p className="flex items-center gap-2">
            <BackEnd />
            <>Django, NodeJs, Laravel, Ruby On Rails</>
          </p>
          <p className="flex items-center gap-2">
            <Database />
            <>Postgresql, Mysql, PlanetScale, Mongo, Redis</>
          </p>
          <p className="flex items-center gap-2">
            <Cloud />
            <>AWS, Linode, Docker</>
          </p>
        </div>
      </div>
      <p className="my-5 max-w-[600px] text-neutral-800 dark:text-neutral-200">
        {bio()}
      </p>
      <ul className="flex flex-col mt-8 space-x-0 space-y-2 md:flex-row md:space-x-4 md:space-y-0 font-sm text-neutral-500 dark:text-neutral-400">
        <li>
          <a
            className="flex items-center transition-all hover:text-neutral-700 dark:hover:text-neutral-200"
            rel="noopener noreferrer"
            target="_blank"
            href="https://twitter.com/leeerob"
          >
            <ArrowIcon />
            <p className="h-7">follow me on twitter</p>
          </a>
        </li>
        <li>
          <a
            className="flex items-center transition-all hover:text-neutral-700 dark:hover:text-neutral-200"
            rel="noopener noreferrer"
            target="_blank"
            href="https://leerob.substack.com"
          >
            <ArrowIcon />
            <p className="h-7">get email updates</p>
          </a>
        </li>
      </ul>
    </section>
  );
}
