import React, { useEffect, useState } from "react";
import axios from 'axios';
import styled from 'styled-components'
import exercise_logo from './exercise_logo.png'
import food_logo from './food_logo.png'

let HeadBox = styled.div`
    display: flex;
    justify-content: center;
    width: 100%;
    height: 100%;
    
`

let Box = styled.div`
    width: 1100px;
    height: 700px;
    margin-top: 50px;
    /* border-right: black 2px solid;
    border-left: black 2px solid;
    border-top: black 2px solid;
    border-bottom: black 2px solid; */
    display: flex;
    flex-direction: row;
`

let ExercisePart = styled.div`
    width: 100%;
    height: 100%;
    background-color: #eee;
    margin-right: 50px;
    border-radius: 15px;
    display: flex;
    align-items: center;
    flex-direction: column;
    padding: 50px;
`

let FoodPart = styled.div`
    width: 100%;
    height: 100%;
    margin-left: 50px;
    background-color: #eee;
    border-radius: 15px;
    display: flex;
    align-items: center;
    flex-direction: column;
    padding: 50px;
`

let ExerciseImg = styled.img`
    width: 290px;
    height: 290px;
    margin-top: 20px;
    background-color: white;
`

let FoodImg = styled.img`
    width: 290px;
    height: 290px;
    margin-top: 20px;
    background-color: white;
`

let ExerciseTit = styled.h1`
    margin-top: 50px;
`

let ExerciseCom = styled.h3`
    margin-top: 40px;
`

let FoodTit = styled.h1`
    margin-top: 50px;
`

let FoodCom = styled.h3`
    margin-top: 40px;
`

function Recommend(){

    let [exerciseName, setExerciseName] = useState('팔굽혀펴기');
    let [exerciseExplain, setExerciseExplain] = useState('사람이 아무런 도구 없이도 할 수 있는 순수 맨몸 운동 중 하나이며, 자신의 몸을 팔로 밀어내야 하기 때문에 꽤나 근력이 붙는다. 정자세로 수행 시 자신의 몸무게의 3분의 2, 약 60~70% 정도의 무게를 들어올리는 것과 같다고 한다. 보다 정확한 무게를 알아보는 쉬운 방법은 체중계 위에 양손을 올리고 한번 내려갔다 오는 것이다.');
    
    let [foodName, setFoodName] = useState('바나나');
    let [foodExplain, setFoodExplain] = useState('중간크기의 바나나 118g 기준 105kcal이다. 또한 비타민C(일일 섭취량의 11%), 비타민B6, 엽산(비타민B9, 33%), 비타민A, 베타-카로틴, 식이섬유질(3.1g), 마그네슘(8%), 구리 (10%), 망간 (14%) 그리고 풍부한 칼륨(400㎎ 안팎, 9%)을 함유하고 있으며 지방과 나트륨, 그리고 콜레스테롤은 전혀 없다');

    useEffect(()=>{
        // axios.get('')
        // .then((result)=>{setExerciseName(),setFoodName(),setExerciseExplain(),setFoodExplain()})
        // .catch(()=>{})
    })

    return(
        <HeadBox>
            <Box>

                <ExercisePart>
                    <ExerciseImg src={exercise_logo}></ExerciseImg>
                    <ExerciseTit>{exerciseName}</ExerciseTit>
                    <ExerciseCom>{exerciseExplain}</ExerciseCom>
                </ExercisePart>

                <FoodPart>
                    <FoodImg src={food_logo}></FoodImg>
                    <FoodTit>{foodName}</FoodTit>
                    <FoodCom>{foodExplain}</FoodCom>
                </FoodPart>
                
            </Box>
        </HeadBox>
        
    )
}

export default Recommend