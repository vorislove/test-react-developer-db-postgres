import React from 'react';

function Button({ name, color, onClick, disabled, visible }) {
	const classColor = `btn btn-${color} ${!visible ? 'd-block' : 'd-none'}`;
	return (
		<button onClick={onClick} type="button" className={classColor} disabled={disabled}>
			{name}
		</button>
	);
}

export default Button;
