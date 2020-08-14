/** @format */

import React, { useState } from 'react';
import ListBookings from './ListBookings';

const MovieInfo = (props) => {
	const [fname, setName] = useState('');

	const onSubmitForm = async (e) => {
		e.preventDefault();
		console.log(props.currentMovie.Title);
		try {
			const body = {
				fname: fname,
				title: props.currentMovie.Title,
			};
			console.log('Body', body);

			const response = await fetch('http://localhost:5000/user/booking', {
				method: 'POST',
				headers: { 'Content-Type': 'application/json' },
				body: JSON.stringify(body),
			});
			// window.location = '/';
		} catch (err) {
			console.error(err.message);
		}
	};
	return (
		<div className='container'>
			<div
				className='row'
				onClick={props.closeMovieInfo}
				style={{ cursor: 'pointer', paddingTop: 50 }}>
				<i className='fa fa-arrow-left'></i>
				<span style={{ marginLeft: 10 }}>Go Back</span>
			</div>
			<div className='row'>
				<div className='col-4 md-6'>
					{props.currentMovie.poster_path === null ? (
						<img
							src={`https://s3-ap-southeast-1.amazonaws.com/upcode/static/default-image.jpg`}
							alt='image'
							style={{ width: '100%', height: '360' }}
						/>
					) : (
						<img
							src={props.currentMovie.Poster}
							alt='defult '
							style={{ width: '100%', height: '360' }}
						/>
					)}
				</div>
				<div className='col-8'>
					<div className='info-container'>
						<p>Title: {props.currentMovie.Title}</p>
						<p>Released: {props.currentMovie.Year}</p>
						<p>{props.currentMovie.Type}</p>
					</div>
					<label>To book a Movie Enter your Name</label>
					<form className='d-flex' onSubmit={onSubmitForm}>
						<input
							type='text'
							name='name'
							className='form-control'
							value={fname}
							onChange={(e) => setName(e.target.value)}
						/>
						<button className='btn btn-success'>Booking</button>
					</form>
				</div>
			</div>
			<ListBookings currentMovie={props.currentMovie} />
		</div>
	);
};

export default MovieInfo;
