import React from 'react';
import { Card } from 'react-bootstrap'
import Cards from './Cards';
import Graph from './Graph';
import Graph1 from './Graph1';
const DashBoard = () => {
    return <div class="dashboard">
        <div className='section1'>

            <h2 className='headline c'>Company Metrics</h2>
            <div className="containers">
                <Cards class="success" title="$406,411.29" desc="Total Revenue" />
                <Cards title="$620" desc="Total Jobs Avg" />
                <Cards title="655" desc="Tickets Created" />
                <Cards title="735" desc="Tickets Scheduled" />
            </div>

            <div className="containers">
                <Cards class="danger" title="$110,448.8" desc="Outstanding Amount" />
                <Cards title="105" desc="Memberships Sold" />
                <Cards title="436" desc="Jobs Completed" />
                <Cards title="65" desc="Total Canceled" />
            </div>

        </div>
        <div className='section2'>

            <div className='location'>
                <h2 className='headline'>Revenue By Job Location</h2>
                <Graph />
            </div>
            <div className='revenue'>
                <h2 className='headline'>Revenue By Job Type</h2>
                <Graph1 />
            </div>
        </div>
    </div>;
};

export default DashBoard;
