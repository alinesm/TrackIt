import axios from "axios";
import React from "react";
import styled from "styled-components";
import checkImage from "../assets/images/Vector.png";
import { useGlobalContext } from "../context";
import { ThreeDots } from "react-loader-spinner";

function Habit({ tHabits, setIsLoading, isLoading }) {
  const { token } = useGlobalContext();

  function handleCheckBox() {
    let body = {};
    let config = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };

    if (tHabits.done) {
      setIsLoading(true);
      const url_post_checked = `https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/${tHabits.id}/uncheck`;
      const promise = axios.post(url_post_checked, body, config);
      promise.then((res) => {
        console.log(res);
        setIsLoading(false);
      });
      promise.catch((err) => {
        console.log(err.response.data);
        setIsLoading(false);
      });
    } else {
      setIsLoading(true);
      const url_post_unchecked = `https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/${tHabits.id}/check`;
      const promise = axios.post(url_post_unchecked, body, config);
      promise.then((res) => {
        console.log(res);
        setIsLoading(false);
      });
      promise.catch((err) => {
        console.log(err.response.data);
        setIsLoading(false);
      });
    }
  }

  return (
    <Container data-test="today-habit-container">
      <ContainerTexts>
        <h2 data-test="today-habit-name">{tHabits.name}</h2>
        <CurrentSequence data-test="today-habit-sequence">
          sequencia atual:{" "}
          <SpanStyle colorSequence={tHabits.currentSequence > 0}>
            {tHabits.currentSequence} dias
          </SpanStyle>{" "}
        </CurrentSequence>
        <HighestSequence data-test="today-habit-record">
          Seu recorde:{" "}
          <SpanStyle2
            colorRecord={
              tHabits.highestSequence === tHabits.currentSequence &&
              tHabits.done
            }
          >
            {tHabits.highestSequence} dias
          </SpanStyle2>{" "}
        </HighestSequence>
      </ContainerTexts>

      <ButtonStyle
        data-test="today-habit-check-btn"
        colorBoxCheck={tHabits.done}
        onClick={handleCheckBox}
      >
        {isLoading ? (
          <ThreeDots
            height="15"
            width="50"
            radius="6"
            color="#fff"
            ariaLabel="Loading"
            visible={true}
          />
        ) : (
          <img src={checkImage} alt="" />
        )}
      </ButtonStyle>
    </Container>
  );
}

export default Habit;

const SpanStyle = styled.span`
  color: ${(props) => (props.colorSequence ? "#8fc549" : "#666666")};
`;

const SpanStyle2 = styled.span`
  color: ${(props) => (props.colorRecord ? "#8fc549" : "#666666")};
`;

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  box-sizing: border-box;
  width: 340px;
  height: 94px;
  padding: 13px;
  background: #ffffff;
  border-radius: 5px;
  margin-bottom: 10px;
`;

const ButtonStyle = styled.button`
  width: 69px;
  height: 69px;
  background-color: ${(props) => (props.colorBoxCheck ? "#8fc549" : "#ebebeb")};
  border: 1px solid #e7e7e7;
  border-radius: 5px;
`;

const ContainerTexts = styled.div`
  h2 {
    font-family: "Lexend Deca";
    font-style: normal;
    font-weight: 400;
    font-size: 20px;
    margin-bottom: 7px;
    color: #666666;
  }
  p {
    color: #666666;
  }
`;
const CurrentSequence = styled.p`
  font-family: "Lexend Deca";
  font-style: normal;
  font-weight: 400;
  font-size: 12.976px;
  line-height: 16px;
`;

const HighestSequence = styled.p`
  font-family: "Lexend Deca";
  font-style: normal;
  font-weight: 400;
  font-size: 12.976px;
  line-height: 16px;
`;
