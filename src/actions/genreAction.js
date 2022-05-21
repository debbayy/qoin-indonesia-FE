import axios from "axios";

export const GET_LIST_GENRE = "GET_LIST_GENRE";

export const getListGenre = () => {
  return (dispatch) => {
    dispatch({
      type: GET_LIST_GENRE,
      payload: {
        loading: true,
        data: false,
        errorMessage: false,
      },
    });

    axios({
      method: "GET",
      url: "https://api.themoviedb.org/3/genre/movie/list?api_key=2fccde01a371b106b09a241d6d1d5b49",
      timemout: 120000,
    })
      .then((response) => {
        console.log(response);
        dispatch({
          type: GET_LIST_GENRE,
          payload: {
            loading: false,
            data: response.data.genres,
            errorMessage: false,
          },
        });
      })
      .catch((error) => {
        console.log(error);
        dispatch({
          type: GET_LIST_GENRE,
          payload: {
            loading: false,
            data: false,
            errorMessage: error.message,
          },
        });
      });
  };
};
