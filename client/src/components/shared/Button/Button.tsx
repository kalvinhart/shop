import { StyledButton, StyledButtonProps } from "../../../styles/buttonStyles";

type ButtonProps = StyledButtonProps & {
  disabled?: boolean;
  onClick: (e: React.SyntheticEvent) => void | (() => void);
  children: React.ReactNode;
};

const Button = ({ variant = "primary", size = "regular", disabled = false, onClick, children }: ButtonProps) => {
  return (
    <StyledButton variant={variant} size={size} disabled={disabled} onClick={onClick}>
      {children}
    </StyledButton>
  );
};

export default Button;
