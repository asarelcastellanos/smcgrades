"use client"

import HeroBanner from "@/components/HeroBanner";
import SearchBar from "@/components/SearchBar";

export default function Home() {

  return (
    <main className="flex">
      <div className="flex-grow bg-white">
        <div className="max-w-7xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:px-8">
          <HeroBanner />
          <SearchBar />
        </div>
      </div>
    </main>
  );
}