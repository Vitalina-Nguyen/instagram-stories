import React from "react";
import { NavLink } from "react-router-dom";
import style from "./homeItem.module.scss";
import { Space } from 'antd';


export default function HomeItem({ users, changeActive }) {
  const allUsersCircles = users.map(user => {

    return (
      <div className={style.user_wrapper} key={user.id}>
        <NavLink className={style.userItem} to={'/story/' + user.id} key={user.id} 
          onClick = {() => { changeActive(user.id) }}>
            <div className={style.userImg} key= {user.id}>
              <img src={user.img} alt={user.username} key= {user.id} />
            </div>
            <div key={(user.id)*2}>{user.username}</div> 
        </NavLink>
      </div>
    )
  })
  return (
    <Space className= {style.allusers_wrapper}>
      {allUsersCircles}
    </Space>
  );
}
