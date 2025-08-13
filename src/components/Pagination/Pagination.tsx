import React from 'react';

type Props = {
  total: number;
  perPage: number;
  currentPage?: number;
  onPageChange: (page: number) => void;
};
export const Pagination: React.FC<Props> = ({
  total,
  perPage,
  onPageChange,
  currentPage = 1,
}) => {
  const totalPages = Math.ceil(total / perPage);
  const hasPrev = currentPage !== 1;
  const hasNext = currentPage !== totalPages;
  return (
    <>
      <ul className="pagination">
        <li className={`page-item ${!hasPrev ? 'disabled' : ''}`}>
          <a
            data-cy="prevLink"
            className="page-link"
            href="#prev"
            aria-disabled={`${!hasPrev}`}
            onClick={() => onPageChange(currentPage - 1)}
          >
            «
          </a>
        </li>
        {new Array(totalPages).fill(0).map((__, i) => (
          <li
            key={i}
            className={`page-item ${i + 1 === currentPage ? 'active' : ''}`}
          >
            <a
              data-cy="pageLink"
              className="page-link"
              href={`#${i + 1}`}
              onClick={() => onPageChange(i + 1)}
            >
              {i + 1}
            </a>
          </li>
        ))}
        <li className={`page-item ${!hasNext ? 'disabled' : ''}`}>
          <a
            data-cy="nextLink"
            className="page-link"
            href="#next"
            aria-disabled={`${currentPage === totalPages}`}
            onClick={() => onPageChange(currentPage + 1)}
          >
            »
          </a>
        </li>
      </ul>
    </>
  );
};
