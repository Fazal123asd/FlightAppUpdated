import React from 'react'
import classes from './SeatCol.css'

const seatCol = (props) => {


    return (
        <React.Fragment>
            <div className={classes.SeatCol}>

                <div>
                    <div className={classes.SeatLabel}>{props.label}</div>
                </div>

            </div>

            <div className={classes.SeatCol}>

                <div className={classes.MakeRelative}>
                    <div className={classes.SeatBlock} style={{ backgroundColor: 'blue' }}><span></span></div>
                </div>

            </div>
        </React.Fragment>

    )

}




export default seatCol;