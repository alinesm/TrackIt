import axios from "axios";
import React, { useEffect, useState } from "react";
import { buildStyles, CircularProgressbar } from "react-circular-progressbar";
import { ThreeDots } from "react-loader-spinner";
import { Link, Navigate } from "react-router-dom";
import styled from "styled-components";
import logo from "../assets/images/TrackIt.png";
import TodoHabit from "../components/TodoHabit";
import { useGlobalContext } from "../context";

// const weekDay = ["D", "S", "T", "Q", "Q", "S", "S"];
const weekDay = [
  {
    id: 0,
    name: "D",
  },
  {
    id: 1,
    name: "S",
  },
  {
    id: 2,
    name: "T",
  },
  {
    id: 3,
    name: "Q",
  },
  {
    id: 4,
    name: "Q",
  },
  {
    id: 5,
    name: "S",
  },
  {
    id: 6,
    name: "S",
  },
];

function MyHabits() {
  const { token } = useGlobalContext();

  const [openAdd, setOpenAdd] = useState(false);
  const [habitName, setHabitName] = useState("");
  const [listWeeks, setListWeeks] = useState([]);
  const [listHabits, setListHabits] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const URL =
      "https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits";

    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };

    const promise = axios.get(URL, config);

    promise.then((res) => setListHabits(res.data));
    promise.catch((err) => console.log(err.response.data));
  }, []);

  // console.log(listHabits);

  function handleWeekday(week) {
    if (listWeeks.includes(week.id)) {
      const filteredweeks = listWeeks.filter((s) => s !== week.id);
      setListWeeks([...filteredweeks]);
      // console.log(filteredweeks);
    } else {
      const auxArr = [...listWeeks, week.id];
      setListWeeks(auxArr);
      // console.log(auxArr);
    }
  }

  function saveHabit() {
    const body = {
      name: habitName,
      days: listWeeks,
    };

    if (listWeeks.length === 0) {
      alert("Selecione pelo um dia");
    } else if (!habitName) {
      alert("Adicione o t??tulo do h??bito");
    } else {
      const url_post =
        "https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits";

      const config = {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      };
      setIsLoading(true);
      const promise = axios.post(url_post, body, config);
      promise.then((res) => {
        const aux = [...listHabits, res.data].reverse();
        setListHabits(aux);
        setIsLoading(false);
        console.log("aux", aux);
        console.log("data", res.data);
      });
      promise.catch((err) => {
        setIsLoading(false);
        console.log(err.response.data);
      });

      setHabitName("");
      setListWeeks([]);
      setOpenAdd(false);
    }
  }

  return (
    <div>
      <ContentStyle>
        <Container>
          <h1>Meus h??bitos</h1>
          <button
            data-test="habit-create-btn"
            onClick={() => setOpenAdd(!openAdd)}
          >
            +
          </button>
        </Container>

        <div data-test="habit-create-container">
          {openAdd && (
            <AddHabitStyle data-test="habit-create-container">
              <input
                data-test="habit-name-input"
                type="text"
                onChange={(e) => setHabitName(e.target.value)}
                value={habitName}
                placeholder="nome do h??bito"
                disabled={isLoading}
              />
              <WeekdaysStyle>
                {weekDay.map((w) => (
                  <ButtonStyle
                    data-test="habit-day"
                    colorweek={listWeeks.includes(w.id)}
                    onClick={() => handleWeekday(w)}
                  >
                    {w.name}
                  </ButtonStyle>
                ))}
              </WeekdaysStyle>
              <SaveCancelStyle>
                <p
                  data-test="habit-create-cancel"
                  disabled={isLoading}
                  onClick={() => setOpenAdd(false)}
                >
                  Cancelar
                </p>
                <button
                  data-test="habit-create-save"
                  disabled={isLoading}
                  onClick={saveHabit}
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
                    "Salvar"
                  )}{" "}
                </button>
              </SaveCancelStyle>
            </AddHabitStyle>
          )}
        </div>
        {listHabits.length > 0 ? (
          listHabits.map((h) => (
            <TodoHabit
              habitData={h}
              listHabits={listHabits}
              setListHabits={setListHabits}
              setIsLoading={setIsLoading}
            />
          ))
        ) : (
          <p>
            {" "}
            Voc?? n??o tem nenhum h??bito cadastrado ainda. Adicione um h??bito para
            come??ar a trackear!
          </p>
        )}
      </ContentStyle>
    </div>
  );
}

export default MyHabits;

const ContentStyle = styled.div`
  overflow-y: auto;
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
  align-items: center;
  justify-content: space-between;
  margin-bottom: 20px;
  h1 {
    font-family: "Lexend Deca";
    font-style: normal;
    font-weight: 400;
    font-size: 22.976px;
    line-height: 29px;
    color: #126ba5;
  }
  button {
    width: 40px;
    height: 35px;
    border: none;
    background: #52b6ff;
    border-radius: 4.63636px;
    font-family: "Lexend Deca";
    font-style: normal;
    font-weight: 400;
    font-size: 26.976px;
    line-height: 34px;
    text-align: center;
    color: #ffffff;
  }
`;

const WeekdaysStyle = styled.div``;

const ButtonStyle = styled.button`
  margin-right: 4px;
  width: 30px;
  height: 30px;
  left: 36px;
  top: 218px;
  background: ${(props) => (props.colorweek ? "#CFCFCF" : "white")};
  border: 1px solid #d5d5d5;
  border-radius: 5px;
  font-family: "Lexend Deca";
  font-style: normal;
  font-weight: 400;
  font-size: 19.976px;
  line-height: 25px;
  color: ${(props) => (props.colorweek ? "white" : "#CFCFCF")};
`;

const AddHabitStyle = styled.div`
  box-sizing: border-box;
  margin-top: 22px;
  margin-bottom: 20px;
  padding: 20px 15px;
  width: 340px;
  height: 180px;
  background: #ffffff;
  border-radius: 5px;
  input {
    box-sizing: border-box;
    margin-bottom: 8px;
    padding-left: 11px;
    width: 303px;
    height: 45px;
    background: #ffffff;
    border: 1px solid #d5d5d5;
    border-radius: 5px;
    font-family: "Lexend Deca";
    font-style: normal;
    font-weight: 400;
    font-size: 19.976px;
    line-height: 25px;
    color: #666666;
    &::placeholder {
      color: #dbdbdb;
    }
  }
`;

const SaveCancelStyle = styled.div`
  display: flex;
  justify-content: end;
  margin-top: 20px;
  p {
    display: flex;
    margin: auto 9px auto 0;
    width: 69px;
    height: 20px;
    font-family: "Lexend Deca";
    font-style: normal;
    font-weight: 400;
    font-size: 15.976px;
    text-align: center;
    color: #52b6ff;
  }
  button {
    border: none;
    width: 84px;
    height: 35px;
    left: 257px;
    top: 277px;
    background: #52b6ff;
    border-radius: 4.63636px;
    font-family: "Lexend Deca";
    font-style: normal;
    font-weight: 400;
    font-size: 15.976px;
    text-align: center;
    color: #ffffff;
  }
`;
