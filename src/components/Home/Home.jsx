import React from "react";
import style from "./home.module.scss";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper';
import 'swiper/scss'
import 'swiper/scss/navigation'
import './home.scss'

export default function Home({ users, setActive }) {

    const returnUserCircle = ( user ) => {
        return (
            <SwiperSlide>
                <div className={style.user_wrapper} key={user.userId}>
                    <button className={style.userItem} key={user.userId}
                            onClick = {() => { setActive(user.userId) }}>
                        <div className={` ${(!user.allStoriesWatched) ? 
                            'border-red-900 border-[2px] ' 
                            : 'border-0'} ${style.userImg}`}
                             key= {user.userId}>
                            <img src={user.img} alt={user.name} key= {user.userId} />
                        </div>
                        <div key={(user.userId)*2}>{user.name}</div>
                    </button>
                </div>
            </SwiperSlide>
            )
    }

    let usersData = [];
    let watchedAllUsersData = [];

    users.forEach( user => {
        (user.allStoriesWatched)
        ? watchedAllUsersData.push(user)
        : usersData.push(user); })



    const usersCircled = usersData.map( user => returnUserCircle(user));
    const watchedAllUsersCircles = watchedAllUsersData.map( user => returnUserCircle(user));

  return (
    <div className={style.allusers_wrapper}>
        <Swiper
            modules={[Navigation]}
            spaceBetween={10}
            slidesPerView={8}
            mousewheel
            navigation={true}
        >
            {usersCircled}
            {watchedAllUsersCircles}
        </Swiper>
    </div>
  );
}
