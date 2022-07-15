import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { HeaderNavButton } from "./HeaderNavMenuButton.styles";

type HeaderNavButtonProps = {
  text: string;
  onClick: () => void;
};

const HeaderNavMenuButton = ({ text, onClick }: HeaderNavButtonProps) => {
  return (
    <HeaderNavButton onClick={onClick}>
      {text}
      <FontAwesomeIcon icon={faChevronDown} size="xs" />
    </HeaderNavButton>
  );
};

export default HeaderNavMenuButton;
