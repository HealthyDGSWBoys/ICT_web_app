import * as S from './index.style'
import { App, Performance } from "skeletalmuscle-drawer";
import { useRef, useEffect, useState } from "react";
import human from '../../../static/introduce/asset/man.gltf'
import animation from '../../../static/introduce/animation/test.json'
import Ui from './ui'

export default () => {
    const dom = useRef();
    const [performance] = useState(new Performance())
    const [getApp, setApp] = useState()
    const [getCurrentTime, setCurrentTime] = useState(0)
    let app
    useEffect(() => {
      if (app == undefined) {
        app = new App(dom.current, human, animation)
        setApp(app)
        const update = () => {
          requestAnimationFrame(update)
          const interval = performance.getInterval()
          performance.start()
          if(app.getCurrentTime() < app.getMaximumTime()) {
            app.setCurrentTime(app.getCurrentTime() + interval)
            setCurrentTime(app.getCurrentTime())
          }
          app.update()
          performance.end()
        }
        update()
      }
    }, [dom]);
    return (
      <S.AppContainer ref={dom}>
          <Ui app={getApp} currentTime={getCurrentTime}/>
      </S.AppContainer>
    )
}