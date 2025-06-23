import { BrowserRouter } from "react-router";
import styled from "styled-components";

import MainRouter from "./routes/MainRouter";
import Header from "./components/Header";
import Footer from "./components/Footer";
import "./App.css";

const Wrapper = styled.div`
  width: 100%;
  height: 100vh;
  position: relative;
`;

const MainWrapper = styled.div`
  width: 100%;
  height: calc(100vh - 90px);
`;

function App() {
  return (
    <Wrapper>
      <BrowserRouter>
        <Header />
        <MainWrapper>
          <MainRouter />
        </MainWrapper>
        <Footer />
      </BrowserRouter>
    </Wrapper>
  );
}

export default App;
