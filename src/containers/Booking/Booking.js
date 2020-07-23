import React, { Component } from 'react'
import PassengerSeats from '../../components/SeatBooking/PassengerSeats'
import { connect } from 'react-redux'
import { Redirect, Route } from 'react-router-dom'
import PassengerData from '../../components/PassengerData/PassengerData'
import PassengerList from '../PassengerList/PassengerList'
import * as actions from '../../store/actions/index'
import ReseveredList from '../../components/SeatBooking/ReservedList/ReservedList'
import SeatMapColor from '../../components/SeatBooking/SeatMapColor/SeatMapColor'

export class Booking extends Component {
    state = {
        seat: [],
        seatAvailable: [],
        seatReserved: [],
        passengerData: false,
        flightId: 0,
        flightName: '', 
    }
    
     //serviceCallDone= true;
    componentDidMount() {
        this.parseQueryParams();

    }
    //&& !this.serviceCallDone
   
    componentDidUpdate(prevProps) {
        if (this.props.passengers === prevProps.passengers && this.props.fullFlights === prevProps.fullFlights ) {
           
            const flightData = {
                ...this.props.fullFlights   
            }
            const updatedFlightData = {
                ...flightData[this.state.flightId]
            }
            updatedFlightData.seat = this.state.seat;
            updatedFlightData.seatAvailable = this.state.seatAvailable;
            updatedFlightData.seatReserved = this.state.seatReserved;
            flightData[this.state.flightId] = updatedFlightData
            const data = {
                ...flightData[this.state.flightId],
                seat: flightData[this.state.flightId].seat,
                seatAvailable: flightData[this.state.flightId].seatAvailable,
                seatReserved: flightData[this.state.flightId].seatReserved

            }

            
                this.props.onUpdateingSeat(this.state.flightId, data)
                this.props.onInitFlighs()
                this.props.onFetchPassengerData()
            
          
        }

    }


    parseQueryParams() {
        const query = new URLSearchParams(this.props.location.search);

        let flightName = '';
        let flightId = 0;
        for (let param of query.entries()) {
            if (param[0] === 'flightName') {
                flightName = param[1]
            } else  {
                flightId = +param[1]
            }
        }
        if (this.props.fullFlights.length !== 0){
            this.setState({
                flightName: flightName,
                flightId: flightId,
                seat: this.props.fullFlights[flightId].seat,
                seatAvailable: this.props.fullFlights[flightId].seatAvailable,
                seatReserved: this.props.fullFlights[flightId].seatReserved
            });
        }
        
    }

    
    onClickData = (seat) => {
    
        //this.serviceCallDone = false;
        this.setState({ passengerData: true})
        if (this.state.seatReserved.indexOf(seat) > -1) {
            
            this.props.history.replace('/' + this.state.flightId)
            const data = {
                ...this.props.passengers[this.state.flightId+seat]
            }
           
            this.props.onDeletePassenger(seat,this.state.flightName, data)
            this.setState({
                seatAvailable: this.state.seatAvailable.concat(seat),
                seatReserved: this.state.seatReserved.filter(res => res !== seat),
                
            })

        }
        else {
            this.props.history.push({
                pathname: this.props.match.url + '/passengerdata',
                search: '?search=' + seat
            })
            this.setState({
                seatReserved: this.state.seatReserved.concat(seat),
                seatAvailable: this.state.seatAvailable.filter(res => res !== seat),
                
                
            })

        }

        
    }


    passengerDataCloseHandler = (seat) => {
        this.props.history.goBack()
        this.setState({
            seatAvailable: this.state.seatAvailable.concat(seat),
            seatReserved: this.state.seatReserved.filter(res => res !== seat),
            passengerData: false
        })
    }
    

    render() {
        let Seats = <Redirect to='/' />

        if (this.props.fullFlights.length !== 0) {
            Seats = (
                <React.Fragment>
                    <div style={{display: 'flex', margin: 'auto', height:'auto'}}>
                    <ReseveredList passengerData={this.props.passengers}   reserved={this.state.seatReserved}/>
                        <PassengerSeats
                            //seat={this.state.seat}
                            flightName={this.state.flightName}
                            available={this.state.seatAvailable}
                            reserved={this.state.seatReserved}
                            onClickData={this.onClickData.bind(this)}
                        />
                        <SeatMapColor/>
                    </div>
                      
                    
                    <PassengerList flightName={this.state.flightName} />

                    <Route path={this.props.match.url + '/passengerdata'} render={() => <PassengerData
                        open={this.state.passengerData}
                        flightName={this.state.flightName}
                        flightId={this.state.flightId}
                        modalClosed={this.passengerDataCloseHandler} />}/>
                </React.Fragment>

            )
        }

        return (
            <div>
                {Seats}
            </div>

        )
    }
}

const mapStateToProps = state => {
    return {
        fullFlights: state.inFlights.fullFlights,
        passengers: state.passengerData.passengers,
        isAuthenticate: state.auth.token !== null
    }
}
const mapDispatchToProps = dispatch => {
    return {
        onFetchPassengerData: () => dispatch(actions.fetchPassengerData()),
        onUpdateingSeat: (flightId, seatData) => dispatch(actions.updateSeat(flightId, seatData)),
        onDeletePassenger: (seat, data) => dispatch(actions.deletePassenger(seat, data)),
        onInitFlighs: () => dispatch(actions.initFlights()),
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Booking);