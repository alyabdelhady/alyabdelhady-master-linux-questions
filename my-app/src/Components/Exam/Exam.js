import React from "react";
import * as data from "../data.json";
import { useState, useEffect } from "react";
import "./Exam.css";
import { Radio } from "antd";
import { useHistory } from "react-router";
import { useDispatch } from "react-redux";
import { finalResult } from "../Redux/Actions";

function Exam() {
  const history = useHistory();
  const dispatch = useDispatch();

  const [value, setValue] = useState(null);

  const handleChange = (e) => {
    console.log("radio checked", e.target.value);
    setValue(e.target.value);
  };

  const questions = data.default;

  const [shuffledQuestions, setShuffledQuestions] = useState([
    { id: null, question: null, correctAnswer: null, choicesArray: [] },
  ]);

  const [index, setIndex] = useState(0);

  const shuffle = (array) => {
    return array.sort(() => Math.random() - 0.5);
  };

  const handleNext = () => {
    if (index >= shuffledQuestions.length - 1) {
      return null;
    } else {
      if (shuffledQuestions[index].correctAnswer === value) {
        dispatch(finalResult());
      }
      return setIndex(index + 1), setValue(null);
    }
  };

  const handleResult = () => {
    if (shuffledQuestions[index].correctAnswer === value) {
      dispatch(finalResult());
      history.push("/result");
    } else {
      history.push("/result");
    }
  };

  useEffect(() => {
    setShuffledQuestions(shuffle(questions));
    console.log(shuffledQuestions);
  }, []);

  return (
    <div className="exam container">
      <h1>Question {index + 1}</h1>
      <br />
      <hr />
      <br />
      <h3>{shuffledQuestions[index].question}</h3>
      <br />
      <Radio.Group onChange={handleChange} value={value}>
        {shuffledQuestions[index].choicesArray.map((choice, index) => (
          <div className="choice" key={index}>
            <Radio className="radio" value={choice}>
              <span>{choice}</span>
            </Radio>
          </div>
        ))}
      </Radio.Group>

      {value ? (
        <div className="button">
          {index === 6 ? (
            <button className="btn btn-primary" onClick={handleResult}>
              Get Result
            </button>
          ) : (
            <button className="btn btn-primary" onClick={handleNext}>
              next
            </button>
          )}
        </div>
      ) : (
        <div className="button">
          {index === 6 ? (
            <button disabled className="btn btn-primary">
              Get Result
            </button>
          ) : (
            <button disabled className="btn btn-primary" onClick={handleNext}>
              next
            </button>
          )}
        </div>
      )}
    </div>
  );
}

export default Exam;
