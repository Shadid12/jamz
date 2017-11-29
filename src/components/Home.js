import React from 'react';
import FacebookLogin from 'react-facebook-login';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {facebookAuth} from "../actions/index";
import TiSocialFacebookCircular from 'react-icons/lib/ti/social-facebook-circular';
import Profile from './Profile';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

class Home extends React.Component {
    render() {
        if (this.props.facebook_auth) {
            return (
                <MuiThemeProvider>
                <Profile name={this.props.facebook_auth.name}
                         profilePic={this.props.facebook_auth.picture.data.url}/>
                </MuiThemeProvider>
            )
        } else {
            return (
                <div>
                    <FacebookLogin
                        appId="1755048537846980"
                        autoLoad={true}
                        fields="name,email,picture"
                        icon={<TiSocialFacebookCircular />}
                        onClick={() => {
                            console.log('ahha');
                        }}
                        callback={this.responseFacebook} />
                </div>
            )
        }
    }
    responseFacebook = (response) => {
        this.props.facebookAuth(response);
        console.log(this.props.facebook_auth);
    }
}

const mapStateToProps = state => {
    return {
        facebook_auth: state.facebookAuth
    }
};

const mapDispatchToProps = dispatch  => {
    return bindActionCreators({ facebookAuth }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);