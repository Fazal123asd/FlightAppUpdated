import React, { Component } from 'react';
import Flights from '../../components/Flights/Flights'
import DatePicker from '../../components/UI/DatePicker/DatePicker'
import { TextField } from '@material-ui/core';
import { connect } from 'react-redux'
import * as actions from '../../store/actions/index'
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import TableHead from '@material-ui/core/TableHead';
import Spinner from '../../components/UI/Spinner/Spinner'
import StyledButton from '../../components/UI/StyledButton/StyledButton'

export class InFlights extends Component {
    state = {
        flights: [],
        departureFlight: '',
        arrivalFlight: '',

    }
    componentDidMount() {

        this.props.onInitFlighs()
      
    }

    departureFlightHandler = (event) => {

        this.setState({ departureFlight: event.target.value })
    }

    arrivalFlightHandler = (event) => {

        this.setState({ arrivalFlight: event.target.value })
    }
    handleChange = date => {
        this.setState({
            startDate: date
        });
    };

    searchFlightHandler = (event) => {
        event.preventDefault()
        
        const filteredArray = this.props.fullFlights.filter(flight => (flight.departure.toLowerCase() === this.state.departureFlight.toLowerCase()) && (flight.arrival.toLowerCase() === this.state.arrivalFlight.toLowerCase()))
        this.setState({ flights: filteredArray })
    }


    bookingHandler = (id, flightName) => {

        this.props.history.push({
            pathname: '/' + id,
            search: '?flightId=' + id + '&flightName=' + flightName
        })
    }


    render() {
        let flights = <Spinner />
        if (!this.props.loading) {
            flights = this.props.fullFlights.map((flights, id) => <Flights
                key={id}
                flightName={flights.flightName}
                departure={flights.departure}
                arrival={flights.arrival}
                duration={flights.duration}
                price={flights.price}
                departureTime={flights.departureTime}
                arrivalTime={flights.arrivalTime}
                book={() => this.bookingHandler(flights.id, flights.flightName)}
            />)
        }



        //let flights = <h1 style={{textAlign:'center'}}>Please Select the Flights</h1>
        if (this.state.flights.length !== 0) {
            flights = this.state.flights.map((flights, id) => <Flights
                key={id}
                flightName={flights.flightName}
                departure={flights.departure}
                arrival={flights.arrival}
                duration={flights.duration}
                price={flights.price}
                departureTime={flights.departureTime}
                arrivalTime={flights.arrivalTime}
                book={() => this.bookingHandler(flights.id, flights.flightName)}
            />)
        }

        

        return (

            <React.Fragment>
                <TableContainer component={Paper} style={{ width: '70%', alignItems: 'center', margin: 'auto' }}>
                    <Table aria-label="caption table">
                        <caption></caption>

                        <TableHead>
                            <TableRow>
                                <TableCell></TableCell>
                                <TableCell></TableCell>
                                <TableCell align='left'><strong>Search Flights</strong></TableCell>
                                <TableCell></TableCell>
                                <TableCell></TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            <TableRow >
                                <TableCell align='center'>{<TextField type="text" id="standard-basic" label="Departure Flight" onChange={this.departureFlightHandler} value={this.state.departureFlight} />}</TableCell>
                                <TableCell align='center'>{<TextField type="text" id="standard-basic1" label="Arrival Flight" onChange={this.arrivalFlightHandler} value={this.state.arrivalFlight} />}</TableCell>
                                <TableCell align='center'>{<DatePicker />}</TableCell>
                                <TableCell align='center'>{<StyledButton type="submit" clicked={this.searchFlightHandler}>Search</StyledButton>}</TableCell>

                            </TableRow>

                        </TableBody>
                    </Table>
                </TableContainer>
                {flights}

                </React.Fragment>



        )


    }
}
const mapStateToProps = state => {
    return {
        fullFlights: state.inFlights.fullFlights,
        loading: state.inFlights.loading

    }
}

const mapDispatchToProps = dispatch => {
    return {
        onInitFlighs: () => dispatch(actions.initFlights()),
        // onSetAuthRedirect: () => dispatch(actions.setAuthRedirect('/'))
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(InFlights);