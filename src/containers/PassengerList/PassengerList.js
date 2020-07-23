import React, { Component } from 'react'
import { connect } from 'react-redux';
import * as actions from '../../store/actions/index'
import Passengers from '../../components/Passengers/Passengers'
import Spinner from '../../components/UI/Spinner/Spinner'

export class PassengerList extends Component {

    componentDidMount() {
        this.props.onFetchPassengerData()
        //this.props.onSetAuthRedirect()
    }
    render() {
        let PassengerList = <Spinner />
        if (!this.props.loading) {
            PassengerList = (
                <div>
                    <Passengers passengers={this.props.passengers} />
                </div>
            )
        }
        return (
            <div>
                {PassengerList}
            </div>
        )
    }
}
const mapStateToProps = state => {
    return {
        passengers: state.passengerData.passengers,
        loading: state.passengerData.loading
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onFetchPassengerData: () => dispatch(actions.fetchPassengerData()),
       // onSetAuthRedirect: () => dispatch(actions.setAuthRedirect('/'))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(PassengerList);