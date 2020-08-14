/** @format */

import React from 'react';
import Movie from './Movie';

const List = (props) => {
	return (
		<div style={userStyle} className='mt-5'>
			{props.movies.map((movie) => {
				return (
					<Movie
						key={movie.imdbID}
						viewMovieInfo={props.viewMovieInfo}
						movieId={movie.id}
						image={movie.Poster}
					/>
				);
			})}
		</div>
	);
};
const userStyle = {
	display: 'grid',
	gridTemplateColumns: 'repeat(4, 1fr)',
	gridGap: '0.1rem',
	marginTop: '2px',
};
export default List;
