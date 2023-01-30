import React from "react";
import Sidebar from "./Sidebar";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex flex-col max-w-4xl mx-4 mt-8 mb-40 antialiased md:flex-row md:mt-20 lg:mt-32 lg:mx-auto">
      <Sidebar />
      <main className="flex flex-col flex-auto min-w-0 px-2 mt-6 md:mt-0 md:px-0">
        {children}
      </main>
    </div>
  );
}
