import { GET_LIST_MOVIE, GET_DETAIL_MOVIE } from "../../actions/movieAction";

const initialState = {
    getListMovieResult: false,
    getTotalResult: false,
    getListMovieLoading: false,
    getListMovieError: false,

    getDetailMovieResult: false,
    getTotalResult: false,
    getDetailMovieLoading: false,
    getDetailMovieError: false,

}

const movie = (state = initialState, action) => {
    switch(action.type) {
        case GET_LIST_MOVIE:
            return {
                ...state,
                getListMovieResult: action.payload.data,
                getTotalResult: action.payload.dataResult,
                getListMovieLoading: action.payload.loading,
                getListMovieError: action.payload.errorMessage
            }

        case GET_DETAIL_MOVIE:
            return {
                ...state,
                getDetailMovieResult: action.payload.data,
                getDetailMovieLoading: action.payload.loading,
                getDetailMovieError: action.payload.errorMessage
            }

        default: return state
    }
}

export default movie