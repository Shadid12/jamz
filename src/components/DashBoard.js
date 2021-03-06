import React from 'react';
import {Tabs, Tab} from 'material-ui/Tabs';
import axios from 'axios';
import {List, ListItem} from 'material-ui/List';
import {connect} from 'react-redux';
import {setRooms} from '../actions/index';
import {setCurrentRoom} from '../actions/index';
import {bindActionCreators} from 'redux';

class DashBoard extends React.Component {

	constructor(props) {
	    super(props);
	    this.state = {
	      value: 'b',
	      rooms: []
	    };
  	}

  	getRooms = () => {
  		axios.get('https://zamsapi.herokuapp.com/rooms').
  		then((res) => {
  			this.props.setRooms(res.data.rooms);
  		}).
  		catch((err) => {
  			console.log(err);
  		})
  	}

  	handleChange = (value) => {
	    this.setState({
	      value: value,
	    });
	    this.getRooms();
  	};

	render() {
		return (
			<div>
			<Tabs
		        value={this.state.value}
		        onChange={this.handleChange}
		      >
		        <Tab label="Nearby Playlists" value="a">
		          <div>
		            <h2 style={styles.headline}>Nearby Playlists</h2>
		            <List>
		            {
		            	this.props.rooms.map( (room) => {
		            		return(
		            			 <ListItem
		            			    key={room._id}
							        primaryText={room.name}
							        onClick={() => {
							        	this.props.setCurrentRoom(room._id);
							        }}
							      />
		            		)
		            	} )
		            }
		            </List>
		          </div>
		        </Tab>
		        <Tab label="Your Profile" value="b">
		          <div>
		            <h2 style={styles.headline}>Profile </h2>
		            <p>
		              This is another example of a controllable tab. Remember, if you
		              use controllable Tabs, you need to give all of your tabs values or else
		              you wont be able to select them.
		            </p>
		          </div>
		        </Tab>
		    </Tabs>
			</div>
		)
	}
}

const mapStateToProps = state => {
    return {
        rooms: state.rooms_reducer
    }
};

const mapDispatchToProps = dispatch  => {
    return bindActionCreators({ setRooms, setCurrentRoom }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(DashBoard);

const styles = {
  headline: {
    fontSize: 24,
    paddingTop: 16,
    marginBottom: 12,
    fontWeight: 400,
  },
};