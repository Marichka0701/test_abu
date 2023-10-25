import React from 'react';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Filler,
    Legend,
} from 'chart.js';
import {Line} from 'react-chartjs-2';
// import faker from "faker";
// import faker from 'faker';

import styles from './LineChart.module.scss';

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Filler,
    Legend
);

export const options = {
    responsive: true,
    plugins: {
        legend: {
            position: 'top',
        },
        title: {
            display: false,
            text: 'Chart.js Line Chart',
        },
    },
    scales: {
        x: {
            display: false, // Вимкнути мітки збоку (ось X)
        },
        y: {
            display: false, // Вимкнути мітки знизу (ось Y)
        },
    },
    interaction: {
        mode: 'index', // Встановити режим взаємодії на 'index'
    },
    tooltips: {
        enabled: false, // Вимкнути вспливаючі вікна підказок (попапи)
    },
    // hover: false,
};

const generateRandomData = (length, min, max) => {
    return Array.from({length}, () => Math.floor(Math.random() * (max - min + 1) + min));
};

const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];
const appData = generateRandomData(labels.length, 0, 1000);

export const data = {
    labels,
    datasets: [
        {
            fill: true,
            label: 'Dataset 2',
            data: appData,
            borderColor: '#41B871',
            // backgroundColor: 'rgba(53, 162, 235, 0.5)',
            backgroundColor: '#0DE57630',
            // background: 'linear-gradient(90deg, rgba(255,255,255,1) 0%, rgba(13,229,118,1) 100%)',
        },
    ],
};

export const LineChart = ({title, number, percentage, description}) => {
    return (
        <div className={styles.lineChart}>
            <div className={styles.lineChart_description}>
                <p className={styles.lineChart_description_title}>Total</p>
                <p className={styles.lineChart_description_number}>2860</p>
                <p className={styles.lineChart_description_label}><span>2%</span> from previous month</p>
            </div>

            <div className={styles.lineChart_chart}>
                <Line options={options} data={data}/>
            </div>
        </div>
    )
}