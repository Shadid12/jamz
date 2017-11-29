import React from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import './css/make-list.css';

class MakePlaylist extends React.Component {

	render() {
		return (
			<div className='make-list-box'>
				<RaisedButton label="Make a Playlist" fullWidth={true} />
			</div>
		)
	}

}

export default MakePlaylist;