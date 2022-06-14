import React from 'react';

function Spinner({ color }) {
	const classColor = `spinner-border text-${color}`;
	return (
		<div className="d-flex flex-row justify-content-center">
			<div className={classColor} role="status">
				<span className="visually-hidden">Loading...</span>
			</div>
		</div>
	);
}

export default Spinner;
