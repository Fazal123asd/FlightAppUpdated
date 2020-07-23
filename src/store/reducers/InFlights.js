import * as actionTypes from '../actions/actionTypes'

const initialState = {
    fullFlights: [],
      error: null,
      loading: false
}

const reducer = (state=initialState, action) =>{
    switch (action.type) {
        case actionTypes.UPDATE_SEAT_START: 
        return{
            ...state,
            loading: true
        }
        case actionTypes.UPDATE_SEAT_SUCCESS:
            const updatedFlightData = {
                ...action.flightData
            }
            return{
                ...state,
                fullFlights: state.fullFlights.concat(updatedFlightData),
                loading: false
            }

        case actionTypes.UPDATE_SEAT_FAIL:
            return{
                ...state,
                loading: false,
                error: action.error
            }
        case actionTypes.SET_FLIGHTS:
            return{
                ...state,
                loading: false,
                fullFlights: action.flights
            }
        case actionTypes.FETCH_FLIGHTS_FAILED:
            return{
                ...state,
                error: action.error,
                loading: false
            }
        default:
            return state
    }
}

export default reducer;