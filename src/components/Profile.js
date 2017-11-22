import React from 'react';
import Search from './Search';
import './css/profile.css';

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
                <div className='searchWraper'>
                    <Search/>
                </div>
            </div>
        )
    }
}

export default Profile;