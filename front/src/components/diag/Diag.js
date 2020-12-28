import React from "react";
import {Line} from 'react-chartjs-2';

const Diag = (props) => {
    return <div style={{ height: '23rem', width: '36rem'}}>
    <Line
        data={{...props.data}}
        options={{
            scales: {
                yAxes: [{
                    ticks: {
                        beginAtZero: true
                    }
                }]
            }
        }}
    />
    </div>
}

export default Diag;