/** @format */

import React from 'react';

const SearchMovies = (props) => {
	return (
		<div className='container'>
			<form action='' onSubmit={props.handlerSubmit}>
				<input
					className='form-control mt-2'
					type='text'
					placeholder='Search'
					onChange={props.handlerChange}
				/>
			</form>
		</div>
	);
};

export default SearchMovies;
