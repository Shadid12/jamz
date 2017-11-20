import React from 'react';
import FacebookLogin from 'react-facebook-login';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {facebookAuth} from "../actions/index";

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