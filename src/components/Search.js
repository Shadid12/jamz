import React from 'react';
import YTSearch from 'youtube-api-search'
import VideoList from './VideoList';

class Search extends React.Component {
    constructor(props) {
        super(props);
        this.state = {value: '',
                      videos: []
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({value: event.target.value});
    }

    handleSubmit(event) {
        YTSearch({key: 'AIzaSyC0T7rcpdSPMDdn9zGAtlric3_biFt3qUc', term: this.state.value}, (videos) => {
            this.setState({
                videos: videos
            });
        });
        event.preventDefault();
    }

    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <label>
                        Name:
                        <input type="text" value={this.state.value} onChange={this.handleChange} />
                    </label>
                    <input type="submit" value="Submit" />
                </form>
                <div>
                    <VideoList videos={this.state.videos}/>
                </div>
            </div>
        );
    }
}

export default Search;