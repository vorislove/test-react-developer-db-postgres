import React from 'react';

function Select({ options, defaultValue, classAdd, value, onChange }) {
	const className = 'form-select form-select-sm ' + classAdd;

	return (
		<select
			className={className}
			value={value}
			onChange={(e) => onChange(e.target.value)}
			aria-label=".form-select-sm example"
		>
			<option value="" selected>
				{defaultValue}
			</option>
			{options.map((option) => (
				<option key={option.value} value={option.value}>
					{option.name}
				</option>
			))}
		</select>
	);
}

export default Select;
