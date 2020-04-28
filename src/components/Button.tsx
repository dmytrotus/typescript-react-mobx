import React, { useState } from 'react';


interface CheckTypes {
  id: number,
  name: string,
  ActiveBtn: number

}

/*function Button(props:{id:number, name:string}){*/


function Button( props:CheckTypes ){

	const [state, setState] = useState({
	    ActiveBtn: props.ActiveBtn
  	});

	//default active button
	let isActive = '';
	if(props.id === state.ActiveBtn)
		{
			isActive = 'active';
		}

	const choose = () => {
		console.log('choose')
	}

	return(

			<div className="button">
				<button onClick={choose} className={isActive}>
					{props.name}
				</button>
			</div>
		)
}


export default Button;