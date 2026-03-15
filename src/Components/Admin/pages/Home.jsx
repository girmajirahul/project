import React, { useEffect, useState } from "react";
import { Bar, Line } from "react-chartjs-2";
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, LineElement, PointElement, Title, Tooltip, Legend } from "chart.js";
import axios from "axios";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  LineElement,
  PointElement,
  Title,
  Tooltip,
  Legend
);

const HomeSection = () => {

  // Example stats data
  const [stats, setStats] = useState({
    totalJobs: 0,
    activeJobs: 0,
    inactiveJobs:0,
    totalUsers: 0,
    totalApplications: 0
  });

  useEffect(() => {
    const token = localStorage.getItem("adminUser");

    axios
      .get(`${import.meta.env.VITE_BASE_URL}/api/admin/stats`, {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((res) => setStats(res.data))
      .catch((err) => console.log(err));

  }, []);

  // Example chart data
  const jobsChartData = {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
    datasets: [
      {
        label: "Jobs Posted",
        data: [10, 20, 15, 25, 18, 30],
        backgroundColor: "rgba(59, 130, 246, 0.7)",
      },
      {
        label: "Applications",
        data: [50, 70, 65, 80, 60, 90],
        backgroundColor: "rgba(16, 185, 129, 0.7)",
      },
    ],
  };

  const jobsChartOptions = {
    responsive: true,
    plugins: {
      legend: { position: "top" },
      title: { display: true, text: "Jobs & Applications Overview" },
    },
  };

  return (
    <div className="p-6">

      <h1 className="text-2xl font-bold text-gray-800 mb-6">Dashboard Overview</h1>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-6">
        <div className="bg-blue-500 text-white p-6 rounded-lg shadow">
          <p className="text-sm font-medium">Total Jobs</p>
          <p className="text-2xl font-bold">{stats.totalJobs}</p>
        </div>

        <div className="bg-green-500 text-white p-6 rounded-lg shadow">
          <p className="text-sm font-medium">Active Jobs</p>
          <p className="text-2xl font-bold">{stats.activeJobs}</p>
        </div>

         <div className="bg-yellow-500 text-white p-6 rounded-lg shadow">
          <p className="text-sm font-medium">InActive Jobs</p>
          <p className="text-2xl font-bold">{stats.inactiveJobs}</p>
        </div>

        <div className="bg-purple-500 text-white p-6 rounded-lg shadow">
          <p className="text-sm font-medium">New Users</p>
          <p className="text-2xl font-bold">{stats.totalUsers}</p>
        </div>

        <div className="bg-yellow-500 text-white p-6 rounded-lg shadow">
          <p className="text-sm font-medium">Applications</p>
          <p className="text-2xl font-bold">{stats.totalApplications}</p>
        </div>
       
      </div>

      {/* Graph Section */}
      <div className="bg-white p-6 rounded-lg shadow">
        <Bar data={jobsChartData} options={jobsChartOptions} />
      </div>

    </div>
  );
};

export default HomeSection;