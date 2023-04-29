import { HeaderNavButton } from "./HeaderNavMenuButton.styles";

type HeaderNavButtonProps = {
  content: string | JSX.Element;
  onClick: () => void;
};

const HeaderNavMenuButton = ({ content, onClick }: HeaderNavButtonProps) => {
  return <HeaderNavButton onClick={onClick}>{content}</HeaderNavButton>;
};

export default HeaderNavMenuButton;
