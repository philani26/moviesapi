/** @format */

import React, { Component } from 'react';

class Users extends Component {
	constructor() {
		super();
		this.state = {
			customers: [],
		};
	}
	componentDidMount() {
		fetch('/api/customers')
			.then((res) => res.json())
			.then((customers) =>
				this.setState({ customers }, () => console.log(customers))
			);
	}
	render() {
		return (
			<div>
				<h2></h2>
				<ul>
					{this.state.customers.map((customer) => (
						<li key={customer.id}>{customer.fname}</li>
					))}
				</ul>
			</div>
		);
	}
}

export default Users;
