import Spinner from '../../components/Spinner';
import TableRow from '../../components/TableRow';

import './Table.scss';

function Tabel({ data, loading }) {
	//генерация элементов таблицы по полученым данным
	const rows = data.map((row) => {
		return (
			<TableRow
				key={row.id}
				date={row.date}
				name={row.name}
				quantity={row.quantity}
				distance={row.distance}
			/>
		);
	});

	const content = loading ? (
		<tr>
			<th className="border-bottom-0" scope="row" colspan="4">
				<Spinner color={'primary'} />
			</th>
		</tr>
	) : (
		rows
	);

	return (
		<div>
			<table className="table p-3">
				<thead className="header table-light">
					<tr className="border-bottom">
						<th scope="col">Дата</th>
						<th scope="col">Название</th>
						<th scope="col">Количесвто</th>
						<th scope="col">Дистанция</th>
					</tr>
				</thead>
				<tbody>{content}</tbody>
			</table>
		</div>
	);
}

export default Tabel;
