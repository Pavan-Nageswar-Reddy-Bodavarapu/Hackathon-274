import React, { useState, useEffect } from 'react';
import { Line } from 'react-chartjs-2';
import Papa from 'papaparse';

const GrowthRateGraph = () => {
    const [data, setData] = useState([]);
    const filepath = '/csv/GDP-Growth-Rate.csv'; // Update the filepath to the correct CSV

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
                label: 'GDP growth (annual %) India',
                fill: false,
                lineTension: 0.1,
                backgroundColor: 'rgba(255,99,132,0.4)',
                borderColor: 'rgba(255,99,132,1)',
                data: data.map((entry) => entry['GDP growth (annual %) India']),
            },
            {
                label: 'GDP growth (annual %) China',
                fill: false,
                lineTension: 0.1,
                backgroundColor: 'rgba(54, 162, 235, 0.4)',
                borderColor: 'rgba(54, 162, 235, 1)',
                data: data.map((entry) => entry['GDP growth (annual %) China']),
            },
            {
                label: 'GDP growth (annual %) USA',
                fill: false,
                lineTension: 0.1,
                backgroundColor: 'rgba(75, 192, 192, 0.4)',
                borderColor: 'rgba(75, 192, 192, 1)',
                data: data.map((entry) => entry['GDP growth (annual %) USA']),
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
                    text: 'GDP Growth Rate (annual %)',
                },
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

export default GrowthRateGraph;
