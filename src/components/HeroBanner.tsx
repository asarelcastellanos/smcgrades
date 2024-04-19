import SearchBar from "./SearchBar";

export default function HeroBanner() {
    return (
        <div className="flex-grow bg-white">
            <div className="max-w-7xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:px-8">
                <div className="text-center">
                    <p className="mt-1 text-4xl font-extrabold text-gray-900 sm:text-5xl sm:tracking-tight lg:text-6xl">
                        smcgrades.com
                    </p>
                    <p className="max-w-xl mt-5 mx-auto text-xl text-gray-500">
                        A website built on Next.js that can view historical grade distribution data from Santa Monica College.

                    </p>
                    <SearchBar />
                </div>
            </div>
        </div>
    )
}