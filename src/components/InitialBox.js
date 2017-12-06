import React from 'react';
import DashBoard from './DashBoard';
import Search from './Search';


export default class InitialBox extends React.Component {
	render() {
		return(
			<div className='rooms'>
				<div className='search-main'>
                     <Search/>
                </div>
                <DashBoard />
            </div>
		)
	}
}