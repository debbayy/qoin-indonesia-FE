import { GET_LIST_GENRE } from "../../actions/genreAction";

const initialState = {
    getListGenreResult: false,
    getListGenreLoading: false,
    getListGenreError: false,
}

const genre = (state = initialState, action) => {
    switch(action.type) {
        case GET_LIST_GENRE:
            return {
                ...state,
                getListGenreResult: action.payload.data,
                getListGenreLoading: action.payload.loading,
                getListGenreError: action.payload.errorMessage
            }

        default: return state
    }
}

export default genre