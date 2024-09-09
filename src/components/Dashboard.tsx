// src/components/Dashboard.tsx
import React from 'react';
import MedicineChart from './MedicineChart';
import HospitalChart from './HospitalChart';
import '../style/Dashboard.css'
import { useTranslation } from 'react-i18next';


const Dashboard: React.FC = () => {

  return (
    <div className="dashboard-container">
      <div className="dashboard-grid">
        <MedicineChart />
        <HospitalChart />
      </div>
    </div>
  );
};

export default Dashboard;
