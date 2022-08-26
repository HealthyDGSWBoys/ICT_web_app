import { useState } from 'react'
import * as S from './member.style'
export default ({count, icon}) => {
    const [getStars, setStars] = useState(Array.from({length:count}, (v,i)=>i))
    return (
        <S.Container>
            {
                getStars.map((element) => {
                    return <S.icon
                        img={icon}
                        key={element}
                    />
                })
            }
        </S.Container>
    )
}