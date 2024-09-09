import React from 'react';
import { Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
  );
  
  interface KPIChartProps {
    title: string;
    data: number[];
    labels: string[];
  }


const KPIChart: React.FC<KPIChartProps> = ({ title, data, labels }) => {
    const chartData = {
      labels: labels,
      datasets: [
        {
          label: title,
          data: data,
          borderColor: 'rgb(75, 192, 192)',
          backgroundColor: 'rgba(75, 192, 192, 0.2)',
          tension: 0.4,
        },
      ],
    };
  
    const options = {
      responsive: true,
      plugins: {
        legend: {
          position: 'top' as const,
        },
        title: {
          display: true,
          text: title,
        },
      },
    };
  
    return (
      <div className="p-6 bg-white rounded-lg shadow-md">
        <Line data={chartData} options={options} />
      </div>
    );
  };
  
  export default KPIChart;