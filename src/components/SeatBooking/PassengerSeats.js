import React from 'react'
import classes from './PassengerSeats.css'
import {withRouter } from 'react-router'
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import { connect } from 'react-redux'


const passengerSeats = (props) => {

     const selectSeatColour = (seat) => {
          return props.passengers.filter(pass => pass.id === props.flightName+seat).map(pass => {

               if (pass.meals === 20 || pass.ancillaryService === 20) {
                    return true
               } else {
                    return false
               }

          })
     }


    
        const  seats = (


               <TableContainer component={Paper} style={{ width: '800px', alignItems: 'center', marginLeft: '100px' }}>
                    <Table aria-label="caption table">
                         <TableHead>
                              <TableRow>
                                   <TableCell align="center" ><h2>Paassenger Seat Reservation</h2></TableCell>

                              </TableRow>
                         </TableHead>
                         <TableBody>

                              <TableRow>
                                   <TableCell align="center">

                                        <table className={classes.grid}>
                                             <tbody>
                                                  <tr>

                                                       <td
                                                            className={props.reserved.indexOf('A1') > -1 ? (selectSeatColour('A1')[0] ? classes.reserved1 : classes.reserved) : classes.available}
                                                            onClick={e => props.onClickData('A1')}> A1 </td>
                                                       <td
                                                            className={props.reserved.indexOf('A2') > -1 ? (selectSeatColour('A2')[0] ? classes.reserved1 : classes.reserved) : classes.available}
                                                            onClick={e => props.onClickData('A2')}> A2 </td>
                                                       <td
                                                            className={props.reserved.indexOf('A3') > -1 ? (selectSeatColour('A3')[0] ? classes.reserved1 : classes.reserved) : classes.available}
                                                            onClick={e => props.onClickData('A3')}> A3 </td>
                                                       <td
                                                            className={props.reserved.indexOf('A4') > -1 ? (selectSeatColour('A4')[0] ? classes.reserved1 : classes.reserved) : classes.available}
                                                            onClick={e => props.onClickData('A4')}> A4 </td>
                                                       <td
                                                            className={props.reserved.indexOf('A5') > -1 ? (selectSeatColour('A5')[0] ? classes.reserved1 : classes.reserved) : classes.available}
                                                            onClick={e => props.onClickData('A5')}> A5 </td>
                                                       <td
                                                            className={props.reserved.indexOf('A6') > -1 ? (selectSeatColour('A6')[0] ? classes.reserved1 : classes.reserved) : classes.available}
                                                            onClick={e => props.onClickData('A6')}> A6 </td>
                                                       <td
                                                            className={props.reserved.indexOf('A7') > -1 ? (selectSeatColour('A7')[0] ? classes.reserved1 : classes.reserved) : classes.available}
                                                            onClick={e => props.onClickData('A7')}> A7 </td>
                                                       <td
                                                            className={props.reserved.indexOf('A8') > -1 ? (selectSeatColour('A8')[0] ? classes.reserved1 : classes.reserved) : classes.available}
                                                            onClick={e => props.onClickData('A8')}> A8 </td>
                                                       <td
                                                            className={props.reserved.indexOf('A9') > -1 ? (selectSeatColour('A9')[0] ? classes.reserved1 : classes.reserved) : classes.available}
                                                            onClick={e => props.onClickData('A9')}> A9 </td>
                                                       <td
                                                            className={props.reserved.indexOf('A10') > -1 ? (selectSeatColour('A10')[0] ? classes.reserved1 : classes.reserved) : classes.available}
                                                            onClick={e => props.onClickData('A10')}> A10 </td>
                                                       <td
                                                            className={props.reserved.indexOf('A11') > -1 ? (selectSeatColour('A11')[0] ? classes.reserved1 : classes.reserved) : classes.available}
                                                            onClick={e => props.onClickData('A11')}> A11 </td>
                                                       <td
                                                            className={props.reserved.indexOf('A12') > -1 ? (selectSeatColour('A12')[0] ? classes.reserved1 : classes.reserved) : classes.available}
                                                            onClick={e => props.onClickData('A12')}> A12 </td>
                                                       <td
                                                            className={props.reserved.indexOf('A13') > -1 ? (selectSeatColour('A13')[0] ? classes.reserved1 : classes.reserved) : classes.available}
                                                            onClick={e => props.onClickData('A13')}> A13 </td>
                                                       <td
                                                            className={props.reserved.indexOf('A14') > -1 ? (selectSeatColour('A14')[0] ? classes.reserved1 : classes.reserved) : classes.available}
                                                            onClick={e => props.onClickData('A14')}> A14 </td>
                                                       <td
                                                            className={props.reserved.indexOf('A15') > -1 ? (selectSeatColour('A15')[0] ? classes.reserved1 : classes.reserved) : classes.available}
                                                            onClick={e => props.onClickData('A15')}> A15 </td>
                                                       <td
                                                            className={props.reserved.indexOf('A16') > -1 ? (selectSeatColour('A16')[0] ? classes.reserved1 : classes.reserved) : classes.available}
                                                            onClick={e => props.onClickData('A16')}> A16 </td>
                                                       <td
                                                            className={props.reserved.indexOf('B1') > -1 ? (selectSeatColour('B1')[0] ? classes.reserved1 : classes.reserved) : classes.available}
                                                            onClick={e => props.onClickData('B1')}> B1 </td>
                                                       <td
                                                            className={props.reserved.indexOf('B2') > -1 ? (selectSeatColour('B2')[0] ? classes.reserved1 : classes.reserved) : classes.available}
                                                            onClick={e => props.onClickData('B2')}> B2 </td>
                                                       <td
                                                            className={props.reserved.indexOf('B3') > -1 ? (selectSeatColour('B3')[0] ? classes.reserved1 : classes.reserved) : classes.available}
                                                            onClick={e => props.onClickData('B3')}> B3 </td>
                                                       <td
                                                            className={props.reserved.indexOf('B4') > -1 ? (selectSeatColour('B4')[0] ? classes.reserved1 : classes.reserved) : classes.available}
                                                            onClick={e => props.onClickData('B4')}> B4 </td>
                                                       <td
                                                            className={props.reserved.indexOf('B5') > -1 ? (selectSeatColour('B5')[0] ? classes.reserved1 : classes.reserved) : classes.available}
                                                            onClick={e => props.onClickData('B5')}> B5 </td>
                                                       <td
                                                            className={props.reserved.indexOf('B6') > -1 ? (selectSeatColour('B6')[0] ? classes.reserved1 : classes.reserved) : classes.available}
                                                            onClick={e => props.onClickData('B6')}> B6 </td>
                                                       <td
                                                            className={props.reserved.indexOf('B7') > -1 ? (selectSeatColour('B7')[0] ? classes.reserved1 : classes.reserved) : classes.available}
                                                            onClick={e => props.onClickData('B7')}> B7 </td>
                                                       <td
                                                            className={props.reserved.indexOf('B8') > -1 ? (selectSeatColour('B8')[0] ? classes.reserved1 : classes.reserved) : classes.available}
                                                            onClick={e => props.onClickData('B8')}> B8 </td>
                                                       <td
                                                            className={props.reserved.indexOf('B9') > -1 ? (selectSeatColour('B9')[0] ? classes.reserved1 : classes.reserved) : classes.available}
                                                            onClick={e => props.onClickData('B9')}> B9 </td>
                                                       <td
                                                            className={props.reserved.indexOf('B10') > -1 ? (selectSeatColour('B10')[0] ? classes.reserved1 : classes.reserved) : classes.available}
                                                            onClick={e => props.onClickData('B10')}> B10 </td>
                                                       <td
                                                            className={props.reserved.indexOf('B11') > -1 ? (selectSeatColour('B11')[0] ? classes.reserved1 : classes.reserved) : classes.available}
                                                            onClick={e => props.onClickData('B11')}> B11 </td>
                                                       <td
                                                            className={props.reserved.indexOf('B12') > -1 ? (selectSeatColour('B12')[0] ? classes.reserved1 : classes.reserved) : classes.available}
                                                            onClick={e => props.onClickData('B12')}> B12 </td>
                                                       <td
                                                            className={props.reserved.indexOf('B13') > -1 ? (selectSeatColour('B13')[0] ? classes.reserved1 : classes.reserved) : classes.available}
                                                            onClick={e => props.onClickData('B13')}> B13 </td>
                                                       <td
                                                            className={props.reserved.indexOf('B14') > -1 ? (selectSeatColour('B14')[0] ? classes.reserved1 : classes.reserved) : classes.available}
                                                            onClick={e => props.onClickData('B14')}> B14 </td>
                                                       <td
                                                            className={props.reserved.indexOf('B15') > -1 ? (selectSeatColour('B15')[0] ? classes.reserved1 : classes.reserved) : classes.available}
                                                            onClick={e => props.onClickData('B15')}> B15 </td>
                                                       <td
                                                            className={props.reserved.indexOf('B16') > -1 ? (selectSeatColour('B16')[0] ? classes.reserved1 : classes.reserved) : classes.available}
                                                            onClick={e => props.onClickData('B16')}> B16 </td>
                                                       <td
                                                            className={props.reserved.indexOf('C1') > -1 ? (selectSeatColour('C1')[0] ? classes.reserved1 : classes.reserved) : classes.available}
                                                            onClick={e => props.onClickData('C1')}> C1 </td>
                                                       <td
                                                            className={props.reserved.indexOf('C2') > -1 ? (selectSeatColour('C2')[0] ? classes.reserved1 : classes.reserved) : classes.available}
                                                            onClick={e => props.onClickData('C2')}> C2 </td>
                                                       <td
                                                            className={props.reserved.indexOf('C3') > -1 ? (selectSeatColour('C3')[0] ? classes.reserved1 : classes.reserved) : classes.available}
                                                            onClick={e => props.onClickData('C3')}> C3 </td>
                                                       <td
                                                            className={props.reserved.indexOf('C4') > -1 ? (selectSeatColour('C4')[0] ? classes.reserved1 : classes.reserved) : classes.available}
                                                            onClick={e => props.onClickData('C4')}> C4 </td>
                                                       <td
                                                            className={props.reserved.indexOf('C5') > -1 ? (selectSeatColour('C5')[0] ? classes.reserved1 : classes.reserved) : classes.available}
                                                            onClick={e => props.onClickData('C5')}> C5 </td>
                                                       <td
                                                            className={props.reserved.indexOf('C6') > -1 ? (selectSeatColour('C6')[0] ? classes.reserved1 : classes.reserved) : classes.available}
                                                            onClick={e => props.onClickData('C6')}> C6 </td>
                                                       <td
                                                            className={props.reserved.indexOf('C7') > -1 ? (selectSeatColour('C7')[0] ? classes.reserved1 : classes.reserved) : classes.available}
                                                            onClick={e => props.onClickData('C7')}> C7 </td>
                                                       <td
                                                            className={props.reserved.indexOf('C8') > -1 ? (selectSeatColour('C8')[0] ? classes.reserved1 : classes.reserved) : classes.available}
                                                            onClick={e => props.onClickData('C8')}> C8 </td>
                                                       <td
                                                            className={props.reserved.indexOf('C9') > -1 ? (selectSeatColour('C9')[0] ? classes.reserved1 : classes.reserved) : classes.available}
                                                            onClick={e => props.onClickData('C9')}> C9 </td>
                                                       <td
                                                            className={props.reserved.indexOf('C10') > -1 ? (selectSeatColour('C10')[0] ? classes.reserved1 : classes.reserved) : classes.available}
                                                            onClick={e => props.onClickData('C10')}> C10 </td>
                                                       <td
                                                            className={props.reserved.indexOf('C11') > -1 ? (selectSeatColour('C11')[0] ? classes.reserved1 : classes.reserved) : classes.available}
                                                            onClick={e => props.onClickData('C11')}> C11 </td>
                                                       <td
                                                            className={props.reserved.indexOf('C12') > -1 ? (selectSeatColour('C12')[0] ? classes.reserved1 : classes.reserved) : classes.available}
                                                            onClick={e => props.onClickData('C12')}> C12 </td>
                                                       <td
                                                            className={props.reserved.indexOf('C13') > -1 ? (selectSeatColour('C13')[0] ? classes.reserved1 : classes.reserved) : classes.available}
                                                            onClick={e => props.onClickData('C13')}> C13 </td>
                                                       <td
                                                            className={props.reserved.indexOf('C14') > -1 ? (selectSeatColour('C14')[0] ? classes.reserved1 : classes.reserved) : classes.available}
                                                            onClick={e => props.onClickData('C14')}> C14 </td>
                                                       <td
                                                            className={props.reserved.indexOf('C15') > -1 ? (selectSeatColour('C15')[0] ? classes.reserved1 : classes.reserved) : classes.available}
                                                            onClick={e => props.onClickData('C15')}> C15 </td>
                                                       <td
                                                            className={props.reserved.indexOf('C16') > -1 ? (selectSeatColour('C16')[0] ? classes.reserved1 : classes.reserved) : classes.available}
                                                            onClick={e => props.onClickData('C16')}> C16 </td>

                                                       <td
                                                            className={props.reserved.indexOf('D1') > -1 ? (selectSeatColour('D1')[0] ? classes.reserved1 : classes.reserved) : classes.available}
                                                            onClick={e => props.onClickData('D1')}> D1 </td>
                                                       <td
                                                            className={props.reserved.indexOf('D2') > -1 ? (selectSeatColour('D2')[0] ? classes.reserved1 : classes.reserved) : classes.available}
                                                            onClick={e => props.onClickData('D2')}> D2 </td>
                                                       <td
                                                            className={props.reserved.indexOf('D3') > -1 ? (selectSeatColour('D3')[0] ? classes.reserved1 : classes.reserved) : classes.available}
                                                            onClick={e => props.onClickData('D3')}> D3 </td>
                                                       <td
                                                            className={props.reserved.indexOf('D4') > -1 ? (selectSeatColour('D4')[0] ? classes.reserved1 : classes.reserved) : classes.available}
                                                            onClick={e => props.onClickData('D4')}> D4 </td>
                                                       <td
                                                            className={props.reserved.indexOf('D5') > -1 ? (selectSeatColour('D5')[0] ? classes.reserved1 : classes.reserved) : classes.available}
                                                            onClick={e => props.onClickData('D5')}> D5 </td>
                                                       <td
                                                            className={props.reserved.indexOf('D6') > -1 ? (selectSeatColour('D6')[0] ? classes.reserved1 : classes.reserved) : classes.available}
                                                            onClick={e => props.onClickData('D6')}> D6 </td>
                                                       <td
                                                            className={props.reserved.indexOf('D7') > -1 ? (selectSeatColour('D7')[0] ? classes.reserved1 : classes.reserved) : classes.available}
                                                            onClick={e => props.onClickData('D7')}> D7 </td>
                                                       <td
                                                            className={props.reserved.indexOf('D8') > -1 ? (selectSeatColour('D8')[0] ? classes.reserved1 : classes.reserved) : classes.available}
                                                            onClick={e => props.onClickData('D8')}> D8 </td>
                                                       <td
                                                            className={props.reserved.indexOf('D9') > -1 ? (selectSeatColour('D9')[0] ? classes.reserved1 : classes.reserved) : classes.available}
                                                            onClick={e => props.onClickData('D9')}> D9 </td>
                                                       <td
                                                            className={props.reserved.indexOf('D10') > -1 ? (selectSeatColour('D10')[0] ? classes.reserved1 : classes.reserved) : classes.available}
                                                            onClick={e => props.onClickData('D10')}> D10 </td>
                                                       <td
                                                            className={props.reserved.indexOf('D11') > -1 ? (selectSeatColour('D11')[0] ? classes.reserved1 : classes.reserved) : classes.available}
                                                            onClick={e => props.onClickData('D11')}> D11 </td>
                                                       <td
                                                            className={props.reserved.indexOf('D12') > -1 ? (selectSeatColour('D12')[0] ? classes.reserved1 : classes.reserved) : classes.available}
                                                            onClick={e => props.onClickData('D12')}> D12 </td>
                                                       <td
                                                            className={props.reserved.indexOf('D13') > -1 ? (selectSeatColour('D13')[0] ? classes.reserved1 : classes.reserved) : classes.available}
                                                            onClick={e => props.onClickData('D13')}> D13 </td>
                                                       <td
                                                            className={props.reserved.indexOf('D14') > -1 ? (selectSeatColour('D14')[0] ? classes.reserved1 : classes.reserved) : classes.available}
                                                            onClick={e => props.onClickData('D14')}> D14 </td>
                                                       <td
                                                            className={props.reserved.indexOf('D15') > -1 ? (selectSeatColour('D15')[0] ? classes.reserved1 : classes.reserved) : classes.available}
                                                            onClick={e => props.onClickData('D15')}> D15 </td>
                                                       <td
                                                            className={props.reserved.indexOf('D16') > -1 ? (selectSeatColour('D16')[0] ? classes.reserved1 : classes.reserved) : classes.available}
                                                            onClick={e => props.onClickData('D16')}> D16 </td>



                                                  </tr>
                                             </tbody>
                                        </table>

                                        {/* <AvailableList available = { props.available } />
            <ReservedList reserved = { props.reserved } /> */}

                                   </TableCell>

                              </TableRow>
                         </TableBody>
                    </Table>
               </TableContainer>
          )
     
     return (
          <div>
               {seats}
          </div>

     )
}


const mapStateToProps = state => {
     return {
          passengers: state.passengerData.passengers,
     }
}


export default connect(mapStateToProps)(withRouter(passengerSeats));