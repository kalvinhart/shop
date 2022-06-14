import { StyledButton, StyledButtonProps } from "../../../styles/buttonStyles";

type ButtonProps = StyledButtonProps & {
  className?: string;
  disabled?: boolean;
  onClick: (e: React.SyntheticEvent) => void | (() => void);
  children: React.ReactNode;
};

const Button = ({ className = "", variant = "primary", size = "regular", disabled = false, onClick, children }: ButtonProps) => {
  return (
    <StyledButton className={className} variant={variant} size={size} disabled={disabled} onClick={onClick}>
      {children}
    </StyledButton>
  );
};

export default Button;
