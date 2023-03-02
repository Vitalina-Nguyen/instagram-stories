import React, { useState, useEffect } from "react";
import Home from "./Home/Home";
import StoryItem from "./StoryItem/StoryItem";
import { initUsers, initStories } from "../data/stories";


export default function Page() {
  const [users, setUsers] = useState(initUsers);
  const [stories, setStories] = useState(initStories);

  const [activeUserId, setActiveUserId] = useState(null); // Active USER ID
  const [activeStoryId, setActiveStoryId] = useState(0); // Active STORY ID

  const currentStories = activeUserId !== null && stories.find((st) => activeUserId === st.userId).stories; // All current stories [ {...}, {...}]
  const currentStory = currentStories && currentStories[activeStoryId]; // Current story {...}

  useEffect( () => {
    console.log("User Id: ", activeUserId);
    console.log("Story Id: ", activeStoryId);
  }, [activeUserId,activeStoryId])


  const setActive = (id) => {
    setActiveUserId(id);
    setActiveStoryId(0);
  };

  const clearActiveUser = () => {
    setActiveUserId(null);
  };

  //Записать, что все истории пользователя просмотрены allStoriesWatched: true
  const setAllStoriesWatched = () => {
    const newDataUsers = users.map( (user) => {
      if (user.userId === activeUserId) {
        return ({
          ...user,
          allStoriesWatched: true,
        })} else return { ...user}
    })
    setUsers(newDataUsers);
  }

  //Кнопка вперёд
  const showNext = () => {

    if (currentStory.id < currentStories.length-1) {
      console.log("Следующая история ")
      setActiveStoryId(activeStoryId + 1);
    } else if (activeUserId < users.length ) {
      console.log("Следующий пользователь ")
      setAllStoriesWatched();
      setActiveStoryId(0);
      setActiveUserId(activeUserId + 1);

    } else{
      clearActiveUser();
      setAllStoriesWatched();
    }
  }

//Кнопка назад
  const showPrev = () => {
    if (currentStory.id > 0 ) {
      setActiveStoryId(activeStoryId - 1);
    } else if (activeUserId > 1) {
      setActiveUserId(activeUserId - 1);
      setActiveStoryId(0);
    } else {
      clearActiveUser();
      setAllStoriesWatched();
    }
  }

  const swipeUserStory = ( direction ) => {
    if (direction === "prev") {
      console.log("Prev");
      (activeUserId > 1) ? setActiveUserId(activeUserId - 1) : clearActiveUser();
    } else if (direction === "next") {
      console.log("Next");
      (activeUserId < users.length) ? setActiveUserId(activeUserId + 1) : clearActiveUser();
    }
  }

  const setWatchedStory = (photoId) => {
    const newData = stories.map((userStory) => {
      if (userStory.userId === activeUserId) {
        const newStories = userStory.stories.map(story => {
          if (story.id === +photoId) {
            return {
              ...story, 
              isWatched: true,
            }
          } else return { ...story }
        })
        return {
          ...userStory,
          stories: newStories,
        }
      } else {
        return userStory;
      }
    });
    setStories(newData);
  };

  return (
   <div>
     <Home users={users} stories={stories} setActive={setActive}/> 
     {activeUserId !== null &&
         <StoryItem stories={currentStories}
                    activeStoryId={activeStoryId}
                    story={currentStory} setWatchedStory= {setWatchedStory}
                    closeStory={clearActiveUser}
                    showNext= {showNext}
                    showPrev={showPrev}
                    swipeUserStory={swipeUserStory}/>}
   </div>
  );
}
