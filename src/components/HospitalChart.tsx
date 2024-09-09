import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Card from './Card';
import KPIChart from './KPIChart';
import { useTranslation } from 'react-i18next';
import '../style/HospitalChart.css'


interface MonthlyHospitalization {
  month: string;
  year: number;
  value: number;
}

interface Hospital {
  name: string;
  monthlyHospitalizations: MonthlyHospitalization[];
}

const HospitalChart: React.FC = () => {

  const [hospitals, setHospitals] = useState<Hospital[]>([]);
  const [selectedHospital, setSelectedHospital] = useState<Hospital | null>(null);

  useEffect(() => {
    axios
      .get('/data_exemple1.JSON')
      .then(response => {
        setHospitals(response.data);
      })
      .catch(error => {
        console.error('Error fetching the hospital data:', error);
      });
  }, []);

  const handleSelectHospital = (hospital: Hospital) => {
    setSelectedHospital(hospital);
  };

  return (
    <Card title="Hospital Data">
        <div className="container mx-auto p-8">
            <h1 className="chart-title">Hospitalizations by Hospital</h1>

            <div className="mb-6">
                <label htmlFor="hospital-select" className="hospital-label-text">Select a hospital:</label>
                <select
                  id="hospital-select"
                  className="hospital-select"
                  onChange={e => {
                      const hospitalName = e.target.value;
                      const selected = hospitals.find(hospital => hospital.name === hospitalName);
                      if (selected) handleSelectHospital(selected);
                  }}
                >
                <option value="">-- Select a hospital --</option>
                  {hospitals.map(hospital => (
                      <option key={hospital.name} value={hospital.name}>
                        {hospital.name}
                      </option>
                  ))}
                </select>
            </div>

            {selectedHospital && (
                <KPIChart
                  title={`Monthly Hospitalizations at ${selectedHospital.name}`}
                  data={selectedHospital.monthlyHospitalizations.map(hosp => hosp.value)}
                  labels={selectedHospital.monthlyHospitalizations.map(hosp => `${hosp.month} ${hosp.year}`)}
                />
            )}
        </div>
    </Card>
  );
};

export default HospitalChart;
