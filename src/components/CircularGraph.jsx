'use client';

import { Doughnut } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';

ChartJS.register(ArcElement, Tooltip, Legend);

const ProfileWithCharts = ({ studentData, handleEditClick }) => {
    const fraudDetectionData1 = {
        labels: ['Fraudulent', 'Legitimate', 'Under Investigation'],
        datasets: [
            {
                label: 'Bank Transactions',
                data: [150, 850, 50],  
                backgroundColor: ['#FF3D00', '#1976D2', '#FFC107'],  
                borderWidth: 2,
            },
        ],
    };
    
    
    const fraudDetectionData2 = {
        labels: ['Fraudulent', 'Legitimate'],
        datasets: [
            {
                label: 'Credit Card Transactions',
                data: [200, 1800],  
                backgroundColor: ['#D32F2F', '#1976D2'],  
                borderWidth: 2,
            },
        ],
    };
    

    return (
        <div className="w-full flex lg:flex-row flex-col xl:justify-end xl:items-end justify-start item-start gap-10 py-8">
            <div className="xl:w-[100%] w-[100%] h-[50%] xl:h-[100%] flex flex-col items-center justify-center">
                <h4 className="text-gray-800 font-semibold text-center text-2xl mb-4">Hackathons</h4>
                <div className="relative w-[220px] h-[220px] flex items-center justify-center">
                    <Doughnut 
                        data={fraudDetectionData1}
                        options={{
                            cutout: '50%',
                            plugins: { legend: { display: false } },
                        }}
                    />
                   
                </div>
                <p className="text-center text-gray-700 font-medium mt-2">5 Completed, 2 Remaining</p>
            </div>

            <div className="xl:w-[100%] xl:h-[100%]  flex flex-col items-center justify-center">
                <h4 className="text-gray-800 font-semibold text-center text-2xl mb-4">Internships</h4>
                <div className="relative w-[220px] h-[220px] flex items-center justify-center">
                    <Doughnut 
                        data={fraudDetectionData2}
                        options={{
                            cutout: '50%',
                            plugins: { legend: { display: false } },
                        }}
                    />
                   
                </div>
                <p className="text-center text-gray-700 font-medium mt-2">3 Completed, 1 Remaining</p>
            </div>
        </div>
    );
};

export default ProfileWithCharts;
