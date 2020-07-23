import React from 'react'
import classes from './SideDrawer.css'
import DashboardIcon from '@material-ui/icons/Dashboard'
import FlightIcon from '@material-ui/icons/Flight';
import { Link } from 'react-router-dom';
import {staff} from '../../../constants/constants'
import {connect} from 'react-redux'

export const sideDrawer = (props) => {
    let attachedClasses = [classes.SideDrawer, classes.Close];
    if (props.open) {
        attachedClasses = [classes.SideDrawer, classes.Open];
    }
    let dashboard = null
    if (!(props.email === staff[0] && props.isAuthenticate)) {
        dashboard = (
            <Link to='/dashboard'> <DashboardIcon /></Link>
        )
    }
    return (
        <React.Fragment>
            {/* <Backdrop show={props.open} clicked={props.closed} /> */}
            <div className={attachedClasses.join(" ")}>
                <nav style={{ justifyContent: 'space-between' }}>

                    {dashboard}
                    <Link to='/flights'><FlightIcon /></Link>
                    {/* <Link to='/'><CheckCircleOutlineIcon /></Link> */}
                </nav>
            </div>
        </React.Fragment>

    )
}
const mapSateToProps = state => {
    return {

        isAuthenticate: state.auth.token !== null,
        // adminMail: state.auth.adminMail,
        // staffMail: state.auth.staffMail
        email: state.auth.email
    }
}
export default connect(mapSateToProps)(sideDrawer);