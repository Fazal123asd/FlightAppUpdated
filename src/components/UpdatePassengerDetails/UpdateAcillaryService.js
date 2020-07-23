import Modal from '../UI/Modal/Modal'
import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import FormHelperText from "@material-ui/core/FormHelperText";
import { useFormik } from 'formik'
import * as Yup from 'yup'
import { withRouter } from 'react-router';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
//import axios from '../../axios-flight'
import { connect } from 'react-redux';
import * as actions from '../../store/actions/index'

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
   
    meals: Yup.string().required('requried'),
   
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
      ancillaryService: ''

    },
    validationShema,
    onSubmit(values, { setSubmitting }) {
      const updatePassengerData = {
        ...props.passengers.find(pass=> pass.id === seatNumber),
        ancillaryService: values.ancillaryService

      }
      // axios.put(`/passengers/${seatNumber}`, updatePassengerData).then(res=>{
        
      // })
      props.onUpdatePassenger(seatNumber,updatePassengerData)
      setSubmitting(false);
      props.history.goBack()
    }
  })
 
  //console.log(props.passengers.find(pass=> pass.id === seatNumber))
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