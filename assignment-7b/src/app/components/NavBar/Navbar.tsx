import React from "react";
import Link from "next/link";
import ClientSidePage from "@/app/ClientSideDataFetching/page";
import ServerSidePage from "@/app/ServerSideDataFetching/page";

const Navbar = () => {
  return (
    <div className="bg-blue-400 ">
      <header className="bg-gray-800 text-white shadow-md">
        <nav className="container mx-auto px-4 py-4 flex flex-wrap items-center justify-between">
          <Link href="/" className="text-lg font-bold hover:underline">
            Home
          </Link>
          <div className="flex flex-wrap gap-4 ">
            <Link
              href="/ClientSideDataFetching"
              className="text-lg hover:underline"
            >
              Client Side Data Fetching
            </Link>
            <Link
              href="/ServerSideDataFetching"
              className="text-lg hover:underline"
            >
              Server Side Data Fetching
            </Link>
          </div>
        </nav>
      </header>
    </div>
  );
};

export default Navbar;
