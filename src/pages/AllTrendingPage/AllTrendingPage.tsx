import React, { useEffect } from "react";


import gifsStore from "../../store/gifsStore";
import {observer} from "mobx-react-lite";
import Navbar from "../components/Navbar/Navbar";
import Searched from "../components/Searched";
import {Link} from "react-router-dom";


const AllTrendingPage = () => {

    return (
        <div className="w-full h-screen bg-black   overflow-x-hidden " >
            <div  className=" p-6 gap-4 w-[1200px] mx-auto flex flex-col align-middle" >
                <Navbar/>
                { gifsStore.searchedGifs[0]  ? (
                        <Searched/>
                    ) : (
                        <>
                            <div className="text-2xl text-white">
                                All Trending
                            </div>
                            <div className="w-full  grid grid-flow-dense grid-cols-4 gap-3 " >
                                {gifsStore.trendingGifs.map((item:any) => (
                                    <Link to={`/gif-page/${item.id}`} >
                                    <img className="min-h-[200px] min-w-[200px] rounded" src={item.images.downsized_large.url} alt="gif" />
                                    </Link>
                                ))}
                            </div>
                        </>
                )}

            </div>
        </div>
    )
}

export default observer(AllTrendingPage);