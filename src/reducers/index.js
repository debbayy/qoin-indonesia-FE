import { combineReducers } from 'redux'
import GenreReducer from './genre'
import MovieReducer from './movie'


export default combineReducers({
    GenreReducer,
    MovieReducer
})