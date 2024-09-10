import React from 'react';
import MedicineChart from './MedicineChart';
import HospitalChart from './HospitalChart';
import DropdownLang from './DropdownLang';

import '../style/Dashboard.css'


const Dashboard: React.FC = () => {

  return (
    <div className="dashboard-container">
      <DropdownLang />
      <br/>
      <div className="dashboard-grid">
        <MedicineChart />
        <HospitalChart />
      </div>
    </div>
  );
};

export default Dashboard;
