import Link from "next/link";

interface IExperience {
  date: string;
  position: any;
  desc?: string;
  more?: string;
}

const experiences: IExperience[] = [
  {
    date: "December 2020",
    desc: `A No-Code and All-In-One tool for an Edupreneur. It is a Multi Tenanted SAAS platform with a wide range of essential tools for the institutes to run online. I lead a strong engineering team and continuously strive hard in getting the product to the peak of the market. I play a crucial role in shipping features faster and highly performant as well. `,
    position: (
      <>
        Lead Full Stack Developer in{" "}
        <Link
          target="_"
          href="https://www.teachedison.com/"
          className="underline"
        >
          Teachedison
        </Link>
      </>
    ),
  },
  {
    date: "September 2015",
    position: (
      <>
        Senior Software Engineer in{" "}
        <Link target="_" href="https://www.tesark.com/" className="underline">
          Tesark Technologies
        </Link>
      </>
    ),
    desc: "A place, where i started my development journey from the scratch. I played a crucial role in engineering and shipping features to the projects’ needs. Being in a service-oriented enterprise, I was able to learn and work on a wider range of technologies and tools, which helped me become a solid full-stack developer.",
  },
  {
    date: "August 2013",
    position: (
      <>
        Programmer Analyst in{" "}
        <Link
          target="_"
          href="https://www.cognizant.com/"
          className="underline"
        >
          Cognizant
        </Link>
      </>
    ),
    desc: "I was deployed as a Performance tester, where i had used tools like LoadRunner, JMeter to determine the performance metrics of an application like Reliability, Throughput etc., Being a new-bee to the industry, i was constantly searching for opportunities related to development, which was always i wanted.",
  },
];

export default function AboutPage() {
  return (
    <section>
      <h1 className="mb-10 font-serif text-3xl font-bold">Experience</h1>
      <ol className="relative border-l border-gray-200 dark:border-gray-700">
        {experiences.map((exp, i) => (
          <li key={i} className="mb-10 ml-4">
            <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
            <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
              {exp.date}
            </time>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
              {exp.position}
            </h3>
            {exp.desc && (
              <p className="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">
                {exp.desc}
              </p>
            )}

            {exp?.more && (
              <a
                href="#"
                className="inline-flex items-center px-4 py-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:outline-none focus:ring-gray-200 focus:text-blue-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700 dark:focus:ring-gray-700"
              >
                Learn more{" "}
                <svg
                  className="w-3 h-3 ml-2"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
              </a>
            )}
          </li>
        ))}
      </ol>
    </section>
  );
}
