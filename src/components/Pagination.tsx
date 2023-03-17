import React, { useEffect, useState } from 'react';
import ReactPaginate from 'react-paginate';
import { fetchAllCryptos } from '../redux/cryptoSlice';
import { useAppDispatch } from '../redux/hooks';

const Pagination: React.FC = () => {
  const dispatch = useAppDispatch();
  const getAllCryptos = async (page = 0) => {
    await dispatch(fetchAllCryptos(page));
    window.scrollTo(0, 10000);
  };
  const [windowWidth, setWindowWidth] = useState(window.screen.width);

  useEffect(() => {
    getAllCryptos();
  }, []);

  const resizeHandler = () => {
    setWindowWidth(window.screen.width);
  };

  useEffect(() => {
    window.addEventListener('resize', resizeHandler);
    return () => {
      window.removeEventListener('resize', resizeHandler);
    };
  }, [windowWidth]);

  return (
    <ReactPaginate
      pageLinkClassName='app-main-pagination__page-link'
      activeLinkClassName='app-main-pagination__page-link__active'
      breakLabel='...'
      breakClassName='app-main-pagination__break'
      nextLabel='>'
      nextLinkClassName='app-main-pagination__page-link'
      onPageChange={(page) => getAllCryptos(page.selected)}
      pageRangeDisplayed={windowWidth > 700 ? 2 : 1}
      pageCount={100}
      marginPagesDisplayed={windowWidth > 540 ? 2 : 1}
      containerClassName='app-main-pagination'
      previousLabel='<'
      previousLinkClassName='app-main-pagination__page-link'
    />
  );
};

export default Pagination;
