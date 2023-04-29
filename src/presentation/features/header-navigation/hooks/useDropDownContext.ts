import { useContext } from "react";
import { DropDownContext } from "../context/DropDownContext";

export const useDropDownContext = () => {
  const { showMenu, setShowMenu, toggleShowMenu, navigateTo } =
    useContext(DropDownContext);

  return {
    showMenu,
    setShowMenu,
    toggleShowMenu,
    navigateTo,
  };
};
