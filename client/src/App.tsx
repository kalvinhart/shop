import { Toaster } from "react-hot-toast";
import { useApp } from "./presentation/hooks/useApp/useApp";

import GlobalStyle from "./GlobalStyle";
import Header from "./presentation/components/shared/Header/Header";
import PageWrapper from "./presentation/components/shared/PageWrapper/PageWrapper";
import Container from "./presentation/components/shared/Container/Container";
import AppRoutes from "./AppRoutes";

const App = () => {
  useApp();

  return (
    <>
      <GlobalStyle />
      <Toaster position="top-right" containerStyle={{ top: 120 }} />
      <Header />
      <PageWrapper>
        <Container>
          <AppRoutes />
        </Container>
      </PageWrapper>
    </>
  );
};

export default App;
