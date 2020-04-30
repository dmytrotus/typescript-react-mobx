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

@inject("PaginatorStore")
@observer

export default class Paginator extends Component<CheckTypes>{

	render(){

	const elements = [ "all", "new", "popular", "keno", "table", "lottery"];

	const Item = elements.map((el, id) => <Button
		key={id}
		id={id}
		name={el}
		ActiveBtn={this.props.PaginatorStore!.menuId}
	 />)

	return(

			<Fragment>
			
			<div className="paginator">
				<div className="wrapper">
					<div className="button">
						<button className="">
						<FontAwesomeIcon icon={faChevronLeft} />
						</button>
					</div>
					{Item}
					<div className="button">
						<button className="">
						<FontAwesomeIcon icon={faChevronRight} />
						</button>
					</div>	
				</div>
			</div>
			
			</Fragment>
		)
	}
}
