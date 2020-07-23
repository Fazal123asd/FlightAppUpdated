import React from 'react'
import classes from './Flight.css'
import Logo from '../../Logo/Logo'
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';



const flight = (props) => {

    return (

        <TableContainer component={Paper} style={{ width: '70%', alignItems: 'center', margin: 'auto', marginBottom: '10px', marginTop: '20px' }}>
            <Table aria-label="caption table">
                <TableBody>

                    <TableRow >
                        <TableCell align="center">

                            {
                                <div style={{ height: '100px' }}>
                                    <div style={{ height: '60%' }}>
                                        <Logo />
                                    </div>
                                </div>

                            }

                        </TableCell>
                        <TableCell align="center" >Flight Name: <strong>{props.flightName}</strong></TableCell>
                        <TableCell align="center">{<div>
                            <div style={{ textAlign: 'center' }}>{props.departureTime}</div>
                            Departure: <strong>{props.departure}</strong>
                        </div>}</TableCell>
                        <TableCell align="center">{<div>
                            <div style={{ textAlign: 'center' }}>{props.duration}</div>
                            <strong>Duration</strong>
                        </div>
                        }

                        </TableCell>
                        <TableCell align="center">{
                            <div><div style={{ textAlign: 'center' }}>{props.arrivalTime}</div>
                                Arrival: <strong>{props.arrival}</strong>
                            </div>}</TableCell>

                        <TableCell>  Price:  <strong>{props.price}</strong>  </TableCell>
                        <TableCell align="center"><button className={classes.Button} onClick={props.book}>Book</button></TableCell>
                    </TableRow>

                </TableBody>
            </Table>
        </TableContainer>

    )
}

export default flight;