import React, { useEffect, useState } from "react";
import style from "./storyItem.module.scss";
import {Button, Progress} from "antd";
import { CloseOutlined} from '@ant-design/icons';


export default function StoryItem( { stories,
                                     activeStoryId,
                                     story,
                                     setWatchedStory,
                                     closeStory, showNext,
                                     showPrev,
                                     swipeUserStory } ) {


  const [progress, setProgress] = useState(0);
  const [time, setTime] = useState(0);
  const [storyDuration, setStoryDuration] = useState(5000);
  const [startingX, setStartingX] = useState(null);
  const [movingX, setMovingX] = useState(null);

  const onVideoPlay = (e)  => {
    let videoDuration = e.target.duration;
    const min = parseInt(videoDuration / 60, 10);
    const sec = Math.trunc(videoDuration % 60);
    ( min >= 3) ? setStoryDuration(60000) : setStoryDuration((min * 60 + sec) * 1000);
  }

  const storyTimeToShow = (story.media.type === 'image') ? 5000 : storyDuration;

  useEffect(() => {
      setWatchedStory(activeStoryId); //Помечаем истрию просмотренной при открытии
    const durationInterval = setInterval(() => {
      setTime(time + 100);
      setProgress(time * 100 / storyTimeToShow);
    }, 100);

    if (progress >= 100) {
      clearInterval(durationInterval);
      setTime(0);
      setProgress(0);
      showNext();
    }

    return () => {
      clearInterval(durationInterval);
    }
  }, [time, progress]);

  const allProgress = stories.map( (story) => {
    const changePercent = () => {
    if ( story.id === activeStoryId ) return progress;
    else if ( story.id < activeStoryId ) return 100;
    else return 0;
    }

    return <Progress className={style.progress} 
                     percent= { changePercent()  }
                     showInfo={false} 
                      strokeColor = {{
                        '0%': '#f0f0f0',
                        '100%': '#f0f0f0',
                        }}
                     strokeWidth ={3}
                     key={story.id}
                      />
  })
  const onTouchStart = (e) => {
    setStartingX(e.touches[0].clientX);
  }
  const onTouchMove = (e) => {
    setMovingX(e.touches[0].clientX);
  }
  const onTouchEnd = () => {

    if(startingX < movingX) {
      setTime(0);
      setProgress(0)
      swipeUserStory( "prev")
    } else if(startingX > movingX) {
      setTime(0);
      setProgress(0)
      swipeUserStory( "next")
    }
  }

  const onPrevNextClick = ( direction ) => {
        const showStory = (direction === 'next') ? showNext() : showPrev();
        setTime(0);
        setProgress(0);
    }

 
  return (
    <div className={style.story_container}>
      <div className={style.story_wrapper}>
        <div className={style.story}>
          
          <Button className={style.button_prev}
                  onClick={ ()=> { onPrevNextClick ("prev")}}></Button>
          <Button className={style.button_next}
                  onClick={ ()=> { onPrevNextClick ("next")}}></Button>
          <div className={style.storyMedia_wrapper}
               onTouchStart={ onTouchStart }
               onTouchMove={ onTouchMove }
               onTouchEnd={ onTouchEnd }>
            {story.media.type === "video"  &&
                <video className={style.storyMedia}
                       id='video'
                       autoPlay
                       width="100%"
                       height="100%"
                       onPlay={ (e) =>{ onVideoPlay(e)}} >
                  <source src={story.media.src} type="video/mp4" />
                </video>
            }
            {
              story.media.type === "image"
                && <img src={story.media.src} alt="story" className={style.storyMedia}></img>}

            <div className={style.allprogress}>
              {allProgress}
            </div>
          </div>
        </div>
        <button className={style.button_close} onClick={closeStory}><CloseOutlined /></button>

      </div>
    </div>
  );
}
