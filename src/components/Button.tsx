import React, { Component } from 'react';
import { observer } from 'mobx-react';
import store from './Store';

interface CheckTypes {
  id: number,
  name: string,
  ActiveBtn: any,
}

@observer
export default class extends Component<CheckTypes>{

	render(){

	//default active button
	let isActive = '';
	if(this.props.id === this.props.ActiveBtn)
		{
			isActive = 'active';
		}

	const choose = (e: React.MouseEvent<HTMLButtonElement>, id: number) => {
		console.log('choose' + id)
		console.log(this.props)
		store.changeStore(id)
	}

	return(

			<div className="button">
				<button onClick={(e) => choose(e, this.props.id )} className={isActive}>
					{this.props.name}
				</button>
			</div>
		)
	}
}


