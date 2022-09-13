import { useCallback, useRef, useState } from "react";

export const useHeaderDropDown = () => {
  const [showMenu, setShowMenu] = useState(false);

  const menuRef = useRef<HTMLDivElement>(null);

  const toggleShowMenu = useCallback(() => {
    setShowMenu((prev) => !prev);
  }, []);

  return {
    showMenu,
    menuRef,
    toggleShowMenu,
    setShowMenu,
  };
};
