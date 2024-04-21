import React, { useState, useEffect } from 'react';
import { Line } from 'react-chartjs-2';
import Papa from 'papaparse';

const FDIBOI = () => {
    const [data, setData] = useState([]);
    const filepath = '/csv/FDIBOICurrent.csv'; // Update the filepath to the correct CSV

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(filepath);
                const csvData = await response.text();

                Papa.parse(csvData, {
                    header: true,
                    dynamicTyping: true,
                    complete: (result) => {
                        setData(result.data);
                    },
                });
            } catch (error) {
                console.error('Error fetching CSV data:', error);
            }
        };

        fetchData();
    }, []);

    const chartData = {
        labels: data.map((entry) => entry.Year),
        datasets: [
            {
                label: 'Foreign direct investment, net (BoP, current US$) China',
                fill: false,
                lineTension: 0.1,
                backgroundColor: 'rgba(255,99,132,0.4)',
                borderColor: 'rgba(255,99,132,1)',
                data: data.map((entry) => entry['Foreign direct investment, net (BoP, current US$) China']),
            },
            {
                label: 'Foreign direct investment, net (BoP, current US$) India',
                fill: false,
                lineTension: 0.1,
                backgroundColor: 'rgba(54, 162, 235, 0.4)',
                borderColor: 'rgba(54, 162, 235, 1)',
                data: data.map((entry) => entry['Foreign direct investment, net (BoP, current US$) India']),
            }
        ],
    };

    const chartOptions = {
        scales: {
            x: {
                type: 'linear',
                position: 'bottom',
                title: {
                    display: true,
                    text: 'Year',
                },
            },
            y: {
                type: 'linear',
                position: 'left',
                title: {
                    display: true,
                    text: 'FDI Net Inflows (current US$)',
                },
                beginAtZero: true, // Depending on your data, you may want to start the scale at zero
            },
        },
        responsive: true,
        maintainAspectRatio: false,
    };

    return (
        <div style={{ height: '500px' }}>
            {data.length === 0 ? (
                <p>Loading data...</p>
            ) : (
                <Line data={chartData} options={chartOptions} />
            )}
        </div>
    );
};

export default FDIBOI;
