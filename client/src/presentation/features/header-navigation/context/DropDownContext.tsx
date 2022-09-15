import React, { createContext, ReactNode, useCallback, useState } from "react";
import { useNavigate } from "react-router-dom";

interface IDropDownContext {
  showMenu: boolean;
  setShowMenu: React.Dispatch<React.SetStateAction<boolean>>;
  toggleShowMenu: () => void;
  navigateTo: (url: string, e?: React.MouseEvent) => void;
}

const initialState: IDropDownContext = {
  showMenu: false,
  setShowMenu: () => {},
  toggleShowMenu: () => {},
  navigateTo: () => {},
};

export const DropDownContext = createContext<IDropDownContext>(initialState);

type Props = {
  children: ReactNode;
};
const DropDownProvider = ({ children }: Props) => {
  const navigate = useNavigate();

  const [showMenu, setShowMenu] = useState(false);

  const navigateTo = useCallback(
    (url: string, e?: React.MouseEvent) => {
      if (e) {
        e.stopPropagation();
      }

      setShowMenu(false);
      navigate(url);
    },
    [navigate, setShowMenu]
  );

  const toggleShowMenu = useCallback(() => {
    setShowMenu((prev) => !prev);
  }, []);

  return (
    <DropDownContext.Provider
      value={{ showMenu, setShowMenu, toggleShowMenu, navigateTo }}
    >
      {children}
    </DropDownContext.Provider>
  );
};

export default DropDownProvider;
