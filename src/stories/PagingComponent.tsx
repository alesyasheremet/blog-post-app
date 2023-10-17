import React from 'react';
import ReactPaginate from 'react-paginate';
import './pagingcomponent.css';

interface PagingComponentProps {
  pageCount: number;
  onPageChange: (selectedItem: { selected: number }) => void;
}

export const PagingComponent: React.FC<PagingComponentProps> = ({ pageCount, onPageChange }) => {
  return (
    <ReactPaginate
      pageCount={pageCount}
      pageRangeDisplayed={3}
      marginPagesDisplayed={1}
      onPageChange={onPageChange}
      activeClassName={'item active '}
        breakClassName={'item break-me '}
        breakLabel={'...'}
        containerClassName={'pagination'}
        disabledClassName={'disabled-page'}
        nextClassName={"item next "}
        pageClassName={'item pagination-page '}
        previousClassName={"item previous"}
        />
    
  );
};

