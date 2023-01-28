import Link from "next/link";
import React from "react";

export default function Header() {
  return (
    <div className="flex">
      <div className="flex-1"></div>
      <div className="flex gap-4 p-4 rounded-full shadow-md dark:bg-slate-900">
        <Link
          href="/about"
          className="px-2 text-slate-900 hover:text-slate-700"
        >
          About
        </Link>
        <Link
          href="/projects"
          className="px-2 text-slate-900 hover:text-slate-700"
        >
          Projects
        </Link>
        <Link
          href="/articles"
          className="px-2 text-slate-900 hover:text-slate-700"
        >
          Articles
        </Link>
      </div>
      <div className="flex-1"></div>
    </div>
  );
}
