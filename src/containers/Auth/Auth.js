import React, { Component } from 'react';
import { GoogleLogin } from 'react-google-login'
import { connect } from 'react-redux';
import * as actions from '../../store/actions/index'
import classes from './Auth.css'
import { Redirect } from 'react-router-dom'
import Spinner from '../../components/UI/Spinner/Spinner'
import { admin, staff } from '../../constants/constants'

export class Auth extends Component {
   
    login = (res) => {
        this.props.onAuthSuccess(res.tokenId, res.googleId, res.tokenObj.expires_in)
        //this.props.onCheckAuthTimeout(res.tokenObj.expires_in)
        const expirationDate = new Date(new Date().getTime() + res.tokenObj.expires_in * 1000)
        localStorage.setItem('expirationDate', expirationDate)
        this.props.onfetchMailId(res.profileObj.email)



    }
    loginFail = (res) => {
        this.props.onAuthFail(res.error)

    }
 




    render() {
        let form = null
        if (!this.props.loading) {
            form = <Spinner />
        }
        let errorMessage = null;
        if (this.props.error) {
            errorMessage = (
                <p>{this.props.error}</p>
            )
        }
       
        let authRedirect = null
        if (this.props.email === admin[0] && this.props.isAuthenticate) {
            this.props.onSetAuthRedirect('/dashboard')
            authRedirect = <Redirect to={this.props.authRedirect} />
        } else if (this.props.email === staff[0] && this.props.isAuthenticate) {
            this.props.onSetAuthRedirect('/flights')
            authRedirect = <Redirect to={this.props.authRedirect} />
        }
        form = (
            <React.Fragment>
                <div className={classes.Auth}>
                    {authRedirect}
                    {errorMessage}
                    <h1>Please create Two Gmail Ids for Staff and Admin and add these Email Ids to Constants File.</h1>
                    <h3>Welcome to Flight App</h3>
                    <hr />
                    <GoogleLogin
                        clientId="690929255520-8hekqiqv7g3r1iojn6riuu84oge90ft7.apps.googleusercontent.com"
                        buttonText="Login"
                        onSuccess={(res) => this.login(res)}
                        onFailure={(res) => this.loginFail(res)}
                        cookiePolicy={'single_host_origin'}
                    />


                </div>

            </React.Fragment>

        )

        return (
            <div>
                {form}
            </div>
        )
    }
}
const mapSateToProps = state => {
    return {
        authRedirect: state.auth.authRedirect,
        error: state.auth.error,
        isAuthenticate: state.auth.token !== null,
        // adminMail: state.auth.adminMail,
        // staffMail: state.auth.staffMail,
        email: state.auth.email
    }
}
const mapDispatchToProps = dispatch => {
    return {
        onAuthSuccess: (tokenId, userId, expiresIn) => dispatch(actions.authSuccess(tokenId, userId, expiresIn)),
        onAuthFail: (error) => dispatch(actions.authFail(error)),
        onCheckAuthTimeout: (timeOut) => dispatch(actions.checkAuthTimeout(timeOut)),
        onSetAuthRedirect: (path) => dispatch(actions.setAuthRedirect(path)),
        // onFetchAdminMail: () => dispatch(actions.fetchAdminMail()),
        // onFetchStaffMail: () => dispatch(actions.fetchStaffMail())
        onfetchMailId: (email) => dispatch(actions.fetchMailId(email)),
        onTryAutoSignUp: () => dispatch(actions.authCheckState())
    }
}
export default connect(mapSateToProps, mapDispatchToProps)(Auth);