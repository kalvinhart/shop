import { useRef } from "react";

export const useHeaderDropDown = () => {
  const menuRef = useRef<HTMLDivElement>(null);

  return {
    menuRef,
  };
};
