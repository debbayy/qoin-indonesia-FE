import React, { useEffect, useState } from 'react';
import ReactPaginate from 'react-paginate';
import { Table } from 'react-bootstrap';

import { useDispatch, useSelector } from 'react-redux'
import { getListMovie } from '../actions/movieAction';
import { useNavigate } from 'react-router-dom';

const Movies = () => {
  const { getListMovieResult, getListMovieLoading, getListMovieError } = useSelector((state) => state.MovieReducer)
  const dispatch = useDispatch()
  
  const [items, setItems] = useState(getListMovieResult)

  useEffect(() => {

    dispatch(getListMovie())
  }, [dispatch])

  const fetchData = async (currentPage) => {
    const res = await fetch(`https://api.themoviedb.org/3/movie/upcoming?api_key=2fccde01a371b106b09a241d6d1d5b49&page=${currentPage}`)

    const data = await res.json()
    return data.results
  }

  const handlePageClick = async (data) => {
    console.log(data.selected);

    let page = data.selected + 1

    // console.log(currentPage);
    const dataPaginate = await fetchData(page)
    console.log(dataPaginate);

    setItems(dataPaginate)
  }

  const navigate = useNavigate()

  const goDetail = (id) => {
    navigate(`/detail-movie/${id}`)
  }

  return (
    <div className='my-5'>
      <h3>List Movie</h3>
      <hr className='my-4' />
      <Table striped bordered hover size="sm">
        <thead>
          <tr>
            <th>#</th>
            <th>Title</th>
            <th>Overview</th>
            <th>Release Date</th>
          </tr>
        </thead>
        <tbody>
          {items ? items.map((data,index)=>{
            return(
              <tr onClick={() => goDetail(data.id)} style={{cursor:'pointer'}}>
                <td>{index + 1}</td>
                <td>{data.title}</td>
                <td>{data.overview}</td>
                <td>{data.release_date}</td>
              </tr>
              
            )
          }) : getListMovieLoading ? <p>Loading . . .</p> : getListMovieError ? getListMovieError : <p>Data Kosong</p>}
            </tbody>
      </Table>




      <ReactPaginate
        previousLabel={'previous'}
        nextLabel={'next'}
        breakLabel={'...'}
        pageCount={25}
        marginPagesDisplayed={3}
        pageRangeDisplayed={6}
        onPageChange={handlePageClick}
        containerClassName={'pagination justify-content-center'}
        pageClassName={'page-item'}
        pageLinkClassName={'page-link'}
        previousClassName={'page-item'}
        previousLinkClassName={'page-link'}
        nextClassName={'page-item'}
        nextLinkClassName={'page-link'}
        breakClassName={'page-item'}
        breakLinkClassName={'page-link'}
        activeClassName={'active'}
      />
    </div>

  );
}

export default Movies;