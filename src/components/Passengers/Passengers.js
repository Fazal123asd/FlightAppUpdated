import React, { useReducer } from "react";
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import TextField from "@material-ui/core/TextField";
import { makeStyles } from "@material-ui/core/styles";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import FormHelperText from "@material-ui/core/FormHelperText";
import { withRouter } from "react-router";
import StyledButton from '../UI/StyledButton/StyledButton'

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

const passengers = (props) => {
  const classes = useStyles();
  


  const ancillaryService = (services) => {
    switch (services) {
      case 10: return 'Drinks';
      case 20: return 'Chocolate';
      case 30: return 'Baggage';
      case 40: return 'Entertainment';
      case 50: return 'Confort Packs';
      case 60: return 'Wifi';
      default: return null

    }
  }

  const [userInput, setUserInput] = useReducer(
    (state, newState) => ({ ...state, ...newState }),
    {
      checkedIn: '',
      wheelChair: '',
      infant: '',
      DOB: '',
      passport: '',
      address: ''
    }
  );
  const handleChange = evt => {
    const name = evt.target.name;
    const newValue = evt.target.value;
    setUserInput({ [name]: newValue });
  }


  
  const clickHandler = (seat) =>{
   
    props.history.push({
      pathname:  '/passengerdetails',
      search: '?seatNo=' + seat 
  })
  }
  return (

    <React.Fragment>
      <TableContainer component={Paper} style={{ width: '70%', alignItems: 'center', margin: 'auto', marginTop: '30px', marginBottom: '20px' }}>
      <Table aria-label="caption table">
        <TableHead>
          <TableRow>
            <TableCell align="center"><strong><h3>Paassenger Search</h3></strong></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          <TableRow>
            <TableCell>
              <form className={classes.root} autoComplete="on">
                  <FormControl className={classes.formControl}>
                    <InputLabel id="demo-simple-select-helper-label">Checked In</InputLabel>
                    <Select
                      labelId="demo-simple-select-helper-label"
                      id="demo-simple-select-helper"
                      name="checkedIn"
                      value={userInput.checkedIn}
                      onChange={handleChange}
                    >
                      <MenuItem value={10}>
                        <em>None</em>
                      </MenuItem>
                      <MenuItem value={10}>Yes</MenuItem>
                      <MenuItem value={20}>No</MenuItem>

                    </Select>
                    <FormHelperText>Select Checked In</FormHelperText>
                  </FormControl>


                  <FormControl className={classes.formControl}>
                    <InputLabel id="demo-simple-select-helper-label">Wheel Chair</InputLabel>
                    <Select
                      labelId="demo-simple-select-helper-label"
                      id="demo-simple-select-helper"
                      name="wheelChair"
                      value={userInput.wheelChair}
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
                      value={userInput.infant}
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

                  <TextField
                    required
                    variant="filled"
                    type="DOB"
                    name="DOB"
                    value={userInput.DOB}
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
                    value={userInput.passport}
                    onChange={handleChange}
                    variant="filled"
                  />

                  <TextField
                    required
                    type="Address"
                    name="address"
                    id="standard-required"
                    label="Address"
                    value={userInput.address}
                    onChange={handleChange}
                    variant="filled"
                  />

              </form>

            </TableCell>
          </TableRow>
        </TableBody>
        </Table>
      </TableContainer>

      <TableContainer component={Paper} style={{ width: '70%', alignItems: 'center', margin: 'auto' }}>
        <Table aria-label="caption table">
          <caption></caption>
          <TableHead>
            <TableRow>
              <TableCell align="center" >Paassenger Name</TableCell>
              <TableCell align="center">Ancillary Services</TableCell>
              <TableCell align="center">Seat No</TableCell>
              <TableCell align="center">Flight Name</TableCell>
              <TableCell align="center">Detils</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {props.passengers.filter(passenger => ((userInput.checkedIn===10 || userInput.checkedIn ==='')?true:false) && 
            ((userInput.wheelChair === ''? true: userInput.wheelChair === passenger.wheelChair)) &&
            ((userInput.infant === ''? true: userInput.infant === passenger.infant)) &&
            ((userInput.DOB === ''? true: userInput.DOB === passenger.DOB)) &&
            ((userInput.passport === ''? true: userInput.passport === passenger.passport)) &&
            ((userInput.address === ''? true: userInput.address === passenger.address))
            
            
            ).map((row) => (
              <TableRow key={row.id}>
                <TableCell align="center">
                  {row.firstName}
                </TableCell>
                <TableCell align="center">{ancillaryService(row.ancillaryService)}</TableCell>
                <TableCell align="center">{row.id.slice(-2)}</TableCell>
                <TableCell align="center">{row.flightName}</TableCell>
                <TableCell align="center"><StyledButton clicked={()=>clickHandler(row.id)}>Details</StyledButton></TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

    </React.Fragment>



  )
}




  export default withRouter(passengers) ;
