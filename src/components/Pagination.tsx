import React, { useEffect } from 'react';
import ReactPaginate from 'react-paginate';
import { fetchAllCryptos } from '../redux/cryptoSlice';
import { useAppDispatch } from '../redux/hooks';

const Pagination: React.FC = () => {
  const dispatch = useAppDispatch();
  const getAllCryptos = async (page = 0) => {
    await dispatch(fetchAllCryptos(page));
  };

  useEffect(() => {
    getAllCryptos();
  }, []);
  return (
    <ReactPaginate
      pageLinkClassName='app-main-pagination__page-link'
      activeLinkClassName='app-main-pagination__page-link__active'
      breakLabel='...'
      breakClassName='app-main-pagination__break'
      nextLabel='>'
      nextLinkClassName='app-main-pagination__page-link'
      onPageChange={(page) => getAllCryptos(page.selected)}
      pageRangeDisplayed={window.innerWidth > 700 ? 2 : 1}
      pageCount={100}
      marginPagesDisplayed={window.innerWidth > 540 ? 2 : 1}
      containerClassName='app-main-pagination'
      previousLabel='<'
      previousLinkClassName='app-main-pagination__page-link'
    />
  );
};

export default Pagination;
