import Modal from '../UI/Modal/Modal'
import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { useFormik } from 'formik'
import * as Yup from 'yup'
import { withRouter } from 'react-router';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
//import axios from '../../axios-flight'
import { connect } from 'react-redux';
import * as actions from '../../store/actions/index'
import TextField from "@material-ui/core/TextField";

const useStyles = makeStyles(theme => ({
  root: {
    "& .MuiTextField-root": {
      margin: theme.spacing(1),
      width: "25ch"
    }
  },
  formControl: {
    margin: theme.spacing(1),
    marginLeft: '90px',
    minWidth: "100ch",
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));



const updateMeals = (props) => {


  const classes = useStyles();
  const validationShema = Yup.object({
   
    firstName: Yup.string(),
    lastName: Yup.string(),
    email: Yup.string().email(),
    phone: Yup.string(),
    passport: Yup.string(),
    address: Yup.string(),
    pincode: Yup.string(),
   
  })

  const [seatNumber, setSeatNumber] = useState('')
  const querryParams = () =>{
    const query = new URLSearchParams(props.location.search);
    for (let param of query.entries()) {
      
        if (seatNumber !== param[1] ) {
            //console.log(param[1])
             setSeatNumber(param[1])
            
        }
    }
  }
  useEffect(()=>{
    querryParams()
    
     props.onFetchPassengerData()
  },[])


  const { handleSubmit, handleChange, values, isSubmitting } = useFormik({
    initialValues: {
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        passport: '',
        address: '',
        pincode: '',
    },
    validationShema,
    onSubmit(values, { setSubmitting }) {
      const updatePassengerData = {
        ...props.passengers.find(pass=> pass.id === seatNumber),
        firstName: values.firstName,
        lastName: values.lastName,
        email: values.email,
        phone: values.phone,
        passport: values.passport,
        address: values.address,
        pincode: values.pincode

      }
      // axios.put(`/passengers/${seatNumber}`, updatePassengerData).then(res=>{
      //   console.log(res.data)
      // })
      props.onUpdatePassenger(seatNumber, updatePassengerData)
      setSubmitting(false);
      props.history.goBack()
    }
  })
 // console.log(props.passengers.find(pass=> pass.id === seatNumber))

  const StyledButton = withStyles({
    root: {
      background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
      borderRadius: 3,
      border: 0,
      color: 'white',
      height: 48,
      padding: '0 30px',
      boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
    },
    label: {
      textTransform: 'capitalize',
    },
  })(Button);
  
  return (
    <form className={classes.root} autoComplete="on" onSubmit={handleSubmit}>
      <React.Fragment>
        <Modal show={props.open} modalClosed={props.modalClosed}>

        <TextField
          required
          type="text"
          value={values.firstName}
          onChange={handleChange}
          id="standard-required"
          label="First Name"
          name="firstName"
          variant="filled"
        />
        <TextField
          required
          type="text"
          value={values.lastName}
          onChange={handleChange}
          id="standard-required"
          label="Last Name"
          name="lastName"
          variant="filled"
        />
        <TextField
          required
          variant="filled"
          value={values.email}
          onChange={handleChange}
          type="Email"
          id="standard-required"
          name="email"
          label="Email"
        />
        <TextField
          id="standard-number"
          label="Phone"
          type="number"
          value={values.phone}
          onChange={handleChange}
          name="phone"
          InputLabelProps={{
            shrink: true
          }}
          variant="filled"
        />

        <TextField
          required
          type="Passport"
          id="standard-required"
          name="passport"
          label="Passport"
          value={values.passport}
          onChange={handleChange}
          variant="filled"
        />

        <TextField
          required
          type="Address"
          name="address"
          id="standard-required"
          label="Address"
          value={values.address}
          onChange={handleChange}
          variant="filled"
        />

        <TextField
          required
          type="Pincode"
          name="pincode"
          id="standard-required"
          label="Pincode"
          value={values.pincode}
          onChange={handleChange}
          variant="filled"
        />
        
          <StyledButton type="submit" onClick={()=>isSubmitting}>UPDATE</StyledButton>
        </Modal>
      </React.Fragment>
    </form>

  )
}
const mapStateToProps = state => {
  return {
      passengers: state.passengerData.passengers,

  }
}

const mapDispatchToProps = dispatch => {
  return {
      onFetchPassengerData: () => dispatch(actions.fetchPassengerData()),
      onUpdatePassenger: (seat, data) => dispatch(actions.updatePassenger(seat, data))
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(withRouter(updateMeals)) ;