import React, { useEffect } from "react";
import { MDBDataTable } from "mdbreact";

import { useDispatch, useSelector } from "react-redux";
import { getListGenre } from "../actions/genreAction";

const Genres = () => {
  const { getListGenreResult, getListGenreLoading, getListGenreError } =
    useSelector((state) => state.GenreReducer);
  const dispatch = useDispatch();

  const data = {
    columns: [
      {
        label: "Name Genre",
        field: "name",
        sort: "asc",
        width: 150,
      },
    ],
    rows: getListGenreResult,
  };

  useEffect(() => {
    dispatch(getListGenre());
  }, [dispatch]);

  console.log(getListGenreResult);

  return (
    <div className="my-3 ">
      <h3>List Genre</h3>
      <hr className="my-3" />

      {getListGenreResult ? (
        <MDBDataTable striped bordered small data={data} />
      ) : getListGenreLoading ? (
        <p>Loading . . . </p>
      ) : (
        <p>{getListGenreError ? getListGenreError : "Data Kosong"}</p>
      )}
    </div>
  );
};

export default Genres;
