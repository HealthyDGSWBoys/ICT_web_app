import React, { useEffect, useState } from "react";
import axios from 'axios';
import './App.css';

import styled from 'styled-components'

let Head = styled.div`
    display: flex;
    justify-content: center;
`

let Box = styled.div`
    margin-top: 50px;
    width: 70%;
    height: 750px;
    border-right: black 2px solid;
    border-left: black 2px solid;
    border-top: black 2px solid;
    border-bottom: black 2px solid;
`

let Exercise = styled.div`
    width: 100%;
    height: 375px;
    border-right: black 2px solid;
    border-left: black 2px solid;
    border-top: black 2px solid;
    border-bottom: black 2px solid;
    display: flex;
`

let Food = styled.div`
    width: 100%;
    height: 375px;
    border-right: black 2px solid;
    border-left: black 2px solid;
    border-top: black 2px solid;
    border-bottom: black 2px solid;
`

let ExerciseImg = styled.div`
    width: 290px;
    height: 290px;
    margin: 40px;
    background-color: #eee;
`

let FoodImg = styled.div`
    width: 290px;
    height: 290px;
    margin: 40px;
    background-color: #eee;
    float: right;
`

let ExerciseTit = styled.h2`
    margin-top: 50px;
`

let ExerciseCom = styled.h5`
    margin-top: 120px;
    margin-left: -60px;
`

let FoodTit = styled.h2`
    margin-top: 50px;
    margin-left: 900px;
`

let FoodCom = styled.h5`
    margin-top: 50px;
    margin-left: -600px;
`

function Recommend(){

    let [exerciseName, setExerciseName] = useState('운동');
    let [foodName, setFoodName] = useState('음식');
    let [exerciseExplain, setExerciseExplain] = useState('운동입니다');
    let [foodExplain, setFoodExplain] = useState('음식입니다');

    useEffect(()=>{
        // axios.get('')
        // .then((result)=>{setExerciseName(),setFoodName(),setExerciseExplain(),setFoodExplain()})
        // .catch(()=>{})
    })

    return(
        <Head>
            <Box>

                <Exercise>
                    <ExerciseImg></ExerciseImg>
                    <ExerciseTit>{exerciseName}</ExerciseTit>
                    <ExerciseCom>{exerciseExplain}</ExerciseCom>
                </Exercise>

                <Food>
                    <FoodImg></FoodImg>
                    <FoodTit>{foodName}</FoodTit>
                    <FoodCom>{foodExplain}</FoodCom>
                </Food>
                
            </Box>
        </Head>
    )
}

export default Recommend