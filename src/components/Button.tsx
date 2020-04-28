import React from 'react';

function Button(props: any){


	return(

			<div className="button">
				<button className={props.isActive ? "active" : ""}>
				{props.name}
				</button>
			</div>
		)
}


export default Button;