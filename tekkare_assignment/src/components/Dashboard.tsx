// src/components/Dashboard.tsx
import React from 'react';
import MedicineChart from './MedicineChart';
import HospitalChart from './HospitalChart';

const Dashboard: React.FC = () => {
  return (
    <div className="container mx-auto p-8">
      {/* <h1 className="text-3xl font-bold mb-8 text-left">KPI Dashboard</h1> */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <MedicineChart />
        <HospitalChart />
      </div>
    </div>
  );
};

export default Dashboard;
