import { useEffect } from 'react';
import { useRef } from 'react';
import Client from '../../@client/bundle'
import worldModel from '../../static/model/beach.glb'
import manModel from "../../static/model/girl.glb"
const Render = () => {
    const clientContainer = useRef()
    let client
    useEffect(() => {
        if(client != undefined)
        client = new Client(clientContainer, "park", {
            worldModel: worldModel,
            humanModel: manModel
        })
    })
    return (
        <div ref={clientContainer}></div>
    )
}
export default Render;