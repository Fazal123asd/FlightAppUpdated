import React, { Component } from 'react'
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import { connect } from 'react-redux'
import UpdateMeals from '../../components/UpdatePassengerDetails/UpdateMeals'
import { Route } from 'react-router-dom'
import * as actions from '../../store/actions/index'
import UpdateAncillaryService from '../../components/UpdatePassengerDetails/UpdateAcillaryService'
import UpdateInfo from '../../components/UpdatePassengerDetails/UpdateInfo'
import StyledButton from '../../components/UI/StyledButton/StyledButton'


class PassengerDetails extends Component {

    state = {
        seatNumber: '',
        meals: '',
        ancillaryService: '',
        update: false,

    }

    componentDidMount() {
        const query = new URLSearchParams(this.props.location.search);
        let seatNumber = '';

        for (let param of query.entries()) {
            if (this.state.seatNumber !== param[1])
                seatNumber = param[1]
            this.setState({ seatNumber: seatNumber })
        }
        this.props.onFetchPassengerData()
       // this.props.onSetAuthRedirect()
    }

    componentDidUpdate(prevProps) {
        if (this.props.passengers === prevProps.passengers && this.props.isAuthenticate) {
            this.props.onFetchPassengerData()
        }

    }





    ancillaryService = (services) => {
        switch (services) {
            case 10: return 'Drinks';
            case 20: return 'Chocolate';
            case 30: return 'Baggage';
            case 40: return 'Entertainment';
            case 50: return 'Confort Packs';
            case 60: return 'Wifi';
            default: return null

        }
    }

    updateMealsHandler = (seat) => {
        this.setState({update: true})
        this.props.history.push({
            pathname: this.props.match.url + '/updateMeals',
            search: '?seatNumber=' + seat

        })

    }
    UpdateAncillaryServiceHandler = (seat) => {
        this.setState({update: true})
        this.props.history.push({
            pathname: this.props.match.url + '/updateAncillaryService',
            search: '?seatNumber=' + seat

        })
    }

    UpdateInfoHandler=(seat) =>{
        this.setState({update: true})
        this.props.history.push({
            pathname: this.props.match.url + '/updateInfo',
            search: '?seatNumber=' + seat

        })
    }
    modalClosed = () => {
        this.setState(prev => {
            return {
                ...this.state,
                update: !prev
            }
        })
        this.props.history.goBack()
    }
    render() {
        let passengerDetails = null

        if (this.state.seatNumber !== '') {
            passengerDetails = (
                <TableContainer component={Paper} style={{ width: '80%', alignItems: 'center', margin: 'auto' }}>
                    <Table aria-label="caption table">
                        <caption></caption>
                        <TableHead>
                            <TableRow>
                                <TableCell></TableCell>
                                <TableCell></TableCell>
                                <TableCell align='left'><strong>Passenger Details</strong></TableCell>
                                <TableCell></TableCell>
                                <TableCell></TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {this.props.passengers.filter(passenger => passenger.id === this.state.seatNumber
                            ).map((row) => (
                                <TableRow key={row.id}>
                                    <TableCell align="left">
                                        <strong>First Name: </strong>{row.firstName}
                                    </TableCell>
                                    <TableCell align="left">
                                        <strong>Last Name: </strong>{row.lastName}
                                    </TableCell>
                                    <TableCell align="left">
                                        <strong>Email Id: </strong>{row.email}
                                    </TableCell>

                                    <TableCell align="left">
                                        <strong>Phone: </strong>{row.phone}
                                    </TableCell>

                                    <TableCell align="left">
                                        <strong>DOB: </strong>{row.DOB}
                                    </TableCell>
                                </TableRow>
                            ))}

                            {this.props.passengers.filter(passenger => passenger.id === this.state.seatNumber
                            ).map((row) => (
                                <TableRow key={row.id}>
                                    <TableCell align="left">
                                        <strong>Passport: </strong>{row.passport}
                                    </TableCell>
                                    <TableCell align="left">
                                        <strong>meals: </strong>{(row.meals === 10) ? "Normal Meals" : "Combo Meals"}
                                    </TableCell>
                                    <TableCell align="left">
                                        <strong>Ancillary Service: </strong>{this.ancillaryService(row.ancillaryService)}
                                    </TableCell>
                                    <TableCell align="left">
                                        <strong>Infants: </strong>{row.infant === 10 ? "Yes" : "No"}
                                    </TableCell>
                                    <TableCell align="left">
                                        <strong>Seat Number: </strong>{row.id.slice(-2)}
                                    </TableCell>

                                </TableRow>
                            ))}

                            {this.props.passengers.filter(passenger => passenger.id === this.state.seatNumber
                            ).map((row) => (
                                <TableRow key={row.id}>
                                    <TableCell align="left">
                                        <strong>Address: </strong>{row.address}
                                    </TableCell>
                                    <TableCell align="left">
                                        <strong>PIN Code: </strong>{row.pincode}
                                    </TableCell>
                                    <TableCell align="left">
                                        <strong>Wheel Chair: </strong>{row.wheelChair === 10 ? "Yes" : "No"}
                                    </TableCell>
                                    <TableCell align="left">
                                        <strong>Flight Name: </strong>{row.flightName}
                                    </TableCell>
                                    <TableCell align="left">
                                        <strong>Cheked In: </strong>{row.CheckedIn}
                                    </TableCell>

                                </TableRow>
                            ))}
                            {this.props.passengers.filter(passenger => passenger.id === this.state.seatNumber
                            ).map((row) => (
                                <TableRow key={row.id}>
                                    <TableCell align='left'>{<StyledButton type="submit" clicked={() => this.updateMealsHandler(row.id)} >EDIT MEALS</StyledButton>}</TableCell>
                                    <TableCell align='center'></TableCell>
                                    <TableCell align='left'>{<StyledButton type="submit" clicked={() => this.UpdateAncillaryServiceHandler(row.id)} >EDIT ANCILLARY</StyledButton>}</TableCell>
                                    <TableCell align='center'></TableCell>
                                    <TableCell align='right'>{<StyledButton type="submit" clicked={() => this.UpdateInfoHandler(row.id)}>Update INFO</StyledButton>}</TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
            )
        }
        return (

            <div>
                {passengerDetails}
                <Route path={this.props.match.url + '/updateMeals'} render={() => <UpdateMeals
                    open={this.state.update}
                    modalClosed={this.modalClosed}
                />} />

                <Route path={this.props.match.url + '/updateAncillaryService'} render={() => <UpdateAncillaryService
                    open={this.state.update}
                    modalClosed={this.modalClosed}
                />} />

                <Route path={this.props.match.url + '/updateInfo'} render={() => <UpdateInfo
                    open={this.state.update}
                    modalClosed={this.modalClosed}
                />} />

            </div>


        )
    }
}
const mapStateToProps = state => {
    return {
        passengers: state.passengerData.passengers,
        isAuthenticate: state.auth.token !== null
    }
}
const mapDispatchToProps = dispatch => {
    return {
        onFetchPassengerData: () => dispatch(actions.fetchPassengerData()),
        //onSetAuthRedirect: () => dispatch(actions.setAuthRedirect('/'))
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(PassengerDetails) 