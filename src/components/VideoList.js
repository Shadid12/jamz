import React from 'react';
import {List, ListItem} from 'material-ui/List';
import Avatar from 'material-ui/Avatar';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';
import {connect} from 'react-redux';
import {setRooms} from '../actions/index';
import axios from 'axios';
import {bindActionCreators} from 'redux';

class VideoList extends React.Component {
    
    constructor(props) {
        super(props);
        this.state = {
            open: false,
            value: '',
            selectedVideo: ''
        };

        this.getRooms();
    }

    getRooms = () => {
      axios.get('http://localhost:3001/rooms').
      then((res) => {
        this.props.setRooms(res.data.rooms);
      }).
      catch((err) => {
        console.log(err);
      })
    }

    handleClose = () => {
        this.setState({open: false});
    };

    handleSubmit = () => {
      console.log(this.state.selectedVideo, this.state.value);
      axios.put( `http://localhost:3001/rooms/${this.state.value}`, {
        song: this.state.selectedVideo
      })
      .then( (response) => {
        console.log(response);
        this.setState({open: false});
      })
      .catch( (error) => {
        console.log(error);
      });

    };

    handleChange = (event, index, value) => this.setState({value});

    render() {

        const actions = [
              <FlatButton
                label="Cancel"
                primary={true}
                onClick={this.handleClose}
              />,
              <FlatButton
                label="Submit"
                primary={true}
                onClick={this.handleSubmit}
              />,
            ];

        return(
            <div>
            <List>
                {
                    this.props.videos.map((video) => {
                        return(
                            <ListItem
                                primaryText={video.snippet.title}
                                key={video.id.videoId}
                                leftAvatar={<Avatar src={video.snippet.thumbnails.default.url} />}
                                onClick={ () => {
                                  this.setState({
                                    open: true,
                                    selectedVideo: video.id.videoId
                                  });
                                } }
                            />
                        )
                    })
                }
                <Dialog
                      title="Dialog With Actions"
                      actions={actions}
                      modal={true}
                      open={this.state.open}>
                      Select a playlist to add to 
                      <br />
                      <SelectField
                          floatingLabelText="Choose A Playlist"
                          value={this.state.value}
                          onChange={this.handleChange}>
                          {
                            this.props.rooms.map( (room) => {
                                return(
                                   <MenuItem
                                      key={room._id}
                                      value={room._id}
                                      primaryText={room.name}
                                    />
                                )
                            } )
                          }
                      </SelectField>
                </Dialog>
            </List>
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
    return bindActionCreators({ setRooms }, dispatch);
};


export default connect(mapStateToProps, mapDispatchToProps)(VideoList);