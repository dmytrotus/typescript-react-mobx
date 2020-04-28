import React from 'react';
import { Fragment } from 'react';
import '../App.css';
import Button from './Button';


function Paginator() {

	const elements = [ "all", "new", "popular", "keno", "table", "lottery"];

	const Item = elements.map((el, id) => <Button
		key={id}
		name={el}
		isActive={true}
	 />)


	return(

			<Fragment>
			<div className="paginator">
			{Item}
			</div>
			</Fragment>
		)
}

export default Paginator;