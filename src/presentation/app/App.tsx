import { Toaster } from "react-hot-toast";
import { useApp } from "../common/hooks/useApp";

import GlobalStyle from "./GlobalStyle";
import { Header } from "../layout/header";
import { PageWrapper } from "../layout/layouts/PageWrapper";
import { Container } from "../layout/layouts/Container";
import AppRoutes from "../routing/AppRoutes";
import { Footer } from "../layout/footer/Footer";

import { SkeletonTheme } from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const App = () => {
  useApp();

  return (
    <SkeletonTheme baseColor="#ddd" highlightColor="#efefef">
      <GlobalStyle />
      <Toaster position="top-right" containerStyle={{ top: 120 }} />
      <Header />
      <PageWrapper>
        <Container>
          <AppRoutes />
        </Container>
      </PageWrapper>
      <Footer />
    </SkeletonTheme>
  );
};

export default App;
