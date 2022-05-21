import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getListGenre } from "../actions/genreAction";
import { getListMovie } from "../actions/movieAction";

const Dashboard = () => {
  const { getListGenreResult, getListGenreLoading, getListGenreError } =
    useSelector((state) => state.GenreReducer);
  const {
    getListMovieResult,
    getTotalResult,
    getListMovieLoading,
    getListMovieError,
  } = useSelector((state) => state.MovieReducer);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getListGenre());
    dispatch(getListMovie());
  }, [dispatch]);

  console.log(getTotalResult);
  return (
    <>
      <h3 className="mt-3 py-5 mx-5">Dashboard</h3>
      <div className="d-flex ms-5 mt-2">
        <div
          className="d-flex me-5 align-items-start shadow p-2"
          style={{ width: "500px" }}
        >
          <img
            rounded
            style={{ width: "150px" }}
            src="https://png.pngtree.com/png-clipart/20210318/ourlarge/pngtree-cartoon-movie-popcorn-film-glasses-png-image_3083642.jpg"
          />
          <div className="p-2">
            <p>Total Genre</p>
            <h4>
              {getListGenreResult
                ? getListGenreResult.length
                : getListGenreLoading
                ? "Loading. . ."
                : getListGenreError
                ? getListGenreError
                : "Data Kosong"}
            </h4>
          </div>
        </div>
        <div
          className="d-flex align-items-start shadow p-2"
          style={{ width: "500px" }}
        >
          <img
            rounded
            style={{ width: "150px" }}
            src="https://png.pngtree.com/png-clipart/20210318/ourlarge/pngtree-cartoon-movie-drink-megaphone-movie-ticket-png-image_3083644.jpg"
            alt=""
          />
          <div className="p-2">
            <p>Total Movie</p>
            <h4>
              {getListMovieResult
                ? getTotalResult
                : getListMovieLoading
                ? "Loading. . ."
                : getListMovieError
                ? getListMovieError
                : "Data Kosong"}
            </h4>
          </div>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
