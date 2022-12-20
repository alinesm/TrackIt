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
import Header from "./Header";
import Footer from "./Footer";

function App() {
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
