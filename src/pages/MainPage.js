import React from "react";
import { buildStyles, CircularProgressbar } from "react-circular-progressbar";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { useGlobalContext } from "../context";
import logo from "../assets/images/TrackIt.png";
import TodayPage from "./TodayPage";

function MainPage() {
  const { setToken, token, photo, setPhoto } = useGlobalContext();

  return (
    <MainContainer>
      <HeaderStyle>
        <LogoStyle>
          <img src={logo} alt="" />
        </LogoStyle>
        <PhotoStyle>
          <img src={photo} alt="" />
        </PhotoStyle>
      </HeaderStyle>

      <ContentStyle>
        <TodayPage />
      </ContentStyle>

      <FooterStyle>
        <Link to="/habitos">
          <p>Hábitos</p>
        </Link>

        <Link to="/hoje">
          <div>
            <CircularProgressbar
              // value={percentageDones}
              text="Hoje"
              background
              backgroundPadding={6}
              styles={buildStyles({
                backgroundColor: "#3e98c7",
                textColor: "#fff",
                pathColor: "#fff",
                trailColor: "transparent",
                textSize: "20px",
              })}
            />
          </div>
        </Link>

        <Link to="/historico">
          <p>Histórico</p>
        </Link>
      </FooterStyle>
    </MainContainer>
  );
}

export default MainPage;

const MainContainer = styled.div`
  width: 375px;
`;

const HeaderStyle = styled.div`
  position: fixed;
  width: 375px;
  z-index: 1;
  height: 70px;
  top: 0px;
  background: #126ba5;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 20px;
`;

const LogoStyle = styled.div`
  img {
    width: 97px;
    height: 35px;
  }
`;

const PhotoStyle = styled.div`
  img {
    width: 51px;
    height: 51px;
    left: 306px;
    top: 9px;
    border-radius: 98.5px;
  }
`;

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

const FooterStyle = styled.div`
  padding: 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 375px;
  height: 70px;
  position: fixed;
  bottom: 0;
  z-index: 2;
  background: #ffffff;
  p {
    font-family: "Lexend Deca";
    font-style: normal;
    font-weight: 400;
    font-size: 17.976px;
    line-height: 22px;
    text-align: center;
    color: #52b6ff;
  }
  div {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 91px;
    height: 91px;
    z-index: 5;
    margin-bottom: 50px;
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
