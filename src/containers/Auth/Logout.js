import React, { Component } from 'react';
import * as actions from '../../store/actions/index'
import { Redirect } from 'react-router';
import { connect } from 'react-redux';
class Logout extends Component {
    componentDidMount(){
        this.props.onLogout()
        this.props.onSetAuthRedirect()
    }

    render(){
      
        return <Redirect to='/'/>
    }
}

const mapDispatchToProps = dispatch =>{
    return{
        onLogout: () => dispatch(actions.logout()),
        onSetAuthRedirect: () => dispatch(actions.setAuthRedirect('/')),
    }
}
export default connect(null,mapDispatchToProps)(Logout) ;