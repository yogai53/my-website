import { BackEnd, Cloud, Database, FrontEnd } from "components/icons";
import { about, avatar, bio, name } from "lib/info";
import Image from "next/image";

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
        discussions specific to web technology.
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
    </section>
  );
}
