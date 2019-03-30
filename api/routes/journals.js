const express = require('express');

const router = express.Router();

router.get('/', (res, req) => {
	let data = {};

	if(res.body.to == 0) {
		const journals = "SELECT title, publisher FROM `journals` ORDER BY `id` DESC LIMIT 10";
		const count = "SELECT COUNT(*) FROM `journals`";
		
		db.query(count, (err, result) => {
			if(err) {
				throw new err;
			} else {
				data.count = result;
			}
		})

		db.query(journals, (err, result) => {
			if(err) {
				throw new err;
			} else {
				req.json({ data: { ...data, result }})
			}
		})
	} else {
		const journals = `SELECT title, publisher FROM \`journals\` ORDER BY \`id\` DESC LIMIT 10`;
		db.query(journals, (err, result) => {
			if(err) {
				throw new err;
			} else {
				req.json({ data: { ...data, result }})
			}
		})
	}
})

module.exports = router;