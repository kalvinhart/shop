type Params = {
  currentPage: number;
  totalPages: number;
};

export const usePagination = (pages: Params) => {
  const { currentPage, totalPages } = pages;

  const maxButtonsToShow = 3;

  const prevPage = currentPage - 1 <= 0 ? 1 : currentPage - 1;
  const nextPage = currentPage + 1 > totalPages ? totalPages : currentPage + 1;

  const isLessThanMaxButtons = totalPages <= maxButtonsToShow;
  const isCloseToFirstPage = currentPage <= maxButtonsToShow;
  const isCloseToLastPage =
    totalPages > maxButtonsToShow && currentPage >= totalPages - 2;

  const leftSibling = currentPage - 1;
  const rightSibling = currentPage + 1;

  const buttonArray = Array.from({ length: totalPages }, (_, i) => ({
    id: `button-${i}`,
    text: i + 1,
  }));

  return {
    prevPage,
    nextPage,
    maxButtonsToShow,
    isLessThanMaxButtons,
    isCloseToFirstPage,
    isCloseToLastPage,
    leftSibling,
    rightSibling,
    buttonArray,
  };
};
