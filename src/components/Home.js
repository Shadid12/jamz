import React from 'react';
import FacebookLogin from 'react-facebook-login';
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
    }
}

export default Home;