import * as actionTypes from './actionTypes'
import axios from 'axios'

export const setFlights = (flights) =>{
    return{
        type: actionTypes.SET_FLIGHTS,
        flights: flights
    }
}

export const fetchFlightsFailed = (error) =>{
    return{
        type: actionTypes.FETCH_FLIGHTS_FAILED,
        error: error
    }
}

export const initFlights = () =>{
    return dispatch =>{
        axios.get('http://localhost:3003/flights').then(res => {
            dispatch(setFlights(res.data))
        }).catch(err => {
            dispatch(fetchFlightsFailed(err))
        })
    }
}

export const updateSeatStart = () =>{
    return{
        type: actionTypes.UPDATE_SEAT_START,
    }
}

export const updateSeatSuccess = (fligthtData) =>{
    return{
        type: actionTypes.UPDATE_SEAT_SUCCESS,
        fligthtData: fligthtData
    }   
}

export const updateSeatFail = (error) => {
    return{
        type: actionTypes.UPDATE_SEAT_FAIL,
        error: error
    }
}

export const updateSeat = (flightID, seatData) =>{
    return dispatch =>{
        dispatch(updateSeatStart())
        axios.put(`http://localhost:3003/flights/${flightID}`, seatData).then(res => {
            dispatch(updateSeatSuccess(res.data))
        }).catch(error=>{
            dispatch(updateSeatFail(error))
        })
    }
}