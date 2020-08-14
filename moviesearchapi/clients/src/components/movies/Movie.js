/** @format */

import React from 'react';

const Movie = (props) => {
	return (
		<div className='container'>
			<div className='row'>
				<div className='col-8 '>
					<div className='card'>
						<div className='card-image'>
							{props.image == null ? (
								<img
									src={
										'https://th.bing.com/th?q=Fortnite+Default+Background&w=120&h=120&c=1&rs=1&qlt=90&cb=1&pid=InlineBlock&mkt=en-ZA&adlt=moderate&t=1&mw=247'
									}
									alt='defult image'
									style={{ width: '10%', height: '60' }}
								/>
							) : (
								<img
									src={` ${props.image}`}
									alt='defult image'
									style={{ width: '100%', height: '360' }}
								/>
							)}
						</div>
						<div className='card-content'>
							<p>
								<a
									href='#'
									className='btn-warning btn-block p-2'
									onClick={() => props.viewMovieInfo(props.movieId)}>
									View Movie
								</a>
							</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Movie;
