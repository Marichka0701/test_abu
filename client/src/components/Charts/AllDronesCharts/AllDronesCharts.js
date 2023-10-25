import React, {useState} from 'react';

import {allDronesChartStatistic} from "../../../constants/staticticsChartAllDrones";
import BarChart from "./BarChart";

const AllDronesCharts = () => {
    const [chartData, setCharData] = useState({
        labels: allDronesChartStatistic.map((data) => data.month),
        datasets: [
            {
                label: '',
                data: allDronesChartStatistic.map((data) => data.userGain),
                backgroundColor: [
                    "#3B82F6",
                    "#CCDCFF",
                    "#3B82F6",
                    "#CCDCFF",
                    "#3B82F6",
                    "#CCDCFF",
                    "#3B82F6",
                    "#CCDCFF",
                ],
                borderRadius: '10'
                // borderColor: "black",
                // borderWidth: 2,
            },
        ],
        options: {
            legend: {
                display: false,
            },
        },
    });

    return (
        <div>
            <BarChart chartData={chartData} />
        </div>
    );
};

export default AllDronesCharts;