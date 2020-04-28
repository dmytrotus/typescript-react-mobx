import React, { Component } from 'react';
import { observer } from 'mobx-react';

interface CheckTypes {
  id: number,
  name: string,
  ActiveBtn: number

}

@observer
export default class extends Component<CheckTypes>{

	constructor(props:CheckTypes) {
	    super(props)
	}

	render(){

	console.log(this.props)

	//default active button
	let isActive = '';
	if(this.props.id === this.props.ActiveBtn)
		{
			isActive = 'active';
		}

	const choose = () => {
		console.log('choose')
	}

	return(

			<div className="button">
				<button onClick={choose} className={isActive}>
					{this.props.name}
				</button>
			</div>
		)
	}
}


