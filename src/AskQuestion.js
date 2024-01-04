import React, { useEffect, useState } from 'react'
import DisplayQuestion from './DisplayQuestion'

const AskQuestion = (props) => {

  const [timer,setTimer] = useState(6)
  useEffect((()=>{
    setInterval(() => {
      //to handle async use callback
      //batch update
      setTimer((prevTimer)=>prevTimer-1)
    }, 1000)
  }),[])

  const [questionNo,setQuestionNo] = useState(0)
  if (timer<=0){
    setQuestionNo((n)=>n+1)
    setTimer((n)=>5)
  }

  const [score,setScore] = useState(0)
  if (questionNo >=10){
    return(
      <>
        <h1>The end of quiz ! </h1>
        <h2>Your score is {score}</h2>
      </>
    )
  }
  function HandleSetScore(){
    setScore((n)=>n+1)
  }
  let options = [...props.data[parseInt(questionNo)].incorrect_answers,props.data[parseInt(questionNo)].correct_answer].sort()
  function HandleSetTimer(){
    setTimer(0)
  }

  return(
    <DisplayQuestion score={score} HandleSetScore={HandleSetScore} HandleSetTimer={HandleSetTimer} timer={timer} qno={questionNo+1} question = {props.data[parseInt(questionNo)].question} options={options} correct_answer = {props.data[parseInt(questionNo)].correct_answer}/>
  )
  
}

export default AskQuestion