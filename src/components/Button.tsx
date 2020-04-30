import React, { Component } from 'react';
import { observer, inject } from 'mobx-react';
import { PaginatorStore } from './Store';

interface CheckTypes {
  id: number,
  name: string,
  ActiveBtn: number,
  PaginatorStore?: PaginatorStore;
}

@inject("PaginatorStore")
@observer
export default class Button extends Component<CheckTypes>{

	render(){

	//default active button
	let isActive = '';
	if(this.props.id === this.props.ActiveBtn)
		{
			isActive = 'active';
		}

	const choose = (id: number) => {
		this.props.PaginatorStore!.changeStore(id)
	}


	return(

			<div className="button category">
				<button onClick={() => choose( this.props.id )} className={isActive}>
					{this.props.name}
				</button>
			</div>
		)
	}
}


