const express = require('express');

const router = express.Router();

router.post('/', ({ body }, req) => {
	if(body.data.to == 0) {
		const journalsRequest = "SELECT title, publisher FROM `journals` ORDER BY `id` DESC LIMIT 10";
		const countRequest = "SELECT COUNT(*) count FROM `journals`";
		let count = null;
		console.log(2);
		db.query(countRequest, (err, result) => {
			if(err) {
				throw new err;
			} else {
				count = result[0];
				console.log(3);
			}
		})

		db.query(journalsRequest, (err, result) => {
			if(err) {
				throw new err;
			} else {
				console.log(result)
				console.log(4, { ...count, result })
				req.json({ ...count, result  });
			}
		})
	} else {
		// const journals = `SELECT title, publisher FROM \`journals\` ORDER BY \`id\` DESC LIMIT 10`;
		// db.query(journals, (err, result) => {
		// 	if(err) {
		// 		throw new err;
		// 	} else {
		// 		req.json({ data: { ...data, result }})
		// 	}
		// })
	}
})

module.exports = router;