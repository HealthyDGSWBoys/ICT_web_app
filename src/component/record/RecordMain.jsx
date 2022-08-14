import React from 'react';
import * as R from './RecordMain.style'
import {Link} from 'react-router-dom'

const RecordMain = () => {
    // 실제에서는 배열에 날짜가 들어가야 한다
    const dum = [220805,220806,220807,220808,220809,220810,220811]
    const username = "codingbotPark"

    const [showInfo, setShowInfo] = useState(-1)
    
    return (
        <R.Wrapper>
            <R.Content>
                {
                    dum.map((i,idx) => (
                        <Link key={i} to={`${username}/${i}`}>
                            <R.Post 
                            onMouseOver={() => console.log("ㅎㅇ")} 
                            onMouseLeave={() => console.log("ㅂㅇ")}
                            src={require(`./testimgs/${i}.jpg`).default}></R.Post>
                            {
                                showInfo === idx
                            }
                        </Link>
                    ))
                }
            </R.Content>
        </R.Wrapper>
    );
};

export default RecordMain;