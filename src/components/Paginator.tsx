import React, { Component } from 'react';
import { Fragment } from 'react';
import '../App.css';
import Button from './Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { observer, inject } from "mobx-react";
import { PaginatorStore } from './Store';

interface CheckTypes {
  PaginatorStore?: PaginatorStore;
}

interface IState {
  width?: number
}


@inject("PaginatorStore")
@observer

export default class Paginator extends Component<CheckTypes, IState>{

	constructor(props: CheckTypes) {
    	super(props);
    	this.state = {
    		width: window.innerWidth,
    	};
	}

	render(){

	const elements = [ "all", "new", "popular", "keno", "table", "lottery"];

	const Item = elements.map((el, id) => <Button 
		key={id}
		id={id}
		name={el}
		ActiveBtn={this.props.PaginatorStore!.menuId}
	 />)

	const ClickLeft = () => {
		let newVal = this.props.PaginatorStore!.menuId - 1;
		if(newVal < 0){
			newVal = 5;
		}
		this.props.PaginatorStore!.changeStore(newVal)
	}

	const ClickRight = () => {
		let newVal = this.props.PaginatorStore!.menuId + 1;
		if(newVal > 5){
			newVal = 0;
		}
		this.props.PaginatorStore!.changeStore(newVal)
	}



	const ShowWidth = () => {
		const wrapper = document.getElementsByClassName('wrapper');
		const wrapperWidth = Array.from( wrapper as HTMLCollectionOf<HTMLElement>)[0].offsetWidth;
		//const displayWidth = window.innerWidth;
		//this.setState({width:displayWidth});
		//console.log(displayWidth)
		console.log(this.state.width)

	}
	window.addEventListener("resize", ShowWidth);

	return(

			<Fragment>
			
			<div className="paginator">
				<div className="wrapper" style={{width: this.state.width}}>
					<div className="button arrow">
						<button className="">
						<FontAwesomeIcon onClick={ClickLeft} icon={faChevronLeft} />
						</button>
					</div>
					{Item}
					<div className="button arrow">
						<button className="">
						<FontAwesomeIcon onClick={ClickRight} icon={faChevronRight} />
						</button>
					</div>	
				</div>
			</div>
			
			</Fragment>
		)
	}
}
