import axios from "axios";
import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Habit from "../components/Habit";
import "react-circular-progressbar/dist/styles.css";
import dayjs from "dayjs";
import "dayjs/locale/pt-br";
import { useGlobalContext } from "../context";

function TodayPage() {
  const { token, todayHabits, setTodayHabits, done, percentageDones } =
    useGlobalContext();
  const [isLoading, setIsLoading] = useState(false);
  const today = dayjs().locale("pt-br").format("dddd, DD/MM");

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
  }, [isLoading]);

  return (
    <MainContainer>
      <ContentStyle>
        <Container>
          <h1>{today[0].toUpperCase() + today.slice(1)}</h1>
          {done.length > 0 ? (
            <h2>{percentageDones}% dos hábitos concluídos</h2>
          ) : (
            <p>Nenhum hábito concluído ainda</p>
          )}
        </Container>

        {todayHabits.map((h) => (
          <Habit tHabits={h} setIsLoading={setIsLoading} />
        ))}
      </ContentStyle>
    </MainContainer>
  );
}

export default TodayPage;

const MainContainer = styled.div`
  width: 375px;
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
