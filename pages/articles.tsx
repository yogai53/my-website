import Link from "next/link";

interface IArticle {
  title: string;
  link: any;
}

const articles: IArticle[] = [
  {
    title: "Introduction to Javascript Prototype",
    link: "https://medium.com/@p.yoganandan/javascript-prototype-in-laymans-9c28162cb7f6?source=your_stories_page-------------------------------------",
  },
  {
    title: "Javascript __proto__",
    link: "https://medium.com/@p.yoganandan/javascript-proto-40c315e62a26",
  },
  {
    title: "Javascript Prototype Chaining",
    link: "https://medium.com/@p.yoganandan/javascript-prototype-chaining-b457caaf2358",
  },
  {
    title: "Achieving Oops with Javascript Function",
    link: "https://medium.com/@p.yoganandan/achieving-oops-with-function-e2a55a2e9e57",
  },
  {
    title: "Javascript Mutability and Immutability",
    link: "https://medium.com/@p.yoganandan/mutable-and-immutable-30b71f8e726e",
  },
];

export default function Articles() {
  return (
    <section>
      <h1 className="mb-10 font-serif text-3xl font-bold">Articles</h1>
      <div className="flex flex-col gap-2 md:flex-row md:flex-wrap">
        {articles.map((article, i) => (
          <div className="flex whitespace-nowrap" key={i}>
            <Link
              href={article.link}
              target="_"
              className={
                "p-4 rounded-full border-solid bg-gray-200 hover:bg-gray-600 hover:text-white w-full"
              }
            >
              {article.title}
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
}
