import axios from "axios";
import React, { useEffect, useState } from "react";
import styled from "styled-components";
import logo from "../assets/images/TrackIt.png";
import Habit from "../components/Habit";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import { Link } from "react-router-dom";
import dayjs from "dayjs";
import "dayjs/locale/pt-br";
import { useGlobalContext } from "../context";

function TodayPage() {
  const { setToken, token, photo, setPhoto } = useGlobalContext();

  const [todayHabits, setTodayHabits] = useState([]);
  const [checkedIds, setCheckedIds] = useState([]);
  const [dones, setDones] = useState(0);
  const today = dayjs().locale("pt-br").format("dddd, DD/MM");
  const percentageDones = Math.round((dones / todayHabits.length) * 100);

  useEffect(() => {
    const URL =
      "https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/today";

    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };

    const promise = axios.get(URL, config);

    promise.then((res) => setTodayHabits(res.data));
    promise.catch((err) => console.log(err.response.data));
  }, []);

  // console.log(Math.round((dones / todayHabits.length) * 100));

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
        <Container>
          <h1>{today[0].toUpperCase() + today.slice(1)}</h1>
          {dones > 0 ? (
            <h2>{percentageDones}% dos hábitos concluídos</h2>
          ) : (
            <p>Nenhum hábito concluído ainda</p>
          )}
        </Container>

        {todayHabits.map((h) => (
          <Habit
            tHabits={h}
            checkedIds={checkedIds}
            setCheckedIds={setCheckedIds}
            dones={dones}
            setDones={setDones}
            token={token}
          />
        ))}
      </ContentStyle>

      <FooterStyle>
        <Link to="/habitos">
          <p>Hábitos</p>
        </Link>

        <Link to="/hoje">
          <div>
            <CircularProgressbar
              value={percentageDones}
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

export default TodayPage;

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
