import React from "react";
import { NavLink } from "react-router-dom";
import style from "./HomeItem.module.scss";
import { Space } from 'antd';


export default function HomeItem({ users, changeActive }) {
  const allUsersCircles = users.map(user => {

    return (
      <NavLink className={style.userItem} to={'/' + user.id} key={user.id} 
        onClick = {() => {changeActive(user.id)}}>
        <div className={style.userImg}>
          <img  src={user.img} alt={user.username} />
        </div>
        <div className='text-red-900' key={user.id}>{user.username}</div>
      </NavLink>
    )
  })
  return (
    <div>
      <Space>
        {allUsersCircles}
      </Space>
    </div>
  );
}
