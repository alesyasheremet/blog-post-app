import React from "react";
import ReactPaginate from "react-paginate";
import "./pagingcomponent.css";

interface PagingComponentProps {
  pageCount: number;
  onPageChange: (selected: { selected: number }) => void;
}

export const PagingComponent: React.FC<PagingComponentProps> = ({
  pageCount,
  onPageChange,
}) => {
  return (
    <ReactPaginate
      pageCount={pageCount}
      pageRangeDisplayed={5}
      marginPagesDisplayed={2}
      onPageChange={onPageChange}
      activeClassName={"item active "}
      breakClassName={"item break-me "}
      breakLabel={"..."}
      containerClassName={"pagination"}
      disabledClassName={"disabled-page"}
      pageClassName={"item pagination-page "}
      previousLabel={null}
      nextLabel={"Volgende pagina"}
    />
  );
};
