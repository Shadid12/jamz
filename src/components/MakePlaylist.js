import React from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import './css/make-list.css';
import FlatButton from 'material-ui/FlatButton';
import Dialog from 'material-ui/Dialog';
import TextField from 'material-ui/TextField';
import axios from 'axios';

class MakePlaylist extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
		    open: false,
		    value: ''
		};

		this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
	}

	handleOpen = () => {
    	this.setState({open: true});
  	};

    handleClose = () => {
    	this.setState({open: false});
    };

    handleChange(event) {
        this.setState({value: event.target.value});
    }

    handleSubmit = (event) => {
    	var name = this.state.value;
    	this.setState({value: '',
        			   open: false
    	});
        axios.post('https://zamsapi.herokuapp.com/rooms', {
		    name: name
		  })
		  .then(function (response) {
		    console.log(response);
		  })
		  .catch(function (error) {
		    console.log(error);
		  });
		  event.preventDefault();
	}

	render() {
		    const actions = [
		      <FlatButton
		        label="Cancel"
		        primary={true}
		        onClick={this.handleClose}
		      />,
		      <FlatButton
		        label="Create"
		        primary={true}
		        keyboardFocused={true}
		        onClick={this.handleSubmit}
		      />,
		    ];

		return (
			<div className='make-list-box'>
				<RaisedButton label="Make a Playlist" 
							  fullWidth={true}
							  onClick={this.handleOpen} 
				/>
				<Dialog
		          title="Dialog With Actions"
		          actions={actions}
		          modal={false}
		          open={this.state.open}
		          onRequestClose={this.handleClose}
		        >
		         	<TextField
                      floatingLabelText="Playlist name"
                      value={this.state.value}
                      onChange={this.handleChange}
                    /> 
		        </Dialog>
			</div>
		)
	}

}

export default MakePlaylist;