const express = require('express');

const router = express.Router();

router.post('/', ({ body }, req) => {
	if(body.data.to == 0) {
		const journalsRequest = "SELECT title, publisher FROM `journals` ORDER BY `id` DESC LIMIT 10";
		const countRequest = "SELECT COUNT(*) count FROM `journals`";
		let count = null;
		
		db.query(countRequest, (err, result) => {
			if(err) {
				console.warn(err);
				req.statusCode(400).json({ errors: 'Ошибка с получением данных, пожалуйста попробуйте позже' });
			} else {
				count = result[0];
			}
		})

		db.query(journalsRequest, (err, result) => {
			if(err) {
				console.warn(err);
				req.statusCode(400).json({ errors: 'Ошибка с получением данных, пожалуйста попробуйте позже' });
			} else {
				req.json({ ...count, result  });
			}
		})
	} else {
		
	}
})

module.exports = router;