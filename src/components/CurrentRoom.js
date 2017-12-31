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
			playlist: [],
			current: 0
		}

	}

	_getAllSongs() {
		axios.get(`https://zamsapi.herokuapp.com/rooms/${this.props.current_room}`)
		  .then( (response) => {
		    this.setState({playlist: response.data.room.playlist});
		  })
		  .catch( (error) => {
		    console.log(error);
		});
	}


	render() {
		var youtube;
		if (this.state.playlist.length > 0) {
		  youtube = <YouTube
				        videoId={this.state.playlist[this.state.current]}
				        opts={opts}
				     />;
		} else {
		  youtube = <div>Hey Add some songs to this room</div>
		}
		return(
			<div>
				<button onClick={() => {
					this.props.setCurrentRoom('');
				}}>STOP</button>
				<button onClick={() => {
					if (this.state.current + 1 < this.state.playlist.length ){
						this.setState({ current: this.state.current + 1})
					} else {
						this.setState({ current: 0 });
					}
				}}>Next Song</button>
				<div className='rooms'>
					{youtube}
	            </div>
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