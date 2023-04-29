import { useAppSelector } from "../../../app/hooks/useAppSelector";

export const useRecentlyViewed = () => {
  const { products } = useAppSelector((state) => state.recentlyViewed);
  return {
    products,
  };
};
