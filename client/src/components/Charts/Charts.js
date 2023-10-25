import React, {useState} from 'react';

import styles from './Charts.module.scss';
import {LineChart} from "./LineChart/LineChart";
import AllDronesCharts from "./AllDronesCharts/AllDronesCharts";

const Charts = () => {
    const [selectedChart, setSelectedChart] = useState('All drones');

    return (
        <div className={styles.charts}>
            <div className={styles.charts_linear}>
                <h3>New Drones</h3>

                <div className={styles.charts_linear_content}>
                    <LineChart/>
                    <LineChart/>
                    <LineChart/>
                </div>
            </div>

            <div className={styles.charts_bar}>
                <ul className={styles.charts_bar_options}>
                    <li
                        className={selectedChart === 'All drones' ? styles.active : ''}
                        onClick={() => setSelectedChart('All drones')}
                    >All Drones
                    </li>
                    <li
                        className={selectedChart === 'White drones' ? styles.active : ''}
                        onClick={() => setSelectedChart('White drones')}
                    >White Drones
                    </li>
                    <li
                        className={selectedChart === 'Black drones' ? styles.active : ''}
                        onClick={() => setSelectedChart('Black drones')}
                    >Black Drones
                    </li>
                </ul>

                {
                    selectedChart === 'All drones' && <AllDronesCharts/>
                }
            </div>
        </div>
    );
};

export default Charts;