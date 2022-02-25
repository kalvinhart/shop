import { Routes, Route } from "react-router-dom";
import Header from "./components/shared/Header/Header";
import HomePage from "./components/HomePage/HomePage";
import GlobalStyle from "./GlobalStyle";

const App = () => {
  return (
    <>
      <GlobalStyle />
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
      </Routes>
    </>
  );
};

export default App;
