import axios from "axios";

export const GET_LIST_MOVIE = "GET_LIST_MOVIE";
export const GET_DETAIL_MOVIE = "GET_DETAIL_MOVIE";

export const getListMovie = () => {
  return (dispatch) => {
    dispatch({
      type: GET_LIST_MOVIE,
      payload: {
        loading: true,
        data: false,
        errorMessage: false,
      },
    });

    axios({
      method: "GET",
      url: "https://api.themoviedb.org/3/movie/upcoming?api_key=2fccde01a371b106b09a241d6d1d5b49&page=1",
      timemout: 120000,
    })
      .then((response) => {
        console.log(response);
        dispatch({
          type: GET_LIST_MOVIE,
          payload: {
            loading: false,
            data: response.data.results,
            dataResult: response.data.total_results,
            errorMessage: false,
          },
        });
      })
      .catch((error) => {
        console.log(error);
        dispatch({
          type: GET_LIST_MOVIE,
          payload: {
            loading: false,
            data: false,
            errorMessage: error.message,
          },
        });
      });
  };
};
export const getDetailMovie = (MOVIEID) => {
  return (dispatch) => {
    dispatch({
      type: GET_DETAIL_MOVIE,
      payload: {
        loading: true,
        data: false,
        errorMessage: false,
      },
    });

    axios({
      method: "GET",
      url: `https://api.themoviedb.org/3/movie/${MOVIEID}?api_key=2fccde01a371b106b09a241d6d1d5b49`,
      timemout: 120000,
    })
      .then((response) => {
        console.log(response);
        dispatch({
          type: GET_DETAIL_MOVIE,
          payload: {
            loading: false,
            data: response.data,
            errorMessage: false,
          },
        });
      })
      .catch((error) => {
        console.log(error);
        dispatch({
          type: GET_DETAIL_MOVIE,
          payload: {
            loading: false,
            data: false,
            errorMessage: error.message,
          },
        });
      });
  };
};
