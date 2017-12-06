import React from 'react';
import Search from './Search';
import './css/profile.css';
import DashBoard from './DashBoard';
import MakePlaylist from './MakePlaylist';
import BroadcastState from './BroadcastState';

class Profile extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            _broadcast: false
        }
    }

    _Setbroadcast = (e) => {
        e.preventDefault();
        this.setState({
          _broadcast: true
        })
    } 

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
                    {this.state._broadcast ? ( 
                        <div>Good</div>                     
                     ) : (
                        <div className='rooms'>
                            <DashBoard _Setbroadcast={this._Setbroadcast} />
                        </div> 
                    )}

                </div>
                <div>
                    <MakePlaylist />
                </div>
            </div>
        )
    }
}

export default Profile;