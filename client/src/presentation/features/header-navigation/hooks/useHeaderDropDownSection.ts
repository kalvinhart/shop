import { useCallback, useEffect } from "react";

export const useHeaderDropDownSection = (
  showMenu: boolean,
  setShowMenu: (val: boolean) => void
) => {
  const handleEscKeypress = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        if (showMenu) {
          setShowMenu(false);
        }
      }
    },
    [showMenu, setShowMenu]
  );

  useEffect(() => {
    window.addEventListener("keydown", handleEscKeypress);

    return () => {
      window.removeEventListener("keydown", handleEscKeypress);
    };
  }, [handleEscKeypress]);
};
