import * as actionTypes from './actionTypes'
import axios from 'axios'

export const passengerDataSuccess = (passengerData) =>{
    return {
        type: actionTypes.PASSENGER_DATA_SUCCESS,
        passengerData: passengerData
    }
}

export const passengerDataStart = () =>{
    return{
        type: actionTypes.PASSENGER_DATA_START
    }
}

export const passengerDataFail = (error) =>{
    return{
        type: actionTypes.PASSENGER_DATA_FAIL,
        error: error
    }
}

export const setPassengerData = () =>{
    return{
        type: actionTypes.SET_PASSENGER_DATA
    }
}

export const passengerData = (passengerData) =>{
    return dispatch =>{
        dispatch(passengerDataStart())
        axios.post('http://localhost:3003/passengers', passengerData).then(res=>{
            dispatch(passengerDataSuccess(res.data))
            dispatch(setPassengerData())
        }).catch(err=>{
           dispatch(passengerDataFail(err))
        })
    }
}

export const fetchPassengerDataSuccess = (passengers) =>{
    return{
        type: actionTypes.FETCH_PASSENGER_DATA_SUCCESS,
        passengers: passengers
    }
}

export const fetchPassengerDataFail = (error) =>{
    return{
        type: actionTypes.FETCH_PASSENGER_DATA_FAIL,
        error: error
    }
}

export const fetchPassengerDataStart = () =>{
    return{
        type: actionTypes.FETCH_PASSENGER_DATA_START,
    }
}

export const fetchPassengerData =() =>{
    return dispatch => {
        dispatch(fetchPassengerDataStart())
        axios.get('http://localhost:3003/passengers').then(res =>{ 
            dispatch(fetchPassengerDataSuccess(res.data))
        }).catch(err =>{
            dispatch(fetchPassengerDataFail(err))
        })
    }
}


export const deletePassengerStart = ()=>{
    return {
        type: actionTypes.DELETE_PASSENGER_START
    }
}

export const deletePassengerSuccess = (deletedData) =>{
    return {
        type: actionTypes.DELETE_PASSENGER_SUCCESS,
        deletedData: deletedData
    }
}

export const deletePassengerFail = (error) =>{
    return {
        type: actionTypes.DELETE_PASSENGER_FAIL,
        error: error
    }
}

export const deletePassenger = (seat,flightName, data) =>{
    return dispatch =>{
        dispatch(deletePassengerStart())
        axios.delete(`http://localhost:3003/passengers/${flightName+seat}`,data).then(res =>{
            dispatch(deletePassengerSuccess(res.data))
        }).catch(error =>{
            dispatch(deletePassengerFail(error))
        })
    }
}


export const updatePassengerStart = ()=>{
    return {
        type: actionTypes.UPDATE_PASSENGER_START
    }
}

export const updatePassengerSuccess = (updatedData) =>{
    return {
        type: actionTypes.UPDATE_PASSENGER_SUCCESS,
        updatedData: updatedData
    }
}

export const updatePassengerFail = (error) =>{
    return {
        type: actionTypes.UPDATE_PASSENGER_FAIL,
        error: error
    }
}

export const updatePassenger = (seat, data) =>{
    return dispatch =>{
        dispatch(updatePassengerStart())
        axios.put(`http://localhost:3003/passengers/${seat}`,data).then(res =>{
            dispatch(updatePassengerSuccess(res.data))
        }).catch(error =>{
            dispatch(updatePassengerFail(error))
        })
    }
}