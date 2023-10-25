import React, {useEffect} from "react";
import {Bar} from "react-chartjs-2";

function BarChart({chartData}) {

    const options = {
        scales: {
            xAxes: [
                {
                    ticks: {
                        fontFamily: 'Arial', // Змінити шрифт для місяців (labels) на осі X
                        fontSize: 14, // Змінити розмір шрифту
                        fontColor: 'red', // Змінити кольору шрифту
                        fontStyle: 'italic', // Змінити стиль шрифту
                        // Додаткові стилі шрифту...
                    },
                    barPercentage: 0.7
                },
            ],
        },
    };

    return (
        <Bar options={options} data={chartData}/>
    );
}

export default BarChart;
