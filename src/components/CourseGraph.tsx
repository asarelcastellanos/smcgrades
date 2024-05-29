"use client";

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export default function CourseGraph({ _id, A, B, C, D, F, P, NP, IX, RD, SP, W, EW, Total, Department, Subject, Course, Instructor }: { _id: string, A: number, B: number, C: number, D: number, F: number, P: number, NP: number, IX: number, RD: number, SP: number, W: number, EW: number, Total: number, Department: string, Subject: string, Course: string, Instructor: string }) {

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top' as const,
      },
      title: {
        display: true,
        text: `Grade Distribution For: ${Course}`,
      },
    },
  };

  const labels = ['A', 'B', 'C', 'D', 'F', 'P', 'NP', 'IX', 'RD', 'SP', 'W', 'EW'];

  const data = {
    labels,
    datasets: [
      {
        label: `${Course}`,
        data: [A, B, C, D, F, P, NP, IX, RD, SP, W, EW],
        backgroundColor: 'rgba(255, 99, 132, 0.5)',
      },
    ],
  };

  return (
      <Bar options={options} data={data} />
  );
}

//   "_id": "65f1f5f2c223f0f39ccbeb99",
//         "A": 20,
//         "B": 9,
//         "C": 8,
//         "D": 0,
//         "F": 0,
//         "P": 1,
//         "NP": 0,
//         "IX": 0,
//         "RD": 0,
//         "SP": 0,
//         "W": 2,
//         "EW": 6,
//         "Total": 46,
//         "Department": "Business",
//         "Subject": "ACCTG",
//         "Course": "ACCTG 1",
//         "Instructor": "LAMARRA F"