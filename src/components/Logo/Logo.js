import React from 'react'
import flightLogo from '../../assets/image/air-india-twi.jpg'
import classes from './Logo.css'

const logo =(props) =>(
    <div className={classes.Logo} >
        <img src={flightLogo} alt="Air India"/>
        </div>
)

export default logo;