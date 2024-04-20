import { useEffect, useState } from "react"

let academic_years = ["fall_2023", "fall_2022", "fall_2021", "fall_2020", "fall_2018", "fall_2017", "fall_2016",
    "spring_2023", "spring_2022", "spring_2021", "spring_2019", "spring_2017"]

export default function SearchBar() {

    const [semester_year, setSemesterYear] = useState("fall_2023");
    const [courses, setCourses] = useState([]);

    function fetchCourses() {
        fetch(`https://api.smcgrades.com/semester/${semester_year}/courses`)
            .then((res) => res.json())
            .then((data) => {
                setCourses(data);
                console.log(data);
            })
    }

    return (
        <div className="mt-20 flex rounded-md shadow-sm">
            <div className="relative flex items-stretch flex-grow focus-within:z-10">
                <div className="absolute inset-y-0 left-0 flex items-center">
                    <label htmlFor="course" className="sr-only">
                        Course
                    </label>
                    <select
                        id="course"
                        name="course"
                        autoComplete="course"
                        onChange={
                            (e) => {
                                setSemesterYear(e.target.value);
                                fetchCourses();
                            }
                        }
                        className="focus:ring-indigo-500 focus:border-indigo-500 h-full py-0 border-transparent bg-transparent text-gray-500 sm:text-sm rounded-md"
                    >
                        {academic_years.map((year) => (
                            <option key={year} value={year} >{year}</option>
                        ))}
                    </select>
                </div>
                <input
                    type="text"
                    name="course"
                    id="course"
                    className="focus:ring-indigo-500 focus:border-indigo-500 block w-full pl-40 sm:text-sm border-gray-300 rounded-md"
                    placeholder="ACCTG 1"
                />
            </div>
            <button
                type="button"
                className="-ml-px relative inline-flex items-center space-x-2 px-4 py-2 border border-gray-300 text-sm font-medium rounded-r-md text-gray-700 bg-gray-50 hover:bg-gray-100 focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500"
            >
                <span>Search</span>
            </button>
        </div>
    )
}