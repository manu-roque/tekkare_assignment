// src/components/Dashboard.tsx
import React from 'react';
import MedicineChart from './MedicineChart';
import HospitalChart from './HospitalChart';
import { useTranslation } from 'react-i18next';


const Dashboard: React.FC = () => {

  return (
    <div className="container mx-auto p-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <MedicineChart />
        <HospitalChart />
      </div>
    </div>
  );
};

export default Dashboard;
