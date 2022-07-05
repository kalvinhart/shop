import { StyledButton, StyledButtonProps } from "./Button.styles";

type ButtonProps = StyledButtonProps & {
  className?: string;
  disabled?: boolean;
  onClick?: (e: React.SyntheticEvent) => void | (() => void);
  children: React.ReactNode;
  title?: string;
  dataName?: string;
  testId?: string;
};

const Button = ({
  className = "",
  variant = "primary",
  size = "regular",
  disabled = false,
  onClick,
  children,
  title,
  dataName,
  testId,
}: ButtonProps) => {
  return (
    <StyledButton
      className={className}
      variant={variant}
      size={size}
      disabled={disabled}
      onClick={onClick}
      title={title}
      data-name={dataName}
      data-testid={testId}
    >
      {children}
    </StyledButton>
  );
};

export default Button;
