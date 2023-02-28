import React, { useEffect, useState } from "react";
import style from "./storyItem.module.scss";
import { Button, Progress } from "antd";
import { LeftCircleOutlined, RightCircleOutlined, CloseOutlined } from '@ant-design/icons';


export default function StoryItem( { stories, activeStoryId, story, setWatchedStory, closeStory, showNext, showPrev } ) {


  const [progress, setProgress] = useState(0);
  const [time, setTime] = useState(0);


  useEffect(() => {

    setWatchedStory(activeStoryId);
    const durationInterval = setInterval(() => {
      setTime(time + 100);
      setProgress(time * 100 / 5000)
    }, 100);

    if (progress >= 100) {
      clearInterval(durationInterval);
      setTime(0);
      setProgress(0);
      showNext()
    }

    return () => {
      clearInterval(durationInterval);
    }
  }, [time, progress]);

  const allProgress = stories.map( (story) => {
    const foo = () => {
    if ( story.id === activeStoryId ) return progress;
    else if ( story.id < activeStoryId ) return 100;
    else return 0;
    }

    return <Progress className={style.progress} 
                     percent= { foo()  } 
                     showInfo={false} 
                      strokeColor = {{
                        '0%': '#f0f0f0',
                        '100%': '#f0f0f0',
                        }} 
                      />
  })

 
  return (
    <div className={style.story_container}>
      <div className={style.story_wrapper}>
        <div className={style.story}>
          
          <Button className={style.button_prev} onClick={showPrev}> <LeftCircleOutlined /> </Button>
          <Button className={style.button_next} onClick={showNext}> <RightCircleOutlined /> </Button>
          <div className={style.storyImg_wrapper}>
            <img src={story.media.src} alt="story" className={style.storyImg}></img>
            <div className={style.allprogress}>
              {allProgress}
            </div>
          </div>
        </div>
        <button className={style.button_close} onClick={ () => { closeStory() } }><CloseOutlined /></button>
        
      </div>
    </div>
  );
}
