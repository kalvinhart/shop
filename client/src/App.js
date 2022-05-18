import { Toaster } from "react-hot-toast";
import { useApp } from "./hooks/useApp/useApp";

import GlobalStyle from "./GlobalStyle";
import Header from "./components/shared/Header/Header";
import PageWrapper from "./components/shared/PageWrapper/PageWrapper";
import Container from "./components/shared/Container/Container";
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
