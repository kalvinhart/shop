import { useCallback, useEffect } from "react";
import { useNavigate } from "react-router-dom";

export const useHeaderDropDownSection = (
  showMenu: boolean,
  setShowMenu: (val: boolean) => void
) => {
  const navigate = useNavigate();

  const navigateTo = useCallback(
    (url: string) => {
      setShowMenu(false);
      navigate(url);
      window.scrollTo({ top: 0, behavior: "smooth" });
    },
    [navigate, setShowMenu]
  );

  const handleKeypress = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        if (showMenu) {
          setShowMenu(false);
        }
      }

      if (e.key === "Enter") {
        if (showMenu) {
          navigateTo((e.target as HTMLElement).getAttribute("data-url")!);
        }
      }
    },
    [showMenu, setShowMenu, navigateTo]
  );

  useEffect(() => {
    window.addEventListener("keydown", handleKeypress);

    return () => {
      window.removeEventListener("keydown", handleKeypress);
    };
  }, [handleKeypress]);

  return {
    navigateTo,
  };
};
