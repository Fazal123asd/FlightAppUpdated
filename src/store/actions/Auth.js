import * as actionTypes from './actionTypes'
//import axios from '../../axios-flight'

export const fetchMailId = (email) =>{
    localStorage.setItem('email', email)
    return{
        type: actionTypes.FETCH_MAIL_ID,
        email: email
    }
}
// export const fetchAdminMailStart = () =>{
//     return{
//         type: actionTypes.FETCH_ADMIN_MAIL_START
//     }
// }

// export const fetchAdminMailSuccess = (adminData) => {
//     return{
//         type: actionTypes.FETCH_ADMIN_MAIL_SUCCESS,
//         adminData: adminData

//     }
// }

// export const fetchAdminMailFail = (error) =>{
//     return{
//         type: actionTypes.FETCH_ADMIN_MAIL_FAIL,
//         error: error
//     }
// }

// export const fetchAdminMail = () =>{
//     return dispatch =>{
//         dispatch(fetchAdminMailStart())
//         axios.get('/admin').then(res =>{
//            dispatch(fetchAdminMailSuccess(res.data))
//           }).catch(err=>{
//             dispatch(fetchAdminMailFail(err))
//           })
//     }
// }


// export const fetchStaffMailStart = () =>{
//     return{
//         type: actionTypes.FETCH_STAFF_MAIL_START
//     }
// }

// export const fetchStaffMailSuccess = (staffData) => {
//     return{
//         type: actionTypes.FETCH_STAFF_MAIL_SUCCESS,
//         staffData: staffData

//     }
// }

// export const fetchStaffMailFail = (error) =>{
//     return{
//         type: actionTypes.FETCH_STAFF_MAIL_FAIL,
//         error: error
//     }
// }

// export const fetchStaffMail = () =>{
//     return dispatch =>{
//         dispatch(fetchStaffMailStart())
//         axios.get('/staff').then(res =>{
//            dispatch(fetchStaffMailSuccess(res.data))
//           }).catch(err=>{
//             dispatch(fetchStaffMailFail(err))
//           })
//     }
// }


export const authSuccess = (token, useerId, expiresIn) => {
    localStorage.setItem('token', token)
    localStorage.setItem('userId', useerId)
    return {
        type: actionTypes.AUTH_SUCCESS,
        token: token,
        useerId: useerId,
        // expiresIn: expiresIn
    }
  
}
export const authFail = (error) => {
    return {
        type: actionTypes.AUTH_FAIL,
        error: error
    }
}

export const logout = () => {
    localStorage.removeItem('token')
    localStorage.removeItem('expirationDate')
    localStorage.removeItem('userId')
    localStorage.removeItem('email')
    return {
        type: actionTypes.AUTH_LOGOUT
    }
}

export const checkAuthTimeout = (expirationTime) => {
   
    return dispatch => {
        setTimeout(() => {
            dispatch(logout())
        }, expirationTime * 1000)
    }
}


export const setAuthRedirect = (path) =>{
    return{
        type: actionTypes.SET_AUTH_REDIRECT_PATH,
        path: path
    }
}


export const authCheckState = () => {
    return dispatch => {
        const token = localStorage.getItem('token')
        if (!token) {
            dispatch(logout())
        } else {
            const expirationDate = new Date(localStorage.getItem('expirationDate'))
            if (expirationDate <= new Date()) {
                dispatch(logout())
            } else {
                const userId = localStorage.getItem('userId')
                const email = localStorage.getItem('email')
                dispatch(fetchMailId(email))
                dispatch(authSuccess(token, userId, expirationDate ))
                dispatch(checkAuthTimeout((expirationDate.getTime() - new Date().getTime()) / 1000))
            }
        }
    }
}