import './App.css';
import Table from './Blocks/Table/Table';
import React, { useState, useEffect } from 'react';
import Sort from './Blocks/Sort/Sort';
import Http from './services/http';
import Button from './components/Button';

function App() {
	const [post, setPost] = useState([]);
	const [sortParams, setSortParams] = useState({ column: '', condition: '', inputValue: '' });
	const [offset, setOffset] = useState(0);
	const [loading, setLoading] = useState(true);
	const [postsEnded, setPostsEnded] = useState(false);
	const [newPostLoading, setNewPostLoading] = useState(false);
	const http = new Http();

	//получение данных из таблицы
	useEffect(() => {
		onRequest();
	}, []);

	//общая функция для первого запроса и последующих
	async function onRequest(offset) {
		onPostsLoading();
		await http.getPostsLimit(offset).then(onPostsLoaded).catch(onError);
	}

	//индикация загрузки на кнопке при дозагрузке
	const onPostsLoading = () => {
		setNewPostLoading(true);
	};

	const onPostsLoaded = (newPost) => {
		let ended = false;
		if (newPost.length < 10) {
			ended = true;
		}

		setPost([...post, ...newPost]); //обновление стейта
		setLoading(false); //спинер загурзки таблицы
		setNewPostLoading(false); //индкиация загузки на кнопке
		setOffset(offset + 10); //оффсет для дозагрузки остальных строк из таблицы
		setPostsEnded(ended); //убираю кнопку если вся таблица загружена
	};

	//сообщение об ошибке
	const onError = () => {
		console.log('Произошла ошибка при загрузке, повторите еще раз');
	};

	//опеределение параметрово сортировки по выпадющим спискам
	const sortParamSelect = (sort) => {
		if (sort === 'name' || sort === 'quantity' || sort === 'distance' || sort === '') {
			setSortParams((prev) => ({ ...prev, column: sort }));
		}
		if (
			sort === 'equals' ||
			sort === 'сontains' ||
			sort === 'more' ||
			sort === 'less' ||
			sort === ''
		) {
			setSortParams((prev) => ({ ...prev, condition: sort }));
		}
		console.log('🚀   Tabel   sortParams', sortParams);
	};

	//опеределение параметров сортировки по инпуту
	const sortParamInput = (sort) => {
		setSortParams((prev) => ({ ...prev, inputValue: sort }));
	};

	//сортировка таблицы по параметрам
	const sortPost = (post) => {
		const { column, condition, inputValue } = sortParams;

		// сортировка по столбцу и свойсвтву равно
		if (column === 'name' && condition === 'equals') {
			return post.filter((item) => item.name === inputValue);
		}
		if (column === 'quantity' && condition === 'equals') {
			return post.filter((item) => item.quantity === Number(inputValue));
		}
		if (column === 'distance' && condition === 'equals') {
			return post.filter((item) => item.distance === Number(inputValue));
		}

		// сортировка по столбцу и свойсвтву содержит
		if (column === 'name' && condition === 'сontains') {
			return post.filter((item) => {
				return item.name.indexOf(inputValue) > -1;
			});
		}
		if (column === 'quantity' && condition === 'сontains') {
			return post.filter((item) => {
				return item.quantity.toString().indexOf(inputValue) > -1;
			});
		}
		if (column === 'distance' && condition === 'сontains') {
			return post.filter((item) => {
				return item.distance.toString().indexOf(inputValue) > -1;
			});
		}

		// сортировка по столбцу и свойсвтву больше
		if (column === 'name' && condition === 'more') {
			return post.filter((item) => item.name.length > Number(inputValue));
		}
		if (column === 'quantity' && condition === 'more') {
			return post.filter((item) => item.quantity > Number(inputValue));
		}
		if (column === 'distance' && condition === 'more') {
			return post.filter((item) => item.distance > Number(inputValue));
		}

		// сортировка по столбцу и свойсвтву меньше
		if (column === 'name' && condition === 'less') {
			return post.filter((item) => item.name.length < Number(inputValue));
		}
		if (column === 'quantity' && condition === 'less') {
			return post.filter((item) => item.quantity < Number(inputValue));
		}
		if (column === 'distance' && condition === 'less') {
			return post.filter((item) => item.distance < Number(inputValue));
		}
	};

	//отображение таблицы в зависимости выбранны парметры сортировки или нет
	const sorgtingData =
		sortParams.column !== '' && sortParams.condition !== '' && sortParams.inputValue !== ''
			? sortPost(post)
			: post;

	const visibleBtn =
		(sortParams.column !== '' && sortParams.condition !== '' && sortParams.inputValue !== '') ||
		postsEnded
			? true
			: false;

	return (
		<div className="App">
			<div className="wrapper">
				<Sort onChangeSelect={sortParamSelect} onChangeInput={sortParamInput} />
				<Table data={sorgtingData} loading={loading} />
				<div className="d-flex flex-row justify-content-center mb-3">
					<Button
						visible={visibleBtn}
						name={!newPostLoading ? 'Ещё' : 'Загрузка'}
						color={'primary'}
						onClick={() => onRequest(offset)}
						disabled={newPostLoading}
					/>
				</div>
			</div>
		</div>
	);
}

export default App;
