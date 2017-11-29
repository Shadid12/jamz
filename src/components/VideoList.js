import React from 'react';
import {List, ListItem} from 'material-ui/List';
import Avatar from 'material-ui/Avatar';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';

class VideoList extends React.Component {
    
    constructor(props) {
        super(props);
        this.state = {
            open: false,
            value: 1
        };
    }

    handleOpen = () => {
        this.setState({open: true});
    };

    handleClose = () => {
        this.setState({open: false});
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
                onClick={this.handleClose}
              />,
            ];

        return(
            <div>
            <List>
                {
                    this.props.videos.map((video) => {
                        console.log(video);
                        return(
                            <ListItem
                                primaryText={video.snippet.title}
                                key={video.id.videoId}
                                leftAvatar={<Avatar src={video.snippet.thumbnails.default.url} />}
                                onClick={this.handleOpen}
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
                          floatingLabelText="Frequency"
                          value={this.state.value}
                          onChange={this.handleChange}>
                          <MenuItem value={1} primaryText="Never" />
                          <MenuItem value={2} primaryText="Every Night" />
                          <MenuItem value={3} primaryText="Weeknights" />
                          <MenuItem value={4} primaryText="Weekends" />
                          <MenuItem value={5} primaryText="Weekly" />
                       </SelectField>

                </Dialog>
            </List>
            </div>
        )
    }
}

export default VideoList;