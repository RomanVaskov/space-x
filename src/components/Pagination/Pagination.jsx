import React from "react";
import classNames from "classnames";

const Pagination = ({ postsPerPage, totalPosts, paginate, currentPage }) => {
  const pageNumbers = [];
  const portionSize = 5;

  for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
    pageNumbers.push(i);
  }

  let portionCount = Math.ceil(totalPosts / portionSize);
  let [portionNumber, setPortionNumber] = React.useState(1);
  let leftPortionPageNumber = (portionNumber - 1) * portionSize + 1;
  let rightPortionPageNumber = portionNumber * portionSize;

  return (
    <nav className="text-center">
      <ul className="pagination">
        {portionNumber > 1 && (
          <li
            className={classNames("page-item", {
              disabled: currentPage === 1,
            })}
          >
            <a
              className="page-link"
              onClick={() => {
                // paginate(currentPage - 1);
                setPortionNumber(portionNumber - 1);
              }}
              aria-label="Previous"
            >
              <span aria-hidden="true">&laquo;</span>
            </a>
          </li>
        )}
        {pageNumbers
          .filter(
            (p) => p >= leftPortionPageNumber && p <= rightPortionPageNumber
          )
          .map((number) => (
            <li
              key={number}
              className={classNames("page-item", {
                active: currentPage === number,
              })}
            >
              <a onClick={() => paginate(number)} className="page-link">
                {number}
              </a>
            </li>
          ))}
        {portionCount > portionNumber && (
          <li
            className={classNames("page-item", {
              disabled: currentPage === pageNumbers.length,
            })}
          >
            <a
              className="page-link"
              onClick={() => {
                // paginate(currentPage + 1);
                setPortionNumber(portionNumber + 1);
              }}
              aria-label="Next"
            >
              <span aria-hidden="true">&raquo;</span>
            </a>
          </li>
        )}
      </ul>
    </nav>
  );
};

export default Pagination;
