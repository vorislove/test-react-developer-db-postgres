import axios from 'axios';

axios.defaults.baseURL = 'http://localhost:5000/api/';

export default class Http {
	_baseLimit = 7;
	_baseOffeset = 1;

	createPost = async (date, name, quantity, distance) => {
		let res = await axios.post('/post/', {
			date,
			name,
			quantity,
			distance
		});
		return await res.data[0];
	};

	getPosts = async () => {
		let res = await axios.get('/post/');
		return await res.data;
	};

	getPostsLimit = async (offset = this._baseOffeset) => {
		let res = await axios.get(`post/${offset}/${this._baseLimit}`);
		return await res.data;
	};

	getOnePost = async (id) => {
		let res = await axios.get(`/post/${id}`);
		return await res.data;
	};

	deletePost = async (id) => {
		let res = await axios.get(`/post/${id}`);
		return await res.data;
	};
}
