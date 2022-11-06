import { useEffect } from 'react';
import { useRef } from 'react';
import styled from 'styled-components';
import App from '../../@client/bundle'
import worldModel from '../../static/model/beach.glb'
import manModel from "../../static/model/girl.glb"
const Container = styled.div`
    width: 100%;
    height: 100%;
`
const Render = () => {
    const clientContainer = useRef()
    let client
    useEffect(() => {
        if(client == undefined) {
            console.log(App)
            client = new App(clientContainer.current, "park", {
                worldModel: worldModel,
                humanModel: manModel
            })
            console.log(client)
        }
    }, [])
    return (
        <Container ref={clientContainer}></Container>
    )
}
export default Render;