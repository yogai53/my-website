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
];

export default function Articles() {
  return (
    <section>
      <h1 className="mb-10 font-serif text-3xl font-bold">Articles</h1>
      <div className="flex gap-2">
        {articles.map((article, i) => (
          <Link
            key={i}
            href={article.link}
            target="_"
            className={
              "p-4 rounded-full border-solid bg-gray-200 hover:bg-gray-600 hover:text-white"
            }
          >
            {article.title}
          </Link>
        ))}
      </div>
    </section>
  );
}
