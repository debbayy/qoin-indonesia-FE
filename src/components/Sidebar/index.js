import React from "react";
import "./sidebar.scss";
import { BiMoviePlay } from "react-icons/bi";
import { MdMovieFilter } from "react-icons/md";
import { HiOutlineLogout } from "react-icons/hi";
import { Link } from "react-router-dom";

const SideBar = () => {
  return (
    <div className="sidebar bg-dark text-white p-4 mt-2">
      <div className="d-flex align-items-center mb-4">
        <img
          className="user-profile"
          style={{ width: "55px" }}
          src="https://pixinvent.com/materialize-material-design-admin-template/app-assets/images/user/12.jpg"
          alt=""
        />
        <div className="ms-3">
          <span>Deby Trisandi</span>
          <div className="user-online">
            <i className="fa-solid fa-circle"></i> online
          </div>
        </div>
      </div>

      <hr />

      <div className="mt-4">
        <Link to="/" style={{ textDecoration: "none", color: "white" }}>
          <p>
            <i class="fa-solid fa-gauge"></i> Dashboard
          </p>
        </Link>
      </div>

      <div className="mt-3">
        <Link to="/genre" style={{ textDecoration: "none", color: "white" }}>
          <p>
            <MdMovieFilter size={20} /> List Genre
          </p>
        </Link>
      </div>
      <div className="mt-3">
        <Link to="/movies" style={{ textDecoration: "none", color: "white" }}>
          <p>
            <BiMoviePlay size={20} /> List Movie
          </p>
        </Link>
      </div>

      <div
        className="mx-5 mb-4"
        style={{
          cursor: "pointer",
          bottom: "0px",
          position: "fixed",
          color: "red",
        }}
      >
        <p>
          <HiOutlineLogout size={30} color="red" /> Logout
        </p>
      </div>
    </div>
  );
};

export default SideBar;
