/** @format */

import React from 'react';

const Pagination = (props) => {
	const pageLink = [];
	for (let i = 1; i <= props.page + 1; i++) {
		let active = props.currPage === i ? 'active' : '';
		pageLink.push(
			<li
				className={`wave ${active}`}
				key={i}
				onClick={() => props.nextPage(i)}>
				<a href='#'>{i}</a>{' '}
			</li>
		);
	}
	return (
		<div>
			<div className='container'>
				<div className='row'>
					<ul className='pagination'>{pageLink}</ul>
				</div>
			</div>
		</div>
	);
};
export default Pagination;
