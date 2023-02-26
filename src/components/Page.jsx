import React, { useState, useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import HomeItem from "./HomeItem/HomeItem";
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

  const watchStory = (userId, photoId) => {
    const newData = stories.map((user) => {
      if (user.id === userId) {
        return user.stories.map((photo) => {
          return {
            ...photo,
            isWatched: photo.id === photoId ? true : false,
          };
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
    console.log("Active story: ", activeStory);
  }, [activeStory]);


  const users = stories.map((user) => {
    return {
      id: user.id,
      username: user.username,
      img: user.img,
    };
  });

  console.log("Users: ", users);

  return (
    <div className="container mx-auto">
      <Routes>
        <Route path="/*" element={ <HomeItem users={users} changeActive={changeActive}/> } />
        <Route path={"/story/" + activeStory.id} element={<StoryItem activeUser={activeStory} stories={stories} watchStory={watchStory}/>} />
      </Routes>
      <div>
        <Button onClick={() => { watchStory(1, 1); }} >Watch</Button>
      </div>
    </div>
  );
}
