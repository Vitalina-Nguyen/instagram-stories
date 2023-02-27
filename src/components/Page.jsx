import React, { useState, useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./Home/Home";
import StoryItem from "./StoryItem/StoryItem";
import { initialStories } from "../data/stories";
import { Button } from "antd";

export default function Page() {
  const [stories, setStories] = useState(initialStories);
  const [activeStory, setActiveStory] = useState({});

  const changeActive = (id) => {
    stories.forEach((story) => {
      if (story.id === id) {setActiveStory(story);}
    });
  };

  const setWatchedStory = (userId, photoId) => {
    const newData = stories.map((user) => {
      if (user.id === Number(userId)) {
        return user.stories.map((photo) => {
          if (photo.id === Number(photoId)) {
            return {
              ...photo,
              isWatched: true,
            }
          } else { return { ...photo } }
        });
      } else {
        return user;
      }
    });

    setStories(newData);
    console.log(stories);
  };

  console.log("Initial stories: ", stories);

  useEffect(() => {
    console.log("Watched stories: ", stories);
  }, [stories]);

  useEffect(() => {
    // console.log("Active story: ", activeStory);
  }, [activeStory]);


  const users = stories.map((user) => {
    return {
      id: user.id,
      username: user.username,
      img: user.img,
    };
  });

  // console.log("Users: ", users);

  return (
    <Routes>
      <Route path="/*" element={ <Home users={users} changeActive={changeActive}/> } />
      <Route path={"/story/:id"} element={<StoryItem activeUser={activeStory} stories={stories} setWatchedStory={setWatchedStory}/>} />
    </Routes>
  );
}
