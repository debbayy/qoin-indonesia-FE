import React, { useEffect } from "react";

import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getDetailMovie } from "../actions/movieAction";

const DetailMovie = () => {
  const { getDetailMovieResult } = useSelector((state) => state.MovieReducer);
  const dispatch = useDispatch();

  const data = getDetailMovieResult;

  const { id } = useParams();

  useEffect(() => {
    dispatch(getDetailMovie(id));
  }, [dispatch]);

  return (
    <div className="mt-5">
      <h3>Detail Movie</h3>
      <hr className="my-4" />
      <div>
        <div className="d-flex">
          <div style={{ width: "20%" }}>
            <h5 className="mb-2">{data.title}</h5>
            <p className="">{data.release_date}</p>
            <p className="">
              {data?.genres?.map((genre) => {
                return <span>{genre.name} </span>;
              })}
            </p>
          </div>
          <div style={{ width: "50%" }}>
            <p>{data.overview}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailMovie;
