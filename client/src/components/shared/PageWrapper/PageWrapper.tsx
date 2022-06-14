import { StyledPageWrapper } from "./PageWrapper.styles";

type PageWrapperProps = {
  children: React.ReactNode;
}

const PageWrapper = ({ children }: PageWrapperProps) => {
  return <StyledPageWrapper>{children}</StyledPageWrapper>;
};

export default PageWrapper;
