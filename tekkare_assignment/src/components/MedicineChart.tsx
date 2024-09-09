import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Card from './Card';
import KPIChart from './KPIChart';

interface PriceHistory {
  date: string;
  priceEUR: number;
  priceUSD: number;
}

interface Medication {
  name: string;
  dosage: string;
  priceHistory: PriceHistory[];
}

interface Molecule {
  name: string;
  medications: Medication[];
}

const MedicineChart: React.FC = () => {
  const [medicines, setMedicines] = useState<Molecule[]>([]);
  const [selectedMedication, setSelectedMedication] = useState<Medication | null>(null);

  useEffect(() => {
    axios
      .get('/data_exemple2.JSON')
      .then(response => {
        setMedicines(response.data.molecules);
      })
      .catch(error => {
        console.error('Error fetching the medicine data:', error);
      });
  }, []);

  const handleSelectMedication = (medication: Medication) => {
    setSelectedMedication(medication);
  };

  return (
    <Card title="Medication Price History">
        <div className="container mx-auto p-8">
            <h1 className="text-3xl font-bold mb-8 text-center">Medication Price History</h1>
            
            <div className="mb-6">
                <label htmlFor="medication-select" className="block mb-2">Select a medication:</label>
                <select
                    id="medication-select"
                    className="block w-full p-2 border rounded"
                    onChange={e => {
                        const [moleculeName, medicationName] = e.target.value.split('|');
                        const selectedMolecule = medicines.find(molecule => molecule.name === moleculeName);
                        const selectedMedication = selectedMolecule?.medications.find(med => med.name === medicationName);
                        if (selectedMedication) handleSelectMedication(selectedMedication);
                    }}
                >
                <option value="">-- Select a medication --</option>
                {medicines.map(molecule => (
                    molecule.medications.map(medication => (
                    <option key={medication.name} value={`${molecule.name}|${medication.name}`}>
                        {molecule.name} - {medication.name} ({medication.dosage})
                    </option>
                    ))
                ))}
                </select>
            </div>

            {selectedMedication && (
                <KPIChart
                    title={`${selectedMedication.name} Price History`}
                    data={selectedMedication.priceHistory.map(history => history.priceEUR)}
                    labels={selectedMedication.priceHistory.map(history => history.date)}
                />
            )}
        </div>
    </Card>
  );
};

export default MedicineChart;
