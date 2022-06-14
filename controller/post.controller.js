const db = require('../db');

class PostController {
	async createPost(req, res) {
		const { date, name, quantity, distance } = req.body;
		//пришлось добавить т.к. из-за политики конфиденциальности бразуера запросы не проходили
		res.header('Access-Control-Allow-Origin', '*');
		res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,PATCH,OPTIONS');
		//
		const newPost = await db.query(
			`INSERT INTO post (date, name, quantity, distance) values ($1, $2, $3, $4) RETURNING * `,
			[date, name, quantity, distance]
		);
		res.json(newPost.rows[0]);
	}

	async getPosts(req, res) {
		//пришлось добавить т.к. из-за политики конфиденциальности бразуера запросы не проходили
		res.header('Access-Control-Allow-Origin', '*');
		res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,PATCH,OPTIONS');
		//
		const posts = await db.query('SELECT * FROM post');
		res.json(posts.rows);
	}

	async getPostsLimit(req, res) {
		const offset = req.params.offset;
		const limit = req.params.limit;
		//пришлось добавить т.к. из-за политики конфиденциальности бразуера запросы не проходили
		res.header('Access-Control-Allow-Origin', '*');
		res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,PATCH,OPTIONS');
		//
		const posts = await db.query('SELECT * FROM post where id >= $1 and id < $1 + $2', [
			offset,
			limit
		]);
		res.json(posts.rows);
	}

	async getOnePost(req, res) {
		const id = req.params.id;
		//пришлось добавить т.к. из-за политики конфиденциальности бразуера запросы не проходили
		res.header('Access-Control-Allow-Origin', '*');
		res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,PATCH,OPTIONS');
		//
		const posts = await db.query('SELECT * FROM post where id = $1', [id]);
		res.json(posts.rows[0]);
	}

	async deletePost(req, res) {
		const id = req.params.id;
		//пришлось добавить т.к. из-за политики конфиденциальности бразуера запросы не проходили
		res.header('Access-Control-Allow-Origin', '*');
		res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,PATCH,OPTIONS');
		//
		const posts = await db.query('DELETE FROM post where id = $1', [id]);
		res.json(posts.rows[0]);
	}
}

module.exports = new PostController();
