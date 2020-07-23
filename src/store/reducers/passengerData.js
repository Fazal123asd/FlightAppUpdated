import * as actionTypes from '../actions/actionTypes'

const initialState ={
    passengers: [],
    loading: false,
    error: null,

}
const reducer = (state=initialState, action) =>{
    switch(action.type){
        case actionTypes.UPDATE_PASSENGER_START:
            return {
                ...state,
                loading: true,
            }

        case actionTypes.UPDATE_PASSENGER_SUCCESS:
            const updatedPassenger = {
                ...action.updatedData
            }
            return{
                ...state,
                passengerData: state.passengers.concat(updatedPassenger),
                loading: false
            }

        case actionTypes.UPDATE_PASSENGER_FAIL:
            return{
                ...state,
                error: action.error,
                loading: false
            }

        
        case actionTypes.DELETE_PASSENGER_START:
            return {
                ...state,
                loading: true,
            }

        case actionTypes.DELETE_PASSENGER_SUCCESS:
            const deletedPassenger = {
                ...action.deletedData
            }
            return{
                ...state,
                passengerData: state.passengers.concat(deletedPassenger),
                loading: false
            }

        case actionTypes.DELETE_PASSENGER_FAIL:
            return{
                ...state,
                error: action.error,
                loading: false
            }
        case actionTypes.FETCH_PASSENGER_DATA_START:
            return{
                ...state,
                loading: true,
            }

        case actionTypes.FETCH_PASSENGER_DATA_SUCCESS:
            return{
                ...state,
                passengers: action.passengers,
                loading: false
            }

        case actionTypes.FETCH_PASSENGER_DATA_FAIL:
            return{
                ...state,
                error: action.error,
                loading: false
            }
        case actionTypes.PASSENGER_DATA_START:
            return{
                ...state,
                loading: true,
                
            }

        case actionTypes.PASSENGER_DATA_SUCCESS:
            const newPassenger ={
                ...action.passengerData,
            }
            return{
                ...state,
                passengers: state.passengers.concat(newPassenger),
                loading: false,
               
            }

        case actionTypes.PASSENGER_DATA_FAIL:
            return{
                ...state,
                loading: false,
                error: action.error
            }
        
        case actionTypes.SET_PASSENGER_DATA:
            return{
                ...state,
                loading: false
            }
        default: return state
    }

}

export default reducer;