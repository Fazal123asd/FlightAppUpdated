import * as actionTypes from '../actions/actionTypes'

const initialState={
    token: null,
    userId: null,
    error: '',
    loading: false,
    authRedirect: '/',
    email: ''
}
const reducer = (state= initialState, action) =>{
    switch(action.type){

        case actionTypes.FETCH_MAIL_ID:
            return{
                ...state,
                email: action.email
            }
        // case actionTypes.FETCH_ADMIN_MAIL_START:
        //     return{
        //         ...state,
        //         loading: true,
               
        //     }

        // case actionTypes.FETCH_ADMIN_MAIL_SUCCESS:
        //     return{
        //         ...state,
        //         loading: false,
        //         adminMail: action.adminData
        //     }

        // case actionTypes.FETCH_ADMIN_MAIL_FAIL:
        //     return{
        //         ...state,
        //         loading: false,
        //         error: action.error
        //     }

        //     case actionTypes.FETCH_STAFF_MAIL_START:
        //     return{
        //         ...state,
        //         loading: true,
               
        //     }

        // case actionTypes.FETCH_STAFF_MAIL_SUCCESS:
        //     return{
        //         ...state,
        //         loading: false,
        //         staffMail: action.staffData
        //     }

        // case actionTypes.FETCH_STAFF_MAIL_FAIL:
        //     return{
        //         ...state,
        //         loading: false,
        //         error: action.error
        //     }
        case actionTypes.AUTH_START: 
        return {
            ...state,
            loading: true
        }

        case actionTypes.AUTH_SUCCESS:
            return{
                ...state,
                token: action.token,
                userId: action.userId,
                error: null,
                loading: false

            }

        case actionTypes.AUTH_FAIL:
            return{
                ...state,
                error: action.error,
                loading:false
            }

        case actionTypes.AUTH_LOGOUT:
            return{
                ...state,
                token: null,
                userId: null

            }
        case actionTypes.SET_AUTH_REDIRECT_PATH:
            return{
                ...state,
                authRedirect: action.path
            }

        default:
            return state
    }
}

export default reducer;