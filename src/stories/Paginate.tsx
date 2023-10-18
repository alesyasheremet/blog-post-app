import React from "react";
import ReactPaginate from "react-paginate";
import "./paginate.css";

interface PagingComponentProps {
  pageCount: number;
  onPageChange: (selected: { selected: number }) => void;
}

export const Paginate: React.FC<PagingComponentProps> = ({
  pageCount,
  onPageChange,
}) => {
  return (
    <ReactPaginate
      pageCount={pageCount}
      pageRangeDisplayed={5}
      marginPagesDisplayed={2}
      onPageChange={onPageChange}
      activeClassName={"item activeitem "}
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
