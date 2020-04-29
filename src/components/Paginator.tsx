import React from 'react';
import { Fragment } from 'react';
import '../App.css';
import Button from './Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';

import store from './Store';


function Paginator() {

	const elements = [ "all", "new", "popular", "keno", "table", "lottery"];

	const Item = elements.map((el, id) => <Button
		key={id}
		id={id}
		name={el}
		ActiveBtn={store.menuId}
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

export default Paginator;