import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {setRooms} from '../actions/index';
import {setCurrentRoom} from '../actions/index';

class CurrentRoom extends React.Component {
	constructor(props){
		super(props)
	}

	render() {
		return(
			<div>
				<button onClick={() => {
					this.props.setCurrentRoom('');
				}}>BACK</button>
				<div className='rooms'>
					I am in a room now {this.props.current_room}
	            </div>
            </div>
		)
	}
}

const mapStateToProps = state => {
    return {
        current_room: state.current_room_reducer
    }
};

const mapDispatchToProps = dispatch  => {
    return bindActionCreators({ setCurrentRoom }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(CurrentRoom);