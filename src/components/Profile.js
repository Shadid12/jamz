import React from 'react';

class Profile extends React.Component {
    render() {
        return (
            <div>
                <img src={this.props.profilePic} />
                hello {this.props.name}
            </div>
        )
    }
}

export default Profile;