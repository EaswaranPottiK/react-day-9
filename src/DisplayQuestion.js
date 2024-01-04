import React from 'react'

const DisplayQuestion = (props) => {
    function checkAnswer(e){
        
        if (e.target.innerText===props.correct_answer){
            document.getElementById('answerResult').innerText = "Correct Answer"
            document.getElementById('answerResult').style.color= 'green'
            props.HandleSetScore();
        }
        else{
            document.getElementById('answerResult').innerText = "Incorrect Answer"
            document.getElementById('answerResult').style.color= 'red'
        }
    }
    return (
        <div style={{width:'40%',margin:'auto'}}>
            <h2 style={{textAlign:'center'}}>Quiz App </h2>
            <h3>Question {props.qno}</h3>
            <p>{props.question}</p>
            <div style={{display:'flex'}}>
             {
                props.options.map((opt)=>(<button style={{marginRight:'10px'}} onClick={checkAnswer}>{opt}</button>))
             }
            </div>
            <p id="answerResult"></p>
            <p>Time left: {props.timer}</p>
            <button onClick={props.HandleSetTimer}>Next Question</button>
        </div>
      )
}

export default DisplayQuestion