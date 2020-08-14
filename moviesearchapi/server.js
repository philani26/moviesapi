/** @format */

const express = require('express');
const app = express();
const cors = require('cors');
const pool = require('./DB/db');

//Middleware
app.use(cors());
app.use(express.json());

//ROUTE
app.post('/user/booking', async (req, res) => {
	try {
		const { fname, title } = req.body;
		const newBooking = await pool.query(
			'INSERT INTO showBookings (fname, title) VALUES($1,$2) RETURNING *',
			[fname, title]
		);
		res.json(newBooking.rows[0]);
	} catch (error) {
		console.log(error.message);
	}
});

//USER REG
app.get('/user/booking', async (req, res) => {
	try {
		const getInfo = await pool.query('SELECT * FROM showBookings');
		res.json(getInfo.rows);
	} catch (err) {
		console.log(err.message);
	}
});
//GET USER
const port = 5000;
app.listen(port, () => console.log(`Server run on port ${port}`));
