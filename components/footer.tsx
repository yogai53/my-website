import Link from "next/link";
import React from "react";

export default function Footer() {
  return (
    <footer className="border-t-2">
      <div className="flex gap-4 p-4">
        <Link href="/about">About</Link>
        <Link href="/projects">Projects</Link>
        <Link href="/articles">Articles</Link>
      </div>
    </footer>
  );
}
