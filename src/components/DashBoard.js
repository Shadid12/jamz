import React from 'react';
import {Tabs, Tab} from 'material-ui/Tabs';

export default class DashBoard extends React.Component {

	constructor(props) {
	    super(props);
	    this.state = {
	      value: 'a',
	    };
  	}

  	handleChange = (value) => {
	    this.setState({
	      value: value,
	    });
  	};

	render() {
		return (
			<div>
			<Tabs
		        value={this.state.value}
		        onChange={this.handleChange}
		      >
		        <Tab label="Nearby Playlists" value="a">
		          <div>
		            <h2 style={styles.headline}>Nearby Playlists</h2>
		            <p>
		              Tabs are also controllable if you want to programmatically pass them their values.
		              This allows for more functionality in Tabs such as not
		              having any Tab selected or assigning them different values.
		            </p>
		          </div>
		        </Tab>
		        <Tab label="Your Profile" value="b">
		          <div>
		            <h2 style={styles.headline}>Profile </h2>
		            <p>
		              This is another example of a controllable tab. Remember, if you
		              use controllable Tabs, you need to give all of your tabs values or else
		              you wont be able to select them.
		            </p>
		          </div>
		        </Tab>
		    </Tabs>
			</div>
		)
	}
}

const styles = {
  headline: {
    fontSize: 24,
    paddingTop: 16,
    marginBottom: 12,
    fontWeight: 400,
  },
};