import React from 'react';

class VideoList extends React.Component {
    render() {
        return(
            <div>
                {
                    this.props.videos.map((video) => {
                        console.log(video);
                        return(
                            <li key={video.id.videoId}>{video.snippet.title}  + </li>
                        )
                    })
                }
            </div>
        )
    }
}

export default VideoList;