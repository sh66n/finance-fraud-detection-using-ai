'use client';

import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const FraudDetectionChart = () => {
    const categories = [
        { id: '1', name: 'Credit Card Fraud' },
        { id: '2', name: 'Bank Transfer Fraud' },
        { id: '3', name: 'Identity Theft' },
        { id: '4', name: 'Insurance Fraud' },
        { id: '5', name: 'Online Scam' },
        { id: '6', name: 'Loan Fraud' },
    ];

    const fraudCases = {
        '1': 200,  
        '2': 150, 
        '3': 100,  
        '4': 80,  
        '5': 120, 
        '6': 90,   
    };

    const labels = categories.map(category => category.name);
    const fraudData = categories.map(category => fraudCases[category.id] || 0);

    const data = {
        labels,
        datasets: [
            {
                label: 'Fraud Cases',
                data: fraudData,
                backgroundColor: [
                    '#1976D2', 
                    '#1976D2', 
                    '#1976D2', 
                    '#1976D2', 
                    '#1976D2', 
                    '#1976D2',
                ],
                borderColor: '#000',
                borderWidth: 1,
            }
        ]
    };

    const options = {
        responsive: true,
        plugins: {
            legend: {
                position: 'top',
            },
            title: {
                display: true,
                text: 'Fraud Cases by Category',
            }
        },
        scales: {
            y: {
                beginAtZero: true,
            }
        }
    };

    return (
        <div className="flex flex-col items-center justify-center rounded-xl w-[90%] h-auto">
            <div className="mb-4">Fraud Detection Overview</div>
            <div className="w-full">
                <Bar data={data} options={options} />
            </div>
        </div>
    );
};

export default FraudDetectionChart;
