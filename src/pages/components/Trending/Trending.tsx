import {Link} from "react-router-dom";
import {RightOutlined} from "@ant-design/icons";
import {Swiper, SwiperSlide} from "swiper/react";
import {Navigation} from "swiper";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "../../MainPage/styles.css";
import gifsStore from "../../../store/gifsStore";
import React, {useEffect} from "react";
import {observer} from "mobx-react-lite";

const Trending = () => {
    useEffect(() => {
        gifsStore.loadTrendingGifs("50");
    }, []);
    return (
        <>
            <div className=" w-full pb-4 flex justify-between  ">
                <div className="text-2xl text-white">
                    Trending
                </div>
                <div className=" flex -mb-1">
                    <Link to={'/all-trending-page'} className="text-xl text-gray-600">
                        <span className="-mt-3">All the gifs</span>
                        <RightOutlined className="h-[20px]"/>
                    </Link>

                </div>
            </div>
            <>
                <Swiper
                    slidesPerView={5}
                    spaceBetween={10}
                    freeMode={true}
                    navigation={true}
                    modules={[ Navigation]}
                    className="mySwiper"
                >
                    {gifsStore.trendingGifs.map((item:any) => (
                        <SwiperSlide  >
                            <Link to={`/gif-page/${item.id}`} >
                            <img  src={item.images.downsized_large.url} alt="gif" />
                            </Link>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </>
        </>
    )
};

export default observer(Trending);