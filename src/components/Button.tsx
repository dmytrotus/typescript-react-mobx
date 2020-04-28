import React from 'react';


interface CheckTypes {
  id: number,
  name: string,
  ActiveBtn: number

}

/*function Button(props:{id:number, name:string}){*/


function Button( props:CheckTypes ){



	//default active button
	let isActive = '';
	if(props.id === props.ActiveBtn)
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