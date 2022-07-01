import { usePagination } from "../hooks/usePagination";

import { faChevronLeft, faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { Pagination } from "../../../app/slices/productSlice";

import { PaginationButton, PaginationButtonWrapper } from "./PaginationButtons.styles";
import { SpanRegular } from "../../../common/styles";

type PaginationProps = {
  pages: Pick<Pagination, "currentPage" | "totalPages">;
  onChange: (page: number) => void;
};

const PaginationButtons = ({ pages, onChange }: PaginationProps) => {
  const {
    prevPage,
    nextPage,
    maxButtonsToShow,
    isLessThanMaxButtons,
    isCloseToFirstPage,
    isCloseToLastPage,
    leftSibling,
    rightSibling,
    buttonArray,
  } = usePagination(pages);

  const { currentPage, totalPages } = pages;

  let buttonsRendered = 0;

  return (
    <PaginationButtonWrapper>
      <PaginationButton onClick={() => onChange(prevPage)}>
        <FontAwesomeIcon icon={faChevronLeft} />
      </PaginationButton>

      <PaginationButton onClick={() => onChange(1)} selected={currentPage === 1}>
        1
      </PaginationButton>

      {!isCloseToFirstPage && !isLessThanMaxButtons && <SpanRegular>...</SpanRegular>}

      {buttonArray.map((item, i) => {
        if (i === 0 || i === totalPages - 1) return null;

        const currentButton = item.text;

        if (
          buttonsRendered <= maxButtonsToShow &&
          (currentButton === leftSibling ||
            currentButton === currentPage ||
            currentButton === rightSibling)
        ) {
          buttonsRendered++;
          return (
            <PaginationButton
              onClick={() => onChange(item.text)}
              key={item.id}
              selected={currentPage === item.text}
            >
              {item.text}
            </PaginationButton>
          );
        }

        return null;
      })}

      {!isCloseToLastPage && !isLessThanMaxButtons && <SpanRegular>...</SpanRegular>}

      <PaginationButton
        onClick={() => onChange(totalPages)}
        selected={currentPage === totalPages}
      >
        {totalPages}
      </PaginationButton>

      <PaginationButton onClick={() => onChange(nextPage)}>
        <FontAwesomeIcon icon={faChevronRight} />
      </PaginationButton>
    </PaginationButtonWrapper>
  );
};

export default PaginationButtons;
