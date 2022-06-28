import { useEffect } from "react";

export const usePageTitle = (title: string) => {
  const mainTitle = "eShop";

  useEffect(() => {
    document.title = `${mainTitle} - ${title}`;
  }, [title]);
};
