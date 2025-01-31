'use client';

import { Bubble } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, Title, Tooltip, Legend } from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, PointElement, Title, Tooltip, Legend);

const FraudDetectionBubbleChart = () => {
    const fraudData = [
        { name: 'Credit Card Fraud', x: 5, y: 5000, r: 30, color: '#D32F2F' }, // Dark Red
        { name: 'Bank Transfer Fraud', x: 8, y: 7000, r: 40, color: '#C62828' }, // Deep Red
        { name: 'Identity Theft', x: 6, y: 4500, r: 25, color: '#FF5722' }, // Orange-Red
        { name: 'Insurance Fraud', x: 4, y: 3000, r: 20, color: '#E64A19' }, // Dark Orange
        { name: 'Online Scam', x: 7, y: 6500, r: 35, color: '#8B0000' }, // Deep Maroon
        { name: 'Loan Fraud', x: 3, y: 2500, r: 18, color: '#FFC107' }, // Yellow
    ];

    const data = {
        datasets: fraudData.map(fraud => ({
            label: fraud.name,
            data: [{ x: fraud.x, y: fraud.y, r: fraud.r }],
            backgroundColor: fraud.color,
        })),
    };

    const options = {
        responsive: true,
        plugins: {
            legend: {
                position: 'top',
            },
            title: {
                display: true,
                text: 'Fraud Cases Bubble Chart (Severity vs Financial Loss)',
            }
        },
        scales: {
            x: {
                title: {
                    display: true,
                    text: 'Fraud Severity (1-10)',
                },
                min: 1,
                max: 10,
            },
            y: {
                title: {
                    display: true,
                    text: 'Financial Loss ($)',
                },
                min: 1000,
                max: 8000,
            }
        }
    };

    return (
        <div className="flex flex-col items-center justify-center rounded-xl w-[90%] h-auto">
            <div className="mb-4">Fraud Severity & Financial Loss</div>
            <div className="w-full">
                <Bubble data={data} options={options} />
            </div>
        </div>
    );
};

export default FraudDetectionBubbleChart;
