/** @format */
import React, { Component } from 'react';
import Navbar from './components/nav/Navbar';
import SearchMovies from './components/serch/SearchMovies';
import List from './components/movies/List';
import Pagination from './components/pagination/Pagination';
import MovieInfo from './components/movies/MovieInfo';

require('dotenv').config();

class App extends Component {
	constructor() {
		super();
		this.state = {
			movies: [],
			text: '',
			totalPage: 0,
			currPage: 1,
			currentMovie: null,
		};
		this.apiKey = process.env.MOVIES_API;
	}

	handlerSubmit = (e) => {
		e.preventDefault();
		fetch(`http://www.omdbapi.com/?apikey=b089279f&s=${this.state.text}`)
			.then((data) => data.json())
			.then((data) => {
				this.setState({
					movies: [...data.Search],
					totalPage: data.total_result,
				});
			});
	};
	handlerChange = (e) => {
		e.preventDefault();
		this.setState({ text: e.target.value });
	};

	nextPage = (pageNumber) => {
		fetch(
			`http://www.omdbapi.com/?apikey=b089279f&s=${this.state.text}$page=${pageNumber}`
		)
			.then((data) => data.json())
			.then((data) => {
				this.setState({ movies: [...data.Search], currPage: pageNumber });
			});
	};

	viewMovieInfo = (id) => {
		const filterMovies = this.state.movies.filter((movie) => movie.id === id);
		const newCurrentMovie = filterMovies.length > 0 ? filterMovies[0] : null;
		this.setState({ currentMovie: newCurrentMovie });
	};
	closeMovieInfo = () => {
		this.setState({ currentMovie: null });
	};
	render() {
		console.log('this.state.currentMovie', this.state.currentMovie);
		const numPages = Math.floor(this.state.totalPage / 20);
		return (
			<div className='App'>
				<Navbar />

				{this.state.currentMovie == null ? (
					<div>
						<SearchMovies
							handlerSubmit={this.handlerSubmit}
							handlerChange={this.handlerChange}
						/>
						<div className='container'>
							<List
								currentMovie={this.state.currentMovie}
								viewMovieInfo={this.viewMovieInfo}
								movies={this.state.movies}
							/>
						</div>
					</div>
				) : (
					<MovieInfo
						closeMovieInfo={this.closeMovieInfo}
						currentMovie={this.state.currentMovie}
					/>
				)}

				<div className='container'>
					{this.state.totalPage > 20 ? (
						<Pagination
							pages={numPages}
							nextpage={this.nextPage}
							currpage={this.state.currPage}
						/>
					) : (
						''
					)}
				</div>
			</div>
		);
	}
}

export default App;
