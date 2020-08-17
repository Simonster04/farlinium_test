import React, { useState, useEffect } from 'react';
import { Doughnut, Bar } from 'react-chartjs-2';
import axios from 'axios';

import './Chart.css'

const Chart = ({ chart, statistic, label, statistic2, label2, type }) => {

    const [brands, setBrands] = useState([]);


    useEffect(() => {
        axios.get('https://farliniumtest.herokuapp.com/brands')
            .then(res => {
                setBrands(res.data);
            })
            .catch(err => console.log(err));
    }, []);

    const doughnutChart = (
        brands.length
            ? (
                <Doughnut data={{
                    labels: brands.map(({ brand }) => brand),
                    datasets: [{
                        data: brands.map((brand) => brand[statistic]),
                        backgroundColor: ['rgba(255, 0, 0, 0.5)'],
                        label: label,
                        borderColor: '#33F',
                        fill: true
                    }]
                }}
                options={{
                    legend: { display: true },
                    title: { display: true, text: label }
                }}
                />) : null
    );

    const barChart = (
        brands.length
            ? (
                <Bar
                    data={{
                        labels: brands.map(({ brand }) => brand),
                        datasets: [{
                            label: label,
                            backgroundColor: ['rgba(255, 0, 0, 0.5)'],
                            hoverBackgroundColor: ['rgba(255, 0, 255, 0.5)'],
                            data: brands.map((brand) => brand[statistic]),
                            type: type ? type : "bar",
                            radius: type === "bubble" ? 5 : null
                        }],
                    }}
                    options={{
                        legend: { display: true },
                        title: { display: true, text: label }
                    }}
                />) : null
    )

    const doubleBarChart = (
        brands.length
            ? (
                <Bar
                    data={{
                        labels: brands.map(({ brand }) => brand),
                        datasets: [{
                            label: label,
                            backgroundColor: ['rgba(255, 0, 0, 0.5)'],
                            hoverBackgroundColor: ['rgba(255, 0, 255, 0.5)'],
                            data: brands.map((brand) => brand[statistic])
                        },
                        {
                            label: label2,
                            backgroundColor: ['rgba(255, 190, 0, 0.5)'],
                            hoverBackgroundColor: ['rgba(255, 255, 0, 0.5)'],
                            data: brands.map((brand) => brand[statistic2])
                        }],
                    }}
                    options={{
                        legend: { display: true },
                        title: { display: true, text: `${label} and ${label2}` }
                    }}
                />) : null
    )

    const percentajeChart = (
        brands.length
            ? (
                <Bar
                    data={{
                        labels: brands.map(({ brand }) => brand),
                        datasets: [
                        {
                            label: `${label2} / ${label} (%)`,
                            backgroundColor: ['rgba(255, 0, 0, 0.5)'],
                            hoverBackgroundColor: ['rgba(255, 0, 255, 0.5)'],
                            radius: 5,
                            data: brands.map((brand) => ((brand[statistic2] / brand[statistic]) * 100).toFixed(2)),
                            type: type
                        }],
                    }}
                    options={{
                        legend: { display: true },
                        title: { display: true, text: `${label} and ${label2}` }
                    }}
                />) : null
    )

    return (
        <div className="chart">
            {chart === 'doughnutChart' ? doughnutChart : chart === 'barChart' ? barChart : chart === 'percentajeChart' ? percentajeChart : doubleBarChart}
        </div>
    )

}

export default Chart;