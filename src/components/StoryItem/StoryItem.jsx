import React, { useState } from "react";
import style from "./storyItem.module.scss"
import { Progress } from "antd";


export default function StoryItem( { activeUser, stories, watchStory} ) {
    const [activeStory, setActiveStory] = useState({
      userId: activeUser.id,
      
    })

  return (
    <div className={style.story_wrapper}>
      <div className={style.story}>
        <Progress percent={50} showInfo={false} />
        StoryItem {activeUser.id}
        {/* <img src={}></img> */}
      </div>
    </div>
  );
}
