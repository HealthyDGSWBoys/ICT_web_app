import React, { useEffect } from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'
import * as S from './index.style'
import background1 from './bg1.jpg'
import background2 from './bg2.jpg'
const Render = () => {
    const animationList = ['zoom-in-up', 'zoom-in-down', 'zoom-in-left', 'zoom-in-right']
    const exerciseList = ['턱걸이', '딥스', '팔굽혀펴기', '윗몸일으키기', '스쿼트', '버피', '플랭크', '브릿지', '마운틴 클라이머', '바이시클 메뉴버']
    const randomDuration = (min, max) => {
        return String(Math.floor(Math.random() * (max - min + 1)) + min)
    }
    useEffect(() => {
        AOS.init()
        AOS.refresh()
    }, [])
    return (
        <>
            <S.Main bg={background1}>
                <S.textBox>
                    <S.mainTitle>Make Your Life Healthy</S.mainTitle>
                    <S.subTitle>저희 사이트는 운동법을 보다 간편하고, 정확하게 제공합니다.</S.subTitle>
                    <S.subTitle>사용자의 움직임을 체크하여, 잘못된 부분을 지적해줍니다.</S.subTitle>
                    <S.startButton>시작하기</S.startButton>
                </S.textBox>
            </S.Main>
            <S.line></S.line>
            <S.Main bg={background2}>
                <S.textBox>
                    <S.container>
                        <S.mainTitle2 data-aos='zoom-in-up'>Choose Your Exercise</S.mainTitle2>
                            <S.exerciseContainer>
                                {exerciseList.map((item) => {
                                    return (
                                        <S.exerciseBox 
                                        data-aos={animationList[Math.floor(Math.random() * animationList.length)]}
                                        data-aos-duration={randomDuration(1000, 2000)}
                                        data-aos-delay='500'>
                                            {item}
                                        </S.exerciseBox>
                                    )
                                })}
                            </S.exerciseContainer>
                    </S.container>
                </S.textBox>
            </S.Main>
        </>
    )
}
export default Render