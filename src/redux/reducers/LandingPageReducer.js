import { HOME_MOVIES_TOP, TOP_PICK_MOVIES, FAN_FAVORITES_MOVIES, RECENT_RELEASED_MOVIES, RECENT_UPCOMING_MOVIES, PRIME_VIDEOS } from "../type/Type";

const initialState = {
    homeMoviesTop: [],
    topPickMovies: [],
    fanFavoritesMovies: [],
    recentReleasedMovies: [],
    recentUpcomingMovies: [],
    primeVideos:[],
};
const LandingPageReducer = (state = initialState, action) => {
    switch (action.type) {
        case HOME_MOVIES_TOP: {
            return {
                ...state,
                homeMoviesTop: action.payload,
            }
        }
        case TOP_PICK_MOVIES: {
            return {
                ...state,
                topPickMovies: action.payload

            }
        }
        case FAN_FAVORITES_MOVIES: {
            return {
                ...state,
                fanFavoritesMovies: action.payload

            }
        }
        case RECENT_RELEASED_MOVIES: {
            return {
                ...state,
                recentReleasedMovies: action.payload
            }
        }
        case RECENT_UPCOMING_MOVIES: {
            return {
                ...state,
                recentUpcomingMovies: action.payload
            }
        }
        case PRIME_VIDEOS: {
            return {
                ...state,
                primeVideos: action.payload
            }
        }

        default:
            return state;
    }
}

export default LandingPageReducer;
