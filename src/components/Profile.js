import React from 'react';
import Search from './Search';
import './css/profile.css';
import DashBoard from './DashBoard';
import MakePlaylist from './MakePlaylist';
import BroadcastState from './BroadcastState';
import {connect} from 'react-redux';
import CurrentRoom from './CurrentRoom'


class Profile extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            _broadcast: false
        }
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
                    {this.props.current_room !== '' ? ( 
                        <div><CurrentRoom /></div>                     
                     ) : (
                        <div className='rooms'>
                            <DashBoard  />
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

const mapStateToProps = state => {
    return {
        current_room: state.current_room_reducer
    }
};

export default connect(mapStateToProps, null)(Profile);