import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {setRooms} from '../actions/index';
import {setCurrentRoom} from '../actions/index';
import axios from 'axios';
import YouTube from 'react-youtube';

class CurrentRoom extends React.Component {
	constructor(props){
		super(props);
		this._getAllSongs();
		this.state = {
			playlist: []
		}

	}

	_getAllSongs() {
		axios.get(`http://localhost:3001/rooms/${this.props.current_room}`)
		  .then( (response) => {
		    this.setState({playlist: response.data.room.playlist});
		  })
		  .catch( (error) => {
		    console.log(error);
		});
	}


	render() {
		var youtube;
		if (this.state.playlist) {
		  youtube = <YouTube
				        videoId={this.state.playlist[0]}
				        opts={opts}
				     />;
		} else {
		  youtube = (<button>Broadcast</button>);
		}
		return(
			<div>
				<button onClick={() => {
					this.props.setCurrentRoom('');
				}}>BACK</button>
				<div className='rooms'>
					I am in a room now {this.props.current_room}
	            </div>
	            {youtube}
            </div>
		)
	}
}

const opts = {
  height: '390',
  width: '640',
  playerVars: { // https://developers.google.com/youtube/player_parameters
    autoplay: 1
  }
};


const mapStateToProps = state => {
    return {
        current_room: state.current_room_reducer
    }
};

const mapDispatchToProps = dispatch  => {
    return bindActionCreators({ setCurrentRoom }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(CurrentRoom);