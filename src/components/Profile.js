import React from 'react';
import Search from './Search';
import './css/profile.css';
import DashBoard from './DashBoard';
import MakePlaylist from './MakePlaylist';

class Profile extends React.Component {
    render() {
        return (
            <div>
                <div className='profile-container'>
                    <div className='profile-wraper'>
                        <img src={this.props.profilePic} />
                    </div>
                </div>
                <div className='searchWraper'>
                    <div>hello {this.props.name}</div>
                </div>
                <div className='detail-box'>
                    <div className='search-main'>
                        <Search/>
                    </div>
                    <div className='rooms'>
                        <DashBoard />
                    </div>
                </div>
                <div>
                    <MakePlaylist />
                </div>
            </div>
        )
    }
}

export default Profile;