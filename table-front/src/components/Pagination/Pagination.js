import React from 'react';
import './Pagination.css'

const Pagination = ({ postsPerPage, totalPosts, paginate, currentPage }) => {

  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
    pageNumbers.push(i);
  }
  return (
    <nav className='pagination'>
        {pageNumbers.map(el => (
          <li key={el} className='links'>
            <a onClick={() => paginate(el)} href='#'
             className={el == currentPage ? 'activeLink' : 'link'}>
              {el}
            </a>
          </li>
        ))}
    </nav>
  );
};

export default Pagination;