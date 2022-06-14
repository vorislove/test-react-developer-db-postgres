import React from 'react';
import Select from '../../components/Select';
import './Sort.scss';

function Sort({ onChangeSelect, onChangeInput }) {
	const sortItemColumn = [
		{ value: 'name', name: 'Название' },
		{ value: 'quantity', name: 'Количество' },
		{ value: 'distance', name: 'Дистанция' }
	];
	const sortItemCondition = [
		{ value: 'equals', name: 'Равно' },
		{ value: 'сontains', name: 'Содержит' },
		{ value: 'more', name: 'Больше' },
		{ value: 'less', name: 'Меншье' }
	];

	return (
		<div className="sorting pb-1 sticky-top bg-white">
			<div className="fs-4 text mb-1">Соритровка</div>
			<div className="selects">
				<Select
					onChange={onChangeSelect}
					defaultValue={'Выберите столбец'}
					options={sortItemColumn}
				/>
				<Select
					onChange={onChangeSelect}
					classAdd={'ms-2'}
					defaultValue={'Выберите условие'}
					options={sortItemCondition}
				/>
				<div className="input-group ms-2">
					<input
						onChange={(e) => onChangeInput(e.target.value)}
						type="text"
						className="form-control"
						placeholder="Введите значение для сортировки"
						aria-label="Recipient's username"
						aria-describedby="button-addon2"
					/>
				</div>
			</div>
		</div>
	);
}

export default Sort;
