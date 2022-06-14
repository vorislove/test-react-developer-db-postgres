import React from 'react';

function TableRow({ date, name, quantity, distance }) {
	return (
		<tr className="border-bottom">
			<th>{date}</th>
			<td>{name}</td>
			<td>{quantity}</td>
			<td>{distance}</td>
		</tr>
	);
}

export default TableRow;
