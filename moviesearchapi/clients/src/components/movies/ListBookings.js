/** @format */

import React, { Fragment, useEffect, useState } from 'react';

const ListBookings = () => {
	const [bookings, setBooking] = useState([]);
	const listboking = async () => {
		try {
			const response = await fetch('http://localhost:5000/user/booking');
			const jsonData = await response.json();
			setBooking(jsonData);
		} catch (err) {
			console.error(err.message);
		}
	};
	useEffect(() => {
		listboking();
	}, []);

	return (
		<Fragment>
			<div className='container mt-5'>
				<h2>Your Movies Booking List</h2>

				<table className='table table-striped table-dark'>
					<thead>
						<tr>
							<th>Your Name </th>
							<th>Movie Title</th>
							<th>Ticket</th>
						</tr>
					</thead>
					<tbody>
						{bookings.map((book) => (
							<tr>
								<td>{book.fname}</td>
								<td>{book.title}</td>
								<td>{book.ticket}</td>
							</tr>
						))}
					</tbody>
				</table>
			</div>
		</Fragment>
	);
};

export default ListBookings;
