import { useCallback, useEffect } from "react";

export const useHeaderDropDownSection = (
  showMenu: boolean,
  setShowMenu: (val: boolean) => void,
  navigateTo: (url: string, e?: React.MouseEvent) => void
) => {
  const handleKeypress = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        if (showMenu) {
          setShowMenu(false);
        }
      }

      if (e.key === "Enter") {
        if (showMenu) {
          if (
            (e.target as HTMLElement).nodeName === "BUTTON" ||
            (e.target as HTMLElement).nodeName === "A"
          ) {
            (e.target as HTMLElement).click();
            setShowMenu(false);
            return;
          }

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
};
