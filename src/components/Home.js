import React from 'react';
import FacebookLogin from 'react-facebook-login';
import {connect} from 'react-redux';

class Home extends React.Component {
    render() {
        return (
            <div>
                <FacebookLogin
                    appId="1755048537846980"
                    autoLoad={true}
                    fields="name,email,picture"
                    onClick={() => {
                        console.log('ahha');
                    }}
                    callback={this.responseFacebook} />
            </div>
        )
    }
    responseFacebook = (response) => {
        console.log(response);
        console.log(this.props.userAuth);
    }
}
const mapStateToProps = state => {
    return {
        facebookAuth: state.facebookAuth
    }
};

export default connect(mapStateToProps, null)(Home);