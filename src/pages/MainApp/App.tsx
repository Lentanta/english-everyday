import { useEffect, useState } from "react";
import data from "../../data/words.json";
import { rndNum } from "../../utils/randomNum";
import "./App.css";

const App = () => {
  const [answerArr, setAnswerArr] = useState<any[]>([]);
  const [correctAns, setCorrectAns] = useState({});

  useEffect(() => {
    const answerArr = getAnswerArr();
    const cortAns = answerArr[rndNum(0, answerArr.length)]
    setCorrectAns(cortAns);
    setAnswerArr(answerArr);
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

  const handleClickAnswer = (item: any) => {
    if (item.en === correctAns.en) {
      const answerArr = getAnswerArr();
      const cortAns = answerArr[rndNum(0, answerArr.length)]
      setCorrectAns(cortAns);
      setAnswerArr(answerArr);
    }
  }

  return (
    <div className="main-page">
      <h1 className="title">Welcome to English everyday</h1>
      <div>{correctAns.vi}</div>
      {answerArr.map((item) => {
        return (
          <button key={item.en} onClick={() => handleClickAnswer(item)}>
            {item.en}
          </button>
        )
      })}
    </div>
  )
}

export default App;
