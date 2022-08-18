import { useNavigate, useSearchParams } from "react-router-dom";

import { useProductState } from "../../../common/hooks/useProductState";

import { PaginationButtons } from "../PaginationButtons";

import { SpanBold, SpanRegular } from "../../../common/styles";

import { PaginationResultsWrapper, PaginationWrapper } from "./Pagination.styles";
import { formatOldSearchParams } from "../../../common/utils/formatSearchParams";
import { useCallback } from "react";
import Skeleton from "react-loading-skeleton";

const Pagination = () => {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();

  const { pagination, productsLoading } = useProductState();
  const { currentPage, pageSize, resultsCount, totalPages } = pagination;

  let currentResultsMin = (currentPage - 1) * pageSize;
  if (currentResultsMin === 0) currentResultsMin = 1;

  let currentResultsMax =
    resultsCount < pageSize * currentPage ? resultsCount : currentPage * pageSize;

  const handlePageChange = useCallback(
    (page: number) => {
      const oldParams = formatOldSearchParams(searchParams);

      const newParams = {
        ...oldParams,
        page: page.toString(),
      };

      const paramsString = new URLSearchParams(newParams).toString();

      navigate(`/products?${paramsString}`);
    },
    [navigate, searchParams]
  );

  if (resultsCount === 0) return null;

  return (
    <PaginationWrapper>
      <PaginationResultsWrapper>
        <SpanRegular>
          {productsLoading ? (
            <SpanBold>
              <Skeleton />
            </SpanBold>
          ) : (
            <>
              Displaying results{" "}
              <SpanBold data-testid="ResultsRange">
                {currentResultsMin} - {currentResultsMax}
              </SpanBold>{" "}
              of <SpanBold data-testid="ResultsCount">{resultsCount}</SpanBold>
            </>
          )}
        </SpanRegular>
      </PaginationResultsWrapper>

      {productsLoading ? (
        <SpanBold>
          <Skeleton />
        </SpanBold>
      ) : (
        <PaginationButtons
          pages={{ currentPage, totalPages }}
          onChange={handlePageChange}
        />
      )}
    </PaginationWrapper>
  );
};

export default Pagination;
