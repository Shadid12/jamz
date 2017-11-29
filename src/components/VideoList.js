import React from 'react';
import {List, ListItem} from 'material-ui/List';
import Avatar from 'material-ui/Avatar';

class VideoList extends React.Component {
    render() {
        return(
            <div>
            <List>
                {
                    this.props.videos.map((video) => {
                        console.log(video);
                        return(
                            // <li key={video.id.videoId}>{video.snippet.title} + </li>
                            <ListItem
                                primaryText={video.snippet.title}
                                key={video.id.videoId}
                                leftAvatar={<Avatar src={video.snippet.thumbnails.default.url} />}
                            />
                        )
                    })
                }
            </List>
            </div>
        )
    }
}

export default VideoList;