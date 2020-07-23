import React, { useEffect, useState } from "react";
import TextField from "@material-ui/core/TextField";
import { makeStyles } from "@material-ui/core/styles";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import FormHelperText from "@material-ui/core/FormHelperText";
import Modal from '../UI/Modal/Modal'
import  Button  from "../UI/Button/Button";
import { withRouter } from "react-router";
import * as actions from '../../store/actions/index'
import {connect} from 'react-redux'
import {useFormik} from 'formik'
import * as Yup from 'yup'


const useStyles = makeStyles(theme => ({
  root: {
    "& .MuiTextField-root": {
      margin: theme.spacing(1),
      width: "25ch"
    }
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: "25ch",
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));



const FormPropsTextFields = (props) => {
  const classes = useStyles();

 
   const [seatNumber, setSeatNumber] = useState('')

  useEffect(()=>{
    const query = new URLSearchParams(props.location.search);
    for (let param of query.entries()) {
        if (seatNumber !== param[1] ) {
            //console.log(param[1])
             setSeatNumber(param[1])
            
        }
    }
     
  },[])



const validationShema = Yup.object({
    firstName: Yup.string().required('Required'),
    lastName: Yup.string().required('Required'),
    email: Yup.string().email().required('Required'),
    phone: Yup.string().required('Required'),
    DOB: Yup.string().required('Required'),
    passport: Yup.string().required('Required'),
    address: Yup.string().required('Required'),
    pincode: Yup.string().required('Required'),
    meals: Yup.string(),
    wheelChair: Yup.string(),
    infant: Yup.string(),
    ancillaryService: Yup.string()
})
 
const {handleSubmit,handleChange,values,isSubmitting} = useFormik({
    initialValues:{
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        DOB: '',
        passport: '',
        address: '',
        pincode: '',
        meals: '',
        wheelChair: '',
        infant: '',
        ancillaryService: ''
    
},
validationShema,
    onSubmit(values, {setSubmitting}){
            const passengerData = {
                ...values,
                id: props.flightName+seatNumber,
                CheckedIn: 'Yes',
                flightName: props.flightName,
                flightId: props.flightId

            }
           
            props.onPassengerData(passengerData)
            setSubmitting(false);
          
     
        props.history.goBack()
    }
})

  
  
  return (
      <Modal show={props.open} modalClosed={()=>props.modalClosed(seatNumber)}>
    
  <form className={classes.root}  autoComplete="on" onSubmit={handleSubmit}>
      <div>
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
          variant="filled"
          type="DOB"
          name="DOB"
          value={values.DOB}
          onChange={handleChange}
          id="standard-required"
          label="DOB"
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
        <FormControl className={classes.formControl}>
          <InputLabel id="demo-simple-select-helper-label">Meals</InputLabel>
          <Select
            labelId="demo-simple-select-helper-label"
            id="demo-simple-select-helper"
            name="meals"
            value={values.meals}
            onChange={handleChange}
          >
            <MenuItem value="">
              <em>None</em>
            </MenuItem>
            <MenuItem value={10}>Normal Meals</MenuItem>
            <MenuItem value={20}>Combo Meals</MenuItem>
          </Select>
          <FormHelperText>Select the meals </FormHelperText>
        </FormControl>

        <FormControl className={classes.formControl}>
          <InputLabel id="demo-simple-select-helper-label">Wheel Chair</InputLabel>
          <Select
            labelId="demo-simple-select-helper-label"
            id="demo-simple-select-helper"
            name="wheelChair"
            value={values.wheelChair}
            onChange={handleChange}
          >
            <MenuItem value="">
              <em>None</em>
            </MenuItem>
            <MenuItem value={10}>Yes</MenuItem>
            <MenuItem value={20}>No</MenuItem>
          </Select>
          <FormHelperText>Select the Wheel Chair </FormHelperText>
        </FormControl>

        <FormControl className={classes.formControl}>
          <InputLabel id="demo-simple-select-helper-label">Infant</InputLabel>
          <Select
            labelId="demo-simple-select-helper-label"
            id="demo-simple-select-helper"
            name="infant"
            value={values.infant}
            onChange={handleChange}
          >
            <MenuItem value="">
              <em>None</em>
            </MenuItem>
            <MenuItem value={10}>Yes</MenuItem>
            <MenuItem value={20}>No</MenuItem>
          </Select>
          <FormHelperText>Select Infant</FormHelperText>
        </FormControl>

        <FormControl className={classes.formControl}>
          <InputLabel id="demo-simple-select-helper-label">Ancillary Service</InputLabel>
          <Select
            labelId="demo-simple-select-helper-label"
            id="demo-simple-select-helper"
            name="ancillaryService"
            value={values.ancillaryService}
            onChange={handleChange}
          >
            <MenuItem value="">
              <em>None</em>
            </MenuItem>
            <MenuItem value={10}>Drinks</MenuItem>
            <MenuItem value={20}>Chocolate</MenuItem>
            <MenuItem value={30}>Baggage</MenuItem>
            <MenuItem value={40}>Entertainment</MenuItem>
            <MenuItem value={50}>Confort Packs</MenuItem>
            <MenuItem value={60}>Wifi</MenuItem>
          </Select>
          <FormHelperText>Select Ancillary Service</FormHelperText>
        </FormControl>

      </div>
      <Button btnType='Danger' clicked={()=>props.modalClosed(seatNumber)}>CANCEL</Button>
      <Button btnType='Success' type='Submit' disabled={isSubmitting}>CHECKIN</Button>
    </form>
      </Modal>
  
  )
}
const mapStateToProps = state =>{
  return{
    loading: state.passengerData.loading
  }
}
const mapDispatchToProps = dispatch =>{
    return{
        onPassengerData: (passengerData)=> dispatch(actions.passengerData(passengerData))
    }
}
export default connect(mapStateToProps, mapDispatchToProps)( withRouter(FormPropsTextFields)) ;
