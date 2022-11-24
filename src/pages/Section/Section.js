import React from 'react'
import Auther from '../../components/Auther/Auther'
import Status from '../../components/Status/Status'
import Texts from '../../components/Texts/Texts'
import Timing from '../../components/Timing/Timing'
import Video from '../../components/Video/Video'
import Work from '../../components/Work/Work'
import Paragrf from "../../components/Paragrf/Paragrf"
import "./Section.css"
import Bottom from '../../components/Bottom/Bottom'
function Section() {
    return (
        <div>
            <Texts/>
            <Video/>
            <Work/>
            <Auther/>
            <Timing/>
            <Status/>
            <Paragrf/>
            <Bottom/>
        </div>
    )
}

export default Section
