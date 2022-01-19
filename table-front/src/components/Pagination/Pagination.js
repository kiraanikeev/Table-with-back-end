import React from 'react';

const Pagination = ({ postsPerPage, totalPosts, paginate }) => {
  
  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
    pageNumbers.push(i);
  }
  return (
    <nav className='pagination'>
        {pageNumbers.map(el => (
          <li key={el} className='links'>
            <a onClick={() => paginate(el)} href='#' className='link'>
              {el}
            </a>
          </li>
        ))}
    </nav>
  );
};

export default Pagination;