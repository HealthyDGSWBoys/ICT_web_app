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
    width: 300px;
    height: 300px;
    margin-top: 20px;
    background-color: white;
`

let FoodImg = styled.img`
    width: 300px;
    height: 300px;
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

    let [exerciseName, setExerciseName] = useState();
    let [exerciseExplain, setExerciseExplain] = useState();
    let [exerciseImg, setExerciseImg] = useState();
    
    let [foodName, setFoodName] = useState();
    let [foodExplain, setFoodExplain] = useState();
    let [foodImg, setFoodImg] = useState();

    useEffect(()=>{
        axios.get('')
        .then((result)=>{
            //setExerciseName(),setExerciseExplain(),setFoodName(),setFoodExplain()
            const body = {
                exercise:{
                    exerciseName:"팔굽혀펴기",
                    aboutExercise:"사람이 아무런 도구 없이도 할 수 있는 순수 맨몸 운동 중 하나이며, 자신의 몸을 팔로 밀어내야 하기 때문에 꽤나 근력이 붙는다. 정자세로 수행 시 자신의 몸무게의 3분의 2, 약 60~70% 정도의 무게를 들어올리는 것과 같다고 한다. 보다 정확한 무게를 알아보는 쉬운 방법은 체중계 위에 양손을 올리고 한번 내려갔다 오는 것이다.",
                    exerciseImg:"https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyMDA5MjVfMjEz%2FMDAxNjAxMDM2NTI1Mjg3.cQDx5KIogjVgY5RUMiKpKt3P_u7v86OAs0vhHpF9FMUg.vccV2mh2wnOBATVrP-MGWv3ohUopg6FS7xAK480p3SYg.JPEG.qhtjdtmdgh1%2FKakaoTalk_20200925_211848401.jpg&type=sc960_832"
                },
                food:{
                    foodName:"바나나",
                    aboutFood:"중간크기의 바나나 118g 기준 105kcal이다. 또한 비타민C(일일 섭취량의 11%), 비타민B6, 엽산(비타민B9, 33%), 비타민A, 베타-카로틴, 식이섬유질(3.1g), 마그네슘(8%), 구리 (10%), 망간 (14%) 그리고 풍부한 칼륨(400㎎ 안팎, 9%)을 함유하고 있으며 지방과 나트륨, 그리고 콜레스테롤은 전혀 없다",
                    foodImg:"https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyMjA4MTdfODkg%2FMDAxNjYwNzI0NTI3Njc2.X5dALAnhkzqmuItSSuylBLuxQMKvsyor41MkT27tE74g.9ygoZSGxEzH6wiAQHD8BK1oCHnocX6ph1OS9GBU_3yMg.PNG.no1dreamfit%2F%25B0%25F8%25BA%25B9_%25B9%25D9%25B3%25AA%25B3%25AA_%25BE%25EE%25B6%25B2%25B0%25A1%25BF%25E4_%25B8%25C1%25C6%25F7%25C7%25EF%25BD%25BA%25C0%25E5_%25B9%25DD%25BF%25F9%25B5%25BFpt_%25BF%25B5%25C5%25EB%25C7%25C7%25C6%25BC_%25B5%25FB%25BA%25C0%25C1%25FC_6.png&type=sc960_832"
                }
            };

            setExerciseName(body.exercise.exerciseName),setExerciseExplain(body.exercise.aboutExercise);

        })
        .catch(()=>{})
    },[])

    return(
        <HeadBox>
            <Box>

                <ExercisePart>
                    {/* <ExerciseImg src={exerciseImg}></ExerciseImg> */}
                    <ExerciseTit>{exerciseName}</ExerciseTit>
                    <ExerciseCom>{exerciseExplain}</ExerciseCom>
                </ExercisePart>

                <FoodPart>
                    {/* <FoodImg src={foodImg}></FoodImg> */}
                    <FoodTit>{foodName}</FoodTit>
                    <FoodCom>{foodExplain}</FoodCom>
                </FoodPart>

            </Box>
        </HeadBox>
        
    )
}

export default Recommend