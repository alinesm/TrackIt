import { useState } from "react";
import styled from "styled-components";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import axios from "axios";
import Home from "./Home";
import SubscriptionPage from "../pages/SubscriptionPage";
import TodayPage from "../pages/TodayPage";
import MyHabits from "../pages/MyHabits";
import Story from "../pages/Story";

function App() {
  const [token, setToken] = useState("");
  return (
    <BrowserRouter>
      <MasterContainerStyle>
        <Routes>
          <Route
            path="/"
            element={<Home setToken={setToken} token={token} />}
          />
          <Route path="/cadastro" element={<SubscriptionPage />} />
          {/* <Route path="/habitos" element={<MyHabits />} */}
          <Route path="/hoje" element={<TodayPage token={token} />} />
          <Route path="/habitos" element={<MyHabits token={token} />} />
          <Route path="/historico" element={<Story />} />
        </Routes>
      </MasterContainerStyle>
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
