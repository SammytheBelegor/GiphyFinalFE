import {observer} from "mobx-react-lite";
import Navbar from "../components/Navbar/Navbar";
import Trending from "../components/Trending/Trending";
import Artists from "../components/Artists/Artists";
import gifsStore from "../../store/gifsStore";
import Searched from "../components/Searched";


const MainPage = () => {
    return (
        <div className="w-full h-screen bg-black   overflow-x-hidden " >
            <div  className=" p-6 gap-4 w-[1200px] mx-auto flex flex-col align-middle" >
                <Navbar/>
                <img className="w-full h-[100px]" src="https://media.giphy.com/headers/2022-09-15-01-1663203679/LHM_BANNER_HP_v02_8.38.58_PM.gif" alt="poster"/>
                { gifsStore.searchedGifs[0]  ? (
                    <Searched/>
                ) : (
                    <>
                        <Trending/>
                        <Artists/>
                    </>
                )}
            </div>

        </div>
    )
}

export default observer(MainPage);