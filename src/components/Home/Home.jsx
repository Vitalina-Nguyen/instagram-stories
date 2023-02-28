import React, { useEffect } from "react";
import style from "./home.module.scss";
import { Space } from 'antd';


export default function Home({ users, setActive }) {



  const allUsersCircles = users.map(user => {

    return (
      <div className={style.user_wrapper} key={user.userId}>
        <button className={style.userItem} key={user.userId} 
          onClick = {() => { setActive(user.userId) }}>
            <div className={` ${(!users.allStoriesWatched) ? 'border-red-900 border' : 'border-0'} ${style.userImg}`} key= {user.userId}>
              <img src={user.img} alt={user.name} key= {user.userId} />
            </div>
            <div key={(user.userId)*2}>{user.name}</div> 
        </button>
      </div>
    )
  })
  return (
    <div className={style.allusers_wrapper}>
      <Space className= {style.allusers_wrapper}>
        {allUsersCircles}
      </Space>
    </div>
  );
}
