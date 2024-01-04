import React, { useEffect, useState } from 'react'
import AskQuestion from './AskQuestion'

const MainPage = () => {
    const [data,setData]= useState([])

    useEffect(()=>{
        async function fetchData(){
            const url ='https://opentdb.com/api.php?amount=10&category=18&difficulty=easy&type=multiple'
            var res = await fetch(url)
            res = await res.json();
            setData(res.results)
        }
        fetchData();
    },[])

  if (data.length===0||undefined){
    return(<p>Loading...</p>)
  }
  else{
    return(
      <AskQuestion data={data}/>
    )
    
  }
}

export default MainPage