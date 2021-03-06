import axios from 'axios'

import { BASE_URL, API_KEY } from '../../API'

export const getMovies = (page = 1) => {
	return (dispatch) => {
		return axios
			.get(`${BASE_URL}movie/now_playing?api_key=${API_KEY}&language=en-US&page=${page}`)
			.then((response) => {
				dispatch({ type: 'GET_MOVIES', payload: response.data.results })
			})
			.catch((err) => console.log(err))
	}
}

export const getMovieDetails = (id) => {
	return (dispatch) => {
		return axios
			.get(`${BASE_URL}movie/${id}?api_key=${API_KEY}&language=en-US`)
			.then((response) => {
				dispatch({ type: 'GET_MOVIE_DETAIL', payload: response.data })
			})
			.catch((err) => console.log(err))
	}
}
export const getGenres = () => {
	return (dispatch) => {
		return axios
			.get(`${BASE_URL}genre/movie/list?api_key=${API_KEY}`)
			.then((response) => {
				dispatch({ type: 'GET_GENRES', payload: response.data.genres })
			})
			.catch((err) => console.log(err))
	}
}

export const getMoviesByGenreId = (id) => {
	return (dispatch) => {
		return axios
			.get(`${BASE_URL}discover/movie?api_key=${API_KEY}&with_genres=${id}`)
			.then((response) => {
				dispatch({
					type: 'GET_MOVIES_BY_GENRE_ID',
					payload: response.data.results,
				})
			})
			.catch((err) => console.log(err))
	}
}
export const getCast = (id) => {
	return (dispatch) => {
		return axios
			.get(`${BASE_URL}movie/${id}/credits?api_key=${API_KEY}&language=en-US`)
			.then((response) => {
				dispatch({
					type: 'GET_CAST',
					payload: response.data.cast,
				})
			})
			.catch((err) => console.log(err))
	}
}
export const getTrailer = (id) => {
	return (dispatch) => {
		return axios
			.get(`${BASE_URL}movie/${id}/videos?api_key=${API_KEY}&language=en-US`)
			.then((response) => {
				dispatch({
					type: 'GET_TRAILER',
					payload: response.data.results[1],
				})
			})
			.catch((err) => console.log(err))
	}
}

export const searchMovie = (input) => (dispatch) => {
	const { query, page = 1 } = input

	return axios
		.get(`${BASE_URL}search/movie?api_key=${API_KEY}&language=en-US&query=${query}&page=${page}`)
		.then((response) => {
			dispatch({
				type: 'SEARCH_MOVIE',
				payload: response.data.results,
			})
		})
		.catch((err) => console.log(err))
}

export const getReviewsByMovieId = (movieId) => {
	return (dispatch) => {
		return axios
			.get(`${BASE_URL}movie/${movieId}/reviews?api_key=${API_KEY}`)
			.then((response) => {
				dispatch({ type: 'GET_REVIEWS_BY_MOVIE_ID', payload: response.data.results })
			})
			.catch((err) => console.log(err))
	}
}
export const postReview = (data) => {
	console.log('ACTION', data)
	return (dispatch) => {
		dispatch({ type: 'POST_REVIEWS_BY_MOVIE_ID', payload: data })
	}
}
