import { useEffect, useState } from "react";
import data from "../../data/words.json";
import { rndNum } from "../../utils/randomNum";
import "./App.css";

const App = () => {
  const [answerArr, setAnswerArr] = useState<any[]>([]);
  const [correctAns, setCorrectAns] = useState({ en: "", vi: "" });
  const [notiText, setNotiText] = useState("");

  useEffect(() => {
    const { answerArray, correctAnswer } = getAnsAndCortAns();
    console.log(answerArray)
    setCorrectAns(correctAnswer);
    setAnswerArr(answerArray);
  }, [])

  const getAnswerArr = () => {
    let answerArr: any[] = [];

    while (answerArr.length < 4) {
      const answer = data[rndNum(0, data.length)];
      const picked = answerArr.find((word) => word.en === answer.en)
      if (!picked)
        answerArr.push(answer);
    }
    return answerArr;
  };

  const getAnsAndCortAns = () => {
    const ansArr = getAnswerArr();
    const cortAns = ansArr[rndNum(0, ansArr.length)];
    return { answerArray: ansArr, correctAnswer: cortAns };
  }

  const handleClickAnswer = (item: any) => {
    if (item.en === correctAns.en) {
      const { answerArray, correctAnswer } = getAnsAndCortAns();
      setCorrectAns(correctAnswer);
      setAnswerArr(answerArray);
    } else {
      setNotiText("WRONG ANSWER!")

      setTimeout(() => {
        setNotiText("")
      }, 1000);
      console.log("HERE")
    }
  }

  return (
    <div className="main-page">
      <h1 className="title">Welcome to English everyday</h1>

      <div className="vn-word">
        "{correctAns.vi}"
      </div>

      <div className="vn-word">{notiText}</div>
      <div className="answer-container">
        {answerArr.map((item) => {
          return (
            <button key={item.en}
              onClick={() => handleClickAnswer(item)}>
              {item.en}
            </button>
          )
        })}
      </div>

    </div>
  )
}

export default App;
