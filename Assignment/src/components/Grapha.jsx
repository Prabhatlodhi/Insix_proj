import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export const options = {
  plugins: {
    title: {
      display: true,
      text: "Contributers Overtime",
    },
  },
  responsive: true,
  scales: {
    x: {
      stacked: true,
    },
    y: {
      stacked: true,
    },
  },
};

const labels = ["20", "25", "30", "35", "40", "45", "50", "55"];

export const data = {
  labels,
  datasets: [
    {
      label: "Employer: K 73,500",
      data: [20, 40, 50, 60, 80, 90, 100, 110],
      backgroundColor: "#134085",
      barThickness: 15,
    },
    {
      label: "Employee: K 52,500",
      data: [20, 40, 50, 60, 80, 90, 100, 110],
      backgroundColor: "#52a3ea",
      barThickness: 15,
    },
    {
      label: "Total Interest: K 244,313",
      data: [20, 40, 50, 60, 80, 90, 100, 110],
      backgroundColor: "#b4beeb",
      barThickness: 15,
    },
  ],
};
export default function Grapha() {
  return (
    <div style={{ width: "80%", height: "300px",   margin:"0px auto" }}> 
      <Bar options={options} data={data} />
    </div>
  );
}
