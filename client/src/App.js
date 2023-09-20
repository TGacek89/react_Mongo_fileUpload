import styled, { ThemeProvider } from "styled-components";
import { Route, Routes } from "react-router-dom";
import { BrowserRouter } from "react-router-dom";
import { darkTheme, lightTheme } from "./utils/Theme";
import { useState } from "react";
import Menu from "./components/Menu";
import Navbar from "./components/Navbar";
import Add from "./components/Add";
import Header from "./components/Header";
import Get from "./components/Get";
import Create from "./components/Create";
import "./App.css";
import Detail from "./components/Detail";
import Edit from "./components/Edit";

const Container = styled.div`
  display: flex;
`;
const Main = styled.div`
  flex: 6;
  background-color: ${({ theme }) => theme.bg};
  color: ${({ theme }) => theme.text};
`;
const Wrapper = styled.div``;

function App() {
  const [darkMode, setDarkMode] = useState(true);
  return (
    <ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
      <Container>
        <Menu darkMode={darkMode} setDarkMode={setDarkMode} />
        <Main>
          <Wrapper>
            <Routes>
              <Route path="/" element={<Get />} />
              <Route path="/:id" element={<Detail />} />
              <Route path="/create" element={<Create />} />
              <Route path="/edit/:id" element={<Edit />} />
            </Routes>
          </Wrapper>
        </Main>
      </Container>
    </ThemeProvider>
  );
}

export default App;
