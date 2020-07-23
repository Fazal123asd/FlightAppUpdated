import React, {useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import SideDrawer from '../UI/SiderDrawer/SiderDrawer'
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
    textAlign: 'center'
  },
}));

 const ButtonAppBar = (props) => {
  const classes = useStyles();
  const [showSideDrawer, setShowSideDrawer] = useState(true)
  const sideDrawerCloseHandler = () =>{
    setShowSideDrawer(false)
  }
  const sideDrawerToggle = () =>{
    setShowSideDrawer(prevState => !prevState)
  }

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <IconButton edge="start" className={classes.menuButton} onClick={sideDrawerToggle} color="inherit" aria-label="menu">
            <MenuIcon />
           
          </IconButton>
          
          <Typography variant="h6" className={classes.title}>
            Airline Admin Portal
          </Typography>
         {!props.isAuthenticate? <NavLink to='/'><Button color="white">Login</Button></NavLink>: <NavLink to='/logout'><Button color="white">Logout</Button></NavLink>} 
        </Toolbar>
    
      </AppBar>
      <SideDrawer open={showSideDrawer} closed={sideDrawerCloseHandler}/>
    </div>
  );
}
const mapSateToProps = state => {
  return {
      
      isAuthenticate: state.auth.token !== null
  }
}
export default connect(mapSateToProps)(ButtonAppBar)  ;