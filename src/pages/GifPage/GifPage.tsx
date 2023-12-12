import {useParams} from "react-router-dom";
import React, {useEffect} from "react";
import gifsStore from "../../store/gifsStore";
import Navbar from "../components/Navbar/Navbar";
import {observer} from "mobx-react-lite";
import {LinkOutlined} from "@ant-design/icons";

const GifPage = () => {
    const { id } = useParams();

    useEffect(() => {
        if (id)  gifsStore.loadGif(id);
    }, [])

    return (
        <div className="w-full h-screen bg-black   overflow-x-hidden " >
            <div  className=" p-6 gap-4 w-[1200px] mx-auto flex flex-col align-middle" >
                <Navbar/>
                <h3 className="text-3xl text-white mb-3">
                    Gif page
                </h3>
                <div className=" w-full self-center justify-self-center flex justify-center gap-10">
                    {
                        gifsStore.gif ? (
                            <>
                                <img
                                    className="h-[300px] w-[400px] rounded"
                                    src={gifsStore.gif?.images?.downsized_large?.url}
                                    alt="gif"
                                />
                                <a href={gifsStore.gif?.images?.fixed_width_still?.url} >
                                <div  className=" h-8 text-white color-light cl flex gap-2 justify-center align-bottom cursor-pointer" >
                                        <div className="-mt-1">
                                            <LinkOutlined />
                                        </div>
                                        <div >LINK</div>
                                </div>
                        </a>
                            </>

                        ) : (
                            <div>Where is your gif?</div>
                        )
                    }
                </div>

            </div>
        </div>
    )
};

export default observer(GifPage);