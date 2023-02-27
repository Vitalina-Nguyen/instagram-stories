import React, { useEffect, useState } from "react";
import style from "./storyItem.module.scss";
import { Button, Progress } from "antd";
import { useParams, NavLink, useNavigate } from "react-router-dom";
import { LeftCircleOutlined, RightCircleOutlined, CloseOutlined } from '@ant-design/icons';


export default function StoryItem( { activeUser, stories, setWatchedStory} ) {


  const storyTime = 5000;
  const {id} = useParams();
  const nextUser = Number(id) + 1;
  const prevtUser = Number(id) - 1;

  const navigate = useNavigate();

  const [storiersToWatch, setstoriersToWatch] = useState([]);
  const [activeUrl, setActiveUrl] = useState('');
  const [progress, setProgress] = useState(0);


  //Записать все непросмотренные истории пользователя
  const showActiveStory = () => {
    stories.forEach( user => {
      if ( user.id === Number(id) ){
        const storiestoShow = user.stories.filter (story => {
          if (!(story.isWatched)) return story;
        })
        setstoriersToWatch(storiestoShow)
      }
    })
  }

  //Посмотреть
  
  // const startProgress = () => {
  //   let counter = 0;

  //     const timer = setInterval( () => {
  //       if ( counter >= 100) { counter = 0 }
  //       else { 
  //         setProgress(counter)
  //       }
  //       counter += 1;
  //       setProgress(counter);
  //       console.log(counter);

  //     }, 50)
  // }


  useEffect( () => {
    showActiveStory();
  }, [])

  useEffect( () => {
    showActiveStory();
  }, [id])

  useEffect( () => {
   
    if (storiersToWatch.length !== 0) {
    
    //Записать ссылку на непросмотренную историю
    let photoCounter = 0;
    setActiveUrl(storiersToWatch[photoCounter].media.src);
    
    // watchStory(id, storiersToWatch[photoCounter].id)
    // console.log("User id: ", id)
    // console.log("Photo id: ", storiersToWatch[photoCounter].id)

    photoCounter++;
    if (photoCounter < storiersToWatch.length) {
      const timer = setInterval (() => {  
          setActiveUrl(storiersToWatch[photoCounter].media.src);
          // watchStory(id, storiersToWatch[photoCounter].id)
          // console.log("User id: ", id)
          // console.log("Photo id: ", storiersToWatch[photoCounter].id)
          photoCounter++;
          if (photoCounter === storiersToWatch.length) clearTimeout(timer);
      }, storyTime);
    }
  }
  }, [storiersToWatch])



  return (
    <div className={style.story_wrapper}>
      <div className={style.story}>
        <Progress className={style.progress} percent={progress} showInfo= {false} status="active"/>
        <Button className={style.button_prev}> <NavLink to={"/story/" + prevtUser} className={style.storyNavLink}><LeftCircleOutlined /></NavLink> </Button>
        <Button className={style.button_next}> <NavLink to={"/story/" + nextUser} className={style.storyNavLink}><RightCircleOutlined /></NavLink> </Button>
        <div className={style.storyImg_wrapper}>
          <img src={activeUrl} alt="story" className={style.storyImg}></img>
        </div>
      </div>
      <button className={style.button_close} onClick={ () => { navigate('/', { replace: true })}}><CloseOutlined /></button>

    </div>
  );
}
