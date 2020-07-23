import React, { Component, Suspense } from 'react';
import Layout from './components/Layout/Layout';
//import InFlights from './containers/Flights/InFlights';
import { BrowserRouter, Route } from 'react-router-dom'
//import Booking from './containers/Booking/Booking'
//import PassengerList from './containers/PassengerList/PassengerList'
import { Switch } from 'react-router-dom'
//import Passengerdetails from './containers/PassengerDetails/PassengerDetails'
import Auth from './containers/Auth/Auth'
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom'
//import Logout from './containers/Auth/Logout'
import { admin, staff } from './constants/constants'
import * as actions from './store/actions/index'
const InFlights = React.lazy(() => import('./containers/Flights/InFlights'));
const Booking = React.lazy(() => import('./containers/Booking/Booking'));
const PassengerList = React.lazy(() => import('./containers/PassengerList/PassengerList'));
const Passengerdetails = React.lazy(() => import('./containers/PassengerDetails/PassengerDetails'));
const Logout = React.lazy(() => import('./containers/Auth/Logout'));



class App extends Component {

  componentDidMount() {
    this.props.onTryAutoSignUp()
  }
  render() {



    let routes = (
      <Switch>
        <Route path='/' exact component={Auth} />
        <Redirect to='/' />
      </Switch>

    );


    // let adminMailId = null
    // adminMailId = this.props.adminMail.some(res => res === admin[0])


    // let staffMailId = null
    // staffMailId = this.props.staffMail.some(res => res === staff[0])

    // if (this.props.isAuthenticate && adminMailId && adminMailId !== undefined) {
    //   routes = (
    //     <Switch>
    //       <Route path='/dashboard' render={(props) => <Suspense fallback={<div>loading..</div>}>
    //         <PassengerList {...props}/>
    //       </Suspense>} /> 
    //       {/* <Route path='/flights' component={InFlights} /> */}
    //       <Route path='/logout' render={() => <Suspense fallback={<div>loading..</div>}>
    //         <Logout />
    //       </Suspense>} /> 
    //       <Route path='/passengerdetails' render={(props) => <Suspense fallback={<div>loading..</div>}>
    //         <Passengerdetails {...props}/>
    //       </Suspense>} />
    //       {/* <Route path='/:flightName' component={Booking}/> */}
    //       <Route path='/' exact component={Auth} />
    //       <Redirect to='/' />
    //     </Switch>
    //   )
    // }
    // //
    // //this.props.isAuthenticate && this.props.email === staff[0]
    // if (this.props.isAuthenticate && staffMailId && staffMailId !== undefined) {
    //   routes = (
    //     <Switch>
    //       {/* <Route path='/dashboard' component={PassengerList} /> */}
    //       <Route path='/logout'  render={(props) => <Suspense fallback={<div>loading..</div>}>
    //         <Logout {...props}/>
    //       </Suspense>} /> 
    //       <Route path='/flights' render={(props) => <Suspense fallback={<div>loading..</div>}>
    //         <InFlights {...props}/>
    //       </Suspense>} />
    //       <Route path='/passengerdetails' render={(props) => <Suspense fallback={<div>loading..</div>}>
    //         <Passengerdetails {...props}/>
    //       </Suspense>} />
    //       <Route path='/:flightName' render={(props) => <Suspense fallback={<div>loading..</div>}>
    //         <Booking {...props}/>
    //       </Suspense>} /> 
    //       <Route path='/' exact component={Auth} />
    //       <Redirect to='/' />
    //     </Switch>
    //   )
    // }

    if(this.props.email === admin[0] && this.props.isAuthenticate){
      routes = (
            <Switch>
              <Route path='/dashboard' render={(props) => <Suspense fallback={<div>loading..</div>}>
                <PassengerList {...props}/>
              </Suspense>} /> 
              {/* <Route path='/flights' component={InFlights} /> */}
              <Route path='/logout' render={() => <Suspense fallback={<div>loading..</div>}>
                <Logout />
              </Suspense>} /> 
              <Route path='/passengerdetails' render={(props) => <Suspense fallback={<div>loading..</div>}>
                <Passengerdetails {...props}/>
              </Suspense>} />
              {/* <Route path='/:flightName' component={Booking}/> */}
              <Route path='/' exact component={Auth} />
              <Redirect to='/' />
            </Switch>
          )
  }else if(this.props.email === staff[0] && this.props.isAuthenticate){
    routes = (
          <Switch>
            {/* <Route path='/dashboard' component={PassengerList} /> */}
            <Route path='/logout'  render={(props) => <Suspense fallback={<div>loading..</div>}>
              <Logout {...props}/>
            </Suspense>} /> 
            <Route path='/flights' render={(props) => <Suspense fallback={<div>loading..</div>}>
              <InFlights {...props}/>
            </Suspense>} />
            <Route path='/passengerdetails' render={(props) => <Suspense fallback={<div>loading..</div>}>
              <Passengerdetails {...props}/>
            </Suspense>} />
            <Route path='/:flightName' render={(props) => <Suspense fallback={<div>loading..</div>}>
              <Booking {...props}/>
            </Suspense>} /> 
            <Route path='/' exact component={Auth} />
            <Redirect to='/' />
          </Switch>
        )
  }

    // if (this.props.isAuthenticate) {
    //   routes = (
    //     <Switch>
    //       <Route path='/dashboard' component={PassengerList} />
    //       <Route path='/flights' component={InFlights} />
    //       <Route path='/logout' component={Logout} />
    //       <Route path='/passengerdetails' component={Passengerdetails} />
    //       <Route path='/:flightName' component={Booking} />
    //       <Route path='/' exact component={Auth} />
    //       <Redirect to='/' />
    //     </Switch>
    //   )
    // }



    return (
      <BrowserRouter>
        <div>
          <Layout />
          {routes}
        </div>
      </BrowserRouter>

    )

  }
}
const mapSateToProps = state => {
  return {

    isAuthenticate: state.auth.token !== null,
    // adminMail: state.auth.adminMail,
    // staffMail: state.auth.staffMail
    email: state.auth.email
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onTryAutoSignUp: () => dispatch(actions.authCheckState())
  }
}
export default connect(mapSateToProps, mapDispatchToProps)(App);
