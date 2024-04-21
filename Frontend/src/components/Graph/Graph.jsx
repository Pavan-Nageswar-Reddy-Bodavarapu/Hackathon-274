import React, { useState, useEffect } from 'react'
import { Line } from 'react-chartjs-2'
import Papa from 'papaparse'

const Graph = () => {
    const [data, setData] = useState([])
    const filepath = '/csv/GDP-USD.csv'

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(filepath)

                const csvData = await response.text()

                Papa.parse(csvData, {
                    header: true,
                    dynamicTyping: true,
                    complete: (result) => {
                        // console.log('Loaded data:', result.data)
                        setData(result.data)
                    },
                })
            } catch (error) {
                console.error('Error fetching CSV data:', error)
            }
        }

        fetchData()
    }, [])

    const chartData = {
        labels: data.map((entry) => entry.Year),
        datasets: [
            {
                label: 'USA GDP (current US$)',
                fill: false,
                lineTension: 0.1,
                backgroundColor: 'rgba(75,192,192,0.4)',
                borderColor: 'rgba(75,192,192,1)',
                borderCapStyle: 'butt',
                borderDash: [],
                borderDashOffset: 0.0,
                borderJoinStyle: 'miter',
                pointBorderColor: 'rgba(75,192,192,1)',
                pointBackgroundColor: '#fff',
                pointBorderWidth: 1,
                pointHoverRadius: 5,
                pointHoverBackgroundColor: 'rgba(75,192,192,1)',
                pointHoverBorderColor: 'rgba(220,220,220,1)',
                pointHoverBorderWidth: 2,
                pointRadius: 1,
                pointHitRadius: 10,
                data: data.map((entry) => entry['GDP (current US$) India']),
            },
        ],
    }

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
                    text: 'USA GDP (current US$)',
                },
            },
        },
    }

    return (
        <div>
            {data.length === 0 ? (
                <p>Loading data...</p>
            ) : (
                <Line data={chartData} options={chartOptions} />
            )}
        </div>
    )
}

export default Graph
