import React, { useState, useEffect } from 'react';
import { Line } from 'react-chartjs-2';
import Papa from 'papaparse';

const CurrentAccountBalanceGraph = () => {
    const [data, setData] = useState([]);
    const filepath = '/csv/CurrentAccountBalance.csv'; // Update the filepath to the correct CSV

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
                label: 'Current Account Balance China',
                fill: false,
                lineTension: 0.1,
                backgroundColor: 'rgba(255,206,86,0.4)',
                borderColor: 'rgba(255,206,86,1)',
                data: data.map((entry) => entry.China),
            },
            {
                label: 'Current Account Balance India',
                fill: false,
                lineTension: 0.1,
                backgroundColor: 'rgba(255,159,64,0.4)',
                borderColor: 'rgba(255,159,64,1)',
                data: data.map((entry) => entry.India),
            },
            {
                label: 'Current Account Balance USA',
                fill: false,
                lineTension: 0.1,
                backgroundColor: 'rgba(153, 102, 255, 0.4)',
                borderColor: 'rgba(153, 102, 255, 1)',
                data: data.map((entry) => entry.USA),
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
                    text: 'Current Account Balance',
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

export default CurrentAccountBalanceGraph;
