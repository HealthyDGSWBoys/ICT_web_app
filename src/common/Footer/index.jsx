import { useState } from 'react'
import * as I from './index.style'

import footerImg from './footerImg.png';

const Render = () => {
    const[footerLink, setFooterLink] = useState([
        {
            name: 'home', link: ''
        },
        {
            name: 'introduce', link: 'introduce'
        },
        {
            name: 'recommend', link: 'recommend'
        }
    ])
    return (
        <I.Main>
            <I.FooterImgPart src={footerImg}></I.FooterImgPart>
            {
                footerLink.map((a, i)=>{
                    return(
                        <I.A to={a.link}>{a.name}</I.A>
                    )
                })
            }
        </I.Main>
    )

}

export default Render