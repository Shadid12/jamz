import React from 'react';
import YTSearch from 'youtube-api-search'
import VideoList from './VideoList';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';

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
                videos: videos,
                value: ''
            });
        });
        event.preventDefault();
    }

    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <TextField
                      floatingLabelText="Search a song"
                      value={this.state.value}
                      onChange={this.handleChange}
                    />
                    <br />
                    <RaisedButton label="Search" primary={true} type="submit" value="Submit"/>
                    {/*<input type="submit" value="Submit" />*/}
                </form>
                <div>
                    <VideoList videos={this.state.videos}/>
                </div>
            </div>
        );
    }
}

export default Search;