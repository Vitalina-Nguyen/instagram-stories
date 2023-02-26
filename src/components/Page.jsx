import React, { useState } from "react";
import { Route, Routes } from "react-router-dom";
import HomeItem from "./HomeItem/HomeItem";
import StoryItem from "./StoryItem/StoryItem";
import { initialStories } from "../data/stories";


export default function Page() {

  const [stories, setStories] = useState(initialStories);
  const [activeStory, setActiveStory] = useState({});

  const changeActive = (id) => {
    stories.forEach( story => { (story.id === id) 
      ? setActiveStory(story) : ''})
  }

  const watchStory = ( userId, photoId ) => {
    const newData = stories.map( user => {
      if (user.id === userId) {
        return user.stories.map ( photo =>{
          return {
            ...photo,
            isWatched: photo.id === photoId ? true : false,
          }
        })
      } else {
        return user;
      }
    })
    console.log(newData);
  }

  console.log('Initial stories: ', stories);
  watchStory()

  const users = stories.map( user => {
    return ({
      id: user.id,
      username: user.username,
      img: user.img
    })
  })

  return (
    <div>
        <Routes>
            <Route path="/*" element={ <HomeItem users={users} changeActive = {changeActive} /> } />
            <Route path={ '/story/' + (activeStory) ? activeStory.id : '' } element={ <StoryItem story={activeStory} /> } />
        </Routes>
    </div>
  );
}