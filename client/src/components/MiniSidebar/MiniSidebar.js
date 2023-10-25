import React, {useState} from 'react';

import styles from './MiniSidebar.module.scss';
import ad from '../../constants/images/miniSidebar/polygon.png';
import menu from '../../constants/images/miniSidebar/menu.png';
import menuActive from '../../constants/images/miniSidebar/menu-active.png';
import dron from '../../constants/images/miniSidebar/dron.png';
import dronActive from '../../constants/images/miniSidebar/dron-active.png';
import history from '../../constants/images/miniSidebar/history.png';
import historyActive from '../../constants/images/miniSidebar/history-active.png';

const MiniSidebar = ({selectedOption, setSelectedOption}) => {

    return (
        <div className={styles.miniSidebar}>
            <div className={styles.miniSidebar_ad}>
                <img src={ad} alt="polygon icon"/>
                <span>AD</span>
            </div>

            <div className={styles.miniSidebar_options}>
                <div
                    onClick={() => setSelectedOption('menu')}
                    className={`${styles.miniSidebar_options_item} ${selectedOption === 'menu' && styles.active}`}
                >
                    <img src={selectedOption === 'menu' ? menuActive : menu} alt="menu icon"/>
                </div>

                <div
                    onClick={() => setSelectedOption('drone')}
                    className={`${styles.miniSidebar_options_item} ${selectedOption === 'drone' && styles.active}`}
                >
                    <img src={selectedOption === 'drone' ? dronActive : dron} alt="drone icon"/>
                </div>

                <div
                    onClick={() => setSelectedOption('history')}
                    className={`${styles.miniSidebar_options_item} ${selectedOption === 'history' && styles.active}`}
                >
                    <img src={selectedOption === 'history' ? historyActive : history} alt="history icon"/>
                </div>
            </div>
        </div>
    );
};

export default MiniSidebar;