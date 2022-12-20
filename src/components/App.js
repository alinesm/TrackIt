import { useState } from "react";
import styled from "styled-components";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import SubscriptionPage from "../pages/SubscriptionPage";
import TodayPage from "../pages/TodayPage";
import MyHabits from "../pages/MyHabits";
import Story from "../pages/Story";
import { AppProvider } from "../context";

import React from "react";
import { buildStyles, CircularProgressbar } from "react-circular-progressbar";
import { Link } from "react-router-dom";
import { useGlobalContext } from "../context";
import Header from "./Header";
import Footer from "./Footer";

function App() {
  // const [token, setToken] = useState("");
  return (
    <BrowserRouter>
      <AppProvider>
        <MasterContainerStyle>
          <Header />

          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/cadastro" element={<SubscriptionPage />} />
            <Route path="/hoje" element={<TodayPage />} />
            <Route path="/habitos" element={<MyHabits />} />
            <Route path="/historico" element={<Story />} />
          </Routes>

          <Footer />
        </MasterContainerStyle>
      </AppProvider>
    </BrowserRouter>
  );
}

export default App;

const MasterContainerStyle = styled.div`
  width: 375px;
  height: 100%;
  min-height: 100vh;
  margin: auto;
  background-color: white;
  position: relative;
`;

// const MainContainer = styled.div`
//   width: 375px;
// `;

const ContentStyle = styled.div`
  overflow-y: scroll;
  overflow-x: hidden;
  padding: 110px 20px 50px 20px;
  height: calc(100vh - 80px);
  background-color: #e5e5e5;
  p {
    font-family: "Lexend Deca";
    font-style: normal;
    font-weight: 400;
    font-size: 17.976px;
    line-height: 22px;
    color: #bababa;
  }
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  h1 {
    font-family: "Lexend Deca";
    font-style: normal;
    font-weight: 400;
    font-size: 22.976px;
    line-height: 29px;
    color: #126ba5;
  }
  h2 {
    margin-top: 1px;
    margin-bottom: 20px;
    font-family: "Lexend Deca";
    font-style: normal;
    font-weight: 400;
    font-size: 17.976px;
    line-height: 22px;

    color: #8fc549;
  }
  p {
    font-family: "Lexend Deca";
    font-style: normal;
    font-weight: 400;
    font-size: 17.976px;
    line-height: 22px;
    margin-bottom: 18px;
    color: #bababa;
  }
`;
