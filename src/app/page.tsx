"use client"

import HeroBanner from "@/components/HeroBanner";
import SearchBar from "@/components/SearchBar";

export default function Home() {

  // const [semester_year, setSemesterYear] = useState("fall_2023")
  // const [courses, setCourses] = useState([])

  // useEffect(() => {
  //   fetch(`https://api.smcgrades.com/semester/${semester_year}/courses`)
  //     .then((res) => res.json())
  //     .then((data) => {
  //       setCourses(data)
  //     })
  // }, [semester_year])

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