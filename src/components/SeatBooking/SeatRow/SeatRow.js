import React from 'react'
import classes from './SeatRow.css'
import SeatCol from './SeatCol/SeatCol'

const seatRow = (props) =>(
    <div className={classes.SeatRow}>
        <div className={classes.SeatCol}>

            <SeatCol {...props}/>

        </div>

    </div>
)

export default seatRow;