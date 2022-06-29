import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { HeaderNavButton } from "./HeaderNavMenuButton.styles";

type HeaderNavButtonProps = {
  text: string;
};

const HeaderNavMenuButton = ({ text }: HeaderNavButtonProps) => {
  return (
    <HeaderNavButton>
      {text}
      <FontAwesomeIcon icon={faChevronDown} size="xs" />
    </HeaderNavButton>
  );
};

export default HeaderNavMenuButton;
